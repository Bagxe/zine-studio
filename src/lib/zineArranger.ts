/**
 * Zine imposition engine — page order, rotation, and cut/fold guide layouts.
 *
 * The layout templates in zineArrangerData.ts are ported from Zine Arranger:
 *
 *     Zine Arranger
 *     Copyright (c) 2024 Nash High
 *     Licensed under the MIT License — see LICENSE-zine-arranger.txt
 *
 * The interpreter below reimplements the reference's arrangeZineSheets()
 * loop semantics (s/e/m/n page counters, signature handling, back-cover
 * flip condition) against those extracted templates.
 */
import { VARIANT_TEMPLATES, type VariantTemplate } from './zineArrangerData'

export type ZineFormatId =
  | 'half'
  | 'quarter'
  | 'eighth'
  | '12th'
  | '16th'
  | '24th'
  | '32nd'
  | '36th'
  | '48th'
  | '64th'

export type PaperId = 'letter' | '11x17' | 'a4' | 'a3'

/** Paper dimensions (width x height, inches) in portrait orientation. */
export const PAPERS: Record<PaperId, { label: string; w: number; h: number }> = {
  letter: { label: 'US Letter (8.5×11in)', w: 8.5, h: 11 },
  '11x17': { label: '11×17in', w: 11, h: 17 },
  a4: { label: 'A4 (210×297mm)', w: 210 / 25.4, h: 297 / 25.4 },
  a3: { label: 'A3 (297×420mm)', w: 297 / 25.4, h: 420 / 25.4 },
}

export interface ZineArrangeOptions {
  format: ZineFormatId
  /** Ignored for half size (always duplex saddle-stitch, as in the reference). */
  doubleSided: boolean
  zinePortrait: boolean
  spineSide: boolean
  /** Quarter size, duplex only: two copies per sheet. */
  quarterCopy: boolean
  /** Reference default false = back cover of top-fold zines is flipped. */
  flipBackCover: boolean
  /** Sheets per signature; 0 = whole zine in one signature. */
  sigSheets: number
  paper: PaperId
}

export const FORMAT_INFO: Record<
  ZineFormatId,
  { label: string; duplexOnly?: boolean; supportsCopy?: boolean }
> = {
  half: { label: 'Half (5.5×8.5, saddle-stitch)', duplexOnly: true },
  quarter: { label: 'Quarter (4.25×5.5)', supportsCopy: true },
  eighth: { label: 'Eighth / Minizine (one-cut)' },
  '12th': { label: '1/12th' },
  '16th': { label: '1/16th (Micro-Mini)' },
  '24th': { label: '1/24th' },
  '32nd': { label: '1/32nd' },
  '36th': { label: '1/36th' },
  '48th': { label: '1/48th' },
  '64th': { label: '1/64th' },
}

/** Zine pages per full sheet of paper (reference pgmult). */
export function pagesPerSheet(fmt: ZineFormatId, doubleSided: boolean, quarterCopy: boolean): number {
  switch (fmt) {
    case 'half':
      return 4
    case 'quarter':
      if (doubleSided) return quarterCopy ? 4 : 8
      return 4
    case 'eighth':
      return doubleSided ? 16 : 8
    case '12th':
      return doubleSided ? 24 : 12
    case '16th':
      return doubleSided ? 32 : 16
    case '24th':
      return doubleSided ? 48 : 24
    case '32nd':
      return doubleSided ? 64 : 32
    case '36th':
      return doubleSided ? 72 : 36
    case '48th':
      return doubleSided ? 96 : 48
    case '64th':
      return doubleSided ? 128 : 64
  }
}

/** Cells across (divHoriz) and down (divVert) on the sheet, per reference refreshSpecs(). */
function gridDims(fmt: ZineFormatId, zinePortrait: boolean): { cols: number; rows: number } {
  switch (fmt) {
    case 'half':
      return zinePortrait ? { cols: 2, rows: 1 } : { cols: 1, rows: 2 }
    case 'quarter':
      return { cols: 2, rows: 2 }
    case 'eighth':
      return zinePortrait ? { cols: 4, rows: 2 } : { cols: 2, rows: 4 }
    case '12th':
      return zinePortrait ? { cols: 6, rows: 2 } : { cols: 2, rows: 6 }
    case '16th':
      return { cols: 4, rows: 4 }
    case '24th':
      return zinePortrait ? { cols: 6, rows: 4 } : { cols: 4, rows: 6 }
    case '32nd':
      return zinePortrait ? { cols: 8, rows: 4 } : { cols: 4, rows: 8 }
    case '36th':
      return { cols: 6, rows: 6 }
    case '48th':
      return zinePortrait ? { cols: 8, rows: 6 } : { cols: 6, rows: 8 }
    case '64th':
      return { cols: 8, rows: 8 }
  }
}

/** Physical sheet orientation (reference pagePortrait). */
export function sheetIsPortrait(fmt: ZineFormatId, zinePortrait: boolean): boolean {
  switch (fmt) {
    case 'quarter':
    case '16th':
    case '36th':
    case '64th':
      return zinePortrait
    default:
      return !zinePortrait
  }
}

/** Named-area → (row, col) maps from the reference CSS grid-template-areas. */
const NAMED_GRIDS: Record<string, Record<string, [number, number]>> = {
  'half-por': { tl: [0, 0], tr: [0, 1] },
  'half-lnd': { tr: [0, 0], tl: [1, 0] },
  'qtr-side': { tl: [0, 0], tr: [0, 1], bl: [1, 0], br: [1, 1] },
  'eig-por': { tl: [0, 0], tml: [0, 1], tmr: [0, 2], tr: [0, 3], bl: [1, 0], bml: [1, 1], bmr: [1, 2], br: [1, 3] },
  'eig-lnd': { bl: [0, 0], tl: [0, 1], bml: [1, 0], tml: [1, 1], bmr: [2, 0], tmr: [2, 1], br: [3, 0], tr: [3, 1] },
}

function areaPosition(area: string, grid: string): [number, number] {
  const named = NAMED_GRIDS[grid]
  if (named) {
    const pos = named[area]
    if (!pos) throw new Error(`Unknown area ${area} in grid ${grid}`)
    return pos
  }
  const m = area.match(/^g(\d)(\d)$/)
  if (!m) throw new Error(`Unknown area ${area} in grid ${grid}`)
  return [Number(m[1]), Number(m[2])]
}

export type GuideEdge = 't' | 'b' | 'l' | 'r'

export interface PlanCell {
  row: number
  col: number
  /** Grid area name from the reference (tl, tr, g00, ...). */
  area: string
  /** 0-based zine page slot (same numbering as the reference's canvas ids). */
  page: number
  copy: boolean
  /** Rotate contents 180°. */
  rotate: boolean
  /** Cut guides on cell edges (solid lines when Center guides enabled). */
  cuts: GuideEdge[]
  /** Fold guides on cell edges (dotted lines when Folds enabled). */
  folds: GuideEdge[]
}

export interface PlanSheet {
  sheetNo: number
  side: 'front' | 'back' | 'single'
  cells: PlanCell[]
}

export interface ZinePlan {
  opts: ZineArrangeOptions
  variantKey: string
  template: VariantTemplate
  sourcePages: number
  paddedCount: number
  sheetsPerSig: number
  pagesPerSig: number
  gridRows: number
  gridCols: number
  /** Physical sheet size in inches. */
  sheetW: number
  sheetH: number
  cellW: number
  cellH: number
  sheets: PlanSheet[]
}

export function variantKey(o: ZineArrangeOptions): string {
  const side = o.format === 'half' || o.doubleSided ? 'duplex' : 'single'
  // The reference has no spine-side branch for half size; one layout covers both.
  const spine = o.format === 'half' ? 'side' : o.spineSide ? 'side' : 'top'
  const parts = [o.format, side, o.zinePortrait ? 'portrait' : 'landscape', spine]
  if (o.format === 'quarter' && side === 'duplex' && o.quarterCopy) parts.push('copy')
  return parts.join('|')
}

export function buildZinePlan(sourcePages: number, opts: ZineArrangeOptions): ZinePlan {
  const key = variantKey(opts)
  const template = VARIANT_TEMPLATES[key]
  if (!template) throw new Error(`No layout template for variant ${key}`)

  const pps = pagesPerSheet(opts.format, opts.doubleSided, opts.quarterCopy)
  const paddedCount = sourcePages === 0 ? 0 : Math.ceil(sourcePages / pps) * pps
  const sheetsPerSig = opts.sigSheets > 0 ? opts.sigSheets : paddedCount / pps
  const pagesPerSig = sheetsPerSig * pps

  const { cols, rows } = gridDims(opts.format, opts.zinePortrait)
  const paper = PAPERS[opts.paper]
  const portraitSheet = sheetIsPortrait(opts.format, opts.zinePortrait)
  const sheetW = portraitSheet ? paper.w : paper.h
  const sheetH = portraitSheet ? paper.h : paper.w

  const K = template.k
  const iterations = paddedCount / pps
  const sheets: PlanSheet[] = []

  for (let i = 0; i < iterations; i++) {
    const sigCount = Math.floor(i / sheetsPerSig)
    const s = K * (i % sheetsPerSig) + sigCount * pagesPerSig
    const e = (sigCount + 1) * pagesPerSig - K * (i % sheetsPerSig) - 1
    const vals: Record<string, number> = { s, e, m: 0, n: 0 }
    if (template.useMN) {
      vals.m = s + pagesPerSig / 4
      vals.n = e - pagesPerSig / 4
    }
    // Reference compares against the padded page count.
    const isBackCoverSheet = !opts.flipBackCover && e === paddedCount - 1

    for (const st of template.sheets) {
      const cells: PlanCell[] = st.cells.map((ct) => {
        const [row, col] = areaPosition(ct.area, template.grid)
        const useAlt = isBackCoverSheet && ct.bcAlt != null
        return {
          row,
          col,
          area: ct.area,
          page: vals[ct.base] + ct.offset,
          copy: ct.copy,
          rotate: useAlt ? ct.bcAlt!.rotate : ct.rotate,
          cuts: useAlt ? ct.bcAlt!.cuts : ct.cuts,
          folds: useAlt ? ct.bcAlt!.folds : ct.folds,
        }
      })
      sheets.push({
        sheetNo: sheets.length + 1,
        side: template.sheetsPerIter === 2 ? (st.sheetInIter === 0 ? 'front' : 'back') : 'single',
        cells,
      })
    }
  }

  return {
    opts,
    variantKey: key,
    template,
    sourcePages,
    paddedCount,
    sheetsPerSig,
    pagesPerSig,
    gridRows: rows,
    gridCols: cols,
    sheetW,
    sheetH,
    cellW: sheetW / cols,
    cellH: sheetH / rows,
    sheets,
  }
}

/**
 * Map a zine page slot to a source page index, or null for a padded blank.
 * Ports the reference selectFile() "midBump" behavior: for duplex zines whose
 * actual page count is a multiple of 4 but not of the full sheet count, blank
 * pages are inserted in the middle so they land on the bottom of the sheets.
 */
export function slotToSource(slot: number, actualCount: number, plan: ZinePlan): number | null {
  const { paddedCount } = plan
  const blankPages = paddedCount - actualCount
  if (blankPages <= 0) return slot < actualCount ? slot : null
  const needsMidBump = plan.opts.doubleSided && actualCount % 4 === 0 && actualCount % paddedCount !== 0
  if (!needsMidBump) return slot < actualCount ? slot : null
  const bumpStart = (paddedCount - blankPages) / 2
  if (slot < bumpStart) return slot
  if (slot < bumpStart + blankPages) return null
  return slot - blankPages
}

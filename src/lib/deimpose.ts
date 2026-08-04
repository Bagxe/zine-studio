/**
 * Digital Scroll de-imposition: split minizine/small-format imposition sheets
 * back into individual zine pages in reading order.
 *
 * The grid layouts (which cell holds which zine page, and which cells are
 * rotated 180 degrees) come from the same Zine Arranger layout data that
 * drives Make-a-Zine:
 *
 *     Zine Arranger
 *     Copyright (c) 2024 Nash High
 *     Licensed under the MIT License — see LICENSE-zine-arranger.txt
 *
 * deimposeMapping() is pure and node-testable; the canvas helpers below it
 * run in the browser only. This file intentionally does not import
 * scrollPdf.ts so the mapping can be bundled standalone for logic checks.
 */
import { buildZinePlan, pagesPerSheet, type ZineArrangeOptions } from './zineArranger'

export interface DeimposeCell {
  /** 0-based zine page slot. */
  page: number
  /** 0-based index into the uploaded sheet-side canvases. */
  side: number
  row: number
  col: number
  /** Cell content is upside-down on the sheet; rotate 180° on extraction. */
  rotate: boolean
}

export interface DeimposeMapping {
  gridRows: number
  gridCols: number
  /** Number of sheet sides the upload must contain. */
  numSides: number
  /** Non-copy cells, sorted by zine page ascending. */
  cells: DeimposeCell[]
}

/**
 * Compute where every zine page lives on the uploaded sheet sides.
 *
 * numSides is the number of sheet sides in the upload: sheet count for
 * single-sided formats, 2x sheet count for duplex. Duplex layouts require an
 * even side count; anything else throws a descriptive error.
 */
export function deimposeMapping(numSides: number, opts: ZineArrangeOptions): DeimposeMapping {
  if (numSides < 1) throw new Error('No sheet sides to de-impose')
  const pps = pagesPerSheet(opts.format, opts.doubleSided, opts.quarterCopy)
  const probe = buildZinePlan(pps, opts)
  const sheetsPerIter = probe.template.sheetsPerIter
  if (numSides % sheetsPerIter !== 0) {
    throw new Error(
      sheetsPerIter === 2
        ? `This is a double-sided layout: the upload must contain whole sheets (an even number of sides). Got ${numSides}.`
        : `Sheet side count ${numSides} does not fit this layout.`,
    )
  }
  const pageCount = (numSides / sheetsPerIter) * pps
  const plan = buildZinePlan(pageCount, opts)
  if (plan.sheets.length !== numSides) {
    throw new Error(
      `Layout expects ${plan.sheets.length} sheet side(s) for ${pageCount} pages, got ${numSides}.`,
    )
  }

  const cells: DeimposeCell[] = []
  plan.sheets.forEach((sheet, side) => {
    for (const c of sheet.cells) {
      if (c.copy) continue // quarter "two copies": keep the first copy only
      cells.push({ page: c.page, side, row: c.row, col: c.col, rotate: c.rotate })
    }
  })
  cells.sort((a, b) => a.page - b.page)
  return { gridRows: plan.gridRows, gridCols: plan.gridCols, numSides, cells }
}

/* ── Browser-only canvas splitting ───────────────────────────────────────── */

/** Structurally identical to ScrollPage in scrollPdf.ts. */
export interface DeimposedPage {
  index: number
  label: string
  canvas: HTMLCanvasElement
  dataUrl: string
}

/** Split a sheet-side canvas into a [row][col] grid of cell canvases. */
export function splitSheetCells(
  sheet: HTMLCanvasElement,
  rows: number,
  cols: number,
): HTMLCanvasElement[][] {
  const cellW = sheet.width / cols
  const cellH = sheet.height / rows
  const out: HTMLCanvasElement[][] = []
  for (let r = 0; r < rows; r++) {
    const rowArr: HTMLCanvasElement[] = []
    for (let c = 0; c < cols; c++) {
      const x = Math.round(c * cellW)
      const y = Math.round(r * cellH)
      const w = Math.round((c + 1) * cellW) - x
      const h = Math.round((r + 1) * cellH) - y
      const cv = document.createElement('canvas')
      cv.width = w
      cv.height = h
      const ctx = cv.getContext('2d')!
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, w, h)
      ctx.drawImage(sheet, x, y, w, h, 0, 0, w, h)
      rowArr.push(cv)
    }
    out.push(rowArr)
  }
  return out
}

function rotateCanvas180(src: HTMLCanvasElement): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = src.width
  c.height = src.height
  const ctx = c.getContext('2d')!
  ctx.translate(src.width, src.height)
  ctx.rotate(Math.PI)
  ctx.drawImage(src, 0, 0)
  return c
}

/**
 * Split uploaded sheet-side canvases into zine pages in reading order,
 * uprighting 180°-rotated cells. Sheet k of the upload is side k.
 */
export function buildDeimposedScrollPages(
  sheetCanvases: HTMLCanvasElement[],
  opts: ZineArrangeOptions,
): { pages: DeimposedPage[]; mapping: DeimposeMapping } {
  const mapping = deimposeMapping(sheetCanvases.length, opts)
  const grids = sheetCanvases.map((c) => splitSheetCells(c, mapping.gridRows, mapping.gridCols))
  const pages = mapping.cells.map((cell, idx) => {
    let canvas = grids[cell.side][cell.row][cell.col]
    if (cell.rotate) canvas = rotateCanvas180(canvas)
    return {
      index: idx + 1,
      label: `p${cell.page + 1}`,
      canvas,
      dataUrl: canvas.toDataURL('image/jpeg', 0.85),
    }
  })
  return { pages, mapping }
}

/** Decode an image blob to a white-filled canvas (one sheet side). */
export function blobToCanvas(blob: Blob): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const c = document.createElement('canvas')
      c.width = img.naturalWidth
      c.height = img.naturalHeight
      const ctx = c.getContext('2d')!
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, c.width, c.height)
      ctx.drawImage(img, 0, 0)
      resolve(c)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Could not decode a sheet image'))
    }
    img.src = url
  })
}

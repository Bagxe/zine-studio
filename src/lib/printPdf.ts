/**
 * Print PDF generation (pdf-lib) + sheet-side canvas preview for "Make a Zine".
 * Consumes ZinePlan from the Zine Arranger-ported engine (zineArranger.ts).
 */
import { PDFDocument, degrees, rgb } from 'pdf-lib'
import type { PlanSheet, ZinePlan } from './zineArranger'
import { slotToSource } from './zineArranger'
import type { PreparedPage } from './pagePrep'

export interface PrintSettings {
  /** Solid border around the whole sheet (reference "Margins"). */
  guideMargins: boolean
  /** Solid interior cut lines (reference "Center"). */
  guideCenter: boolean
  /** Dotted fold lines (reference "Folds"); cuts render dotted when Center is off. */
  guideFolds: boolean
  /** Inset margin around each page image within its cell, in inches. */
  insetIn: number
}

const PT_PER_IN = 72

type EmbeddedMap = Map<number, Awaited<ReturnType<PDFDocument['embedJpg']>>>

interface LineSeg {
  x1: number
  y1: number
  x2: number
  y2: number
  dotted: boolean
}

/** Collect guide segments for a sheet (deduped), in PDF coordinates (bottom-left origin). */
function guideSegments(plan: ZinePlan, sheet: PlanSheet, settings: PrintSettings): LineSeg[] {
  const segs = new Map<string, LineSeg>()
  const sheetWpt = plan.sheetW * PT_PER_IN
  const sheetHpt = plan.sheetH * PT_PER_IN
  const cw = plan.cellW * PT_PER_IN
  const ch = plan.cellH * PT_PER_IN

  const add = (x1: number, y1: number, x2: number, y2: number, dotted: boolean) => {
    // normalize so shared edges dedupe
    const key = [Math.min(x1, x2), Math.min(y1, y2), Math.max(x1, x2), Math.max(y1, y2), dotted].join(',')
    if (!segs.has(key)) segs.set(key, { x1, y1, x2, y2, dotted })
  }

  for (const cell of sheet.cells) {
    const x = cell.col * cw
    const yB = sheetHpt - (cell.row + 1) * ch
    const edges: { e: 't' | 'b' | 'l' | 'r'; seg: [number, number, number, number] }[] = [
      { e: 't', seg: [x, yB + ch, x + cw, yB + ch] },
      { e: 'b', seg: [x, yB, x + cw, yB] },
      { e: 'l', seg: [x, yB, x, yB + ch] },
      { e: 'r', seg: [x + cw, yB, x + cw, yB + ch] },
    ]
    for (const { e, seg } of edges) {
      // Reference guide logic: cuts solid when Center is on; cuts dotted when
      // Center is off but Folds is on; folds dotted when Folds is on.
      if (cell.cuts.includes(e)) {
        if (settings.guideCenter) add(...seg, false)
        else if (settings.guideFolds) add(...seg, true)
      }
      if (cell.folds.includes(e) && settings.guideFolds) add(...seg, true)
    }
    void sheetWpt
  }
  return [...segs.values()]
}

async function drawSheet(
  doc: PDFDocument,
  plan: ZinePlan,
  sheet: PlanSheet,
  prepared: PreparedPage[],
  embedded: EmbeddedMap,
  settings: PrintSettings,
) {
  const sheetWpt = plan.sheetW * PT_PER_IN
  const sheetHpt = plan.sheetH * PT_PER_IN
  const cw = plan.cellW * PT_PER_IN
  const ch = plan.cellH * PT_PER_IN
  const inset = settings.insetIn * PT_PER_IN
  const page = doc.addPage([sheetWpt, sheetHpt])

  for (const cell of sheet.cells) {
    const src = slotToSource(cell.page, prepared.length, plan)
    if (src == null) continue
    const img = embedded.get(src)
    if (!img) continue
    const cellX = cell.col * cw
    const cellY = sheetHpt - (cell.row + 1) * ch
    const availW = Math.max(1, cw - inset * 2)
    const availH = Math.max(1, ch - inset * 2)
    const s = Math.min(availW / img.width, availH / img.height)
    const w = img.width * s
    const h = img.height * s
    const x = cellX + (cw - w) / 2
    const y = cellY + (ch - h) / 2
    if (cell.rotate) {
      // pdf-lib rotates about (x, y); 180° maps the rect to [x-w, x] × [y-h, y].
      page.drawImage(img, { x: x + w, y: y + h, width: w, height: h, rotate: degrees(180) })
    } else {
      page.drawImage(img, { x, y, width: w, height: h })
    }
  }

  for (const seg of guideSegments(plan, sheet, settings)) {
    page.drawLine({
      start: { x: seg.x1, y: seg.y1 },
      end: { x: seg.x2, y: seg.y2 },
      thickness: seg.dotted ? 0.6 : 0.8,
      color: rgb(0.45, 0.45, 0.45),
      ...(seg.dotted ? { dashArray: [3, 3] } : {}),
    })
  }

  if (settings.guideMargins) {
    page.drawRectangle({
      x: 0,
      y: 0,
      width: sheetWpt,
      height: sheetHpt,
      borderWidth: 1.5,
      borderColor: rgb(0, 0, 0),
    })
  }

  page.drawText(
    `ZINE STUDIO — SHEET ${sheet.sheetNo} ${sheet.side.toUpperCase()} — ${plan.variantKey}`,
    { x: 6, y: 4, size: 4.5, color: rgb(0.6, 0.6, 0.6) },
  )
}

export async function buildPrintPdf(
  prepared: PreparedPage[],
  plan: ZinePlan,
  settings: PrintSettings,
): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle('Zine Studio — print imposition')

  const embedded: EmbeddedMap = new Map()
  for (let i = 0; i < prepared.length; i++) {
    const bytes = new Uint8Array(await prepared[i].jpeg.arrayBuffer())
    embedded.set(i, await doc.embedJpg(bytes))
  }

  for (const sheet of plan.sheets) {
    await drawSheet(doc, plan, sheet, prepared, embedded, settings)
  }
  return doc.save()
}

/**
 * Canvas preview of one sheet (top-left origin). `sourceImages` maps
 * 0-based source index → image. Cells whose slot maps to a blank are skipped.
 */
export function renderSheetPreview(
  canvas: HTMLCanvasElement,
  plan: ZinePlan,
  sheet: PlanSheet,
  sourceImages: Map<number, HTMLImageElement>,
  settings: PrintSettings,
  maxW = 880,
  blankLabel = 'blank',
) {
  const scale = maxW / (plan.sheetW * PT_PER_IN)
  const sheetWpt = plan.sheetW * PT_PER_IN
  const sheetHpt = plan.sheetH * PT_PER_IN
  canvas.width = Math.round(sheetWpt * scale)
  canvas.height = Math.round(sheetHpt * scale)
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const cw = plan.cellW * PT_PER_IN * scale
  const ch = plan.cellH * PT_PER_IN * scale
  const inset = settings.insetIn * PT_PER_IN * scale

  for (const cell of sheet.cells) {
    const x = cell.col * cw
    const y = cell.row * ch
    const src = slotToSource(cell.page, sourceImages.size, plan)
    const img = src == null ? undefined : sourceImages.get(src)
    ctx.strokeStyle = '#eeeeee'
    ctx.lineWidth = 1
    ctx.strokeRect(x, y, cw, ch)
    if (!img) {
      // True padding blank (slotToSource null) — label it so users see where
      // the blanks land. Only appears when this sheet actually has blanks.
      if (src == null) {
        ctx.fillStyle = '#a3a3a3'
        ctx.font = `${Math.max(10, Math.round(ch * 0.08))}px monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(blankLabel, x + cw / 2, y + ch / 2)
      }
      continue
    }
    const availW = Math.max(1, cw - inset * 2)
    const availH = Math.max(1, ch - inset * 2)
    const s = Math.min(availW / img.width, availH / img.height)
    const w = img.width * s
    const h = img.height * s
    const dx = x + (cw - w) / 2
    const dy = y + (ch - h) / 2
    if (cell.rotate) {
      ctx.save()
      ctx.translate(dx + w / 2, dy + h / 2)
      ctx.rotate(Math.PI)
      ctx.drawImage(img, -w / 2, -h / 2, w, h)
      ctx.restore()
    } else {
      ctx.drawImage(img, dx, dy, w, h)
    }
  }

  // Guides (convert PDF-coord segments to canvas coords).
  for (const seg of guideSegments(plan, sheet, settings)) {
    ctx.save()
    ctx.strokeStyle = '#737373'
    ctx.lineWidth = seg.dotted ? 1 : 1.4
    ctx.setLineDash(seg.dotted ? [4, 4] : [])
    ctx.beginPath()
    ctx.moveTo(seg.x1 * scale, sheetHpt * scale - seg.y1 * scale)
    ctx.lineTo(seg.x2 * scale, sheetHpt * scale - seg.y2 * scale)
    ctx.stroke()
    ctx.restore()
  }

  if (settings.guideMargins) {
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2)
  }
}

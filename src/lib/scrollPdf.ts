/**
 * Digital Scroll: load a zine print-imposition PDF with pdfjs-dist,
 * render each landscape Letter sheet at 300 DPI equivalent scale,
 * split into left/right halves, and reassemble in serpentine order.
 */
import { PDFDocument } from 'pdf-lib'
import { pdfjs, RENDER_SCALE_300 } from './pdfjs'
import { serpentineOrder } from './impose'
import { fixedScrollGeom, scrollPageGeom } from './scrollPageSize'

/** 300 DPI equivalent render scale (shared pdfjs setup). */
const RENDER_SCALE = RENDER_SCALE_300

export interface ScrollPage {
  /** 1-based position in the reassembled scroll. */
  index: number
  /** Origin: sheet number + half. */
  label: string
  canvas: HTMLCanvasElement
  dataUrl: string
  /** Per-page override: size this page to its own canvas (e.g. after manual rotation). */
  sizeToImage?: boolean
}

function splitHalves(sheet: HTMLCanvasElement): { L: HTMLCanvasElement; R: HTMLCanvasElement } {
  const halfW = Math.floor(sheet.width / 2)
  const make = (x: number): HTMLCanvasElement => {
    const c = document.createElement('canvas')
    c.width = halfW
    c.height = sheet.height
    c.getContext('2d')!.drawImage(sheet, x, 0, halfW, sheet.height, 0, 0, halfW, sheet.height)
    return c
  }
  return { L: make(0), R: make(halfW) }
}

/**
 * Render every page of a PDF to a white-filled canvas at 300 DPI equivalent.
 * Shared by the serpentine scroll path and grid de-imposition.
 */
export async function renderPdfToCanvases(file: ArrayBuffer): Promise<HTMLCanvasElement[]> {
  // pdf.js transfers the ArrayBuffer to the worker (detaching the caller's
  // copy), so always hand it a fresh slice — reprocessing on format change
  // reuses the stored buffer.
  const pdf = await pdfjs.getDocument({ data: file.slice(0) }).promise
  const canvases: HTMLCanvasElement[] = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const viewport = page.getViewport({ scale: RENDER_SCALE })
    const canvas = document.createElement('canvas')
    canvas.width = Math.ceil(viewport.width)
    canvas.height = Math.ceil(viewport.height)
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    await page.render({ canvas, canvasContext: ctx, viewport }).promise
    canvases.push(canvas)
  }
  return canvases
}

/**
 * Reassemble rendered sheet canvases into scroll pages in serpentine
 * reading order (split halves, snake through the sheets).
 */
export function serpentinePages(sheets: HTMLCanvasElement[]): ScrollPage[] {
  const halvesPerSheet = sheets.map(splitHalves)
  const order = serpentineOrder(sheets.length)
  return order.map((step, idx) => {
    const canvas = halvesPerSheet[step.sheet - 1][step.half]
    return {
      index: idx + 1,
      label: `${step.sheet}${step.half}`,
      canvas,
      dataUrl: canvas.toDataURL('image/jpeg', 0.85),
    }
  })
}

/**
 * Render every sheet of the imposition PDF, split halves, and return the
 * pages in serpentine reading order.
 */
export async function buildScrollPages(file: ArrayBuffer): Promise<ScrollPage[]> {
  return serpentinePages(await renderPdfToCanvases(file))
}

/**
 * Output the scroll PDF. Serpentine pages stay fixed 5.5x8.5in (true
 * half-letter size); de-imposed pages (sizeToImage) are sized to each cell's
 * own pixels. Either way the image fills its page edge-to-edge, so there are
 * no white borders and no contain-fit rounding gaps.
 */
export async function buildScrollPdf(pages: ScrollPage[], sizeToImage = false): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle('Zine Studio — digital scroll')

  for (const p of pages) {
    const blob = await new Promise<Blob | null>((resolve) =>
      p.canvas.toBlob(resolve, 'image/jpeg', 0.92),
    )
    if (!blob) continue
    const img = await doc.embedJpg(new Uint8Array(await blob.arrayBuffer()))
    const geom =
      (p.sizeToImage ?? sizeToImage)
        ? scrollPageGeom(p.canvas.width, p.canvas.height)
        : fixedScrollGeom()
    const page = doc.addPage([geom.w, geom.h])
    page.drawImage(img, geom.draw)
  }
  return doc.save()
}

/* ── Image-set input: each image is already one zine page ────────────────── */

export interface ImageScrollInput {
  blob: Blob
  width: number
  height: number
  name: string
}

function loadImage(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`Could not decode ${name}`))
    }
    img.src = url
  })
}

/**
 * Build a scroll PDF from ordered page images. Every page is sized to its
 * own image (pixels / 300 DPI, long side clamped to a sane range) and the
 * image fills it edge-to-edge — mixed aspects simply yield mixed page sizes,
 * never white borders.
 */
export async function buildImageScrollPdf(images: ImageScrollInput[]): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  doc.setTitle('Zine Studio — digital scroll')

  for (const input of images) {
    const el = await loadImage(input.blob)
    const canvas = document.createElement('canvas')
    canvas.width = el.naturalWidth
    canvas.height = el.naturalHeight
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(el, 0, 0)
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', 0.92),
    )
    if (!blob) continue
    const img = await doc.embedJpg(new Uint8Array(await blob.arrayBuffer()))
    const geom = scrollPageGeom(canvas.width, canvas.height)
    const page = doc.addPage([geom.w, geom.h])
    page.drawImage(img, geom.draw)
  }
  return doc.save()
}

export function downloadBytes(bytes: Uint8Array, filename: string, mime = 'application/pdf') {
  const blob = new Blob([bytes as BlobPart], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

/**
 * PDF intake for Make a Zine: render each page of a PDF to a JPEG blob at
 * 300 DPI equivalent, in PDF page order. Large PDFs are rendered at 200 DPI
 * instead to bound memory, and a note is returned so the UI can say so.
 *
 * Browser-only (pdfjs + canvas). Injected into intake.ts via IntakeDeps.
 */
import { pdfjs, RENDER_SCALE_300 } from './pdfjs'

const RENDER_SCALE_200 = 200 / 72
/** PDFs with more pages than this render at 200 DPI instead of 300. */
export const BIG_PDF_PAGE_LIMIT = 24

export interface RenderedPdfPage {
  blob: Blob
  /** 1-based label like "p3". */
  pageLabel: string
}

export interface RenderedPdfPages {
  pages: RenderedPdfPage[]
  /** Set when the render scale was reduced for a large PDF. */
  note?: string
}

export async function renderPdfPagesForIntake(
  file: Blob,
  fileName: string,
): Promise<RenderedPdfPages> {
  const data = await file.arrayBuffer()
  const pdf = await pdfjs.getDocument({ data }).promise
  const capped = pdf.numPages > BIG_PDF_PAGE_LIMIT
  const scale = capped ? RENDER_SCALE_200 : RENDER_SCALE_300

  const pages: RenderedPdfPage[] = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const viewport = page.getViewport({ scale })
    const canvas = document.createElement('canvas')
    canvas.width = Math.ceil(viewport.width)
    canvas.height = Math.ceil(viewport.height)
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    await page.render({ canvas, canvasContext: ctx, viewport }).promise
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', 0.9),
    )
    if (!blob) throw new Error(`Could not render page ${i} of ${fileName}`)
    pages.push({ blob, pageLabel: `p${i}` })
  }

  return {
    pages,
    note: capped
      ? `"${fileName}" has ${pdf.numPages} pages — rendered at 200 DPI instead of 300 to keep memory use in check.`
      : undefined,
  }
}

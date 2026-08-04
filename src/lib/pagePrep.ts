/**
 * Page prep: render a source image onto a print-resolution canvas
 * (300 DPI for the chosen zine page size), preserving aspect ratio where the
 * mode calls for it. Fill modes:
 *
 *   blur    — Instagram-style blurred backdrop, sharp contain-fit foreground
 *   white   — contain fit with fixed breathing room (visible white border)
 *   fit     — plain contain fit on white, full page
 *   stretch — non-uniform scale to the EXACT page dimensions: whole image
 *             visible, edge-to-edge, distorted when aspects differ
 *
 * Exported as JPEG (quality 0.92) for PDF embedding.
 */

export type FillMode = 'blur' | 'white' | 'fit' | 'stretch'

export const FILL_LABELS: Record<FillMode, string> = {
  blur: 'Blur fill',
  white: 'White border',
  fit: 'Fit',
  stretch: 'Stretch fill (exact)',
}

export interface PreparedPage {
  /** 1-based zine page number (index in the ordered source list + 1). */
  pageNumber: number
  name: string
  jpeg: Blob
  dataUrl: string
  width: number
  height: number
}

function drawContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
  scale: number,
) {
  const iw = img.width
  const ih = img.height
  const s = Math.min(cw / iw, ch / ih) * scale
  const w = iw * s
  const h = ih * s
  ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
}

export function renderPage(
  img: HTMLImageElement,
  targetW: number,
  targetH: number,
  mode: FillMode,
): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = targetW
  canvas.height = targetH
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  if (mode === 'blur') {
    // Instagram-style: zoomed, heavily blurred, darkened copy as background.
    const bgScale = Math.max(targetW / img.width, targetH / img.height) * 1.15
    const bw = img.width * bgScale
    const bh = img.height * bgScale
    ctx.save()
    ctx.filter = `blur(${Math.round(targetW / 40)}px) brightness(0.55)`
    ctx.drawImage(img, (targetW - bw) / 2, (targetH - bh) / 2, bw, bh)
    ctx.restore()
    // Foreground: sharp, contain-fit, centered.
    drawContain(ctx, img, targetW, targetH, 1)
  } else if (mode === 'white') {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, targetW, targetH)
    // Fixed breathing room so a visible white border remains.
    drawContain(ctx, img, targetW, targetH, 0.92)
  } else if (mode === 'stretch') {
    // Exact non-uniform scale: edge-to-edge, no crop, no borders.
    ctx.drawImage(img, 0, 0, targetW, targetH)
  } else {
    // fit: plain contain fit on white, full page.
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, targetW, targetH)
    drawContain(ctx, img, targetW, targetH, 1)
  }
  return canvas
}

/* ── Stretch-mode distortion reporting (pure, node-testable) ────────────── */

export interface StretchDistortion {
  /** Axis that gets stretched to fill the page. */
  axis: 'vertical' | 'horizontal'
  /** Stretch amount as a fraction (0.294 = ~29%). */
  amount: number
}

/**
 * Relative distortion when an iw x ih image is stretch-filled into a cw x ch
 * page: the ratio of the Y scale factor to the X scale factor. r > 1 means
 * the image is stretched vertically by (r-1); r < 1 means horizontally by
 * (1/r - 1). Returns null for matching aspects (or degenerate dims).
 */
export function stretchDistortion(
  iw: number,
  ih: number,
  cw: number,
  ch: number,
): StretchDistortion | null {
  if (!(iw > 0) || !(ih > 0) || !(cw > 0) || !(ch > 0)) return null
  const r = (ch * iw) / (cw * ih) // yScale / xScale
  if (!Number.isFinite(r) || Math.abs(r - 1) < 1e-9) return null
  return r > 1
    ? { axis: 'vertical', amount: r - 1 }
    : { axis: 'horizontal', amount: 1 / r - 1 }
}

/** Largest distortion across a set of source images for a cw x ch page. */
export function worstStretchDistortion(
  dims: { width: number; height: number }[],
  cw: number,
  ch: number,
): StretchDistortion | null {
  let worst: StretchDistortion | null = null
  for (const d of dims) {
    const s = stretchDistortion(d.width, d.height, cw, ch)
    if (s && (!worst || s.amount > worst.amount)) worst = s
  }
  return worst
}

export function canvasToJpeg(canvas: HTMLCanvasElement, quality = 0.92): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('canvas.toBlob failed'))),
      'image/jpeg',
      quality,
    )
  })
}

export async function preparePage(
  img: HTMLImageElement,
  pageNumber: number,
  name: string,
  targetW: number,
  targetH: number,
  mode: FillMode,
): Promise<PreparedPage> {
  const canvas = renderPage(img, targetW, targetH, mode)
  const jpeg = await canvasToJpeg(canvas, 0.92)
  return {
    pageNumber,
    name,
    jpeg,
    dataUrl: canvas.toDataURL('image/jpeg', 0.85),
    width: targetW,
    height: targetH,
  }
}

export function loadImageFromBlob(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`Could not decode image: ${blob.type || 'unknown type'}`))
    }
    img.src = url
  })
}

/**
 * True-to-image page sizing for Digital Scroll PDFs.
 *
 * Each scroll page is sized to the pixels it holds: pixels / SCROLL_DPI
 * inches, with the long side clamped into [SCROLL_MIN_IN, SCROLL_MAX_IN]
 * inches (uniform scale) so extreme panoramas or tiny thumbnails stay sane.
 * The image is then drawn edge-to-edge — the draw rect is always the full
 * page rect, so there is never white-space filling or contain-fit inset.
 *
 * Pure module: no browser or pdfjs imports, so it bundles for node checks.
 */

/** DPI used to convert image pixels to physical page size. */
export const SCROLL_DPI = 300
/** Sane long-side bounds for a scroll page, inches. */
export const SCROLL_MIN_IN = 3
export const SCROLL_MAX_IN = 24

/** Fixed page for the serpentine half-letter path (true half-letter size). */
export const SCROLL_FIXED_PAGE = { w: 5.5 * 72, h: 8.5 * 72 }

export interface ScrollPageGeom {
  /** Page size in PDF points. */
  w: number
  h: number
  /** Draw rect for the page image — always the full page (edge-to-edge). */
  draw: { x: number; y: number; width: number; height: number }
}

/** Page size (PDF points) matching a pxW x pxH image's own aspect ratio. */
export function scrollPageSize(pxW: number, pxH: number): { w: number; h: number } {
  if (!(pxW > 0) || !(pxH > 0)) return { ...SCROLL_FIXED_PAGE }
  let wIn = pxW / SCROLL_DPI
  let hIn = pxH / SCROLL_DPI
  const long = Math.max(wIn, hIn)
  if (long > SCROLL_MAX_IN) {
    const s = SCROLL_MAX_IN / long
    wIn *= s
    hIn *= s
  } else if (long < SCROLL_MIN_IN) {
    const s = SCROLL_MIN_IN / long
    wIn *= s
    hIn *= s
  }
  return { w: wIn * 72, h: hIn * 72 }
}

/** Full geometry for one true-sized scroll page (edge-to-edge draw). */
export function scrollPageGeom(pxW: number, pxH: number): ScrollPageGeom {
  const { w, h } = scrollPageSize(pxW, pxH)
  return { w, h, draw: { x: 0, y: 0, width: w, height: h } }
}

/** Geometry for the fixed serpentine page; the half image fills it exactly. */
export function fixedScrollGeom(): ScrollPageGeom {
  const { w, h } = SCROLL_FIXED_PAGE
  return { w, h, draw: { x: 0, y: 0, width: w, height: h } }
}

/**
 * Sheet format auto-detection for Digital Scroll.
 *
 * analyzeGrid() finds the cell grid on ONE imposition sheet side from raw
 * pixels: per-row/per-column ink profiles locate white gutter bands between
 * cells; full-bleed sheets (no clean gutters) fall back to seam detection via
 * luminance edge energy at candidate grid lines. No OCR, no DOM canvas —
 * operates on Uint8ClampedArray so it runs in node for tests.
 *
 * analyzeSheets() does the same for a WHOLE upload (every sheet side at
 * once): only gutter structure shared by ALL sides counts — gutters inside
 * the artwork itself vary page to page, while the imposition grid is
 * identical on every side. Full-bleed uploads fall back to per-side seam
 * detection and require every side to agree. This keeps dense comic art
 * (panel gutters/tier seams) from being mistaken for a fine imposition grid.
 *
 * matchFormat() then compares the detected grid + sheet orientation against
 * every ported Zine Arranger layout and returns ranked candidates.
 */
import {
  buildZinePlan,
  FORMAT_INFO,
  pagesPerSheet,
  sheetIsPortrait,
  type ZineFormatId,
} from './zineArranger'

/* ── Grid analysis ───────────────────────────────────────────────────────── */

export interface GridResult {
  rows: number
  cols: number
}

/** Luminance below this counts as ink (white paper is ~255). */
const INK_LUM = 235
/** A line with less than this fraction of ink is gutter. */
const GUTTER_INK = 0.02
/** Gutter bands must be at least this wide (fraction of axis) to split cells. */
const MIN_GUTTER_FRAC = 0.003
/**
 * Content bands thinner than this (fraction of axis) merge into neighbors.
 * 2% is far below the densest supported cell (1/8 of an axis = 12.5%) and
 * absorbs fold/crop marks printed in gutters (a few mm wide).
 */
const MIN_BAND_FRAC = 0.02
/** Seam fallback: grid-line edge energy must beat the median by this factor. */
const SEAM_RATIO = 1.5
/** Seam fallback: a grid line must show strong edges along this fraction of its length. */
const SEAM_MIN_SPAN = 0.5
/** Seam fallback never proposes grids denser than this on one axis. */
const SEAM_MAX = 8

function luminance(p: Uint8ClampedArray, o: number): number {
  return 0.299 * p[o] + 0.587 * p[o + 1] + 0.114 * p[o + 2]
}

/** Fraction of inked pixels per line along an axis ('x' = per column). */
function inkProfile(pixels: Uint8ClampedArray, w: number, h: number, axis: 'x' | 'y'): Float32Array {
  const axisDim = axis === 'x' ? w : h
  const otherDim = axis === 'x' ? h : w
  const stride = Math.max(1, Math.floor(otherDim / 400))
  const profile = new Float32Array(axisDim)
  for (let i = 0; i < axisDim; i++) {
    let ink = 0
    let n = 0
    for (let j = 0; j < otherDim; j += stride) {
      const o = axis === 'x' ? (j * w + i) * 4 : (i * w + j) * 4
      if (luminance(pixels, o) < INK_LUM) ink++
      n++
    }
    profile[i] = ink / n
  }
  return profile
}

/** Count content bands separated by sustained low-ink gutter runs. */
function countBands(profile: Float32Array): number {
  const dim = profile.length
  const minGutter = Math.max(2, Math.round(dim * MIN_GUTTER_FRAC))
  const minBand = Math.max(2, Math.round(dim * MIN_BAND_FRAC))
  const gutter = Array.from(profile, (v) => v < GUTTER_INK)
  // Relabel too-short runs until stable (short gutters merge cells, short
  // bands dissolve into gutters).
  let changed = true
  while (changed) {
    changed = false
    let i = 0
    while (i < dim) {
      let j = i
      const v = gutter[i]
      while (j < dim && gutter[j] === v) j++
      const len = j - i
      if (v && len < minGutter && i > 0 && j < dim) {
        gutter.fill(false, i, j)
        changed = true
      } else if (!v && len < minBand) {
        gutter.fill(true, i, j)
        changed = true
      }
      i = j
    }
  }
  let bands = 0
  let i = 0
  while (i < dim) {
    if (gutter[i]) {
      i++
    } else {
      bands++
      while (i < dim && !gutter[i]) i++
    }
  }
  return bands
}

/**
 * Full-bleed fallback: find the densest candidate line count (2..SEAM_MAX)
 * whose grid lines ALL land on full-span luminance seams. A real grid
 * boundary runs the length of the sheet; artwork edges (glyph strokes, panel
 * details) are local. Each candidate line must therefore show, at the same
 * position, both high edge energy vs the median (SEAM_RATIO) and edge
 * coverage along most of the other axis (SEAM_MIN_SPAN). Returns 1 when no
 * candidate qualifies.
 */
function seamCount(pixels: Uint8ClampedArray, w: number, h: number, axis: 'x' | 'y'): number {
  const axisDim = axis === 'x' ? w : h
  const otherDim = axis === 'x' ? h : w
  if (axisDim < 16) return 1
  const stride = Math.max(1, Math.floor(otherDim / 400))
  const e = new Float32Array(axisDim - 1) // mean |Δlum| along the line
  for (let i = 0; i < axisDim - 1; i++) {
    let sum = 0
    let n = 0
    for (let j = 0; j < otherDim; j += stride) {
      const o1 = axis === 'x' ? (j * w + i) * 4 : (i * w + j) * 4
      const o2 = axis === 'x' ? (j * w + i + 1) * 4 : ((i + 1) * w + j) * 4
      sum += Math.abs(luminance(pixels, o1) - luminance(pixels, o2))
      n++
    }
    e[i] = sum / n
  }
  const sorted = Float32Array.from(e).sort()
  const med = sorted[Math.floor(sorted.length / 2)] || 0
  const threshold = SEAM_RATIO * (med + 1)
  // Edge coverage: fraction of each line whose pixels beat the same
  // threshold. Relative (not absolute) so faint-but-real seams on light
  // sheets still count.
  const span = new Float32Array(axisDim - 1)
  for (let i = 0; i < axisDim - 1; i++) {
    let strong = 0
    let n = 0
    for (let j = 0; j < otherDim; j += stride) {
      const o1 = axis === 'x' ? (j * w + i) * 4 : (i * w + j) * 4
      const o2 = axis === 'x' ? (j * w + i + 1) * 4 : ((i + 1) * w + j) * 4
      if (Math.abs(luminance(pixels, o1) - luminance(pixels, o2)) > threshold) strong++
      n++
    }
    span[i] = strong / n
  }
  for (let cand = SEAM_MAX; cand >= 2; cand--) {
    // Grid lines may sit a few px off ideal (margins, rounding): score the
    // best position within a proportional window.
    const tol = Math.max(2, Math.round((axisDim / cand) * 0.08))
    let ok = true
    for (let k = 1; k < cand && ok; k++) {
      const pos = Math.round((k * axisDim) / cand)
      let found = false
      for (let q = Math.max(0, pos - tol); q < Math.min(e.length, pos + tol); q++) {
        if (e[q] > threshold && span[q] >= SEAM_MIN_SPAN) {
          found = true
          break
        }
      }
      if (!found) ok = false
    }
    if (ok) return cand
  }
  return 1
}

function axisCount(pixels: Uint8ClampedArray, w: number, h: number, axis: 'x' | 'y'): number {
  const bands = countBands(inkProfile(pixels, w, h, axis))
  if (bands >= 2) return bands
  return seamCount(pixels, w, h, axis)
}

/**
 * Detect the cell grid on a sheet side from raw RGBA pixels.
 * Returns null when no division is found on either axis (blank sheet,
 * structureless noise, or a single full-page image).
 */
export function analyzeGrid(pixels: Uint8ClampedArray, w: number, h: number): GridResult | null {
  if (w < 8 || h < 8 || pixels.length < w * h * 4) return null
  const cols = axisCount(pixels, w, h, 'x')
  const rows = axisCount(pixels, w, h, 'y')
  if (cols <= 1 && rows <= 1) return null
  return { rows, cols }
}

/** One decoded sheet side for multi-side analysis. */
export interface SheetSide {
  pixels: Uint8ClampedArray
  w: number
  h: number
}

/** Fractional resolution for the cross-side common-gutter mask. */
const COMMON_MASK_RES = 2048

/**
 * Count content bands separated by gutters present on EVERY side.
 * The imposition grid is identical across all sheet sides; gutters inside
 * the artwork are not. Intersecting the per-side gutter masks at fractional
 * positions (so sides may differ in pixel size) keeps only the structural
 * gutters — page margins and the grid's own bands.
 */
function commonGutterBands(sides: SheetSide[], axis: 'x' | 'y'): number {
  const mask = new Uint8Array(COMMON_MASK_RES).fill(1) // 1 = gutter on all sides
  for (const s of sides) {
    const profile = inkProfile(s.pixels, s.w, s.h, axis)
    for (let i = 0; i < COMMON_MASK_RES; i++) {
      const pos = Math.min(profile.length - 1, Math.floor((i * profile.length) / COMMON_MASK_RES))
      if (profile[pos] >= GUTTER_INK) mask[i] = 0
    }
  }
  // Synthesize a profile (0 = common gutter, 1 = content) and reuse the
  // band counter's min-width merging.
  const synthetic = Float32Array.from(mask, (g) => (g ? 0 : 1))
  return countBands(synthetic)
}

/**
 * Detect the cell grid shared by ALL uploaded sheet sides.
 *
 * Per axis, gutters common to every side win first; when no common gutters
 * exist (full-bleed sheets), per-side seam detection must agree on the same
 * count on every side — disagreement means the "seams" are artwork, not a
 * grid, and the axis reports no split. Returns null when neither axis shows
 * a division (the caller then keeps the user's current format choice).
 */
export function analyzeSheets(sides: SheetSide[]): GridResult | null {
  const valid = sides.filter((s) => s.w >= 8 && s.h >= 8 && s.pixels.length >= s.w * s.h * 4)
  if (valid.length === 0) return null
  if (valid.length === 1) return analyzeGrid(valid[0].pixels, valid[0].w, valid[0].h)
  const counts = { rows: 1, cols: 1 }
  for (const axis of ['x', 'y'] as const) {
    let n = commonGutterBands(valid, axis)
    if (n < 2) {
      // Full-bleed: seam counts must be unanimous across sides.
      const perSide = valid.map((s) => seamCount(s.pixels, s.w, s.h, axis))
      n = perSide.every((c) => c === perSide[0]) ? perSide[0] : 1
    }
    if (axis === 'x') counts.cols = n
    else counts.rows = n
  }
  if (counts.cols <= 1 && counts.rows <= 1) return null
  return counts
}

/* ── Format matching ─────────────────────────────────────────────────────── */

export interface FormatCandidate {
  /** 'half-serpentine' (legacy scroll) or a ported format id. */
  format: ZineFormatId | 'half-serpentine'
  zinePortrait: boolean
  doubleSided: boolean
  /** 'exact' = grid + sheet orientation match; 'grid-only' = orientation contradicts. */
  confidence: 'exact' | 'grid-only'
  /** Options detection cannot determine (shown as assumed in the UI). */
  assumed: string[]
  label: string
}

export interface MatchResult {
  grid: GridResult
  sheetPortrait: boolean
  /** True when the grid matches no ported layout. */
  unsupported: boolean
  /** Ranked best-first; the serpentine scroll outranks the half booklet. */
  candidates: FormatCandidate[]
}

const FORMAT_IDS: ZineFormatId[] = [
  'half',
  'quarter',
  'eighth',
  '12th',
  '16th',
  '24th',
  '32nd',
  '36th',
  '48th',
  '64th',
]

/**
 * Match a detected grid against every ported layout. Sidedness comes from
 * numSides (1 side → single, ≥2 → duplex where the format offers both; half
 * is always duplex). Spine variant is not detectable — side is assumed.
 * A 1×2 grid on a landscape sheet also matches the legacy serpentine scroll,
 * which is ranked first (validated default) with the half booklet as the
 * named alternative.
 */
export function matchFormat(
  rows: number,
  cols: number,
  sheetW: number,
  sheetH: number,
  numSides: number,
): MatchResult {
  const sheetPortrait = sheetH > sheetW
  const candidates: FormatCandidate[] = []

  for (const fmt of FORMAT_IDS) {
    for (const por of [true, false]) {
      const pps = pagesPerSheet(fmt, false, false)
      const plan = buildZinePlan(pps, {
        format: fmt,
        doubleSided: false,
        zinePortrait: por,
        spineSide: true,
        quarterCopy: false,
        flipBackCover: false,
        sigSheets: 0,
        paper: 'letter',
      })
      if (plan.gridRows !== rows || plan.gridCols !== cols) continue
      const orientOk = sheetIsPortrait(fmt, por) === sheetPortrait
      candidates.push({
        format: fmt,
        zinePortrait: por,
        doubleSided: fmt === 'half' ? true : numSides >= 2,
        confidence: orientOk ? 'exact' : 'grid-only',
        assumed: ['fold edge'],
        label: FORMAT_INFO[fmt].label,
      })
    }
  }

  if (rows === 1 && cols === 2 && !sheetPortrait) {
    candidates.unshift({
      format: 'half-serpentine',
      zinePortrait: true,
      doubleSided: false,
      confidence: 'exact',
      assumed: [],
      label: 'Half — serpentine scroll',
    })
  }

  // Stable sort: exact before grid-only, serpentine keeps its lead.
  candidates.sort((a, b) =>
    a.confidence === b.confidence ? 0 : a.confidence === 'exact' ? -1 : 1,
  )

  return {
    grid: { rows, cols },
    sheetPortrait,
    unsupported: candidates.length === 0,
    candidates,
  }
}

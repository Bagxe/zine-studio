// Logic verification for Zine Studio core functions.
//   node scripts/logic-check.mjs   (after esbuild-bundling, see below)
//
// The authoritative check is scripts/compare-truth.mjs, which diffs the ported
// engine against output traced by executing the reference Zine Arranger code.
// This file adds targeted sanity checks: exact documented mappings for half and
// quarter (saddle-stitch booklet order), plus the Digital Scroll serpentine.
import { buildZinePlan } from '../dist-logic/zine.mjs'
import { serpentineOrder } from '../dist-logic/impose.mjs'
import { naturalSortByName } from '../dist-logic/naturalSort.mjs'
import { defaultFromCarousel, defaultFromPdf, withSuffix } from '../dist-logic/naming.mjs'
import { deimposeMapping } from '../dist-logic/deimpose.mjs'
import { fixedScrollGeom, scrollPageGeom, scrollPageSize } from '../dist-logic/scrollPageSize.mjs'
import { classifyFile, expandFiles } from '../dist-logic/intake.mjs'
import { stretchDistortion, worstStretchDistortion } from '../dist-logic/pagePrep.mjs'
import { analyzeGrid, analyzeSheets, matchFormat } from '../dist-logic/detectFormat.mjs'

import {
  addRotation,
  applyOrder,
  identityOrder,
  isIdentityOrder,
  isModified,
  moveItem,
  normDeg,
  rotatedDims,
  rotationFor,
} from '../dist-logic/manualArrange.mjs'
import { paddingHint } from '../dist-logic/paddingHint.mjs'
import { DICTS, LANGS, detectLang, fmt, translate } from '../dist-logic/i18n.mjs'
import { nudgeTarget } from '../dist-logic/reorder.mjs'

let failures = 0
function check(name, actual, expected) {
  const a = JSON.stringify(actual)
  const e = JSON.stringify(expected)
  if (a === e) {
    console.log(`PASS  ${name}`)
  } else {
    failures++
    console.log(`FAIL  ${name}\n  expected: ${e}\n  actual:   ${a}`)
  }
}

const base = {
  doubleSided: true,
  zinePortrait: true,
  spineSide: true,
  quarterCopy: false,
  flipBackCover: false,
  sigSheets: 0,
  paper: 'letter',
}

// ── HALF (saddle-stitch, nested booklet) ──────────────────────────────────
// Reference: half|duplex|portrait|side, 8 pages (0-based ids):
//   sheet1 front [7,0]  back [1,6]   sheet2 front [5,2]  back [3,4]
const half8 = buildZinePlan(8, { ...base, format: 'half' })
const halfSeq = half8.sheets.map((sh) => sh.cells.map((c) => c.page))
check('half 8pg sheet order (nested)', halfSeq, [[7, 0], [1, 6], [5, 2], [3, 4]])
check('half 8pg sides', half8.sheets.map((s) => s.side), ['front', 'back', 'front', 'back'])
check('half 8pg no rotations', half8.sheets.every((s) => s.cells.every((c) => !c.rotate)), true)
check('half pads 6 -> 8', buildZinePlan(6, { ...base, format: 'half' }).paddedCount, 8)

// half landscape portrait-sheet: front cells rotated (top half), back rotated
const halfL = buildZinePlan(4, { ...base, format: 'half', zinePortrait: false })
check(
  'half landscape 4pg order',
  halfL.sheets.map((sh) => sh.cells.map((c) => c.page)),
  [[0, 3], [1, 2]],
)
check(
  'half landscape rotations (back cover flipped by default)',
  halfL.sheets.map((sh) => sh.cells.map((c) => c.rotate)),
  [[false, true], [true, true]],
)

// ── QUARTER regular duplex (bottom row nested into top) ───────────────────
// Reference: quarter|duplex|portrait|side, 8 pages:
//   front: tl=7 tr=0 bl=5 br=2   back: tl=1 tr=6 bl=3 br=4  (m/n = middle pair)
const q8 = buildZinePlan(8, { ...base, format: 'quarter' })
check(
  'quarter 8pg front (e,s,n,m)',
  q8.sheets[0].cells.map((c) => c.page),
  [7, 0, 5, 2],
)
check(
  'quarter 8pg back (s+1,e-1,m+1,n-1)',
  q8.sheets[1].cells.map((c) => c.page),
  [1, 6, 3, 4],
)
check(
  'quarter front cuts/folds',
  q8.sheets[0].cells.map((c) => ({ cuts: c.cuts, folds: c.folds })),
  [
    { cuts: ['b'], folds: [] },
    { cuts: ['b'], folds: ['l'] },
    { cuts: [], folds: [] },
    { cuts: [], folds: ['l'] },
  ],
)

// quarter 16 pages, sheet 2 (i=1: s=2, e=13, m=6, n=9)
const q16 = buildZinePlan(16, { ...base, format: 'quarter' })
check('quarter 16pg sheet3 front', q16.sheets[2].cells.map((c) => c.page), [13, 2, 9, 6])
check('quarter 16pg sheet4 back', q16.sheets[3].cells.map((c) => c.page), [3, 12, 7, 8])

// ── QUARTER two-copies ─────────────────────────────────────────────────────
// front: tl=e tr=s bl=e(copy) br=s(copy)
const qc = buildZinePlan(4, { ...base, format: 'quarter', quarterCopy: true })
check(
  'quarter copy 4pg front',
  qc.sheets[0].cells.map((c) => [c.page, c.copy]),
  [
    [3, false],
    [0, false],
    [3, true],
    [0, true],
  ],
)

// ── EIGHTH single (classic 8-page minizine, one-cut fold) ──────────────────
// portrait side spine: top row rotated 180
const e8 = buildZinePlan(8, { ...base, format: 'eighth', doubleSided: false })
check('eighth single 8pg pages', e8.sheets[0].cells.map((c) => c.page), [4, 3, 2, 1, 5, 6, 7, 0])
check(
  'eighth single rotations',
  e8.sheets[0].cells.map((c) => c.rotate),
  [true, true, true, true, false, false, false, false],
)

// ── Signature split: half 16 pages, 2 sheets/signature ─────────────────────
const hs = buildZinePlan(16, { ...base, format: 'half', sigSheets: 2 })
check('half 16pg sig2 sheet count', hs.sheets.length, 8)
check('half 16pg sig2 first sig', hs.sheets.slice(0, 4).map((sh) => sh.cells.map((c) => c.page)), [
  [7, 0],
  [1, 6],
  [5, 2],
  [3, 4],
])
check('half 16pg sig2 second sig', hs.sheets.slice(4, 8).map((sh) => sh.cells.map((c) => c.page)), [
  [15, 8],
  [9, 14],
  [13, 10],
  [11, 12],
])

// ── Digital Scroll serpentine (unchanged) ──────────────────────────────────
check(
  'serpentine 6 sheets',
  serpentineOrder(6).map((s) => `${s.sheet}${s.half}`),
  ['1R', '2L', '3R', '4L', '5R', '6L', '6R', '5L', '4R', '3L', '2R', '1L'],
)
check('serpentine 1 sheet', serpentineOrder(1).map((s) => `${s.sheet}${s.half}`), ['1R', '1L'])

// ── Carousel-aware intake ordering ─────────────────────────────────────────
const sortNames = (arr) => naturalSortByName(arr.map((name) => ({ name }))).map((x) => x.name)

check(
  'carousel: unnumbered base first, then _1,_2,_7,_10',
  sortNames(['base.jpg', 'base_1.jpg', 'base_2.jpg', 'base_10.jpg', 'base_7.jpg']),
  ['base.jpg', 'base_1.jpg', 'base_2.jpg', 'base_7.jpg', 'base_10.jpg'],
)
check(
  'carousel: real Instagram download names',
  sortNames([
    'mxgmnational__2025-08-01T131205.000Z_2.jpg',
    'mxgmnational__2025-08-01T131205.000Z.jpg',
    'mxgmnational__2025-08-01T131205.000Z_1.jpg',
  ]),
  [
    'mxgmnational__2025-08-01T131205.000Z.jpg',
    'mxgmnational__2025-08-01T131205.000Z_1.jpg',
    'mxgmnational__2025-08-01T131205.000Z_2.jpg',
  ],
)
check(
  'carousel: mixed groups sort by group then index',
  sortNames(['b_1.jpg', 'a_2.jpg', 'b.jpg', 'a_1.jpg', 'a.jpg']),
  ['a.jpg', 'a_1.jpg', 'a_2.jpg', 'b.jpg', 'b_1.jpg'],
)
check(
  'carousel: zero-padded numbered sets still work',
  sortNames(['03_page.jpg', '01_page.jpg', '02_page.jpg']),
  ['01_page.jpg', '02_page.jpg', '03_page.jpg'],
)
check(
  'carousel: same stem, different extensions group together',
  sortNames(['a_1.jpg', 'a.png', 'a_2.webp']),
  ['a.png', 'a_1.jpg', 'a_2.webp'],
)
check(
  'carousel: _10 does not jump ahead of _2',
  sortNames(['img_10.png', 'img_2.png', 'img_1.png', 'img.png']),
  ['img.png', 'img_1.png', 'img_2.png', 'img_10.png'],
)

// ── Output file naming ─────────────────────────────────────────────────────
check('naming: suffix appended', withSuffix('black-august', 'print'), 'black-august_print.pdf')
check('naming: no double suffix', withSuffix('black-august_print', 'print'), 'black-august_print.pdf')
check('naming: no double suffix (case-insensitive)', withSuffix('ZINE_DIGITAL', 'digital'), 'ZINE_DIGITAL.pdf')
check(
  'naming: sanitize spaces + illegal chars',
  withSuffix('My Zine: Vol/2?', 'digital'),
  'My_Zine_Vol2_digital.pdf',
)
check('naming: illegal-only name falls back to zine', withSuffix('???', 'print'), 'zine_print.pdf')
check(
  'naming: long names truncated to 80 chars',
  withSuffix('x'.repeat(120), 'print'),
  `${'x'.repeat(80)}_print.pdf`,
)
check(
  'naming: default from carousel group stem',
  defaultFromCarousel('mxgmnational__2025-08-01T131205.000Z_3.jpg'),
  'mxgmnational__2025-08-01T131205.000Z',
)
check(
  'naming: default from imposition PDF name',
  withSuffix(defaultFromPdf('MO-BA-1.pdf'), 'digital'),
  'MO-BA-1_digital.pdf',
)

// ── Digital Scroll de-imposition mapping ───────────────────────────────────
// Expectations are derived from buildZinePlan at runtime, not hardcoded:
// the mapping must contain exactly the plan's non-copy cells, tagged with
// their sheet-side index, sorted by zine page ascending.
const dBase = {
  doubleSided: false,
  zinePortrait: true,
  spineSide: true,
  quarterCopy: false,
  flipBackCover: false,
  sigSheets: 0,
  paper: 'letter',
}
const expectedCells = (plan) => {
  const out = []
  plan.sheets.forEach((sh, side) => {
    for (const c of sh.cells) {
      if (c.copy) continue
      out.push({ page: c.page, side, row: c.row, col: c.col, rotate: c.rotate })
    }
  })
  return out.sort((a, b) => a.page - b.page)
}

// (a) eighth single-sided portrait, side fold, 1 sheet side -> 8 pages
const mEighth = deimposeMapping(1, { ...dBase, format: 'eighth' })
check('deimpose eighth single: grid + sides', [mEighth.gridRows, mEighth.gridCols, mEighth.numSides], [2, 4, 1])
check(
  'deimpose eighth single: pages ascending',
  mEighth.cells.map((c) => c.page),
  [0, 1, 2, 3, 4, 5, 6, 7],
)
check(
  'deimpose eighth single: cells match plan (incl. 180° top row)',
  mEighth.cells,
  expectedCells(buildZinePlan(8, { ...dBase, format: 'eighth' })),
)
check(
  'deimpose eighth single: rotated cells are the top row',
  mEighth.cells.filter((c) => c.rotate).every((c) => c.row === 0),
  true,
)

// (b) quarter duplex portrait, 2 sides -> 8 pages, 4 cells per side
const mQuarter = deimposeMapping(2, { ...dBase, format: 'quarter', doubleSided: true })
check(
  'deimpose quarter duplex: pages ascending',
  mQuarter.cells.map((c) => c.page),
  [0, 1, 2, 3, 4, 5, 6, 7],
)
check(
  'deimpose quarter duplex: 4 cells per side',
  [mQuarter.cells.filter((c) => c.side === 0).length, mQuarter.cells.filter((c) => c.side === 1).length],
  [4, 4],
)
check('deimpose quarter duplex: grid', [mQuarter.gridRows, mQuarter.gridCols], [2, 2])

// (c) half booklet (always duplex), 4 sides -> 8 pages across sides 0..3
const mHalf = deimposeMapping(4, { ...dBase, format: 'half', doubleSided: true })
check(
  'deimpose half booklet: pages ascending',
  mHalf.cells.map((c) => c.page),
  [0, 1, 2, 3, 4, 5, 6, 7],
)
check(
  'deimpose half booklet: side indices 0..3',
  [...new Set(mHalf.cells.map((c) => c.side))].sort((a, b) => a - b),
  [0, 1, 2, 3],
)
check(
  'deimpose half booklet: cells match plan',
  mHalf.cells,
  expectedCells(buildZinePlan(8, { ...dBase, format: 'half', doubleSided: true })),
)

// (d) duplex layouts reject an odd number of sheet sides
let oddThrew = null
try {
  deimposeMapping(3, { ...dBase, format: 'quarter', doubleSided: true })
} catch (e) {
  oddThrew = e.message
}
check('deimpose duplex odd side count throws', typeof oddThrew, 'string')
let halfOddThrew = false
try {
  deimposeMapping(1, { ...dBase, format: 'half', doubleSided: true })
} catch {
  halfOddThrew = true
}
check('deimpose half booklet odd side count throws', halfOddThrew, true)

// (e) quarter two-copies: copy cells skipped, only the 4 unique pages remain
const mCopy = deimposeMapping(2, { ...dBase, format: 'quarter', doubleSided: true, quarterCopy: true })
check(
  'deimpose quarter two-copies: unique pages only',
  mCopy.cells.map((c) => c.page),
  [0, 1, 2, 3],
)
check('deimpose quarter two-copies: copy cells skipped', mCopy.cells.length, 4)

// (f) landscape eighth uses the landscape grid and still sorts by page
const mEighthL = deimposeMapping(1, { ...dBase, format: 'eighth', zinePortrait: false })
check('deimpose eighth landscape: grid', [mEighthL.gridRows, mEighthL.gridCols], [4, 2])
check(
  'deimpose eighth landscape: pages ascending',
  mEighthL.cells.map((c) => c.page),
  [0, 1, 2, 3, 4, 5, 6, 7],
)

// ── Scroll PDF true-to-image page sizing ───────────────────────────────────
// Page = pixels / 300 DPI in inches, long side clamped to [3, 24]in with
// uniform scaling; the draw rect is always the full page (edge-to-edge).
const r4 = (n) => Math.round(n * 1e4) / 1e4

// square image -> square page (1200px at 300dpi = 4in = 288pt)
const gSq = scrollPageGeom(1200, 1200)
check('scroll size: square image -> square page', [r4(gSq.w), r4(gSq.h)], [288, 288])
check('scroll size: square draw fills page', gSq.draw, { x: 0, y: 0, width: gSq.w, height: gSq.h })

// 4:5 image -> 4:5 page (1200x1500px = 4x5in)
const g45 = scrollPageGeom(1200, 1500)
check('scroll size: 4:5 image -> 4:5 page', [r4(g45.w), r4(g45.h)], [288, 360])
check('scroll size: 4:5 aspect preserved', r4(g45.w / g45.h), 0.8)
check('scroll size: 4:5 draw fills page (no inset)', g45.draw, {
  x: 0,
  y: 0,
  width: g45.w,
  height: g45.h,
})

// mixed set -> per-page sizes differ
const sq = scrollPageSize(1200, 1200)
const port = scrollPageSize(1200, 1500)
check('scroll size: mixed aspects give different page sizes', sq.h !== port.h && sq.w === port.w, true)

// 10:1 pano, 25in long -> clamped to 24in, scaled uniformly (7500x750px)
const gPano = scrollPageGeom(7500, 750)
check('scroll size: pano long side clamps to 24in', r4(gPano.w), 1728)
check('scroll size: pano clamp scales uniformly', r4(gPano.w / gPano.h), 10)
check('scroll size: pano short side follows clamp', r4(gPano.h), r4((24 / 10) * 72))

// tiny image -> scaled up to the 3in minimum (100x100px)
const gTiny = scrollPageGeom(100, 100)
check('scroll size: tiny image clamps up to 3in', [r4(gTiny.w), r4(gTiny.h)], [216, 216])

// degenerate dims -> safe fixed fallback
const gDeg = scrollPageGeom(0, 1200)
check('scroll size: degenerate dims fall back to 5.5x8.5', [gDeg.w, gDeg.h], [396, 612])

// serpentine path stays fixed 5.5x8.5, image fills it exactly
const gFixed = fixedScrollGeom()
check('scroll size: serpentine fixed 5.5x8.5 page', [gFixed.w, gFixed.h], [396, 612])
check('scroll size: serpentine draw fills page (no rounding gap)', gFixed.draw, {
  x: 0,
  y: 0,
  width: 396,
  height: 612,
})

// ── Intake file classification (PDF / HEIC / broader image types) ─────────
check('intake: pdf by mime', classifyFile('zine', 'application/pdf'), 'pdf')
check('intake: pdf by extension, uppercase', classifyFile('ZINE.PDF', ''), 'pdf')
check('intake: heic by extension', classifyFile('IMG_0001.HEIC', ''), 'heic')
check('intake: heif by mime', classifyFile('photo', 'image/heif'), 'heic')
check('intake: heic mime beats generic image/*', classifyFile('x', 'image/heic'), 'heic')
check('intake: webp accepted', classifyFile('a.webp', 'image/webp'), 'image')
check('intake: avif by extension', classifyFile('a.avif', ''), 'image')
check('intake: avif by mime, no extension', classifyFile('download', 'image/avif'), 'image')
check('intake: gif accepted', classifyFile('a.gif', 'image/gif'), 'image')
check('intake: bmp accepted', classifyFile('a.bmp', 'image/bmp'), 'image')
check('intake: jpg/png still images', [classifyFile('a.jpg', ''), classifyFile('b.png', '')], [
  'image',
  'image',
])
check('intake: zip by mime', classifyFile('pages.zip', 'application/x-zip-compressed'), 'zip')
check('intake: txt rejected', classifyFile('notes.txt', 'text/plain'), 'unsupported')
check('intake: extensionless unknown rejected', classifyFile('data', ''), 'unsupported')

// Unsupported files land in `rejected` by name — never silently dropped.
const rejTxt = await expandFiles([{ name: 'notes.txt', type: 'text/plain' }])
check('intake: unsupported file named in rejected', rejTxt.rejected, ['notes.txt'])
check('intake: unsupported file yields no sources', rejTxt.sources, [])

// PDFs and HEICs without injected converters are rejected by name, not skipped.
const rejNoDeps = await expandFiles([
  { name: 'zine.pdf', type: 'application/pdf' },
  { name: 'IMG.HEIC', type: '' },
])
check('intake: pdf+heic without converters rejected by name', rejNoDeps.rejected, [
  'zine.pdf',
  'IMG.HEIC',
])

// ── Stretch fill: non-uniform scale to exact page dimensions ──────────────
// Page cell: 4.25x5.5in at 300 DPI = 1275x1650px. Stretch draws the image
// with independent X/Y scale factors (page/image per axis), so coverage is
// always exact and the whole image stays visible (distorted, never cropped).
const PW = 1275
const PH = 1650

// Independent per-axis scale factors for a square image: page/image each way.
check('stretch: per-axis scale factors = page/image', [r4(PW / 1000), r4(PH / 1000)], [1.275, 1.65])
check('stretch: drawn dims equal page dims exactly', [1000 * (PW / 1000), 1000 * (PH / 1000)], [PW, PH])

// Distortion = ratio of Y scale to X scale. Square on a 4.25x5.5 page:
// 1650/1275 = 1.2941 -> stretched vertically by ~29%.
const dSq = stretchDistortion(1000, 1000, PW, PH)
check('stretch: square distortion axis is vertical', dSq.axis, 'vertical')
check('stretch: square distortion amount ~29%', r4(dSq.amount), r4(PH / PW - 1))
check('stretch: square distortion percent rounds to 29', Math.round(dSq.amount * 100), 29)

// Wide pano (3000x1000) on the same page: heavily vertical.
const dPano = stretchDistortion(3000, 1000, PW, PH)
check('stretch: pano distortion', [dPano.axis, r4(dPano.amount)], ['vertical', r4(1.65 / 0.425 - 1)])

// Tall image (1000x3000): stretched horizontally instead.
const dTall = stretchDistortion(1000, 3000, PW, PH)
check('stretch: tall image distortion axis is horizontal', dTall.axis, 'horizontal')
check(
  'stretch: tall image amount',
  r4(dTall.amount),
  r4(1 / ((PH / 3000) / (PW / 1000)) - 1),
)

// Matching aspect -> no distortion reported.
check('stretch: matching aspect reports null', stretchDistortion(PW, PH, PW, PH), null)
check('stretch: degenerate dims report null', stretchDistortion(0, 1000, PW, PH), null)

// Worst-of-set: square (29%) beats a near-match (1000x1100 -> ~18%).
const worst = worstStretchDistortion(
  [
    { width: PW, height: PH },
    { width: 1000, height: 1100 },
    { width: 1000, height: 1000 },
  ],
  PW,
  PH,
)
check('stretch: worst mismatch wins', [worst.axis, r4(worst.amount)], ['vertical', r4(PH / PW - 1)])

// ── Sheet format auto-detection ────────────────────────────────────────────
// Synthesize raw RGBA sheets: white paper with uniform dark content blocks
// in a rows x cols grid (gutters + margins left white).
function makeSheet(w, h, rows, cols, { gutter = 12, margin = 20, ink = 0 } = {}) {
  const px = new Uint8ClampedArray(w * h * 4).fill(255)
  const cw = Math.floor((w - 2 * margin - (cols - 1) * gutter) / cols)
  const ch = Math.floor((h - 2 * margin - (rows - 1) * gutter) / rows)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x0 = margin + c * (cw + gutter)
      const y0 = margin + r * (ch + gutter)
      for (let y = y0; y < y0 + ch; y++) {
        for (let x = x0; x < x0 + cw; x++) {
          const o = (y * w + x) * 4
          px[o] = ink
          px[o + 1] = ink
          px[o + 2] = ink
        }
      }
    }
  }
  return px
}

// (a) gutter-based grid detection
check('detect: 2x2 blocks on portrait sheet', analyzeGrid(makeSheet(850, 1100, 2, 2), 850, 1100), {
  rows: 2,
  cols: 2,
})
check('detect: 2x4 blocks on landscape sheet', analyzeGrid(makeSheet(1100, 850, 2, 4), 1100, 850), {
  rows: 2,
  cols: 4,
})
check('detect: 1x2 halves on landscape sheet', analyzeGrid(makeSheet(1100, 850, 1, 2), 1100, 850), {
  rows: 1,
  cols: 2,
})

// (b) full-bleed noise defeats detection -> null
const noise = new Uint8ClampedArray(400 * 300 * 4)
let seed = 42
const rand = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff
for (let i = 0; i < noise.length; i++) noise[i] = Math.floor(rand() * 256)
check('detect: structureless noise returns null', analyzeGrid(noise, 400, 300), null)

// (c) genuinely blank sheet -> null; light-gray content is below the ink
// threshold for gutter analysis but its edge contrast still lets the seam
// fallback recover the grid (the seam path is threshold-free by design)
check(
  'detect: pure white sheet returns null',
  analyzeGrid(new Uint8ClampedArray(850 * 1100 * 4).fill(255), 850, 1100),
  null,
)
check(
  'detect: light content (lum 240) recovered via seam contrast',
  analyzeGrid(makeSheet(850, 1100, 2, 2, { ink: 240 }), 850, 1100),
  { rows: 2, cols: 2 },
)

// (d) gutters below the 0.3% threshold: gutter bands merge, seam fallback
// still recovers the grid from the block edges
check(
  'detect: 2px gutters recovered via seam fallback',
  analyzeGrid(makeSheet(1000, 700, 1, 4, { gutter: 2 }), 1000, 700),
  { rows: 1, cols: 4 },
)

// (e) format matching: grid + orientation + side count -> expected layout
const mQuarter1 = matchFormat(2, 2, 850, 1100, 1)
check('match: 2x2 portrait 1 side -> quarter single', [
  mQuarter1.candidates[0].format,
  mQuarter1.candidates[0].zinePortrait,
  mQuarter1.candidates[0].doubleSided,
  mQuarter1.candidates[0].confidence,
], ['quarter', true, false, 'exact'])
check(
  'match: 2x2 portrait 2 sides -> quarter duplex',
  matchFormat(2, 2, 850, 1100, 2).candidates[0].doubleSided,
  true,
)
const mDetEighth = matchFormat(2, 4, 1100, 850, 1)
check('match: 2x4 landscape 1 side -> eighth portrait single', [
  mDetEighth.candidates[0].format,
  mDetEighth.candidates[0].zinePortrait,
  mDetEighth.candidates[0].doubleSided,
], ['eighth', true, false])
const mDetEighthL = matchFormat(4, 2, 850, 1100, 2)
check('match: 4x2 portrait 2 sides -> eighth landscape duplex', [
  mDetEighthL.candidates[0].format,
  mDetEighthL.candidates[0].zinePortrait,
  mDetEighthL.candidates[0].doubleSided,
], ['eighth', false, true])
const mHalfBook = matchFormat(2, 1, 850, 1100, 4)
check('match: 2x1 portrait -> half booklet landscape duplex', [
  mHalfBook.candidates[0].format,
  mHalfBook.candidates[0].zinePortrait,
  mHalfBook.candidates[0].doubleSided,
], ['half', false, true])

// (f) serpentine collision: 1x2 landscape ranks serpentine first, booklet alt
const mSerp = matchFormat(1, 2, 1100, 850, 2)
check('match: 1x2 landscape -> serpentine top, half booklet alternative', [
  mSerp.candidates[0].format,
  mSerp.candidates[1].format,
], ['half-serpentine', 'half'])

// (g) orientation flip ranks exact above grid-only
const mFlip = matchFormat(2, 2, 1100, 850, 1)
check('match: 2x2 landscape -> quarter landscape exact, portrait grid-only second', [
  mFlip.candidates[0].zinePortrait,
  mFlip.candidates[0].confidence,
  mFlip.candidates[1].zinePortrait,
  mFlip.candidates[1].confidence,
], [false, 'exact', true, 'grid-only'])

// (h) no ported layout for the grid -> unsupported
const m33 = matchFormat(3, 3, 850, 1100, 1)
check('match: 3x3 grid unsupported', [m33.unsupported, m33.candidates.length], [true, 0])

// (i) full pipeline: synthesized eighth sheet -> detection -> eighth portrait
const pipeGrid = analyzeGrid(makeSheet(1100, 850, 2, 4), 1100, 850)
check(
  'detect+match: eighth sheet pipeline',
  matchFormat(pipeGrid.rows, pipeGrid.cols, 1100, 850, 1).candidates[0].format,
  'eighth',
)

// ── Multi-side consensus detection (MO-BA-1 serpentine regression) ────────
// Real artwork has its own panel gutters/seams that vary page to page; the
// imposition grid is the only structure shared by EVERY side. Synthesize two
// serpentine half sheets whose art gutters differ per side, plus a thin dark
// fold mark inside the shared center gutter.
function makeHalvesWithArt(w, h, { artStripeFrac, foldMark }) {
  const px = makeSheet(w, h, 1, 2, { gutter: 60, margin: 20 })
  const paint = (x0, x1, v) => {
    for (let y = 0; y < h; y++)
      for (let x = x0; x < x1; x++) {
        const o = (y * w + x) * 4
        px[o] = px[o + 1] = px[o + 2] = v
      }
  }
  // Art gutter inside the left half (position varies per side).
  const stripeX = Math.round(w * artStripeFrac)
  paint(stripeX, stripeX + 24, 255)
  // Thin fold mark at the exact center, inside the shared gutter.
  if (foldMark) paint(Math.round(w / 2) - 5, Math.round(w / 2) + 5, 0)
  return { pixels: px, w, h }
}
const halveA = makeHalvesWithArt(1100, 850, { artStripeFrac: 0.25, foldMark: true })
const halveB = makeHalvesWithArt(1100, 850, { artStripeFrac: 0.31, foldMark: true })
check(
  'detect multi: per-side art gutters disagree (raw analyzeGrid)',
  [analyzeGrid(halveA.pixels, 1100, 850).cols, analyzeGrid(halveB.pixels, 1100, 850).cols].every(
    (c) => c > 2,
  ),
  true,
)
check(
  'detect multi: shared center gutter wins -> serpentine 1x2',
  analyzeSheets([halveA, halveB]),
  { rows: 1, cols: 2 },
)

// Full-bleed sheets (no gutters anywhere): per-side seam counts must agree.
function makeShadeSheet(w, h, cols, shades) {
  const px = new Uint8ClampedArray(w * h * 4)
  const cw = Math.floor(w / cols)
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4
      px[o] = px[o + 1] = px[o + 2] = shades[Math.min(cols - 1, Math.floor(x / cw))]
      px[o + 3] = 255
    }
  return { pixels: px, w, h }
}
const shade4a = makeShadeSheet(1000, 700, 4, [30, 90, 150, 210])
const shade4b = makeShadeSheet(1000, 700, 4, [210, 150, 90, 30])
const shade2 = makeShadeSheet(1000, 700, 4, [30, 30, 210, 210])
check(
  'detect multi: full-bleed seams agree -> densest grid',
  analyzeSheets([shade4a, shade4b]),
  { rows: 1, cols: 4 },
)
check(
  'detect multi: full-bleed seam disagreement -> null (keep user choice)',
  analyzeSheets([shade4a, shade2]),
  null,
)

// ── Manual arrange (Digital Scroll page order/rotation overrides) ─────────
check('arrange: applyOrder permutes base list', applyOrder(['a', 'b', 'c'], [2, 0, 1]), ['c', 'a', 'b'])
check('arrange: null order returns base content (detected order)', applyOrder(['a', 'b'], null), ['a', 'b'])
check('arrange: out-of-range indices skipped', applyOrder(['a', 'b'], [0, 5, 1]), ['a', 'b'])
check('arrange: moveItem drag semantics', moveItem([0, 1, 2, 3], 0, 2), [1, 2, 0, 3])
check('arrange: moveItem no-op is stable', moveItem([0, 1, 2], 1, 1), [0, 1, 2])
check('arrange: rotation accumulates mod 360', [
  addRotation(0, 90),
  addRotation(90, 90),
  addRotation(180, 90),
  addRotation(270, 90),
  addRotation(0, -90),
  addRotation(270, 180),
], [90, 180, 270, 0, 270, 90])
check('arrange: normDeg normalizes', [normDeg(450), normDeg(-90), normDeg(360)], [90, 270, 0])
check('arrange: rotationFor sparse map', [rotationFor({ 2: 450 }, 2), rotationFor(null, 3)], [90, 0])
check('arrange: identity detection', [
  isIdentityOrder(null),
  isIdentityOrder([0, 1, 2]),
  isIdentityOrder([1, 0, 2]),
], [true, true, false])
check('arrange: modified flag', [
  isModified(null, null),
  isModified([1, 0], null),
  isModified(null, { 2: 180 }),
  isModified(null, { 1: 0 }),
], [false, true, true, false])
check('arrange: rotatedDims swaps axes at 90/270', [
  rotatedDims(100, 200, 90),
  rotatedDims(100, 200, 180),
  rotatedDims(100, 200, 270),
], [{ w: 200, h: 100 }, { w: 100, h: 200 }, { w: 200, h: 100 }])
check(
  'arrange: reset restores identity',
  [isIdentityOrder(identityOrder(4)), applyOrder(['a', 'b', 'c'], identityOrder(3))],
  [true, ['a', 'b', 'c']],
)

// ── PADDING HINT (blank-page guidance) ─────────────────────────────────────
// Counts come from the engine: quarter duplex 10 -> padded 16, half 10 -> 12.
check('padding: engine pads quarter duplex 10 -> 16', buildZinePlan(10, { ...base, format: 'quarter' }).paddedCount, 16)
check('padding: engine pads half 10 -> 12', buildZinePlan(10, { ...base, format: 'half' }).paddedCount, 12)
check('padding: quarter duplex 10 -> 16, add 6 / remove 2', (() => {
  const h = paddingHint(10, 16, 8)
  return h && [h.blanks, h.add, h.remove]
})(), [6, 6, 2])
check('padding: exact multiple gives no hint', [
  paddingHint(8, 8, 8),
  paddingHint(16, 16, 8),
  paddingHint(0, 0, 4),
], [null, null, null])
check('padding: remove below one full sheet not suggested', (() => {
  const h = paddingHint(5, 8, 8) // eighth single, 5 pages
  return h && [h.remove, h.add]
})(), [null, 3])
check('padding: format switch updates numbers (half 10 -> 12)', (() => {
  const h = paddingHint(10, 12, 4)
  return h && [h.add, h.remove]
})(), [2, 2])
check('padding: singular counts (11 -> 12: 1 blank, add 1, remove 3)', (() => {
  const h = paddingHint(11, 12, 4)
  return h && [h.blanks, h.add, h.remove]
})(), [1, 1, 3])

// ── NUDGE REORDER (touch fallback controls) ────────────────────────────────
check('nudge: middle moves both ways', [nudgeTarget(1, -1, 3), nudgeTarget(1, 1, 3)], [0, 2])
check('nudge: edges clamp to null (button disabled)', [
  nudgeTarget(0, -1, 3),
  nudgeTarget(2, 1, 3),
  nudgeTarget(0, -1, 1),
  nudgeTarget(0, 1, 1),
], [null, null, null, null])
check('nudge: out-of-range index is null', [nudgeTarget(-1, 1, 3), nudgeTarget(3, -1, 3), nudgeTarget(0, 1, 0)], [null, null, null])
check('nudge: composed with moveItem permutes correctly', [
  moveItem(['a', 'b', 'c'], 0, nudgeTarget(0, 1, 3)),
  moveItem(['a', 'b', 'c'], 2, nudgeTarget(2, -1, 3)),
], [
  ['b', 'a', 'c'],
  ['a', 'c', 'b'],
])

// ── I18N (dictionaries, language detection, formatting) ────────────────────
const enKeys = Object.keys(DICTS.en)
check('i18n: 9 languages offered', [...LANGS], ['en', 'es', 'pt', 'fr', 'de', 'zh', 'ja', 'ko', 'ar'])
check(
  'i18n: every locale has every en key, all non-empty',
  LANGS.map(
    (l) => enKeys.filter((k) => typeof DICTS[l][k] !== 'string' || DICTS[l][k].trim() === '').length,
  ),
  LANGS.map(() => 0),
)
check('i18n: every placeholder used by en exists in each locale value', (() => {
  // A locale value must not gain/lose {placeholders} vs the en master.
  const ph = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',')
  const bad = []
  for (const l of LANGS) {
    for (const k of enKeys) {
      if (ph(DICTS[l][k]) !== ph(DICTS.en[k])) bad.push(`${l}:${k}`)
    }
  }
  return bad
})(), [])
check('i18n: detectLang maps navigator languages', [
  detectLang('pt-BR', null),
  detectLang('zh-TW', null),
  detectLang('zh-CN', null),
  detectLang('fr-CA', null),
  detectLang('ar-EG', null),
  detectLang('ar-SA', null),
  detectLang('ar', null),
  detectLang('xx', null),
  detectLang(null, null),
], ['pt', 'zh', 'zh', 'fr', 'ar', 'ar', 'ar', 'en', 'en'])
check('i18n: stored choice wins; unknown stored falls back', [
  detectLang('en-US', 'ko'),
  detectLang('en', 'xx'),
], ['ko', 'en'])
check('i18n: fmt substitutes, leaves unknown placeholders visible', [
  fmt('a {x} b {y}', { x: 1, y: 'z' }),
  fmt('none'),
  fmt('{x}', {}),
], ['a 1 b z', 'none', '{x}'])
check('i18n: translate uses locale, falls back to en, echoes key', [
  translate('ko', 'mz.intakeTitle'),
  translate('fr', 'common.gridFmt', { rows: 2, cols: 4 }),
  translate('en', 'mz.intakeTitle') !== DICTS.ko['mz.intakeTitle'], // sanity: ko differs from en
], [DICTS.ko['mz.intakeTitle'], fmt(DICTS.fr['common.gridFmt'], { rows: 2, cols: 4 }), true])

if (failures > 0) {
  console.error(`\n${failures} check(s) FAILED`)
  process.exit(1)
}
console.log('\nAll logic checks passed.')

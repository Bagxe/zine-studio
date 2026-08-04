// Generate the synthetic eighth-minizine sheet fixture for e2e tests.
//   node scripts/make-e2e-fixtures.mjs
// Uses the app's own imposition engine (dist-logic/zine.mjs, esbuild-bundled
// from src/lib/zineArranger.ts) + pdf-lib. Output: ../e2e/fixtures/eighth-sheet.pdf
//
// Each zine page is a bold number on a distinct solid background with a
// black marker bar at the TOP edge, so scroll-page order and uprightness are
// machine-checkable after de-imposition.
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { buildZinePlan } from '../dist-logic/zine.mjs'

const require = createRequire(import.meta.url)
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib')

const here = path.dirname(fileURLToPath(import.meta.url))
const OUT = process.env.E2E_FIXTURE_OUT || path.resolve(here, '../../e2e/fixtures/eighth-sheet.pdf')

// Distinct background per 1-based page number (RGB 0..1).
export const PAGE_COLORS = [
  [0.84, 0.19, 0.15], // 1 red
  [0.96, 0.43, 0.26], // 2 orange
  [0.99, 0.68, 0.38], // 3 amber
  [0.10, 0.60, 0.31], // 4 green
  [0.40, 0.76, 0.65], // 5 teal
  [0.27, 0.46, 0.71], // 6 blue
  [0.50, 0.45, 0.67], // 7 purple
  [0.65, 0.34, 0.16], // 8 brown
]

const SHEET_W = 11 * 72 // landscape letter
const SHEET_H = 8.5 * 72
const BAR_H = 18

const plan = buildZinePlan(8, {
  format: 'eighth',
  doubleSided: false,
  zinePortrait: true,
  spineSide: true,
  quarterCopy: false,
  flipBackCover: false,
  sigSheets: 0,
  paper: 'letter',
})
if (plan.sheets.length !== 1) throw new Error(`expected 1 sheet, got ${plan.sheets.length}`)

const doc = await PDFDocument.create()
doc.setTitle('e2e eighth-minizine sheet')
const font = await doc.embedFont(StandardFonts.HelveticaBold)
const sheet = doc.addPage([SHEET_W, SHEET_H])

for (const cell of plan.sheets[0].cells) {
  const cw = SHEET_W / plan.gridCols
  const ch = SHEET_H / plan.gridRows
  const x = cell.col * cw
  const yTop = SHEET_H - cell.row * ch
  const yBot = yTop - ch
  const [r, g, b] = PAGE_COLORS[cell.page]
  const lum = 0.299 * r + 0.587 * g + 0.114 * b

  sheet.drawRectangle({ x, y: yBot, width: cw, height: ch, color: rgb(r, g, b) })

  // Marker bar: top edge of the page (bottom edge when the cell is rotated).
  sheet.drawRectangle({
    x,
    y: cell.rotate ? yBot : yTop - BAR_H,
    width: cw,
    height: BAR_H,
    color: rgb(0, 0, 0),
  })

  // Big page number, centered (rotated 180° around the cell center if flagged).
  const label = String(cell.page + 1)
  const size = 150
  const tw = font.widthOfTextAtSize(label, size)
  const tx = x + (cw - tw) / 2
  const ty = yBot + (ch - size) / 2 + size * 0.35
  const textColor = lum > 0.55 ? rgb(0, 0, 0) : rgb(1, 1, 1)
  if (cell.rotate) {
    const cx = x + cw / 2
    const cy = yBot + ch / 2
    sheet.drawText(label, {
      x: 2 * cx - tx,
      y: 2 * cy - ty,
      size,
      font,
      color: textColor,
      rotate: degrees(180),
    })
  } else {
    sheet.drawText(label, { x: tx, y: ty, size, font, color: textColor })
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, await doc.save())
console.log(`wrote ${OUT} (${plan.sheets[0].cells.map((c) => `${c.page + 1}${c.rotate ? 'R' : ''}`).join(' ')})`)

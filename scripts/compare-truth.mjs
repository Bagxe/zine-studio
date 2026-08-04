// Compares the ported engine (src/lib/zineArranger.ts) against ground truth
// produced by executing the reference Zine Arranger code directly.
// Run: node scripts/compare-truth.mjs  (after bundling with esbuild)
import { readFileSync } from 'node:fs'
import { buildZinePlan } from '../dist-logic/zine.mjs'

const ROOT = 'C:/Users/Gabriel/Documents/kimi/workspace/zine-studio'
const truth = JSON.parse(readFileSync(`${ROOT}/scripts/ground-truth.json`, 'utf8'))

function parseTruthCell(cell) {
  const cls = cell.classes.split(' ')
  const area = cls[0]
  const rotate = cls.includes('rotate')
  const cuts = []
  const folds = []
  for (const c of cls) {
    const m = c.match(/^guide-(solid|dotted)-(top|bottom|left|right)$/)
    if (m) (m[1] === 'solid' ? cuts : folds).push(m[2][0])
  }
  let pageId = cell.pageId
  let copy = false
  if (pageId.endsWith('b')) {
    copy = true
    pageId = pageId.slice(0, -1)
  }
  return { area, page: Number(pageId), copy, rotate, cuts: cuts.sort(), folds: folds.sort() }
}

function planCellToComparable(c) {
  return { area: c.area, page: c.page, copy: c.copy, rotate: c.rotate, cuts: [...c.cuts].sort(), folds: [...c.folds].sort() }
}

let pass = 0
let fail = 0
const failures = []

for (const [key, entries] of Object.entries(truth)) {
  const [format, sideStr, orientStr, spineStr, copyStr] = key.split('|')
  const baseOpts = {
    format,
    doubleSided: sideStr === 'duplex',
    zinePortrait: orientStr === 'portrait',
    spineSide: spineStr === 'side',
    quarterCopy: copyStr === 'copy',
    flipBackCover: false,
    sigSheets: 0,
    paper: 'letter',
  }
  for (const [countLabel, expected] of Object.entries(entries)) {
    const label = `${key} @ ${countLabel}`
    let pageCount = countLabel
    let sigSheets = 0
    let flipBackCover = false
    if (countLabel.endsWith('+sig2')) {
      pageCount = countLabel.slice(0, -5)
      sigSheets = 2
    } else if (countLabel.endsWith('+flipbc')) {
      pageCount = countLabel.slice(0, -7)
      flipBackCover = true
    }
    const opts = { ...baseOpts, sigSheets, flipBackCover }
    let plan
    try {
      plan = buildZinePlan(Number(pageCount), opts)
    } catch (err) {
      fail++
      failures.push({ label, error: String(err) })
      continue
    }

    const problems = []
    if (plan.paddedCount !== expected.paddedCount) {
      problems.push(`paddedCount: plan=${plan.paddedCount} truth=${expected.paddedCount}`)
    }
    if (plan.sheets.length !== expected.sheets.length) {
      problems.push(`sheet count: plan=${plan.sheets.length} truth=${expected.sheets.length}`)
    } else {
      for (let si = 0; si < plan.sheets.length; si++) {
        const pCells = plan.sheets[si].cells.map(planCellToComparable)
        const tCells = expected.sheets[si].cells.map(parseTruthCell)
        if (pCells.length !== tCells.length) {
          problems.push(`sheet ${si}: cell count plan=${pCells.length} truth=${tCells.length}`)
          continue
        }
        for (let ci = 0; ci < pCells.length; ci++) {
          const a = JSON.stringify(pCells[ci])
          const b = JSON.stringify(tCells[ci])
          if (a !== b) {
            problems.push(`sheet ${si} cell ${ci}:\n    plan:  ${a}\n    truth: ${b}`)
          }
        }
      }
    }

    if (problems.length === 0) {
      pass++
    } else {
      fail++
      failures.push({ label, problems })
    }
  }
}

console.log(`\n===== COMPARISON RESULTS: ${pass} PASS, ${fail} FAIL =====`)
if (failures.length) {
  const show = failures.slice(0, 8)
  for (const f of show) {
    console.log(`\nFAIL ${f.label}`)
    if (f.error) console.log(`  ${f.error}`)
    else f.problems.slice(0, 6).forEach((p) => console.log(`  ${p}`))
  }
  if (failures.length > show.length) console.log(`\n... and ${failures.length - show.length} more failures`)
  process.exit(1)
}

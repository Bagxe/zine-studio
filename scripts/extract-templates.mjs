// Template extractor v2: pulls each leaf for-loop out of the reference
// arrangeZineSheets() and executes it standalone with SYMBOLIC s/e/m/n values
// (s=1e6, e=2e6, m=3e6, n=4e6) so page expressions decode to {base, offset}.
// Output: scripts/templates.json
import { readFileSync, writeFileSync } from 'node:fs'

const REF = 'C:/Users/Gabriel/Documents/kimi/workspace/zine-arranger-ref/index.html'
const OUT = 'C:/Users/Gabriel/Documents/kimi/workspace/zine-studio/scripts/templates.json'

const html = readFileSync(REF, 'utf8')
const fnStart = html.indexOf('function arrangeZineSheets()')
const fnEnd = html.indexOf('function setPageOrientation')
const body = html.slice(fnStart, fnEnd)

// ── Find all leaf for-loops and brace-match their blocks ──────────────────
const leafRe = /for\(let i = 0; i < pageCount \/ (\d+); i\+\+\)/g
const leaves = []
let m
while ((m = leafRe.exec(body)) !== null) {
  const openBrace = body.indexOf('{', m.index)
  let depth = 0
  let end = openBrace
  for (; end < body.length; end++) {
    if (body[end] === '{') depth++
    else if (body[end] === '}') {
      depth--
      if (depth === 0) break
    }
  }
  leaves.push({ loopBound: Number(m[1]), start: m.index, text: body.slice(m.index, end + 1) })
}
console.log(`Found ${leaves.length} leaf loops`)

// ── Expected variant keys in source order ─────────────────────────────────
const F = (fmt, side, orient, spine, copy = false) => ({ fmt, side, orient, spine, copy })
const expected = []
expected.push(F('half', 'duplex', 'portrait', 'side'), F('half', 'duplex', 'landscape', 'side'))
for (const copy of [true, false]) {
  for (const side of copy ? ['duplex'] : ['duplex', 'single']) {
    for (const orient of ['portrait', 'landscape']) {
      for (const spine of ['side', 'top']) {
        expected.push(F('quarter', side, orient, spine, copy))
      }
    }
  }
}
for (const fmt of ['eighth', '12th', '16th', '24th', '32nd', '36th', '48th', '64th']) {
  for (const side of ['duplex', 'single']) {
    for (const orient of ['portrait', 'landscape']) {
      for (const spine of ['side', 'top']) {
        expected.push(F(fmt, side, orient, spine))
      }
    }
  }
}
if (expected.length !== leaves.length) {
  console.error(`MISMATCH: expected ${expected.length} leaves, found ${leaves.length}`)
  process.exit(1)
}

// ── Comment-based sanity check of key assignment ──────────────────────────
let prevEnd = 0
const labelWarnings = []
leaves.forEach((leaf, idx) => {
  const between = body.slice(prevEnd, leaf.start)
  prevEnd = leaf.start + leaf.text.length
  const comments = [...between.matchAll(/\/\/(.*)/g)].map((c) => c[1].trim().toLowerCase())
  const exp = expected[idx]
  const all = comments.join(' | ')
  if (exp.fmt === 'half') return // no comments in half branch
  const checks = []
  if (exp.copy) checks.push('copy')
  if (exp.side === 'single') checks.push('single')
  else if (exp.fmt !== 'quarter' || exp.copy) checks.push('duplex|double')
  checks.push(exp.orient)
  checks.push(exp.spine)
  for (const c of checks) {
    if (!all.match(new RegExp(c))) labelWarnings.push(`leaf ${idx} (${exp.fmt}|${exp.side}|${exp.orient}|${exp.spine}${exp.copy ? '|copy' : ''}): missing /${c}/ in comments: ${all.slice(-120)}`)
  }
})
if (labelWarnings.length) {
  console.log('Label check warnings:')
  labelWarnings.forEach((w) => console.log('  ' + w))
}

// ── Execute one leaf standalone with symbolic s/e/m/n ─────────────────────
function runLeaf(leafText, { forceBc }) {
  let text = leafText
    .replace(/\bvar s = [^;]+;/, 'var s = 1000000;')
    .replace(/\bvar e = [^;]+;/, 'var e = 2000000;')
    .replace(/\bvar m = [^;]+;/, 'var m = 3000000;')
    .replace(/\bvar n = [^;]+;/, 'var n = 4000000;')
  if (forceBc) text = text.replace(/!flipBackCover && e == pageCount-1/g, 'true')
  const kMatch = leafText.match(/var s = (\d+) \* \(i%sheetsPerSig\)/)
  const wrapper = new Function(
    'pageCount', 'sheetsPerSig', 'pagesPerSig', 'flipBackCover',
    `var sheetsHTML = "";
     var gridType = "GT"; var marginGuides = " guide-margins";
     var foldLeft = " guide-dotted-left"; var foldBottom = " guide-dotted-bottom";
     var foldTop = " guide-dotted-top"; var foldRight = " guide-dotted-right";
     var cutLeft = " guide-solid-left"; var cutBottom = " guide-solid-bottom";
     var cutRight = " guide-solid-right"; var cutTop = " guide-solid-top";
     var rt = " rotate";
     ${text}
     return sheetsHTML;`,
  )
  return { html: wrapper(3 * leafBound(text), 1000, 400000, false), k: kMatch ? Number(kMatch[1]) : null }
}
function leafBound(text) {
  return Number(text.match(/pageCount \/ (\d+)/)[1])
}

function parseCells(sheetsHTML) {
  const sheets = []
  const parts = sheetsHTML.split('<section class="zine-sheet ')
  for (let p = 1; p < parts.length; p++) {
    const chunk = '<section class="zine-sheet ' + parts[p]
    const cells = []
    const cellRe = /<section class="zine-page ([^"]*)"><canvas class="zine-canvas" id="p([^"]+)"><\/canvas><\/section>/g
    let m
    while ((m = cellRe.exec(chunk)) !== null) cells.push({ classes: m[1].trim().replace(/\s+/g, ' '), pageId: m[2] })
    sheets.push(cells)
  }
  return sheets
}

const BASES = { 1: 's', 2: 'e', 3: 'm', 4: 'n' }
function decodeCell(cell) {
  const cls = cell.classes.split(' ')
  const area = cls[0]
  const rotate = cls.includes('rotate')
  const cuts = []
  const folds = []
  for (const c of cls) {
    const gm = c.match(/^guide-(solid|dotted)-(top|bottom|left|right)$/)
    if (gm) (gm[1] === 'solid' ? cuts : folds).push(gm[2][0]) // t/b/l/r
  }
  let pid = cell.pageId
  let copy = false
  if (pid.endsWith('b')) { copy = true; pid = pid.slice(0, -1) }
  const v = Number(pid)
  const baseN = Math.round(v / 1000000)
  return { area, base: BASES[baseN], offset: v - baseN * 1000000, copy, rotate, cuts: cuts.sort(), folds: folds.sort() }
}

// ── Main extraction ───────────────────────────────────────────────────────
const templates = {}
const problems = []
leaves.forEach((leaf, idx) => {
  const exp = expected[idx]
  const key = [exp.fmt, exp.side, exp.orient, exp.spine, ...(exp.copy ? ['copy'] : [])].join('|')
  const normal = runLeaf(leaf.text, { forceBc: false })
  const forced = runLeaf(leaf.text, { forceBc: true })
  const sheetsN = parseCells(normal.html)
  const sheetsF = parseCells(forced.html)

  // sheetsPerIter = smallest j>=1 where decoded template(j) equals template(0)
  const decoded = sheetsN.map((cells) => cells.map(decodeCell))
  const sig = (cells) => JSON.stringify(cells)
  let sheetsPerIter = decoded.length
  for (let j = 1; j < decoded.length; j++) {
    if (sig(decoded[j]) === sig(decoded[0])) { sheetsPerIter = j; break }
  }
  if (sheetsPerIter === 0 || decoded.length % sheetsPerIter !== 0) {
    problems.push(`${key}: could not determine sheetsPerIter (len=${decoded.length})`)
  }
  const iterSheets = decoded.slice(0, sheetsPerIter)

  // bcAlt: compare normal vs forced on the same sheets
  const iterSheetsF = sheetsF.slice(0, sheetsPerIter).map((cells) => cells.map(decodeCell))
  let anyBc = false
  for (let si = 0; si < iterSheets.length; si++) {
    for (let ci = 0; ci < iterSheets[si].length; ci++) {
      const a = iterSheets[si][ci]
      const b = iterSheetsF[si] && iterSheetsF[si][ci]
      if (!b) { problems.push(`${key}: forced run missing cell s${si}c${ci}`); continue }
      if (a.rotate !== b.rotate || JSON.stringify(a.cuts) !== JSON.stringify(b.cuts) || JSON.stringify(a.folds) !== JSON.stringify(b.folds)) {
        a.bcAlt = { rotate: b.rotate, cuts: b.cuts, folds: b.folds }
        anyBc = true
      }
    }
  }

  const useMN = iterSheets.some((cells) => cells.some((c) => c.base === 'm' || c.base === 'n'))
  templates[key] = {
    loopBound: leaf.loopBound,
    k: normal.k,
    useMN,
    sheetsPerIter,
    sheets: iterSheets.map((cells, i) => ({ sheetInIter: i, cells })),
  }
})

if (problems.length) {
  console.log('PROBLEMS:')
  problems.forEach((p) => console.log('  ' + p))
}

writeFileSync(OUT, JSON.stringify(templates, null, 1))
console.log(`Wrote ${OUT} with ${Object.keys(templates).length} variant templates`)
// Print a compact summary
for (const [k, t] of Object.entries(templates)) {
  console.log(`${k.padEnd(34)} bound=${String(t.loopBound).padStart(3)} K=${String(t.k).padStart(2)} spi=${t.sheetsPerIter} useMN=${t.useMN} cells/sheet=${t.sheets[0].cells.length}`)
}

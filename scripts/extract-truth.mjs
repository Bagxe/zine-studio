// Ground-truth extractor: executes the reference Zine Arranger arrangeZineSheets()
// verbatim (extracted from index.html) with a stubbed DOM, for every
// format/orientation/spine/sidedness combination and representative page counts.
// Output: zine-studio/scripts/ground-truth.json
import { readFileSync, writeFileSync } from 'node:fs'

const REF = 'C:/Users/Gabriel/Documents/kimi/workspace/zine-arranger-ref/index.html'
const OUT = 'C:/Users/Gabriel/Documents/kimi/workspace/zine-studio/scripts/ground-truth.json'

const html = readFileSync(REF, 'utf8')
// The main script block starts after the pdfjs <script src> tag; find the inline one.
const scriptStart = html.indexOf('<script>', html.indexOf('const SIZE_HALF') - 200)
const scriptEnd = html.indexOf('</script>', scriptStart)
let code = html.slice(scriptStart + '<script>'.length, scriptEnd)
// Strip trailing DOM wiring (addEventListener + initial refreshSpecs call)
code = code.replace(/document\.getElementById\("selector"\)\.addEventListener[\s\S]*$/, '')

// Stub element factory
function makeEl() {
  return {
    innerHTML: '',
    style: {},
    checked: false,
    value: '0',
    files: { length: 0 },
    addEventListener() {},
  }
}
const elements = { zine: makeEl(), 'page-orient-style': makeEl() }
const documentStub = {
  getElementById(id) {
    if (!elements[id]) elements[id] = makeEl()
    return elements[id]
  },
  querySelector() {
    return { style: { setProperty() {} } }
  },
}

const SIZE = { HALF: 0, QUARTER: 1, EIGHTH: 2, '12TH': 3, '16TH': 4, '24TH': 5, '32ND': 6, '36TH': 7, '48TH': 8, '64TH': 9 }

const factory = new Function(
  'document',
  'window',
  'URL',
  'pdfjsLib',
  `${code}
  return function arrange(cfg) {
    size = cfg.size;
    doubleSided = cfg.doubleSided;
    zinePortrait = cfg.zinePortrait;
    spineSide = cfg.spineSide;
    flipBackCover = cfg.flipBackCover;
    quarterCopy = cfg.quarterCopy;
    sigSize = cfg.sigSize;
    guideMargins = cfg.guideMargins;
    guideCenter = cfg.guideCenter;
    guideFolds = cfg.guideFolds;
    pageCount = cfg.pageCount;
    arrangeZineSheets();
    return { html: document.getElementById('zine').innerHTML, paddedCount: pageCount };
  }`,
)

const arrange = factory(documentStub, {}, {}, {})

// Parse the generated sheetsHTML into structured cell data.
function parseSheets(sheetsHTML) {
  const sheets = []
  const sheetRe = /<section class="zine-sheet ([^"]*)" id="s(\d+)">([\s\S]*?)<\/section>\s*(?=<section class="zine-sheet|$)/g
  // sheets themselves contain nested sections; split manually instead:
  const parts = sheetsHTML.split('<section class="zine-sheet ')
  for (let p = 1; p < parts.length; p++) {
    const chunk = '<section class="zine-sheet ' + parts[p]
    const idM = chunk.match(/id="s(\d+)"/)
    const clsM = chunk.match(/zine-sheet ([^"]*)"/)
    const cells = []
    const cellRe = /<section class="zine-page ([^"]*)"><canvas class="zine-canvas" id="p([^"]+)"><\/canvas><\/section>/g
    let m
    while ((m = cellRe.exec(chunk)) !== null) {
      cells.push({ classes: m[1].trim().replace(/\s+/g, ' '), pageId: m[2] })
    }
    sheets.push({ sheetId: Number(idM[1]), sheetClass: clsM[1].trim(), cells })
  }
  return sheets
}

const FORMATS = ['half', 'quarter', 'eighth', '12th', '16th', '24th', '32nd', '36th', '48th', '64th']
const truth = {}

// page counts to trace per format (must exercise multi-sheet and padding)
const counts = {
  half: [4, 8, 16, 6],
  quarter: [4, 8, 16, 32, 6, 12],
  eighth: [8, 16, 32, 12, 24],
  '12th': [12, 24, 48, 18],
  '16th': [16, 32, 64, 24],
  '24th': [24, 48, 96, 36],
  '32nd': [32, 64, 128, 48],
  '36th': [36, 72, 144],
  '48th': [48, 96, 192],
  '64th': [64, 128, 256],
}

for (const fname of FORMATS) {
  const size = SIZE[fname.toUpperCase().replace('TH', 'TH').replace('ND', 'ND')]
  for (const doubleSided of [false, true]) {
    for (const zinePortrait of [true, false]) {
      for (const spineSide of [true, false]) {
        const copyModes = fname === 'quarter' && doubleSided ? [false, true] : [false]
        for (const quarterCopy of copyModes) {
          const key = [fname, doubleSided ? 'duplex' : 'single', zinePortrait ? 'portrait' : 'landscape', spineSide ? 'side' : 'top', ...(quarterCopy ? ['copy'] : [])].join('|')
          truth[key] = {}
          for (const pc of counts[fname]) {
            const r = arrange({
              size, doubleSided, zinePortrait, spineSide,
              flipBackCover: false, quarterCopy, sigSize: 0,
              guideMargins: true, guideCenter: true, guideFolds: true,
              pageCount: pc,
            })
            truth[key][pc] = { paddedCount: r.paddedCount, sheets: parseSheets(r.html) }
          }
          // also trace with custom signature size (2 sheets/sig) for one count
          const sigCount = counts[fname][1] * 2
          const r2 = arrange({
            size, doubleSided, zinePortrait, spineSide,
            flipBackCover: false, quarterCopy, sigSize: 2,
            guideMargins: true, guideCenter: true, guideFolds: true,
            pageCount: sigCount,
          })
          truth[key][sigCount + '+sig2'] = { paddedCount: r2.paddedCount, sheets: parseSheets(r2.html) }
          // trace flipBackCover=true for top-spine one count
          if (!spineSide) {
            const r3 = arrange({
              size, doubleSided, zinePortrait, spineSide,
              flipBackCover: true, quarterCopy, sigSize: 0,
              guideMargins: true, guideCenter: true, guideFolds: true,
              pageCount: counts[fname][0],
            })
            truth[key][counts[fname][0] + '+flipbc'] = { paddedCount: r3.paddedCount, sheets: parseSheets(r3.html) }
          }
        }
      }
    }
  }
}

writeFileSync(OUT, JSON.stringify(truth, null, 1))
const keys = Object.keys(truth).length
console.log(`Wrote ${OUT} — ${keys} config keys`)
// quick sanity print: half duplex portrait side, 8 pages
console.log(JSON.stringify(truth['half|duplex|portrait|side']['8'], null, 1))

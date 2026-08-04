import { readFileSync } from 'node:fs'
const t = JSON.parse(readFileSync('C:/Users/Gabriel/Documents/kimi/workspace/zine-studio/scripts/ground-truth.json', 'utf8'))
const show = (key, count) => {
  const e = t[key][count]
  console.log(`${key} @ ${count}: padded=${e.paddedCount}`)
  for (const s of e.sheets) {
    console.log(`  s${s.sheetId} [${s.sheetClass}]`, s.cells.map((c) => `${c.classes}=${c.pageId}`).join('  '))
  }
}
show('half|duplex|landscape|side', '4')
show('quarter|duplex|portrait|side', '8')
show('quarter|duplex|portrait|side', '16')
show('quarter|duplex|portrait|side|copy', '4')
show('eighth|single|portrait|side', '8')
show('half|duplex|portrait|side', '16+sig2')

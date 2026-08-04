import { readFileSync } from 'node:fs'
const t = JSON.parse(readFileSync('C:/Users/Gabriel/Documents/kimi/workspace/zine-studio/scripts/templates.json', 'utf8'))
console.log('quarter|duplex|portrait|side:')
console.log(JSON.stringify(t['quarter|duplex|portrait|side'].sheets, null, 1))
console.log('eighth|single|portrait|side sheet0:')
console.log(JSON.stringify(t['eighth|single|portrait|side'].sheets[0], null, 1))
console.log('half|duplex|landscape|side (bcAlt check):')
console.log(JSON.stringify(t['half|duplex|landscape|side'].sheets, null, 1))

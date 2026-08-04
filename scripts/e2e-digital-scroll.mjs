// E2E: drive headless Edge through Digital Scroll's real UI and verify
// auto-detection + de-imposition end to end.
//
// Setup:
//   mkdir ../e2e && cd ../e2e && npm init -y && npm i puppeteer-core
//   node scripts/make-e2e-fixtures.mjs        (fixture PDF)
//   npm run dev -- --port 3000                (app dev server)
// Run:
//   node scripts/e2e-digital-scroll.mjs
// Env: APP_URL, BROWSER_EXE, E2E_DIR, MOBA_PDF override defaults.
// Prints a JSON report; PDF assertions are done by e2e/assert_scrolls.py.
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const here = path.dirname(fileURLToPath(import.meta.url))
const E2E_DIR = process.env.E2E_DIR || path.resolve(here, '../../e2e')
const require = createRequire(path.join(E2E_DIR, 'package.json'))
const puppeteer = require('puppeteer-core')

const APP_URL = process.env.APP_URL || 'http://localhost:3000/'
const BROWSER_EXE =
  process.env.BROWSER_EXE || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const MOBA = process.env.MOBA_PDF || path.resolve(here, '../../mo_ba_zines/MO-BA-1.pdf')
const EIGHTH = path.join(E2E_DIR, 'fixtures', 'eighth-sheet.pdf')
const DL = path.join(E2E_DIR, 'downloads')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitForFile(dir, name, timeoutMs) {
  const t0 = Date.now()
  while (Date.now() - t0 < timeoutMs) {
    const p = path.join(dir, name)
    if (fs.existsSync(p)) {
      const s1 = fs.statSync(p).size
      if (s1 > 0) {
        await sleep(500)
        if (fs.statSync(p).size === s1) return p
      }
    }
    await sleep(300)
  }
  return null
}

async function runFlow(browser, fixture, expectDownload) {
  const page = await browser.newPage()
  const consoleErrors = []
  page.on('console', (m) => {
    if (m.type() !== 'error') return
    const t = m.text()
    // Browser noise: no favicon is shipped, Chrome/Edge 404s it. Not app logic.
    if (t.includes('favicon') || (m.location()?.url ?? '').includes('favicon')) return
    consoleErrors.push(t)
  })
  page.on('pageerror', (e) => consoleErrors.push(`pageerror: ${e.message}`))

  await page.goto(APP_URL, { waitUntil: 'networkidle2', timeout: 60000 })
  // Radix Tabs triggers activate on mousedown — use a real mouse click,
  // not a synthetic el.click().
  const tab = await page.evaluateHandle(() =>
    [...document.querySelectorAll('button')].find((x) => x.textContent.trim() === 'Digital Scroll'),
  )
  await tab.asElement().click()
  await sleep(400)

  const input = await page.$('input[type=file]')
  if (!input) throw new Error('file input not found')
  await input.uploadFile(fixture)

  // Processing finished when the download button appears. Match textContent,
  // not innerText: the button uses CSS text-transform uppercase, which
  // innerText reflects ('DOWNLOAD SCROLL PDF').
  await page.waitForFunction(
    () =>
      [...document.querySelectorAll('button')].some((b) =>
        /download scroll pdf/i.test(b.textContent || ''),
      ),
    { timeout: 120000, polling: 500 },
  )
  const banner = await page.evaluate(() => {
    const ps = [...document.querySelectorAll('p')].map((p) => p.textContent)
    return ps.find((t) => t.includes('Detected') || t.includes("Couldn't detect")) ?? null
  })

  const cdp = await page.createCDPSession()
  await cdp.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: DL })
  const dlBtn = await page.evaluateHandle(() =>
    [...document.querySelectorAll('button')].find((x) =>
      x.textContent.includes('Download scroll PDF'),
    ),
  )
  await dlBtn.asElement().click()
  const download = await waitForFile(DL, expectDownload, 90000)
  await page.close()
  return { fixture: path.basename(fixture), banner, download, consoleErrors }
}

const report = { app: APP_URL, flows: [] }
const browser = await puppeteer.launch({
  executablePath: BROWSER_EXE,
  headless: true,
  args: ['--disable-gpu', '--no-sandbox'],
})
try {
  report.flows.push(await runFlow(browser, MOBA, 'MO-BA-1_digital.pdf'))
  report.flows.push(await runFlow(browser, EIGHTH, 'eighth-sheet_digital.pdf'))
} finally {
  await browser.close()
}
console.log(JSON.stringify(report, null, 2))

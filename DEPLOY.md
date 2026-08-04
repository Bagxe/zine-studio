# Deploying Zine Studio

Zine Studio is a fully static site — no server, no backend, files never leave
the visitor's browser. Build output goes to `dist/` and works from **any
subpath** (Vite `base: './'`; the pdf.js worker and lazy chunks resolve
relative to the JS module URL).

## Build

```bash
npm install
npm run build
```

Output: `dist/` (~4.2 MB, 5 files: index.html + 4 assets). Two ready-to-use
artifacts are also kept next to this repo:

- `../zine-studio-dist/` — the unzipped build, for drag-and-drop hosts
- `../zine-studio-dist.zip` — same contents with `index.html` at the zip
  root (required by itch.io)

## (a) Netlify Drop

1. Open https://app.netlify.com/drop
2. Drag the **`zine-studio-dist` folder** onto the page.
3. Done — Netlify gives you a random `*.netlify.app` URL. No build settings
   needed.

## (b) GitHub Pages

The relative base path makes project pages
(`https://<user>.github.io/<repo>/`) work with zero configuration.

Either approach:

- **gh-pages branch:** push the *contents* of `dist/` to a `gh-pages` branch,
  then Settings → Pages → deploy from branch `gh-pages` / root.
- **docs/ folder:** copy `dist/` into `docs/` on your default branch, commit,
  then Settings → Pages → deploy from branch `main` / `/docs`.

No custom domain or base-path config required.

## (c) itch.io

1. Dashboard → **Create new project** → Kind of project: **HTML**.
2. Upload **`zine-studio-dist.zip`** (index.html must be at the zip root —
   it is).
3. Check **"This file will be played in the browser"**.
4. Embed options: viewport **1280 × 800**, fullscreen button **off**.
5. Save & publish.

## Attribution (required)

The imposition layouts are ported from
[Zine Arranger](https://github.com/nashhigh/zine-arranger) by Nash High,
MIT-licensed. The footer credit and `LICENSE-zine-arranger.txt` in the repo
**must not be stripped** — the MIT license requires the copyright notice to
stay with the software.

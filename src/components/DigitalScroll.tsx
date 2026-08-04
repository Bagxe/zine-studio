import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronLeft, ChevronRight, Download, FileUp, RotateCw } from 'lucide-react'
import { nudgeTarget } from '@/lib/reorder'
import { usePointerReorder } from '@/lib/usePointerReorder'
import {
  buildImageScrollPdf,
  buildScrollPdf,
  downloadBytes,
  renderPdfToCanvases,
  serpentinePages,
  type ScrollPage,
} from '@/lib/scrollPdf'
import { blobToCanvas, buildDeimposedScrollPages, type DeimposeMapping } from '@/lib/deimpose'
import { analyzeGrid, analyzeSheets, matchFormat } from '@/lib/detectFormat'
import {
  addRotation,
  identityOrder,
  isModified,
  moveItem,
  normDeg,
  rotatedDims,
  rotationFor,
} from '@/lib/manualArrange'
import { expandFiles, fromDrop, type SourceImage } from '@/lib/intake'
import { defaultFromCarousel, defaultFromPdf, withSuffix } from '@/lib/naming'
import { FORMAT_INFO, type ZineArrangeOptions, type ZineFormatId } from '@/lib/zineArranger'
import { useI18n } from '@/lib/i18n'

type Status = 'idle' | 'working' | 'ready' | 'error'
type Mode = 'pdf' | 'images'
type SheetFormatChoice = 'half-serpentine' | ZineFormatId

/** Detection banner as data — worded via the dictionary at render time. */
type Banner =
  | { kind: 'failed' }
  | { kind: 'unsupported'; rows: number; cols: number }
  | { kind: 'serp'; rows: number; cols: number; disagree: boolean }
  | {
      kind: 'format'
      format: ZineFormatId
      label: string // raw FORMAT_INFO label (micro sizes)
      rows: number
      cols: number
      assumed: string[]
      disagree: boolean
    }

const isPdf = (f: File) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name)

/** Raw RGBA pixels of a sheet canvas for grid detection. */
function canvasPixels(c: HTMLCanvasElement): { pixels: Uint8ClampedArray; w: number; h: number } {
  const ctx = c.getContext('2d', { willReadFrequently: true })!
  const d = ctx.getImageData(0, 0, c.width, c.height)
  return { pixels: d.data, w: c.width, h: c.height }
}

/** Rotate a canvas clockwise by 0/90/180/270 degrees (white-filled). */
function rotateCanvasDeg(src: HTMLCanvasElement, deg: number): HTMLCanvasElement {
  const d = normDeg(deg)
  if (d === 0) return src
  const c = document.createElement('canvas')
  const { w, h } = rotatedDims(src.width, src.height, d)
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, w, h)
  ctx.translate(w / 2, h / 2)
  ctx.rotate((d * Math.PI) / 180)
  ctx.drawImage(src, -src.width / 2, -src.height / 2)
  return c
}

/** What detection decided for this upload. */
type Detection =
  | { kind: 'keep' } // detection failed/unsupported — keep the current selection
  | { kind: 'serpentine' }
  | { kind: 'deimpose'; opts: ZineArrangeOptions }

export default function DigitalScroll() {
  const { t } = useI18n()
  const [status, setStatus] = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [fileName, setFileName] = useState('')
  const [mode, setMode] = useState<Mode | null>(null)
  const [sheetPages, setSheetPages] = useState<ScrollPage[]>([])
  const [imgPages, setImgPages] = useState<SourceImage[]>([])
  const [mapping, setMapping] = useState<DeimposeMapping | null>(null)
  const [current, setCurrent] = useState(0)
  const [outName, setOutName] = useState('zine')
  const [nameTouched, setNameTouched] = useState(false)
  // Manual arrange overrides (null = detected order/rotation)
  const [manualOrder, setManualOrder] = useState<number[] | null>(null)
  const [manualRot, setManualRot] = useState<Record<number, number> | null>(null)

  // Sheet format + de-imposition variant options
  const [sheetFormat, setSheetFormat] = useState<SheetFormatChoice>('half-serpentine')
  const [dPortrait, setDPortrait] = useState(true)
  const [dDoubleSided, setDDoubleSided] = useState(false)
  const [dSpineSide, setDSpineSide] = useState(true)
  const [dQuarterCopy, setDQuarterCopy] = useState(false)
  const [detectBanner, setDetectBanner] = useState<Banner | null>(null)
  const [formatTouched, setFormatTouched] = useState(false)
  const [adjustOpen, setAdjustOpen] = useState(false)
  const [uploadInfoOpen, setUploadInfoOpen] = useState(false)

  const input = useRef<HTMLInputElement>(null)
  const pdfBufferRef = useRef<ArrayBuffer | null>(null)
  const rawImagesRef = useRef<SourceImage[] | null>(null)
  /** JSON of the arrangeOpts used for the last processing run (effect guard). */
  const processedOptsRef = useRef<string>('')
  /** Arrange-grid drag source position. */
  const dragPos = useRef<number | null>(null)

  /** Base pages in computed order: sheet cells (pdf or grid images) or intake images. */
  const basePages = useMemo(
    () =>
      sheetPages.length > 0
        ? sheetPages.map((p) => ({ label: p.label, dataUrl: p.dataUrl }))
        : imgPages.map((i) => ({ label: i.name, dataUrl: i.thumbUrl })),
    [sheetPages, imgPages],
  )

  /** What the user sees: base pages through the manual order + rotation overrides. */
  const viewPages = useMemo(() => {
    const ord = manualOrder ?? identityOrder(basePages.length)
    return ord
      .filter((src) => src >= 0 && src < basePages.length)
      .map((src, idx) => ({
        index: idx + 1,
        src,
        rot: rotationFor(manualRot, src),
        ...basePages[src],
      }))
  }, [basePages, manualOrder, manualRot])

  const modified = isModified(manualOrder, manualRot)

  /** Translated label for the three named formats; micro sizes stay numeric/raw. */
  const fmtLabel = (id: string, fallback: string): string =>
    id === 'half'
      ? t('fmt.half')
      : id === 'quarter'
        ? t('fmt.quarter')
        : id === 'eighth'
          ? t('fmt.eighth')
          : fallback

  /** Words the detection banner in the active language. */
  const bannerText = (b: Banner): string => {
    if (b.kind === 'failed') return t('ds.detectFailed')
    const grid = t('common.gridFmt', { rows: b.rows, cols: b.cols })
    if (b.kind === 'unsupported') return t('ds.detectUnsupported', { grid })
    const disagree = b.disagree ? t('ds.disagree') : ''
    if (b.kind === 'serp') return t('ds.detectSerp', { grid, disagree })
    const label = fmtLabel(b.format, b.label)
    const assumed =
      b.assumed.length > 0
        ? t('ds.assumedFmt', {
            items: b.assumed.map((a) => (a === 'fold edge' ? t('ds.assumedFoldEdge') : a)).join(', '),
          })
        : ''
    return t('ds.detectFormat', { label, grid, assumed, disagree })
  }

  const arrangeOpts = useMemo<ZineArrangeOptions | null>(() => {
    if (sheetFormat === 'half-serpentine') return null
    return {
      format: sheetFormat,
      doubleSided: sheetFormat === 'half' ? true : dDoubleSided, // half is always duplex
      zinePortrait: dPortrait,
      spineSide: dSpineSide,
      quarterCopy: sheetFormat === 'quarter' && dDoubleSided ? dQuarterCopy : false,
      flipBackCover: false,
      sigSheets: 0,
      paper: 'letter', // grid fractions are aspect-independent; any sheet size works
    }
  }, [sheetFormat, dPortrait, dDoubleSided, dSpineSide, dQuarterCopy])

  const applySheetResult = (pages: ScrollPage[], map: DeimposeMapping | null) => {
    setSheetPages(pages)
    setMapping(map)
    setManualOrder(null) // recompute discards manual arrange edits (ask-less reset)
    setManualRot(null)
    setCurrent(0)
    setStatus('ready')
    setStatusMsg('')
  }

  /**
   * Analyze every sheet side together (cross-side consistent gutters/seams —
   * see analyzeSheets), match the grid against the ported layouts, pre-fill
   * the format controls, and show a banner. Manual selection always wins:
   * detection only runs on upload, never after the user changes the selector.
   * A disagree note is shown when per-side art analysis contradicts the
   * consensus grid (dense artwork with its own panel gutters).
   */
  const runDetection = (sheets: HTMLCanvasElement[]): Detection => {
    if (formatTouched) return { kind: 'keep' }
    const sides = sheets.map(canvasPixels)
    const grid = analyzeSheets(sides)
    if (!grid) {
      setDetectBanner({ kind: 'failed' })
      setAdjustOpen(true)
      return { kind: 'keep' }
    }
    const { w, h } = sides[0]
    let disagree = false
    if (sheets.length > 1) {
      const perSide = sides.map((s) => analyzeGrid(s.pixels, s.w, s.h))
      disagree = perSide.some((g) => !!g && (g.rows !== grid.rows || g.cols !== grid.cols))
    }
    const m = matchFormat(grid.rows, grid.cols, w, h, sheets.length)
    if (m.unsupported) {
      setDetectBanner({ kind: 'unsupported', rows: grid.rows, cols: grid.cols })
      setAdjustOpen(true)
      return { kind: 'keep' }
    }
    const top = m.candidates[0]
    setAdjustOpen(false) // detection succeeded: manual controls collapse away
    if (top.format === 'half-serpentine') {
      setSheetFormat('half-serpentine')
      setDetectBanner({ kind: 'serp', rows: grid.rows, cols: grid.cols, disagree })
      return { kind: 'serpentine' }
    }
    setSheetFormat(top.format)
    setDPortrait(top.zinePortrait)
    setDDoubleSided(top.doubleSided)
    setDetectBanner({
      kind: 'format',
      format: top.format,
      label: top.label,
      rows: grid.rows,
      cols: grid.cols,
      assumed: top.assumed,
      disagree,
    })
    return {
      kind: 'deimpose',
      opts: {
        format: top.format,
        doubleSided: top.doubleSided,
        zinePortrait: top.zinePortrait,
        spineSide: dSpineSide,
        quarterCopy: false,
        flipBackCover: false,
        sigSheets: 0,
        paper: 'letter',
      },
    }
  }

  const processPdf = async (buf: ArrayBuffer, opts: ZineArrangeOptions | null, detect: boolean) => {
    setStatus('working')
    setStatusMsg(t('ds.msgRenderSheets'))
    try {
      const sheets = await renderPdfToCanvases(buf)
      if (sheets.length === 0) {
        setStatus('error')
        setStatusMsg(t('ds.errNoPages'))
        return
      }
      let used = opts
      if (detect) {
        setStatusMsg(t('ds.msgDetecting'))
        const d = runDetection(sheets)
        if (d.kind === 'deimpose') used = d.opts
        else if (d.kind === 'serpentine') used = null
      }
      processedOptsRef.current = JSON.stringify(used)
      setStatusMsg(used ? t('ds.msgSplitCells') : t('ds.msgSplitHalves'))
      if (used) {
        const r = buildDeimposedScrollPages(sheets, used)
        applySheetResult(r.pages, r.mapping)
      } else {
        applySheetResult(serpentinePages(sheets), null)
      }
    } catch (e) {
      setStatus('error')
      setStatusMsg(e instanceof Error ? e.message : t('ds.errReadPdf'))
    }
  }

  const processImages = async (images: SourceImage[], opts: ZineArrangeOptions | null, detect: boolean) => {
    let used = opts
    if (detect) {
      setStatus('working')
      setStatusMsg(t('ds.msgDetecting'))
      try {
        const probe = await Promise.all(images.slice(0, 2).map((i) => blobToCanvas(i.blob)))
        const d = runDetection(probe)
        if (d.kind === 'deimpose') used = d.opts
        else if (d.kind === 'serpentine') used = null
      } catch {
        // Detection is best-effort; fall through with the current selection.
      }
    }
    processedOptsRef.current = JSON.stringify(used)
    if (!used) {
      // Serpentine half format: each image is already one zine page.
      setSheetPages([])
      setMapping(null)
      setManualOrder(null)
      setManualRot(null)
      setCurrent(0)
      setStatus('ready')
      setStatusMsg('')
      return
    }
    // De-impose formats: each image is one sheet side.
    setStatus('working')
    setStatusMsg(t('ds.msgSplitImages'))
    try {
      const sheets = await Promise.all(images.map((i) => blobToCanvas(i.blob)))
      const r = buildDeimposedScrollPages(sheets, used)
      applySheetResult(r.pages, r.mapping)
    } catch (e) {
      setStatus('error')
      setStatusMsg(e instanceof Error ? e.message : t('ds.errDeimpose'))
    }
  }

  const reset = () => {
    setSheetPages([])
    setImgPages([])
    setMapping(null)
    setManualOrder(null)
    setManualRot(null)
    setCurrent(0)
    setMode(null)
    setDetectBanner(null)
    setFormatTouched(false)
    setAdjustOpen(false)
    processedOptsRef.current = ''
    pdfBufferRef.current = null
    rawImagesRef.current = null
  }

  const loadPdf = async (file: File) => {
    reset()
    setFileName(file.name)
    try {
      const buf = await file.arrayBuffer()
      pdfBufferRef.current = buf
      setMode('pdf')
      if (!nameTouched) setOutName(defaultFromPdf(file.name))
      await processPdf(buf, arrangeOpts, true)
    } catch (e) {
      setStatus('error')
      setStatusMsg(e instanceof Error ? e.message : t('ds.errReadPdf'))
    }
  }

  const acceptImages = async (images: SourceImage[], emptyMsg: string) => {
    reset()
    if (images.length === 0) {
      setStatus('error')
      setStatusMsg(emptyMsg)
      return
    }
    rawImagesRef.current = images
    setImgPages(images)
    setMode('images')
    setFileName('')
    if (!nameTouched) setOutName(defaultFromCarousel(images[0].name))
    await processImages(images, arrangeOpts, true)
  }

  const loadImages = async (files: File[]) => {
    setStatus('working')
    setStatusMsg(t('ds.msgReading'))
    try {
      const { sources } = await expandFiles(files)
      await acceptImages(sources, t('ds.errNoImages'))
    } catch (e) {
      setStatus('error')
      setStatusMsg(e instanceof Error ? e.message : t('ds.errReadImages'))
    }
  }

  const handleFiles = (files: File[]) => {
    if (files.length === 1 && isPdf(files[0])) loadPdf(files[0])
    else loadImages(files)
  }

  // Re-process the already-uploaded input when the format/variant options change.
  // Skipped when nothing changed since the last run (e.g. detection pre-filling
  // the same options it just processed with).
  useEffect(() => {
    const key = JSON.stringify(arrangeOpts)
    if (key === processedOptsRef.current) return
    if (mode === 'pdf' && pdfBufferRef.current) {
      processPdf(pdfBufferRef.current, arrangeOpts, false)
    } else if (mode === 'images' && rawImagesRef.current) {
      processImages(rawImagesRef.current, arrangeOpts, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrangeOpts])

  /** Arrange: move the thumb at scroll position `from` to position `to`. */
  const movePage = (from: number, to: number) => {
    const cur = manualOrder ?? identityOrder(basePages.length)
    setManualOrder(moveItem(cur, from, to))
  }

  // Pointer-events drag (touch + mouse) on the position badge, augmenting
  // the desktop HTML5 DnD on the whole card.
  const { handleProps, dragFrom, dragTarget } = usePointerReorder((from, to) => movePage(from, to))

  const nudgePage = (pos: number, dir: -1 | 1) => {
    const target = nudgeTarget(pos, dir, viewPages.length)
    if (target != null) movePage(pos, target)
  }

  /** Coarse pointers (touch): no drag-and-drop intake. */
  const [coarsePointer] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(pointer: coarse)').matches,
  )

  /** Arrange: rotate a base page 90° clockwise (accumulates mod 360). */
  const rotatePage = (src: number) => {
    setManualRot((prev) => ({ ...(prev ?? {}), [src]: addRotation(prev?.[src] ?? 0, 90) }))
  }

  const resetManual = () => {
    setManualOrder(null)
    setManualRot(null)
  }

  const download = async () => {
    setStatusMsg(t('ds.msgBuilding'))
    try {
      let bytes: Uint8Array
      if (sheetPages.length > 0) {
        // PDF/grid modes: order + rotate the computed page canvases.
        const ord = manualOrder ?? sheetPages.map((_, i) => i)
        const pages = ord
          .filter((src) => src >= 0 && src < sheetPages.length)
          .map((src, idx) => {
            const p = sheetPages[src]
            const rot = rotationFor(manualRot, src)
            if (rot === 0) return { ...p, index: idx + 1 }
            const canvas = rotateCanvasDeg(p.canvas, rot)
            return {
              ...p,
              index: idx + 1,
              canvas,
              dataUrl: canvas.toDataURL('image/jpeg', 0.85),
              // 90/270 swaps the page axes — size the PDF page to the canvas.
              sizeToImage: rot === 90 || rot === 270 ? true : p.sizeToImage,
            }
          })
        bytes = await buildScrollPdf(pages, sheetFormat !== 'half-serpentine')
      } else {
        // Image-set mode: order + rotate the source images.
        const ord = manualOrder ?? imgPages.map((_, i) => i)
        const items = await Promise.all(
          ord
            .filter((src) => src >= 0 && src < imgPages.length)
            .map(async (src) => {
              const i = imgPages[src]
              const rot = rotationFor(manualRot, src)
              if (rot === 0) return { blob: i.blob, width: i.width, height: i.height, name: i.name }
              const c = rotateCanvasDeg(await blobToCanvas(i.blob), rot)
              const blob = await new Promise<Blob | null>((res) => c.toBlob(res, 'image/jpeg', 0.92))
              if (!blob) throw new Error('Could not rotate a page image')
              return { blob, width: c.width, height: c.height, name: i.name }
            }),
        )
        bytes = await buildImageScrollPdf(items)
      }
      downloadBytes(bytes, withSuffix(outName, 'digital'))
      setStatusMsg('')
    } catch (e) {
      setStatusMsg(
        e instanceof Error
          ? e.message === 'Could not rotate a page image'
            ? t('ds.errRotate')
            : e.message
          : t('ds.errBuildFailed'),
      )
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      {/* ── LEFT: intake + options + output ────────────────────── */}
      <div className="space-y-6">
        <section>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.sourceTitle')}</h2>
          <div
            className="mt-3 flex min-h-32 cursor-pointer flex-col items-center justify-center border-2 border-dashed border-neutral-400 p-6 text-center transition-colors hover:border-black"
            onClick={() => input.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault()
              const files = Array.from(e.dataTransfer.files ?? [])
              if (files.length === 1 && isPdf(files[0])) {
                loadPdf(files[0])
              } else {
                fromDrop(e.nativeEvent).then((r) =>
                  acceptImages(r.sources, t('ds.errNoUsableDrop')),
                )
              }
            }}
          >
            <FileUp className="mb-2 h-6 w-6" />
            <p className="font-mono text-xs uppercase tracking-wide">
              {coarsePointer ? t('ds.dropCoarse') : t('ds.dropFine')}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              <button
                className="underline hover:text-black"
                onClick={(e) => {
                  e.stopPropagation()
                  setUploadInfoOpen((v) => !v)
                }}
              >
                {t('ds.uploadInfoBtn')}
              </button>
            </p>
            {uploadInfoOpen && (
              <p className="mt-1 text-start text-[11px] leading-relaxed text-neutral-500">
                {t('ds.uploadInfoBody')}
              </p>
            )}
          </div>
          <input
            ref={input}
            type="file"
            accept="application/pdf,.pdf,image/*,.zip"
            multiple
            className="hidden"
            onChange={(e) => {
              handleFiles(Array.from(e.target.files ?? []))
              e.target.value = ''
            }}
          />
          {mode === 'images' && imgPages.length > 0 ? (
            <p className="mt-2 truncate font-mono text-[11px] text-neutral-600">
              {t(imgPages.length === 1 ? 'ds.imagesOne' : 'ds.imagesOther', { count: imgPages.length })}
            </p>
          ) : (
            fileName && <p className="mt-2 truncate font-mono text-[11px] text-neutral-600">{fileName}</p>
          )}
          {statusMsg && (
            <p className={`mt-2 font-mono text-[11px] ${status === 'error' ? 'text-red-600' : 'text-neutral-600'}`}>
              {statusMsg}
            </p>
          )}
        </section>

        <section>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.formatTitle')}</h2>
          <Select
            value={sheetFormat}
            onValueChange={(v) => {
              setSheetFormat(v as SheetFormatChoice)
              setFormatTouched(true) // manual override always wins over detection
              if (v !== 'half-serpentine') setAdjustOpen(true) // they picked a grid format — show its controls
            }}
          >
            <SelectTrigger className="mt-3 rounded-none font-mono text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="half-serpentine" className="font-mono text-xs">
                {t('ds.fmtScroll')}
              </SelectItem>
              {Object.entries(FORMAT_INFO).map(([id, info]) => (
                <SelectItem key={id} value={id} className="font-mono text-xs">
                  {fmtLabel(id, info.label)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-2 text-[11px] text-neutral-500">
            {sheetFormat === 'half-serpentine' ? t('ds.fmtHelpScroll') : t('ds.fmtHelpGrid')}
          </p>
          {detectBanner && (
            <p className="mt-2 border-s-2 border-red-600 bg-neutral-100 p-2 font-mono text-[11px] leading-snug">
              {bannerText(detectBanner)}
            </p>
          )}
        </section>

        {status === 'ready' && viewPages.length > 0 && (
          <section>
            <button
              className="font-mono text-[11px] uppercase tracking-wide text-red-600 underline"
              onClick={() => setAdjustOpen((v) => !v)}
            >
              {adjustOpen ? t('ds.adjustHide') : t('ds.adjustShow')}
              {modified && (
                <span className="ms-2 bg-red-600 px-1.5 py-0.5 font-mono text-[10px] uppercase text-white no-underline">
                  {t('ds.modifiedBadge')}
                </span>
              )}
            </button>
            {adjustOpen && (
              <div className="mt-3 space-y-4 border border-neutral-300 p-3">
                <div>
                  <div className="flex items-center justify-between">
                    <Label className="font-mono text-xs uppercase tracking-wide">{t('ds.pageOrder')}</Label>
                    {modified && (
                      <button
                        className="font-mono text-[11px] uppercase tracking-wide text-red-600 underline"
                        onClick={resetManual}
                      >
                        {t('ds.resetDetected')}
                      </button>
                    )}
                  </div>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    {coarsePointer ? t('ds.arrangeHintCoarse') : t('ds.arrangeHintFine')}
                  </p>
                  <ul className="mt-2 grid max-h-72 grid-cols-4 gap-2 overflow-y-auto">
                    {viewPages.map((p, pos) => (
                      <li
                        key={p.src}
                        data-arrange-pos={pos}
                        data-arrange-src={p.src}
                        data-arrange-rot={p.rot}
                        data-reorder-index={pos}
                        draggable
                        onDragStart={() => (dragPos.current = pos)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          if (dragPos.current != null && dragPos.current !== pos) {
                            movePage(dragPos.current, pos)
                          }
                          dragPos.current = null
                        }}
                        className={`relative cursor-grab border border-neutral-300 bg-white p-1 hover:border-black ${
                          dragFrom === pos ? 'opacity-50' : ''
                        } ${dragTarget === pos && dragTarget !== dragFrom ? 'outline outline-2 outline-red-600' : ''}`}
                      >
                        <span
                          {...handleProps(pos)}
                          className="absolute -start-1 -top-1 z-10 flex h-4 min-w-4 cursor-grab items-center justify-center bg-red-600 px-0.5 font-mono text-[10px] font-bold text-white"
                          aria-label={t('common.dragReorder', { n: pos + 1 })}
                        >
                          {pos + 1}
                        </span>
                        <span className="flex h-16 w-full items-center justify-center overflow-hidden">
                          <img
                            src={p.dataUrl}
                            alt={t('common.pageN', { n: pos + 1 })}
                            style={p.rot ? { transform: `rotate(${p.rot}deg)` } : undefined}
                            className="max-h-16 max-w-16 border border-neutral-200 object-contain"
                          />
                        </span>
                        <span className="mt-1 flex items-center justify-between gap-1">
                          <span className="min-w-0 flex-1 truncate font-mono text-[10px] text-neutral-600">
                            {p.label}
                          </span>
                          <button
                            className="nudge-btn shrink-0 items-center p-0.5 hover:text-red-600 disabled:opacity-30"
                            aria-label={t('common.moveLeft', { n: pos + 1 })}
                            disabled={pos === 0}
                            onClick={() => nudgePage(pos, -1)}
                          >
                            <ChevronLeft className="h-3.5 w-3.5 rtl:-scale-x-100" />
                          </button>
                          <button
                            className="nudge-btn shrink-0 items-center p-0.5 hover:text-red-600 disabled:opacity-30"
                            aria-label={t('common.moveRight', { n: pos + 1 })}
                            disabled={pos === viewPages.length - 1}
                            onClick={() => nudgePage(pos, 1)}
                          >
                            <ChevronRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
                          </button>
                          <button
                            className="shrink-0 p-0.5 hover:text-red-600"
                            title={t('common.rotateTitle')}
                            aria-label={t('common.rotatePage', { n: pos + 1 })}
                            onClick={() => rotatePage(p.src)}
                          >
                            <RotateCw className="h-3.5 w-3.5" />
                          </button>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {modified && (
                    <p className="mt-2 border-s-2 border-red-600 bg-neutral-100 p-1.5 font-mono text-[10px] leading-snug">
                      {t('ds.modifiedNote')}
                    </p>
                  )}
                </div>

                {sheetFormat !== 'half-serpentine' && (
                  <div className="space-y-4 border-t border-neutral-200 pt-3">
                    <div>
                      <Label className="font-mono text-xs uppercase tracking-wide">{t('common.orientation')}</Label>
                      <RadioGroup
                        value={dPortrait ? 'portrait' : 'landscape'}
                        onValueChange={(v) => setDPortrait(v === 'portrait')}
                        className="mt-1.5 flex gap-4"
                      >
                        <div className="flex items-center gap-1.5">
                          <RadioGroupItem value="portrait" id="ds-or-p" />
                          <Label htmlFor="ds-or-p" className="font-mono text-xs font-normal">
                            {t('common.portrait')}
                          </Label>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <RadioGroupItem value="landscape" id="ds-or-l" />
                          <Label htmlFor="ds-or-l" className="font-mono text-xs font-normal">
                            {t('common.landscape')}
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    {sheetFormat !== 'half' && (
                      <div>
                        <Label className="font-mono text-xs uppercase tracking-wide">{t('ds.printSides')}</Label>
                        <RadioGroup
                          value={dDoubleSided ? 'both' : 'one'}
                          onValueChange={(v) => setDDoubleSided(v === 'both')}
                          className="mt-1.5 flex gap-4"
                        >
                          <div className="flex items-center gap-1.5">
                            <RadioGroupItem value="one" id="ds-sides-1" />
                            <Label htmlFor="ds-sides-1" className="font-mono text-xs font-normal">
                              {t('common.oneSide')}
                            </Label>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <RadioGroupItem value="both" id="ds-sides-2" />
                            <Label htmlFor="ds-sides-2" className="font-mono text-xs font-normal">
                              {t('common.bothSides')}
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                    {sheetFormat !== 'half' && (
                      <div>
                        <Label className="font-mono text-xs uppercase tracking-wide">{t('common.foldAlong')}</Label>
                        <RadioGroup
                          value={dSpineSide ? 'side' : 'top'}
                          onValueChange={(v) => setDSpineSide(v === 'side')}
                          className="mt-1.5 flex gap-4"
                        >
                          <div className="flex items-center gap-1.5">
                            <RadioGroupItem value="side" id="ds-spine-s" />
                            <Label htmlFor="ds-spine-s" className="font-mono text-xs font-normal">
                              {t('common.longSide')}
                            </Label>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <RadioGroupItem value="top" id="ds-spine-t" />
                            <Label htmlFor="ds-spine-t" className="font-mono text-xs font-normal">
                              {t('common.shortSide')}
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                    {sheetFormat === 'quarter' && dDoubleSided && (
                      <div className="flex items-center gap-2">
                        <Switch id="ds-copy" checked={dQuarterCopy} onCheckedChange={setDQuarterCopy} />
                        <Label htmlFor="ds-copy" className="font-mono text-xs font-normal">
                          {t('common.twoCopies')}
                        </Label>
                      </div>
                    )}
                    <p className="text-[10px] leading-relaxed text-neutral-500">
                      {t('ds.variantWarn')}
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {status === 'ready' && mode === 'pdf' && !mapping && (
          <section>
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.readingTitle')}</h2>
            <p className="mt-3 border border-neutral-300 p-2 font-mono text-[11px] leading-relaxed">
              {t('ds.roSerp', {
                sheets: t(sheetPages.length / 2 === 1 ? 'mz.planSheetOne' : 'mz.planSheetOther', {
                  count: sheetPages.length / 2,
                }),
                pages: viewPages.map((p) => p.label).join(' '),
              })}
            </p>
          </section>
        )}
        {status === 'ready' && mapping && (
          <section>
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.readingTitle')}</h2>
            <p className="mt-3 border border-neutral-300 p-2 font-mono text-[11px] leading-relaxed">
              {t('ds.roGrid', {
                sides: t(mapping.numSides === 1 ? 'ds.sidesOne' : 'ds.sidesOther', { count: mapping.numSides }),
                grid: t('common.gridFmt', { rows: mapping.gridRows, cols: mapping.gridCols }),
                pages: t(sheetPages.length === 1 ? 'ds.pagesOne' : 'ds.pagesOther', { count: sheetPages.length }),
                first: viewPages[0]?.label,
                last: viewPages[viewPages.length - 1]?.label,
              })}
            </p>
          </section>
        )}
        {status === 'ready' && mode === 'images' && !mapping && (
          <section>
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.pageOrderTitle')}</h2>
            <p className="mt-3 border border-neutral-300 p-2 font-mono text-[11px] leading-relaxed">
              {t('ds.roImages', {
                imgs: t(imgPages.length === 1 ? 'ds.imagesOne' : 'ds.imagesOther', { count: imgPages.length }),
                count: imgPages.length,
              })}
            </p>
          </section>
        )}
        {status === 'ready' && (
          <section>
            <h2 className="mb-3 font-mono text-sm font-bold uppercase tracking-widest">{t('ds.outputTitle')}</h2>
            <div className="mb-3 max-w-xs">
              <Label htmlFor="outname-digital" className="font-mono text-xs uppercase tracking-wide">
                {t('common.fileName')}
              </Label>
              <Input
                id="outname-digital"
                dir="ltr"
                value={outName}
                onChange={(e) => {
                  setOutName(e.target.value)
                  setNameTouched(true)
                }}
                className="mt-1 rounded-none font-mono text-xs"
                spellCheck={false}
              />
              <p className="mt-1 font-mono text-[10px] text-neutral-500" dir="ltr">
                {t('common.willDownload', { name: withSuffix(outName, 'digital') })}
              </p>
            </div>
            <Button
              className="mt-1 rounded-none bg-red-600 font-mono text-xs uppercase tracking-widest text-white hover:bg-black"
              onClick={download}
            >
              <Download className="me-2 h-4 w-4" /> {t('ds.download')}
            </Button>
            <p className="mt-2 text-[11px] text-neutral-500">
              {t('ds.outputNote')}
            </p>
          </section>
        )}
      </div>

      {/* ── RIGHT: flip-through preview ────────────────────────── */}
      <div>
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('ds.flipTitle')}</h2>
        <div className="mt-3 border border-neutral-300 bg-neutral-900 p-4">
          {status === 'ready' && viewPages.length > 0 ? (
            <div className="flex flex-col items-center">
              <img
                src={viewPages[current].dataUrl}
                alt={t('common.pageN', { n: viewPages[current].index })}
                style={
                  viewPages[current].rot ? { transform: `rotate(${viewPages[current].rot}deg)` } : undefined
                }
                className={
                  viewPages[current].rot === 90 || viewPages[current].rot === 270
                    ? 'max-h-[40vh] max-w-[70vh] border border-neutral-700 shadow-lg'
                    : 'max-h-[70vh] max-w-full border border-neutral-700 shadow-lg'
                }
              />
              <div className="mt-4 flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none border-neutral-500 bg-transparent font-mono text-xs text-white hover:bg-neutral-800 hover:text-white"
                  disabled={current === 0}
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                >
                  <ChevronLeft className="me-1 h-4 w-4 rtl:-scale-x-100" /> {t('ds.prev')}
                </Button>
                <span className="max-w-48 truncate font-mono text-xs text-neutral-300" title={viewPages[current].label} dir="ltr">
                  {viewPages[current].index} / {viewPages.length}
                  <span className="ms-2 text-red-500" dir="auto">{viewPages[current].label}</span>
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none border-neutral-500 bg-transparent font-mono text-xs text-white hover:bg-neutral-800 hover:text-white"
                  disabled={current === viewPages.length - 1}
                  onClick={() => setCurrent((c) => Math.min(viewPages.length - 1, c + 1))}
                >
                  {t('ds.next')} <ChevronRight className="ms-1 h-4 w-4 rtl:-scale-x-100" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-72 items-center justify-center">
              <p className="max-w-xs text-center font-mono text-xs uppercase leading-relaxed tracking-wide text-neutral-500">
                {status === 'working' ? t('common.rendering') : t('ds.flipEmpty')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

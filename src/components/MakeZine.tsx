import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download, ChevronDown, ChevronUp, GripVertical, ImagePlus, Trash2, X } from 'lucide-react'
import {
  expandFiles,
  fromClipboard,
  fromDrop,
  instagramHint,
  type IntakeResult,
  type SourceImage,
} from '@/lib/intake'
import { renderPdfPagesForIntake } from '@/lib/pdfPages'
import { heicToImage } from '@/lib/heic'
import { naturalSortByName } from '@/lib/naturalSort'
import {
  loadImageFromBlob,
  preparePage,
  worstStretchDistortion,
  type FillMode,
  type PreparedPage,
} from '@/lib/pagePrep'
import {
  buildZinePlan,
  FORMAT_INFO,
  PAPERS,
  pagesPerSheet,
  type PaperId,
  type ZineFormatId,
} from '@/lib/zineArranger'
import { paddingHint } from '@/lib/paddingHint'
import { buildPrintPdf, renderSheetPreview } from '@/lib/printPdf'
import { downloadBytes } from '@/lib/scrollPdf'
import { moveItem } from '@/lib/manualArrange'
import { nudgeTarget } from '@/lib/reorder'
import { usePointerReorder } from '@/lib/usePointerReorder'
import { defaultFromCarousel, withSuffix } from '@/lib/naming'
import { useI18n } from '@/lib/i18n'
import type { I18nKey } from '@/lib/i18n/index'
import { Input } from '@/components/ui/input'

type Status = 'idle' | 'preparing' | 'ready' | 'error'

const DPI = 300

/** Simple-view size choices (label keys); everything else lives in Advanced. */
const SIMPLE_FORMATS: { id: ZineFormatId; labelKey: I18nKey }[] = [
  { id: 'half', labelKey: 'mz.fmtHalfSimple' },
  { id: 'quarter', labelKey: 'mz.fmtQuarterSimple' },
  { id: 'eighth', labelKey: 'mz.fmtEighthSimple' },
]
const MICRO_FORMATS: ZineFormatId[] = ['12th', '16th', '24th', '32nd', '36th', '48th', '64th']

const FILL_MODES: FillMode[] = ['blur', 'white', 'fit', 'stretch']

const ADVANCED_KEY = 'zineStudio.showAdvanced'

export default function MakeZine() {
  const { t, dir } = useI18n()
  const [images, setImages] = useState<SourceImage[]>([])
  const [fillMode, setFillMode] = useState<FillMode>('blur')

  // Layout options (Zine Arranger model)
  const [format, setFormat] = useState<ZineFormatId>('eighth')
  const [paper, setPaper] = useState<PaperId>('letter')
  const [zinePortrait, setZinePortrait] = useState(true)
  const [doubleSided, setDoubleSided] = useState(false)
  const [spineSide, setSpineSide] = useState(true)
  const [flipBackCover, setFlipBackCover] = useState(false)
  const [quarterCopy, setQuarterCopy] = useState(false)
  const [sigSheets, setSigSheets] = useState(0)
  const [showAdvanced, setShowAdvanced] = useState(
    () => typeof localStorage !== 'undefined' && localStorage.getItem(ADVANCED_KEY) === '1',
  )

  // Guides
  const [guideMargins, setGuideMargins] = useState(false)
  const [guideCenter, setGuideCenter] = useState(true)
  const [guideFolds, setGuideFolds] = useState(true)
  const [insetIn, setInsetIn] = useState(0.075)

  const [status, setStatus] = useState<Status>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [prepared, setPrepared] = useState<PreparedPage[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [outName, setOutName] = useState('zine')
  const [nameTouched, setNameTouched] = useState(false)
  const [rejected, setRejected] = useState<string[]>([])
  const [intakeNotes, setIntakeNotes] = useState<string[]>([])
  const [retryTick, setRetryTick] = useState(0)

  const fileInput = useRef<HTMLInputElement>(null)
  const folderInput = useRef<HTMLInputElement>(null)
  const previewCanvas = useRef<HTMLCanvasElement>(null)
  const dragIndex = useRef<number | null>(null)
  /** Incremented per auto-render run; stale runs bail out after awaits. */
  const runId = useRef(0)

  const isHalf = format === 'half'
  const isMicro = !SIMPLE_FORMATS.some((f) => f.id === format)
  const effectiveDoubleSided = isHalf ? true : doubleSided

  useEffect(() => {
    localStorage.setItem(ADVANCED_KEY, showAdvanced ? '1' : '0')
  }, [showAdvanced])

  const addImages = useCallback((incoming: SourceImage[]) => {
    if (incoming.length === 0) return
    setImages((prev) => naturalSortByName([...prev, ...incoming]))
  }, [])

  // PDF rendering and HEIC conversion are injected into the pure intake layer.
  const intakeDeps = {
    renderPdfPages: renderPdfPagesForIntake,
    convertHeic: heicToImage,
    onProgress: (msg: string) => setStatusMsg(msg),
  }

  const handleIntake = (p: Promise<IntakeResult>) => {
    setStatusMsg(t('mz.readingFiles'))
    p.then((r) => {
      addImages(r.sources)
      setRejected(r.rejected)
      setIntakeNotes(r.notes)
      setStatusMsg(r.sources.length === 0 && r.rejected.length > 0 ? t('mz.noUsable') : '')
    }).catch((err) => {
      setStatusMsg(err instanceof Error ? err.message : String(err))
    })
  }

  useEffect(() => {
    const onPaste = (ev: ClipboardEvent) => {
      if ((ev.target as HTMLElement)?.closest('input, textarea')) return
      fromClipboard(ev).then(addImages).catch(() => {})
    }
    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [addImages])

  useEffect(() => {
    const h = instagramHint(images)
    if (h === 'square') setFillMode('blur')
    if (!nameTouched) {
      setOutName(images.length > 0 ? defaultFromCarousel(images[0].name) : 'zine')
    }
  }, [images, nameTouched])

  // Translated Instagram hint — recomputes on language switch.
  const igShape = instagramHint(images)
  const hint = igShape ? t(igShape === 'square' ? 'mz.igSquare' : 'mz.igFeed') : null

  const arrangeOpts = useMemo(
    () => ({
      format,
      doubleSided: effectiveDoubleSided,
      zinePortrait,
      spineSide,
      quarterCopy: format === 'quarter' && effectiveDoubleSided ? quarterCopy : false,
      flipBackCover,
      sigSheets,
      paper,
    }),
    [format, effectiveDoubleSided, zinePortrait, spineSide, quarterCopy, flipBackCover, sigSheets, paper],
  )
  const plan = useMemo(
    () => (images.length > 0 ? buildZinePlan(images.length, arrangeOpts) : null),
    [images.length, arrangeOpts],
  )
  const settings = useMemo(
    () => ({ guideMargins, guideCenter, guideFolds, insetIn }),
    [guideMargins, guideCenter, guideFolds, insetIn],
  )

  const cellPx = useMemo(
    () => (plan ? { w: Math.round(plan.cellW * DPI), h: Math.round(plan.cellH * DPI) } : null),
    [plan],
  )

  // Blank-page guidance: recomputes live as images/format/sidedness change.
  const padHint = useMemo(
    () =>
      plan
        ? paddingHint(
            images.length,
            plan.paddedCount,
            pagesPerSheet(plan.opts.format, plan.opts.doubleSided, plan.opts.quarterCopy),
          )
        : null,
    [plan, images.length],
  )

  // Worded via the dictionary (number-agreement keys) so it translates.
  const padHintText = useMemo(() => {
    if (!padHint) return null
    const { pages, printsAs, blanks, add, remove } = padHint
    const bodyKey: I18nKey =
      pages === 1
        ? blanks === 1
          ? 'mz.pad.bodyP1B1'
          : 'mz.pad.bodyP1'
        : blanks === 1
          ? 'mz.pad.bodyB1'
          : 'mz.pad.body'
    const alt = remove != null ? t('mz.pad.altRemove', { remove }) : ''
    return `${t(bodyKey, { pages, printsAs, blanks })} ${t(add === 1 ? 'mz.pad.add1' : 'mz.pad.add', { add, alt })}`
  }, [padHint, t])

  // Stretch mode: worst relative distortion across the current images.
  const stretchNote = useMemo(() => {
    if (fillMode !== 'stretch' || !cellPx || images.length === 0) return null
    const worst = worstStretchDistortion(images, cellPx.w, cellPx.h)
    if (!worst || worst.amount <= 0.02) return null
    return t('mz.stretchWarn', {
      axis: t(worst.axis === 'vertical' ? 'mz.axisVertical' : 'mz.axisHorizontal'),
      percent: Math.round(worst.amount * 100),
    })
  }, [fillMode, cellPx, images, t])

  // Auto-render: pages are prepared automatically whenever the images or any
  // layout/fill option changes (debounced; stale runs bail out). Guide
  // settings are excluded — they only affect the preview and the final PDF,
  // not the prepared page images.
  useEffect(() => {
    if (images.length === 0 || !plan || !cellPx) {
      setPrepared([])
      setStatus('idle')
      return
    }
    const id = ++runId.current
    const imgs = images
    const px = cellPx
    const fill = fillMode
    const timer = setTimeout(() => {
      ;(async () => {
        setStatus('preparing')
        setStatusMsg(t('mz.preparing'))
        try {
          const out: PreparedPage[] = []
          for (let i = 0; i < imgs.length; i++) {
            if (runId.current !== id) return // superseded by a newer change
            setStatusMsg(t('mz.preparingPage', { i: i + 1, n: imgs.length }))
            const img = await loadImageFromBlob(imgs[i].blob)
            out.push(await preparePage(img, i + 1, imgs[i].name, px.w, px.h, fill))
          }
          if (runId.current !== id) return
          setPrepared(out)
          setStatus('ready')
          setStatusMsg('')
        } catch (e) {
          if (runId.current !== id) return
          setStatus('error')
          setStatusMsg(e instanceof Error ? e.message : t('mz.prepFailed'))
        }
      })()
    }, 400)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, plan, cellPx, fillMode, retryTick])

  // Preview of sheet 1.
  useEffect(() => {
    if (status !== 'ready' || !previewCanvas.current || !plan || prepared.length === 0) return
    let cancelled = false
    ;(async () => {
      const map = new Map<number, HTMLImageElement>()
      for (let i = 0; i < prepared.length; i++) {
        map.set(i, await loadImageFromBlob(prepared[i].jpeg))
      }
      if (cancelled || !previewCanvas.current) return
      renderSheetPreview(previewCanvas.current, plan, plan.sheets[0], map, settings, 880, t('mz.blank'))
    })()
    return () => {
      cancelled = true
    }
  }, [status, prepared, plan, settings, t])

  const download = async () => {
    if (prepared.length === 0 || !plan || status !== 'ready') return
    setStatusMsg(t('mz.buildingPdf'))
    try {
      const bytes = await buildPrintPdf(prepared, plan, settings)
      downloadBytes(bytes, withSuffix(outName, 'print'))
      setStatusMsg('')
    } catch (e) {
      setStatusMsg(e instanceof Error ? e.message : t('mz.pdfFailed'))
    }
  }

  const removeImage = (id: string) => {
    setImages((prev) => {
      const victim = prev.find((i) => i.id === id)
      if (victim) URL.revokeObjectURL(victim.thumbUrl)
      return prev.filter((i) => i.id !== id)
    })
  }

  const reorder = (from: number, to: number) => {
    setImages((prev) => moveItem(prev, from, to))
  }

  // Pointer-events drag (touch + mouse) on the grip handle, augmenting the
  // desktop HTML5 DnD on the whole row.
  const { handleProps, dragFrom, dragTarget } = usePointerReorder((from, to) => reorder(from, to))

  const nudgeImage = (idx: number, dir: -1 | 1) => {
    const target = nudgeTarget(idx, dir, images.length)
    if (target != null) reorder(idx, target)
  }

  /** Coarse pointers (touch): no drop, paste, or folder picking. */
  const [coarsePointer] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.('(pointer: coarse)').matches,
  )

  const sheetCount = plan ? (effectiveDoubleSided ? plan.sheets.length / 2 : plan.sheets.length) : 0

  return (
    <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
      {/* ── LEFT: intake + options ─────────────────────────────── */}
      <div className="space-y-6">
        <section>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('mz.intakeTitle')}</h2>
          <div
            className={`mt-3 flex min-h-36 cursor-pointer flex-col items-center justify-center border-2 border-dashed p-6 text-center transition-colors ${
              dragOver ? 'border-red-600 bg-red-50' : 'border-neutral-400 hover:border-black'
            }`}
            onClick={() => fileInput.current?.click()}
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              handleIntake(fromDrop(e.nativeEvent, intakeDeps))
            }}
          >
            <ImagePlus className="mb-2 h-6 w-6" />
            <p className="font-mono text-xs uppercase tracking-wide">
              {coarsePointer ? t('mz.dropCoarse') : t('mz.dropFine')}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              {coarsePointer ? (
                t('mz.formatsCoarse')
              ) : (
                <>
                  {t('mz.formatsFine')}{' '}
                  <button
                    className="underline hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation()
                      folderInput.current?.click()
                    }}
                  >
                    {t('mz.pickFolder')}
                  </button>
                </>
              )}
            </p>
          </div>
          <input
            ref={fileInput}
            type="file"
            accept="image/*,.heic,.heif,.pdf,.zip"
            multiple
            className="hidden"
            onChange={(e) => {
              handleIntake(expandFiles(Array.from(e.target.files ?? []), intakeDeps))
              e.target.value = ''
            }}
          />
          <input
            ref={folderInput}
            type="file"
            // @ts-expect-error non-standard attribute
            webkitdirectory=""
            className="hidden"
            onChange={(e) => {
              handleIntake(expandFiles(Array.from(e.target.files ?? []), intakeDeps))
              e.target.value = ''
            }}
          />
          {images.length > 0 && (
            <button
              className="mt-2 flex items-center font-mono text-[11px] uppercase tracking-wide text-neutral-500 underline hover:text-red-600"
              onClick={() => {
                images.forEach((i) => URL.revokeObjectURL(i.thumbUrl))
                setImages([])
                setPrepared([])
                setStatus('idle')
              }}
            >
              <Trash2 className="me-1 h-3 w-3" /> {t('mz.clearAll')}
            </button>
          )}
          {hint && (
            <p className="mt-3 border-s-2 border-red-600 bg-neutral-100 p-2 font-mono text-[11px] leading-snug">{hint}</p>
          )}
          {rejected.length > 0 && (
            <p className="mt-2 border border-red-300 bg-red-50 p-2 font-mono text-[11px] leading-snug text-red-700">
              {t('mz.skipped', { files: rejected.join(', ') })}
            </p>
          )}
          {intakeNotes.map((n, i) => (
            <p key={i} className="mt-2 border-s-2 border-red-600 bg-neutral-100 p-2 font-mono text-[11px] leading-snug">
              {n}
            </p>
          ))}

          {images.length > 0 && (
            <ul className="mt-3 max-h-64 space-y-1 overflow-y-auto border border-neutral-300 p-1">
              {images.map((img, idx) => (
                <li
                  key={img.id}
                  data-reorder-index={idx}
                  draggable
                  onDragStart={() => (dragIndex.current = idx)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (dragIndex.current != null && dragIndex.current !== idx) reorder(dragIndex.current, idx)
                    dragIndex.current = null
                  }}
                  className={`flex cursor-grab items-center gap-2 bg-white p-1 hover:bg-neutral-100 ${
                    dragFrom === idx ? 'opacity-50' : ''
                  } ${dragTarget === idx && dragTarget !== dragFrom ? 'outline outline-2 outline-red-600' : ''}`}
                >
                  <span
                    {...handleProps(idx)}
                    className="shrink-0 cursor-grab p-0.5 text-neutral-400 hover:text-black"
                    aria-label={t('common.dragReorder', { n: idx + 1 })}
                  >
                    <GripVertical className="h-4 w-4" />
                  </span>
                  <span className="relative h-10 w-10 shrink-0">
                    <img src={img.thumbUrl} alt={img.name} className="h-10 w-10 border border-neutral-300 object-cover" />
                    <span className="absolute -start-1 -top-1 flex h-4 min-w-4 items-center justify-center bg-red-600 px-0.5 font-mono text-[10px] font-bold text-white">
                      {idx + 1}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1 truncate font-mono text-[11px]" dir="auto">{img.name}</span>
                  <button
                    className="nudge-btn shrink-0 items-center p-1 hover:text-red-600 disabled:opacity-30"
                    onClick={() => nudgeImage(idx, -1)}
                    disabled={idx === 0}
                    aria-label={t('common.moveUp', { n: idx + 1 })}
                  >
                    <ChevronUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    className="nudge-btn shrink-0 items-center p-1 hover:text-red-600 disabled:opacity-30"
                    onClick={() => nudgeImage(idx, 1)}
                    disabled={idx === images.length - 1}
                    aria-label={t('common.moveDown', { n: idx + 1 })}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <button className="shrink-0 p-1 hover:text-red-600" onClick={() => removeImage(img.id)} aria-label={t('common.remove')}>
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <Separator />

        <section>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('mz.sizeTitle')}</h2>
          <Select value={format} onValueChange={(v) => setFormat(v as ZineFormatId)}>
            <SelectTrigger className="mt-3 rounded-none font-mono text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {SIMPLE_FORMATS.map((f) => (
                <SelectItem key={f.id} value={f.id} className="font-mono text-xs">
                  {t(f.labelKey)}
                </SelectItem>
              ))}
              {isMicro && (
                <SelectItem value={format} className="font-mono text-xs">
                  {FORMAT_INFO[format].label}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          {isHalf && (
            <p className="mt-2 border border-neutral-300 p-2 font-mono text-[11px] leading-relaxed text-neutral-600">
              {t('mz.halfNote')}
            </p>
          )}
          {plan && (
            <p className="mt-2 border border-neutral-300 p-2 font-mono text-[11px] leading-relaxed">
              {t(images.length === 1 ? 'mz.planPageOne' : 'mz.planPageOther', { count: images.length })}
              {plan.paddedCount !== images.length ? ` · ${t('mz.planPadded', { count: plan.paddedCount })}` : ''} ·{' '}
              {t(sheetCount === 1 ? 'mz.planSheetOne' : 'mz.planSheetOther', { count: sheetCount })}
              {effectiveDoubleSided ? t('mz.planBothSides') : ''}
              {plan.opts.sigSheets > 0 ? ` · ${t('mz.planSig', { count: plan.sheetsPerSig })}` : ''}
            </p>
          )}
          {padHintText && (
            <p
              data-padding-hint
              className="mt-2 border-s-2 border-amber-500 bg-amber-50 p-2 font-mono text-[11px] leading-snug text-amber-900"
            >
              {padHintText}
            </p>
          )}
          <p className="mt-2 text-[11px] text-neutral-500">
            {t('mz.moreSizes')}
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('mz.fillTitle')}</h2>
          <RadioGroup
            value={fillMode}
            onValueChange={(v) => setFillMode(v as FillMode)}
            className="mt-3 space-y-3"
          >
            {FILL_MODES.map((m) => (
              <div key={m} className="flex items-start gap-2">
                <RadioGroupItem value={m} id={`fill-${m}`} className="mt-0.5" />
                <div>
                  <Label htmlFor={`fill-${m}`} className="font-mono text-xs uppercase tracking-wide">
                    {t(`mz.fill.${m}.label` as I18nKey)}
                  </Label>
                  <p className="mt-0.5 text-[11px] leading-snug text-neutral-500">{t(`mz.fill.${m}.help` as I18nKey)}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
          {cellPx && (
            <p className="mt-2 text-[11px] text-neutral-500">
              {t('mz.fillDpi', { w: cellPx.w, h: cellPx.h })}
            </p>
          )}
          {stretchNote && (
            <p className="mt-2 border-s-2 border-red-600 bg-neutral-100 p-2 font-mono text-[11px] leading-snug">
              {stretchNote}
            </p>
          )}
        </section>

        <section>
          <button
            className="font-mono text-[11px] uppercase tracking-wide text-red-600 underline"
            onClick={() => setShowAdvanced((v) => !v)}
          >
            {showAdvanced ? t('mz.advHide') : t('mz.advShow')}
          </button>

          {showAdvanced && (
            <div className="mt-3 space-y-4 border border-neutral-300 p-3">
              <div>
                <Label className="font-mono text-xs uppercase tracking-wide">{t('mz.advMicro')}</Label>
                <Select
                  value={isMicro ? format : ''}
                  onValueChange={(v) => setFormat(v as ZineFormatId)}
                >
                  <SelectTrigger className="mt-1 rounded-none font-mono text-xs">
                    <SelectValue placeholder={t('mz.advMicroPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {MICRO_FORMATS.map((f) => (
                      <SelectItem key={f} value={f} className="font-mono text-xs">
                        {FORMAT_INFO[f].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="font-mono text-xs uppercase tracking-wide">{t('mz.advPaper')}</Label>
                <Select value={paper} onValueChange={(v) => setPaper(v as PaperId)}>
                  <SelectTrigger className="mt-1 rounded-none font-mono text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {(Object.keys(PAPERS) as PaperId[]).map((p) => (
                      <SelectItem key={p} value={p} className="font-mono text-xs">
                        {PAPERS[p].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="font-mono text-xs uppercase tracking-wide">{t('common.orientation')}</Label>
                <RadioGroup
                  value={zinePortrait ? 'portrait' : 'landscape'}
                  onValueChange={(v) => setZinePortrait(v === 'portrait')}
                  className="mt-1 flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="portrait" id="ori-p" />
                    <Label htmlFor="ori-p" className="font-mono text-xs uppercase">{t('common.portrait')}</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="landscape" id="ori-l" />
                    <Label htmlFor="ori-l" className="font-mono text-xs uppercase">{t('common.landscape')}</Label>
                  </div>
                </RadioGroup>
              </div>

              {!isHalf && (
                <div>
                  <Label className="font-mono text-xs uppercase tracking-wide">{t('mz.printOn')}</Label>
                  <RadioGroup
                    value={doubleSided ? 'both' : 'one'}
                    onValueChange={(v) => setDoubleSided(v === 'both')}
                    className="mt-1 flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="one" id="dx-1" />
                      <Label htmlFor="dx-1" className="font-mono text-xs uppercase">{t('common.oneSide')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="both" id="dx-2" />
                      <Label htmlFor="dx-2" className="font-mono text-xs uppercase">{t('common.bothSides')}</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {!isHalf && (
                <div>
                  <Label className="font-mono text-xs uppercase tracking-wide">{t('common.foldAlong')}</Label>
                  <RadioGroup
                    value={spineSide ? 'side' : 'top'}
                    onValueChange={(v) => setSpineSide(v === 'side')}
                    className="mt-1 flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="side" id="sp-s" />
                      <Label htmlFor="sp-s" className="font-mono text-xs uppercase">{t('common.longSide')}</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="top" id="sp-t" />
                      <Label htmlFor="sp-t" className="font-mono text-xs uppercase">{t('common.shortSide')}</Label>
                    </div>
                  </RadioGroup>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    {t('mz.foldHelp')}
                  </p>
                </div>
              )}

              {!spineSide && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="flipbc" className="font-mono text-[11px] uppercase tracking-wide">
                    {t('mz.flipBack')}
                  </Label>
                  <Switch id="flipbc" checked={flipBackCover} onCheckedChange={setFlipBackCover} />
                </div>
              )}
              {format === 'quarter' && effectiveDoubleSided && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="qcopy" className="font-mono text-[11px] uppercase tracking-wide">
                    {t('common.twoCopies')}
                  </Label>
                  <Switch id="qcopy" checked={quarterCopy} onCheckedChange={setQuarterCopy} />
                </div>
              )}
              <div>
                <div className="flex items-center justify-between">
                  <Label className="font-mono text-[11px] uppercase tracking-wide">{t('mz.sig')}</Label>
                  <span className="font-mono text-xs">{sigSheets === 0 ? t('mz.sigAuto') : sigSheets}</span>
                </div>
                <Slider
                  className="mt-2"
                  dir={dir}
                  min={0}
                  max={8}
                  step={1}
                  value={[sigSheets]}
                  onValueChange={([v]) => setSigSheets(v)}
                />
                <p className="mt-1 text-[10px] text-neutral-500">{t('mz.sigZero')}</p>
              </div>

              <div className="space-y-3 border-t border-neutral-200 pt-3">
                <Label className="font-mono text-xs uppercase tracking-wide">{t('mz.guides')}</Label>
                <div className="flex items-center justify-between">
                  <Label htmlFor="g-margins" className="font-mono text-[11px] uppercase tracking-wide">{t('mz.guideMargins')}</Label>
                  <Switch id="g-margins" checked={guideMargins} onCheckedChange={setGuideMargins} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="g-center" className="font-mono text-[11px] uppercase tracking-wide">{t('mz.guideCenter')}</Label>
                  <Switch id="g-center" checked={guideCenter} onCheckedChange={setGuideCenter} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="g-folds" className="font-mono text-[11px] uppercase tracking-wide">{t('mz.guideFolds')}</Label>
                  <Switch id="g-folds" checked={guideFolds} onCheckedChange={setGuideFolds} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <Label className="font-mono text-[11px] uppercase tracking-wide">{t('mz.inset')}</Label>
                    <span className="font-mono text-xs">{insetIn.toFixed(3)}in</span>
                  </div>
                  <Slider
                    className="mt-2"
                    dir={dir}
                    min={0}
                    max={0.25}
                    step={0.005}
                    value={[insetIn]}
                    onValueChange={([v]) => setInsetIn(v)}
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* ── RIGHT: preview + download ──────────────────────────── */}
      <div>
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('mz.previewTitle')}</h2>
        {statusMsg && (
          <p className={`mt-2 font-mono text-[11px] ${status === 'error' ? 'text-red-600' : 'text-neutral-600'}`}>
            {statusMsg}
            {status === 'error' && (
              <button className="ms-2 underline" onClick={() => setRetryTick((v) => v + 1)}>
                {t('mz.retry')}
              </button>
            )}
          </p>
        )}
        <div className="mt-3 border border-neutral-300 bg-neutral-100 p-4">
          {status === 'ready' && plan && prepared.length > 0 ? (
            <canvas ref={previewCanvas} className="mx-auto block max-w-full shadow-md" />
          ) : (
            <div className="flex h-72 items-center justify-center">
              <p className="max-w-xs text-center font-mono text-xs uppercase leading-relaxed tracking-wide text-neutral-500">
                {images.length === 0 ? t('mz.addImagesBegin') : t('common.rendering')}
              </p>
            </div>
          )}
        </div>
        {images.length > 0 && plan && (
          <div className="mt-4 space-y-2">
            {status === 'ready' && (
              <p className="font-mono text-[11px] text-neutral-600">
                {t(sheetCount === 1 ? 'mz.planSheetOne' : 'mz.planSheetOther', { count: sheetCount })} ({PAPERS[paper].label}
                {t(effectiveDoubleSided ? 'mz.doubleSided' : 'mz.singleSided')}).{' '}
                {t('mz.sheetInfoGuides')}
              </p>
            )}
            <div className="max-w-xs">
              <Label htmlFor="outname-print" className="font-mono text-xs uppercase tracking-wide">
                {t('common.fileName')}
              </Label>
              <Input
                id="outname-print"
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
                {t('common.willDownload', { name: withSuffix(outName, 'print') })}
              </p>
            </div>
            <Button
              className="rounded-none bg-red-600 font-mono text-xs uppercase tracking-widest text-white hover:bg-black"
              disabled={status !== 'ready' || prepared.length === 0}
              onClick={download}
            >
              <Download className="me-2 h-4 w-4" /> {t('mz.downloadPrint')}
            </Button>
            <p className="text-[11px] text-neutral-500">
              {t('mz.autoUpdate')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

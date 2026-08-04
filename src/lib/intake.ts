/**
 * Intake: accept image files (JPG, PNG, WebP, AVIF, GIF, BMP), HEIC/HEIF
 * photos, PDFs, folders, .zip archives, and clipboard images.
 * Everything stays in the browser.
 *
 * PDF rendering and HEIC conversion are injected via IntakeDeps so this
 * module stays free of pdfjs/heic2any imports and its classification logic
 * remains node-testable.
 */
import JSZip from 'jszip'
import { naturalSortByName } from './naturalSort'

export interface SourceImage {
  id: string
  name: string
  blob: Blob
  thumbUrl: string
  width: number
  height: number
}

export type FileKind = 'image' | 'pdf' | 'heic' | 'zip' | 'unsupported'

export interface IntakeDeps {
  /** Render a PDF into one JPEG blob per page (browser only). */
  renderPdfPages?: (
    blob: Blob,
    fileName: string,
  ) => Promise<{ pages: { blob: Blob; pageLabel: string }[]; note?: string }>
  /** Convert a HEIC/HEIF blob into a browser-decodable image blob. */
  convertHeic?: (blob: Blob) => Promise<Blob>
  /** Progress messages for slow conversions ("Converting HEIC…"). */
  onProgress?: (msg: string) => void
}

export interface IntakeResult {
  sources: SourceImage[]
  /** Files skipped: unsupported type, or no converter was provided. */
  rejected: string[]
  /** Informational notes (e.g. reduced render DPI for a large PDF). */
  notes: string[]
}

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif|bmp)$/i
const HEIC_EXT = /\.(heic|heif)$/i
const PDF_EXT = /\.pdf$/i
const ZIP_EXT = /\.zip$/i

/**
 * Classify an incoming file by name and mime type. Extension wins for known
 * types; mime is the fallback (and the only signal for extensionless files).
 */
export function classifyFile(name: string, mime: string): FileKind {
  if (ZIP_EXT.test(name) || mime === 'application/zip' || mime === 'application/x-zip-compressed') {
    return 'zip'
  }
  if (PDF_EXT.test(name) || mime === 'application/pdf') return 'pdf'
  // HEIC before the generic image/ mime check: image/heic needs conversion.
  if (HEIC_EXT.test(name) || mime === 'image/heic' || mime === 'image/heif') return 'heic'
  if (IMAGE_EXT.test(name)) return 'image'
  // Any other image/* mime (or a known-looking image with a odd extension).
  if (mime.startsWith('image/')) return 'image'
  return 'unsupported'
}

let counter = 0
const nextId = () => `img-${Date.now()}-${counter++}`

async function blobDims(blob: Blob): Promise<{ w: number; h: number }> {
  try {
    const bmp = await createImageBitmap(blob)
    const d = { w: bmp.width, h: bmp.height }
    bmp.close()
    return d
  } catch {
    return { w: 0, h: 0 }
  }
}

async function toSource(blob: Blob, name: string): Promise<SourceImage> {
  const { w, h } = await blobDims(blob)
  return {
    id: nextId(),
    name,
    blob,
    thumbUrl: URL.createObjectURL(blob),
    width: w,
    height: h,
  }
}

/** A sortable intake group: one entry per dropped file, one or more pages. */
interface SortItem {
  name: string
  sources: SourceImage[]
}

interface IntakePartial {
  items: SortItem[]
  rejected: string[]
  notes: string[]
}

const empty = (): IntakePartial => ({ items: [], rejected: [], notes: [] })

async function blobToItem(blob: Blob, name: string, kind: FileKind, deps: IntakeDeps): Promise<IntakePartial> {
  const out = empty()
  if (kind === 'image') {
    out.items.push({ name, sources: [await toSource(blob, name)] })
    return out
  }
  if (kind === 'heic') {
    if (!deps.convertHeic) {
      out.rejected.push(name)
      return out
    }
    deps.onProgress?.(`Converting HEIC: ${name}…`)
    try {
      const img = await deps.convertHeic(blob)
      out.items.push({ name, sources: [await toSource(img, name)] })
    } catch {
      throw new Error(`Could not convert HEIC file: ${name}`)
    }
    return out
  }
  if (kind === 'pdf') {
    if (!deps.renderPdfPages) {
      out.rejected.push(name)
      return out
    }
    deps.onProgress?.(`Rendering PDF pages: ${name}…`)
    let rendered
    try {
      rendered = await deps.renderPdfPages(blob, name)
    } catch (e) {
      throw new Error(`Could not read PDF: ${name}${e instanceof Error ? ` — ${e.message}` : ''}`)
    }
    const base = name.replace(PDF_EXT, '')
    const sources: SourceImage[] = []
    for (const p of rendered.pages) {
      sources.push(await toSource(p.blob, `${base}#${p.pageLabel}`))
    }
    out.items.push({ name, sources })
    if (rendered.note) out.notes.push(rendered.note)
    return out
  }
  out.rejected.push(name)
  return out
}

async function expandZip(file: Blob, deps: IntakeDeps): Promise<IntakePartial> {
  const out = empty()
  const zip = await JSZip.loadAsync(file)
  const entries = Object.values(zip.files).filter(
    (e) => !e.dir && !e.name.startsWith('__MACOSX'),
  )
  entries.sort((a, b) => a.name.localeCompare(b.name))
  for (const e of entries) {
    const base = e.name.split('/').pop() ?? e.name
    const kind = classifyFile(base, '')
    if (kind === 'zip') continue // nested zips are not extracted
    if (kind === 'unsupported') {
      out.rejected.push(base)
      continue
    }
    const blob = await e.async('blob')
    const part = await blobToItem(blob, base, kind, deps)
    out.items.push(...part.items)
    out.rejected.push(...part.rejected)
    out.notes.push(...part.notes)
  }
  return out
}

/**
 * Expand a list of dropped/picked Files, extracting zips, converting HEIC,
 * and rendering PDFs page-by-page. Each input file forms one sort group
 * (keyed by its filename, carousel-aware); a PDF's pages expand in place at
 * the group's sorted position.
 */
export async function expandFiles(files: File[], deps: IntakeDeps = {}): Promise<IntakeResult> {
  const items: SortItem[] = []
  const rejected: string[] = []
  const notes: string[] = []
  for (const f of files) {
    const kind = classifyFile(f.name, f.type)
    const part = kind === 'zip' ? await expandZip(f, deps) : await blobToItem(f, f.name, kind, deps)
    items.push(...part.items)
    rejected.push(...part.rejected)
    notes.push(...part.notes)
  }
  const sorted = naturalSortByName(items)
  return { sources: sorted.flatMap((i) => i.sources), rejected, notes }
}

/** Extract images from a ClipboardEvent (paste). */
export async function fromClipboard(ev: ClipboardEvent): Promise<SourceImage[]> {
  const items = Array.from(ev.clipboardData?.items ?? [])
  const images = items.filter((i) => i.kind === 'file' && i.type.startsWith('image/'))
  const out: SourceImage[] = []
  let n = 1
  for (const item of images) {
    const file = item.getAsFile()
    if (!file) continue
    const ext = file.type.split('/')[1] || 'png'
    out.push(await toSource(file, `pasted-${n++}.${ext}`))
  }
  return naturalSortByName(out)
}

/** Extract files from a drop event (files, folders via entries, zips). */
export async function fromDrop(ev: DragEvent, deps: IntakeDeps = {}): Promise<IntakeResult> {
  const items = Array.from(ev.dataTransfer?.items ?? [])
  const files: File[] = []

  const entries = items
    .map((i) => (i as DataTransferItem & { webkitGetAsEntry?: () => FileSystemEntry | null }).webkitGetAsEntry?.())
    .filter((e): e is FileSystemEntry => !!e)

  if (entries.length > 0) {
    for (const entry of entries) {
      await walkEntry(entry, files)
    }
  } else {
    files.push(...Array.from(ev.dataTransfer?.files ?? []))
  }
  return expandFiles(files, deps)
}

function walkEntry(entry: FileSystemEntry, out: File[]): Promise<void> {
  return new Promise((resolve) => {
    if (entry.isFile) {
      ;(entry as FileSystemFileEntry).file((f) => {
        out.push(f)
        resolve()
      }, () => resolve())
    } else if (entry.isDirectory) {
      const reader = (entry as FileSystemDirectoryEntry).createReader()
      const readAll = () => {
        reader.readEntries(async (batch) => {
          if (batch.length === 0) return resolve()
          for (const e of batch) await walkEntry(e, out)
          readAll() // readEntries returns max 100 per call
        }, () => resolve())
      }
      readAll()
    } else {
      resolve()
    }
  })
}

/**
 * Instagram-aware aspect detection, returned as a locale-neutral code —
 * the UI maps it to a translated hint (mz.igSquare / mz.igFeed).
 */
export function instagramHint(images: SourceImage[]): 'square' | 'feed45' | null {
  if (images.length === 0 || images.some((i) => !i.width || !i.height)) return null
  const allSquare = images.every((i) => Math.abs(i.width / i.height - 1) < 0.02)
  const all45 = images.every((i) => Math.abs(i.width / i.height - 0.8) < 0.03)
  if (allSquare) return 'square'
  if (all45) return 'feed45'
  return null
}

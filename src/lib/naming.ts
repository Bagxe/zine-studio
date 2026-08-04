/**
 * Output file naming for downloads: sanitization, automatic _print/_digital
 * suffixes, and default-name derivation from uploaded inputs.
 */
import { carouselGroupStem } from './naturalSort'

export type OutputSuffix = 'print' | 'digital'

const ILLEGAL = /[<>:"/\\|?*]/g
const MAX_LEN = 80

/** Make a string safe as a file name: strip illegal chars, spaces → underscores. */
export function sanitizeName(raw: string): string {
  const noControls = raw
    .split('')
    .filter((c) => c.charCodeAt(0) >= 32 && c.charCodeAt(0) !== 127)
    .join('')
  let s = noControls
    .replace(ILLEGAL, '')
    .replace(/\s+/g, '_')
    .replace(/^[._]+|[._]+$/g, '')
  if (s.length > MAX_LEN) s = s.slice(0, MAX_LEN).replace(/[._]+$/g, '')
  return s
}

/** Final download file name: `<name>_<suffix>.pdf`, never doubling the suffix. */
export function withSuffix(rawName: string, suffix: OutputSuffix): string {
  const s = sanitizeName(rawName) || 'zine'
  if (s.toLowerCase().endsWith(`_${suffix}`)) return `${s}.pdf`
  return `${s}_${suffix}.pdf`
}

/** Default base name from a carousel-style image name (group stem, case preserved). */
export function defaultFromCarousel(filename: string): string {
  return sanitizeName(carouselGroupStem(filename)) || 'zine'
}

/** Default base name from an imposition PDF file name (extension stripped). */
export function defaultFromPdf(filename: string): string {
  return sanitizeName(filename.replace(/\.pdf$/i, '')) || 'zine'
}

/**
 * Shared pdfjs-dist setup: registers the bundled worker once and re-exports
 * the library. Import pdfjs from here (never from 'pdfjs-dist' directly) so
 * the worker is always configured before getDocument() runs.
 */
import * as pdfjs from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

/** 300 DPI equivalent: pdf.js renders at 72 DPI by default. */
export const RENDER_SCALE_300 = 300 / 72

export { pdfjs }

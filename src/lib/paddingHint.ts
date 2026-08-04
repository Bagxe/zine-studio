/**
 * Plain-language guidance for padded blank pages. Physical printing pads the
 * page count up to complete sheets; the extra slots print as blank pages.
 * The counts come from the imposition engine (buildZinePlan.paddedCount and
 * pagesPerSheet) — this module only computes the numbers; the UI words them
 * via the i18n dictionary (mz.pad.* keys) so they translate.
 */

export interface PaddingHint {
  /** Current page count. */
  pages: number
  /** Padded print count. */
  printsAs: number
  /** Pages that will print blank. */
  blanks: number
  /** Images to add to fill sheets exactly. */
  add: number
  /**
   * Images to remove to drop back to the previous complete block, or null
   * when that would fall below one full sheet (the format's minimum).
   */
  remove: number | null
}

export function paddingHint(
  pages: number,
  paddedCount: number,
  pagesPerSheet: number,
): PaddingHint | null {
  if (pages <= 0 || paddedCount <= pages) return null
  const blanks = paddedCount - pages
  const prevBlock = Math.floor(pages / pagesPerSheet) * pagesPerSheet
  const remove = prevBlock >= pagesPerSheet ? pages - prevBlock : null
  return { pages, printsAs: paddedCount, blanks, add: blanks, remove }
}

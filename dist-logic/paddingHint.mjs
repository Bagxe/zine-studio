// src/lib/paddingHint.ts
function paddingHint(pages, paddedCount, pagesPerSheet) {
  if (pages <= 0 || paddedCount <= pages) return null;
  const blanks = paddedCount - pages;
  const prevBlock = Math.floor(pages / pagesPerSheet) * pagesPerSheet;
  const remove = prevBlock >= pagesPerSheet ? pages - prevBlock : null;
  return { pages, printsAs: paddedCount, blanks, add: blanks, remove };
}
export {
  paddingHint
};

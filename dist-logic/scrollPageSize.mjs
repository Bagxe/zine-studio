// src/lib/scrollPageSize.ts
var SCROLL_DPI = 300;
var SCROLL_MIN_IN = 3;
var SCROLL_MAX_IN = 24;
var SCROLL_FIXED_PAGE = { w: 5.5 * 72, h: 8.5 * 72 };
function scrollPageSize(pxW, pxH) {
  if (!(pxW > 0) || !(pxH > 0)) return { ...SCROLL_FIXED_PAGE };
  let wIn = pxW / SCROLL_DPI;
  let hIn = pxH / SCROLL_DPI;
  const long = Math.max(wIn, hIn);
  if (long > SCROLL_MAX_IN) {
    const s = SCROLL_MAX_IN / long;
    wIn *= s;
    hIn *= s;
  } else if (long < SCROLL_MIN_IN) {
    const s = SCROLL_MIN_IN / long;
    wIn *= s;
    hIn *= s;
  }
  return { w: wIn * 72, h: hIn * 72 };
}
function scrollPageGeom(pxW, pxH) {
  const { w, h } = scrollPageSize(pxW, pxH);
  return { w, h, draw: { x: 0, y: 0, width: w, height: h } };
}
function fixedScrollGeom() {
  const { w, h } = SCROLL_FIXED_PAGE;
  return { w, h, draw: { x: 0, y: 0, width: w, height: h } };
}
export {
  SCROLL_DPI,
  SCROLL_FIXED_PAGE,
  SCROLL_MAX_IN,
  SCROLL_MIN_IN,
  fixedScrollGeom,
  scrollPageGeom,
  scrollPageSize
};

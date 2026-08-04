// src/lib/naturalSort.ts
var STEM_EXT = /^(.*)\.([^.]+)$/;
var TRAILING_INDEX = /^(.*)_(\d+)$/;
function carouselGroupStem(name) {
  const stem = STEM_EXT.exec(name)?.[1] ?? name;
  const m = TRAILING_INDEX.exec(stem);
  return m && m[1].length > 0 ? m[1] : stem;
}

// src/lib/naming.ts
var ILLEGAL = /[<>:"/\\|?*]/g;
var MAX_LEN = 80;
function sanitizeName(raw) {
  const noControls = raw.split("").filter((c) => c.charCodeAt(0) >= 32 && c.charCodeAt(0) !== 127).join("");
  let s = noControls.replace(ILLEGAL, "").replace(/\s+/g, "_").replace(/^[._]+|[._]+$/g, "");
  if (s.length > MAX_LEN) s = s.slice(0, MAX_LEN).replace(/[._]+$/g, "");
  return s;
}
function withSuffix(rawName, suffix) {
  const s = sanitizeName(rawName) || "zine";
  if (s.toLowerCase().endsWith(`_${suffix}`)) return `${s}.pdf`;
  return `${s}_${suffix}.pdf`;
}
function defaultFromCarousel(filename) {
  return sanitizeName(carouselGroupStem(filename)) || "zine";
}
function defaultFromPdf(filename) {
  return sanitizeName(filename.replace(/\.pdf$/i, "")) || "zine";
}
export {
  defaultFromCarousel,
  defaultFromPdf,
  sanitizeName,
  withSuffix
};

// src/lib/naturalSort.ts
function naturalCompare(a, b) {
  const ax = a.toLowerCase().match(/\d+|\D+/g) ?? [];
  const bx = b.toLowerCase().match(/\d+|\D+/g) ?? [];
  const len = Math.min(ax.length, bx.length);
  for (let i = 0; i < len; i++) {
    const an = /^\d+$/.test(ax[i]);
    const bn = /^\d+$/.test(bx[i]);
    if (an && bn) {
      const diff = parseInt(ax[i], 10) - parseInt(bx[i], 10);
      if (diff !== 0) return diff;
    } else {
      const cmp = ax[i].localeCompare(bx[i]);
      if (cmp !== 0) return cmp;
    }
  }
  return ax.length - bx.length;
}
var STEM_EXT = /^(.*)\.([^.]+)$/;
var TRAILING_INDEX = /^(.*)_(\d+)$/;
function carouselKey(name) {
  const lower = name.toLowerCase();
  const stem = STEM_EXT.exec(lower)?.[1] ?? lower;
  const m = TRAILING_INDEX.exec(stem);
  if (m && m[1].length > 0) {
    return { group: m[1], index: parseInt(m[2], 10) };
  }
  return { group: stem, index: 0 };
}
function carouselCompare(a, b) {
  const ka = carouselKey(a);
  const kb = carouselKey(b);
  if (ka.group !== kb.group) return naturalCompare(ka.group, kb.group);
  return ka.index - kb.index;
}
function carouselGroupStem(name) {
  const stem = STEM_EXT.exec(name)?.[1] ?? name;
  const m = TRAILING_INDEX.exec(stem);
  return m && m[1].length > 0 ? m[1] : stem;
}
function naturalSortByName(items) {
  return [...items].sort((a, b) => carouselCompare(a.name, b.name));
}
export {
  carouselCompare,
  carouselGroupStem,
  naturalCompare,
  naturalSortByName
};

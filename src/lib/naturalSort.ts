/**
 * Natural (alphanumeric) filename comparison so that e.g. Instagram carousel
 * downloads like img2.jpg, img10.jpg keep their intended order.
 */
export function naturalCompare(a: string, b: string): number {
  const ax = a.toLowerCase().match(/\d+|\D+/g) ?? []
  const bx = b.toLowerCase().match(/\d+|\D+/g) ?? []
  const len = Math.min(ax.length, bx.length)
  for (let i = 0; i < len; i++) {
    const an = /^\d+$/.test(ax[i])
    const bn = /^\d+$/.test(bx[i])
    if (an && bn) {
      const diff = parseInt(ax[i], 10) - parseInt(bx[i], 10)
      if (diff !== 0) return diff
    } else {
      const cmp = ax[i].localeCompare(bx[i])
      if (cmp !== 0) return cmp
    }
  }
  return ax.length - bx.length
}

/**
 * Instagram-carousel-aware ordering.
 *
 * Carousel downloads look like `name.jpg` (slide 1, NO trailing number) then
 * `name_1.jpg`, `name_2.jpg`, ... `name_N.jpg`. A naive token sort can place
 * `name_1.jpg` before `name.jpg` (the "z.jpg" vs "z" token problem), so we
 * sort explicitly:
 *   1. group key = filename stem with any trailing `_N` suffix stripped
 *      (compared with natural sort, so different groups interleave sanely)
 *   2. within a group: unnumbered file = index 0, `_N` file = index N
 */
const STEM_EXT = /^(.*)\.([^.]+)$/
const TRAILING_INDEX = /^(.*)_(\d+)$/

function carouselKey(name: string): { group: string; index: number } {
  const lower = name.toLowerCase()
  const stem = STEM_EXT.exec(lower)?.[1] ?? lower
  const m = TRAILING_INDEX.exec(stem)
  if (m && m[1].length > 0) {
    return { group: m[1], index: parseInt(m[2], 10) }
  }
  return { group: stem, index: 0 }
}

export function carouselCompare(a: string, b: string): number {
  const ka = carouselKey(a)
  const kb = carouselKey(b)
  if (ka.group !== kb.group) return naturalCompare(ka.group, kb.group)
  return ka.index - kb.index
}

/**
 * Case-preserving group stem of a carousel-style filename: the stem with any
 * trailing `_N` suffix removed ("name_3.jpg" → "name"). Useful for deriving
 * output file names.
 */
export function carouselGroupStem(name: string): string {
  const stem = STEM_EXT.exec(name)?.[1] ?? name
  const m = TRAILING_INDEX.exec(stem)
  return m && m[1].length > 0 ? m[1] : stem
}

export function naturalSortByName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => carouselCompare(a.name, b.name))
}

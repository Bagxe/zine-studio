/**
 * Manual page arrangement for Digital Scroll: pure order/rotation logic for
 * the "Adjust manually" arrange tool. Canvas/DOM rotation lives in the
 * component; everything here is node-testable.
 *
 * Model: a base page list (computed by serpentine split, grid de-imposition,
 * or image intake order) plus optional manual overrides —
 *   order: permutation of base indices in scroll order (null = detected)
 *   rot:   sparse map base index -> clockwise degrees (0/90/180/270)
 */

/** Normalize any angle to 0/90/180/270-style degrees in [0, 360). */
export function normDeg(deg: number): number {
  return ((Math.round(deg) % 360) + 360) % 360
}

/** Accumulate a rotation step (e.g. +90 per click), normalized mod 360. */
export function addRotation(current: number, delta: number): number {
  return normDeg(normDeg(current) + delta)
}

/** The identity order for n base pages. */
export function identityOrder(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i)
}

/** True when the order is absent or the identity (nothing manually changed). */
export function isIdentityOrder(order: number[] | null): boolean {
  if (order === null) return true
  return order.every((v, i) => v === i)
}

/** Move the item at `from` to position `to` (drag-to-reorder semantics). */
export function moveItem<T>(arr: T[], from: number, to: number): T[] {
  if (from < 0 || from >= arr.length || to < 0 || to >= arr.length || from === to) return [...arr]
  const next = [...arr]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

/**
 * Apply a manual order to a base list. Null/identity order returns a shallow
 * copy of the base. Out-of-range indices are skipped defensively.
 */
export function applyOrder<T>(base: T[], order: number[] | null): T[] {
  if (order === null) return [...base]
  const out: T[] = []
  for (const i of order) if (i >= 0 && i < base.length) out.push(base[i])
  return out
}

/** Rotation for a base index (0 when untouched). */
export function rotationFor(rot: Record<number, number> | null, index: number): number {
  return normDeg(rot?.[index] ?? 0)
}

/** True when any manual override is in effect (order or rotation). */
export function isModified(order: number[] | null, rot: Record<number, number> | null): boolean {
  return !isIdentityOrder(order) || Object.values(rot ?? {}).some((d) => normDeg(d) !== 0)
}

/** Dimensions after rotating w×h by deg (90/270 swap the axes). */
export function rotatedDims(w: number, h: number, deg: number): { w: number; h: number } {
  const d = normDeg(deg)
  return d === 90 || d === 270 ? { w: h, h: w } : { w, h }
}

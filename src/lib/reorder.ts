/**
 * Pure helpers for one-step reorder ("nudge") controls — the touch/keyboard
 * fallback for HTML5 drag-and-drop. The move itself is moveItem from
 * manualArrange; this module only owns the edge-clamping decision.
 */

/**
 * Target index for nudging the item at `index` by `dir` (-1/+1), or null when
 * the move would leave the list (button should be disabled).
 */
export function nudgeTarget(index: number, dir: -1 | 1, length: number): number | null {
  if (index < 0 || index >= length) return null
  const to = index + dir
  return to < 0 || to >= length ? null : to
}

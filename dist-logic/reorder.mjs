// src/lib/reorder.ts
function nudgeTarget(index, dir, length) {
  if (index < 0 || index >= length) return null;
  const to = index + dir;
  return to < 0 || to >= length ? null : to;
}
export {
  nudgeTarget
};

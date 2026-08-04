// src/lib/manualArrange.ts
function normDeg(deg) {
  return (Math.round(deg) % 360 + 360) % 360;
}
function addRotation(current, delta) {
  return normDeg(normDeg(current) + delta);
}
function identityOrder(n) {
  return Array.from({ length: n }, (_, i) => i);
}
function isIdentityOrder(order) {
  if (order === null) return true;
  return order.every((v, i) => v === i);
}
function moveItem(arr, from, to) {
  if (from < 0 || from >= arr.length || to < 0 || to >= arr.length || from === to) return [...arr];
  const next = [...arr];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}
function applyOrder(base, order) {
  if (order === null) return [...base];
  const out = [];
  for (const i of order) if (i >= 0 && i < base.length) out.push(base[i]);
  return out;
}
function rotationFor(rot, index) {
  return normDeg(rot?.[index] ?? 0);
}
function isModified(order, rot) {
  return !isIdentityOrder(order) || Object.values(rot ?? {}).some((d) => normDeg(d) !== 0);
}
function rotatedDims(w, h, deg) {
  const d = normDeg(deg);
  return d === 90 || d === 270 ? { w: h, h: w } : { w, h };
}
export {
  addRotation,
  applyOrder,
  identityOrder,
  isIdentityOrder,
  isModified,
  moveItem,
  normDeg,
  rotatedDims,
  rotationFor
};

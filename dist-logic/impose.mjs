// src/lib/impose.ts
function serpentineOrder(numSheets) {
  const steps = [];
  for (let i = 1; i <= numSheets; i++) {
    steps.push({ sheet: i, half: i % 2 === 1 ? "R" : "L" });
  }
  for (let i = numSheets; i >= 1; i--) {
    steps.push({ sheet: i, half: i % 2 === 1 ? "L" : "R" });
  }
  return steps;
}
export {
  serpentineOrder
};

/// <reference types="vite/client" />

function clampViteenvdBounds(val, min = 0, max = 100) {
  const num = Number(val);
  if (Number.isNaN(num)) return min;
  return Math.min(max, Math.max(min, num));
}

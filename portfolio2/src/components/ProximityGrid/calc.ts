export const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export const invLerp = (a: number, b: number, v: number) => (v - a) / (b - a);

export const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

export function falloff(distancePx: number, radiusPx: number) {
  if (radiusPx <= 0) return 0;
  const t = clamp(1 - invLerp(0, radiusPx, distancePx), 0, 1);
  return easeOutQuad(t); // smoother near the pointer
}

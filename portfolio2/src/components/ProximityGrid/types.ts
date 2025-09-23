export type ProximityGridProps = {
  rows?: number; // default 10
  cols?: number; // default 16
  cellSizePx?: number; // default 24
  gapPx?: number; // default 8
  radiusPx?: number; // distance of influence; default 160
  maxScale?: number; // default 1.6
  maxTranslatePx?: number; // default 6
  baseColorHex?: `#${string}`; // default '#1a1a1a'
  hotColorHex?: `#${string}`; // default '#3f8cff'
  className?: string; // optional wrapper className
  ariaLabel?: string; // accessibility
};

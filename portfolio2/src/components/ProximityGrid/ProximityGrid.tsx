"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import s from "./styles.module.css";

export type ProximityGridProps = {
  /** base cell size and spacing */
  cellSizePx?: number; // default 20
  gapPx?: number; // default 8
  /** proximity behavior */
  radiusPx?: number; // default 220
  maxScale?: number; // default 1.5
  maxTranslatePx?: number; // default 6
  /** colors */
  baseColorHex?: `#${string}`; // default '#0e0e0e'
  hotColorHex?: `#${string}`; // default '#3f8cff'
  /** accessibility */
  ariaLabel?: string;
  className?: string;
};

type CellMeta = { el: HTMLDivElement; cx: number; cy: number };

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));
const invLerp = (a: number, b: number, v: number) => (v - a) / (b - a);
const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
const falloff = (d: number, r: number) => {
  if (r <= 0) return 0;
  const t = clamp(1 - invLerp(0, r, d), 0, 1);
  return easeOutQuad(t);
};

export default function ProximityGrid({
  cellSizePx = 20,
  gapPx = 8,
  radiusPx = 220,
  maxScale = 1.5,
  maxTranslatePx = 6,
  baseColorHex = "#0e0e0e",
  hotColorHex = "#3f8cff",
  ariaLabel = "Interactive proximity grid",
  className,
}: ProximityGridProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const cellsRef = useRef<CellMeta[]>([]);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // responsive rows/cols computed from container size
  const [dims, setDims] = useState({ rows: 12, cols: 20 });

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const l = () => setPrefersReduced(m.matches);
    l();
    m.addEventListener?.("change", l);
    return () => m.removeEventListener?.("change", l);
  }, []);

  // ResizeObserver -> compute rows/cols to fill the container
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      const step = cellSizePx + gapPx;
      const cols = Math.max(4, Math.floor((r.width + gapPx) / step));
      const rows = Math.max(4, Math.floor((r.height + gapPx) / step));
      setDims({ rows, cols });
      // re-measure cell centers on size change (next effect handles it)
      queueFrame();
    });
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellSizePx, gapPx]);

  // Build style (grid template) from computed rows/cols
  const style = useMemo<React.CSSProperties>(
    () => ({
      gridTemplateColumns: `repeat(${dims.cols}, ${cellSizePx}px)`,
      gridTemplateRows: `repeat(${dims.rows}, ${cellSizePx}px)`,
      gap: `${gapPx}px`,
      ["--cell-size" as any]: `${cellSizePx}px`,
      ["--cell-base" as any]: baseColorHex,
    }),
    [dims, cellSizePx, gapPx, baseColorHex]
  );

  const count = dims.rows * dims.cols;
  const ids = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count]
  );

  // After each render that changes cell count/size, measure centers
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const children = Array.from(
      root.querySelectorAll<HTMLDivElement>("[data-cell='1']")
    );
    cellsRef.current = children.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        el,
        cx: r.left - rect.left + r.width / 2,
        cy: r.top - rect.top + r.height / 2,
      };
    });
  }, [count, cellSizePx, gapPx]);

  // Listen globally so background can be pointer-events:none and still react
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const root = ref.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      queueFrame();
    };
    const onPointerLeave = () => {
      pointerRef.current = null;
      queueFrame();
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const root = ref.current;
      if (!t || !root) return;
      const rect = root.getBoundingClientRect();
      pointerRef.current = {
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
      };
      queueFrame();
    };
    const onTouchEnd = () => {
      pointerRef.current = null;
      queueFrame();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const queueFrame = () => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      draw();
    });
  };

  const mixHex = (a: `#${string}`, b: `#${string}`, t: number) => {
    const p = (h: string) => parseInt(h, 16);
    const f = (n: number) => clamp(n, 0, 255).toString(16).padStart(2, "0");
    const A = { r: p(a.slice(1, 3)), g: p(a.slice(3, 5)), b: p(a.slice(5, 7)) };
    const B = { r: p(b.slice(1, 3)), g: p(b.slice(3, 5)), b: p(b.slice(5, 7)) };
    const m = (x: number, y: number) => Math.round(x + (y - x) * t);
    return `#${f(m(A.r, B.r))}${f(m(A.g, B.g))}${f(m(A.b, B.b))}`;
  };

  const draw = () => {
    const cells = cellsRef.current;
    const p = pointerRef.current;

    if (prefersReduced || !p) {
      for (const c of cells) {
        c.el.style.transform = "translate3d(0px,0px,0px) scale(1)";
        c.el.style.background = baseColorHex;
      }
      return;
    }

    for (const c of cells) {
      const dx = c.cx - p.x;
      const dy = c.cy - p.y;
      const dist = Math.hypot(dx, dy);
      const t = falloff(dist, radiusPx);
      const inv = dist ? 1 / dist : 0;

      const tx = -dx * inv * (maxTranslatePx * t);
      const ty = -dy * inv * (maxTranslatePx * t);
      const sc = 1 + (maxScale - 1) * t;

      c.el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(
        2
      )}px, 0) scale(${sc.toFixed(3)})`;
      c.el.style.background = mixHex(baseColorHex, hotColorHex, t);
    }
  };

  return (
    <div
      ref={ref}
      className={`${s.root} ${className ?? ""}`}
      style={style}
      role="img"
      aria-label={ariaLabel}
    >
      {ids.map((i) => (
        <div key={i} data-cell="1" className={s.cell} aria-hidden="true" />
      ))}
    </div>
  );
}

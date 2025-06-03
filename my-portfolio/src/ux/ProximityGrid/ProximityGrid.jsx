import React, { useRef, useEffect, useState } from "react";
import "./PGStyles.css";

const DOT_SIZE = 8;
const DOT_SPACING = 80; // sparse, for perf
const IMPACT_RADIUS = 120;

export default function ProximityGrid({ dark }) {
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [mouse, setMouse] = useState(null);

  // Recalculate grid on resize
  useEffect(() => {
    const updateGrid = () => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      setGridSize({
        cols: Math.ceil(rect.width / DOT_SPACING),
        rows: Math.ceil(rect.height / DOT_SPACING)
      });
    };
    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  // Mouse tracking at window level, but set position relative to grid
  useEffect(() => {
    const handleMove = (e) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        setMouse({ x, y });
      } else {
        setMouse(null);
      }
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", () => setMouse(null));
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", () => setMouse(null));
    };
  }, []);

  // Build dots
  const dots = [];
  for (let y = 0; y < gridSize.rows; y++) {
    for (let x = 0; x < gridSize.cols; x++) {
      const px = x * DOT_SPACING + DOT_SPACING / 2;
      const py = y * DOT_SPACING + DOT_SPACING / 2;
      let proximity = 0;
      if (mouse) {
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < IMPACT_RADIUS) {
          proximity = 1 - dist / IMPACT_RADIUS;
        }
      }
      dots.push(
        <div
          key={`${x}-${y}`}
          className={`proximity-dot ${dark ? "dot-dark" : "dot-light"}`}
          style={{
            left: px - DOT_SIZE / 2,
            top: py - DOT_SIZE / 2,
            width: DOT_SIZE + proximity * 10,
            height: DOT_SIZE + proximity * 10,
            opacity: 0.27 + 0.54 * proximity,
            boxShadow: proximity
              ? dark
                ? `0 0 24px 12px #fff7`
                : `0 0 28px 16px #0003`
              : "none",
            background: dark ? "#090f19" : "#f5f5f4",
            transition:
              "width 0.13s, height 0.13s, opacity 0.13s, box-shadow 0.13s",
          }}
        />
      );
    }
  }

  // Cursor light/shadow
  const cursorEffect = mouse ? (
    <div
      className={`proximity-cursorEffect ${dark ? "effect-light" : "effect-shadow"}`}
      style={{
        left: mouse.x,
        top: mouse.y,
      }}
    />
  ) : null;

  return (
    <div
      ref={gridRef}
      className="proximity-grid-bg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {cursorEffect}
      {dots}
    </div>
  );
}

import React, { useRef, useEffect, useState, useMemo } from "react";
import "./PGStyles.css";

const DOT_SIZE = 8;
const DOT_SPACING = 80;
const IMPACT_RADIUS = 180;
const THROTTLE_MS = 16;
const SHADOW_WIDTH_FACTOR = 2.5;

export default function ProximityGrid({ dark }) {
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [mouse, setMouse] = useState(null);

  // Recalculate grid on resize with debounce
  useEffect(() => {
    const updateGrid = () => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      setGridSize({
        cols: Math.ceil(rect.width / DOT_SPACING),
        rows: Math.ceil(rect.height / DOT_SPACING),
      });
    };

    updateGrid();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateGrid, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse tracking at window level with throttle
  useEffect(() => {
    if (!gridRef.current) return;

    let lastUpdate = 0;
    let ticking = false;
    let cachedMouse = null;

    const updatePosition = (e) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        cachedMouse = { x, y };
      } else {
        cachedMouse = null;
      }
      if (!ticking) {
        requestAnimationFrame(() => {
          setMouse(cachedMouse);
          ticking = false;
        });
        ticking = true;
      }
    };

    const throttledMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate >= THROTTLE_MS) {
        lastUpdate = now;
        updatePosition(e);
      }
    };

    const handleMouseLeave = () => {
      cachedMouse = null;
      requestAnimationFrame(() => {
        setMouse(null);
      });
    };

    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Dots
  const dots = useMemo(() => {
    const dotsArray = [];
    for (let y = 0; y < gridSize.rows; y++) {
      for (let x = 0; x < gridSize.cols; x++) {
        const px = x * DOT_SPACING + DOT_SPACING / 2;
        const py = y * DOT_SPACING + DOT_SPACING / 2;

        let proximity = 0;
        let angle = 0;
        let dx = 0;
        let dy = 0;

        if (mouse) {
          dx = px - mouse.x;
          dy = py - mouse.y;
          const manhattanDist = Math.abs(dx) + Math.abs(dy);
          if (manhattanDist < IMPACT_RADIUS * 1.5) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < IMPACT_RADIUS) {
              proximity = 1 - dist / IMPACT_RADIUS;
              angle = Math.atan2(dy, dx);
            }
          }
        }

        const dotSize = DOT_SIZE + proximity * 6;

        dotsArray.push(
          <div
            key={`${x}-${y}`}
            className="proximity-dot-container"
            style={{
              left: px,
              top: py,
              width: 0,
              height: 0,
            }}
          >
            <div
              className={`proximity-dot ${dark ? "dot-dark" : "dot-light"}`}
              style={{
                left: -dotSize / 2,
                top: -dotSize / 2,
                width: dotSize,
                height: dotSize,
                opacity: 0.3 + 0.5 * proximity,
                transform: proximity
                  ? `translateZ(${proximity * 5}px) 
                     rotate3d(
                      ${mouse ? (py - mouse.y) * 0.01 : 0}, 
                      ${mouse ? -(px - mouse.x) * 0.01 : 0}, 
                      0, 
                      ${proximity * 15}deg)`
                  : "none",
                background: dark
                  ? `radial-gradient(circle at ${
                      50 - Math.cos(angle) * 20 * proximity
                    }% ${
                      50 - Math.sin(angle) * 20 * proximity
                    }%, #2A2E36, #1A1E26)`
                  : `radial-gradient(circle at ${
                      50 + Math.cos(angle) * 20 * proximity
                    }% ${
                      50 + Math.sin(angle) * 20 * proximity
                    }%, #b5a583, #a59573)`,
                willChange:
                  proximity > 0
                    ? "transform, opacity, width, height, background"
                    : "auto",
              }}
            >
              <div
                className={`proximity-highlight ${
                  dark ? "highlight-dark" : "highlight-light"
                }`}
                style={{
                  opacity: proximity * 0.9,
                  transform: `rotate(${-angle}rad)`,
                }}
              />
            </div>
            <div
              className={`proximity-shadow ${
                dark ? "shadow-dark" : "shadow-light"
              }`}
              style={{
                left: (-dotSize * SHADOW_WIDTH_FACTOR) / 2,
                top: 0,
                width: dotSize * SHADOW_WIDTH_FACTOR,
                opacity: proximity * (dark ? 0.7 : 0.6),
                transform: `rotate(${angle}rad) scaleY(${proximity * 2.5})`,
              }}
            />
          </div>
        );
      }
    }
    return dotsArray;
  }, [gridSize.rows, gridSize.cols, mouse, dark]);

  // *** TIGHTER, CLEANER ORB ***
  const cursorEffect = useMemo(() => {
    if (!mouse) return null;
    // Orb size is now *smaller* and centered more precisely
    const orbSize = dark ? 130 : 130;
    const orbMargin = orbSize / 2;
    return (
      <div
        className={`proximity-cursorEffect ${
          dark ? "effect-shadow" : "effect-light"
        }`}
        style={{
          left: mouse.x,
          top: mouse.y,
          width: orbSize,
          height: orbSize,
          marginLeft: -orbMargin,
          marginTop: -orbMargin,
          opacity: dark ? 0.55 : 0.19,
          zIndex: 0, // put behind the dots
          filter: dark
            ? `blur(16px) brightness(1.06)`
            : `blur(14px) brightness(1)`,
          pointerEvents: "none",
          willChange: "left, top, width, height, filter, opacity",
        }}
      />
    );
  }, [mouse, dark]);

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

import React, { useRef, useEffect, useState } from "react";
import "./PGStyles.css";

// Will be set dynamically based on screen size
const DEFAULT_DOT_SPACING = 80;
const MOBILE_DOT_SPACING = 120;
// Constants for performance optimization
const VELOCITY_THRESHOLD = 0.5; // pixels per ms
const IMPACT_RADIUS = 180;

export default function ProximityGrid({ dark }) {
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [dotSpacing, setDotSpacing] = useState(DEFAULT_DOT_SPACING);
  // Use refs for tracking raw and smoothed mouse positions
  const mouseRef = useRef(null);
  const displayedMouseRef = useRef(null);
  const lastMousePosRef = useRef(null);
  const mouseVelocityRef = useRef({ x: 0, y: 0 });
  const lastUpdateTimeRef = useRef(Date.now());
  const frameCountRef = useRef(0);
  
  // State only used for triggering renders at animation frame rate
  const [mouse, setMouse] = useState(null);

  // Set dot spacing based on screen width and recalculate grid on resize
  useEffect(() => {
    const updateDotSpacing = () => {
      // Use smaller dot spacing for mobile screens
      if (window.innerWidth <= 600) {
        setDotSpacing(MOBILE_DOT_SPACING);
      } else {
        setDotSpacing(DEFAULT_DOT_SPACING);
      }
    };
    
    const updateGrid = () => {
      if (!gridRef.current) return;
      updateDotSpacing();
      const rect = gridRef.current.getBoundingClientRect();
      setGridSize({
        cols: Math.ceil(rect.width / dotSpacing),
        rows: Math.ceil(rect.height / dotSpacing),
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
  }, [dotSpacing]);

  // Mouse tracking with RAF for efficient updates
  useEffect(() => {
    if (!gridRef.current) return;

    let rafId = null;

    // Function to update mouse position with velocity tracking
    const updateMouseRef = (e) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const now = Date.now();
      const timeDelta = now - lastUpdateTimeRef.current;
      
      // Update the ref (doesn't trigger render)
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        // Store previous position before updating
        if (mouseRef.current) {
          lastMousePosRef.current = { ...mouseRef.current };
        }
        
        // Update current position
        mouseRef.current = { x, y };
        
        // Calculate velocity if we have a previous position
        if (lastMousePosRef.current && timeDelta > 0) {
          const distX = mouseRef.current.x - lastMousePosRef.current.x;
          const distY = mouseRef.current.y - lastMousePosRef.current.y;
          
          // Pixels per millisecond
          mouseVelocityRef.current = {
            x: distX / timeDelta,
            y: distY / timeDelta
          };
        }
        
        lastUpdateTimeRef.current = now;
      } else {
        mouseRef.current = null;
      }
    };

    // Animation loop for cursor and dots
    const animate = () => {
      frameCountRef.current = (frameCountRef.current + 1) % 60;
      
      // Apply smooth tracking for cursor effect
      if (mouseRef.current) {
        // Initialize displayed position if needed
        if (!displayedMouseRef.current) {
          displayedMouseRef.current = { ...mouseRef.current };
        }
        
        // Calculate speed for adaptive smoothing
        let speed = 0;
        if (mouseVelocityRef.current) {
          speed = Math.sqrt(
            mouseVelocityRef.current.x ** 2 + 
            mouseVelocityRef.current.y ** 2
          );
        }
        
        // Fast movements = less smoothing (more direct tracking)
        // Slow/precise movements = more smoothing (more stable)
        const springFactor = speed > VELOCITY_THRESHOLD ? 0.6 : 0.2;
        
        // Apply spring physics for smooth following
        displayedMouseRef.current = {
          x: displayedMouseRef.current.x + 
             (mouseRef.current.x - displayedMouseRef.current.x) * springFactor,
          y: displayedMouseRef.current.y + 
             (mouseRef.current.y - displayedMouseRef.current.y) * springFactor
        };
        
        // Update state to trigger render
        setMouse(displayedMouseRef.current);
      } else if (displayedMouseRef.current) {
        // Fade out cursor when mouse leaves
        displayedMouseRef.current = null;
        setMouse(null);
      }
      
      // Continue animation loop
      rafId = requestAnimationFrame(animate);
    };
    
    // Start animation loop
    rafId = requestAnimationFrame(animate);

    // Handle mouse movement (passive for performance)
    const handleMouseMove = (e) => {
      updateMouseRef(e);
    };

    // Handle mouse leaving the window
    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Get proximity level class (0-3) based on proximity value
  const getProximityLevel = (proximity) => {
    if (proximity <= 0) return 0;
    if (proximity < 0.33) return 1;
    if (proximity < 0.66) return 2;
    return 3;
  };
  
  // Get shadow size class based on proximity value
  const getShadowSize = (proximity) => {
    if (proximity <= 0) return 1;
    if (proximity < 0.33) return 2;
    if (proximity < 0.66) return 3;
    return 4;
  };
  
  // Get shadow opacity class based on proximity value
  const getShadowOpacity = (proximity) => {
    if (proximity <= 0) return 0;
    if (proximity < 0.33) return 1;
    if (proximity < 0.66) return 2;
    return 3;
  };

  // Generate dots directly in render function - optimized with class-based styling
  const renderDots = () => {
    const dotsArray = [];
    
    for (let y = 0; y < gridSize.rows; y++) {
      for (let x = 0; x < gridSize.cols; x++) {
        const px = x * dotSpacing + dotSpacing / 2;
        const py = y * dotSpacing + dotSpacing / 2;

        // Skip update for this dot based on distance and frame count
        // for performance optimization
        let proximity = 0;
        let angle = 0;
        
        if (mouse) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          
          // Quick Manhattan distance check to cull dots far from cursor
          const manhattanDist = Math.abs(dx) + Math.abs(dy);
          
          // Define update frequency based on distance
          const updateFrequency = 
            manhattanDist < IMPACT_RADIUS ? 1 :  // Every frame
            manhattanDist < IMPACT_RADIUS * 1.5 ? 2 :  // Every 2nd frame
            4;  // Every 4th frame
            
          // Skip updates for distant dots based on frame count
          if (frameCountRef.current % updateFrequency !== 0 && manhattanDist >= IMPACT_RADIUS) {
            // For distant dots, we can skip recalculation and just render with default values
            dotsArray.push(
              <div
                key={`${x}-${y}`}
                className="proximity-dot-container"
                style={{ left: px, top: py }}
              >
                <div className={`proximity-dot ${dark ? "dot-dark" : "dot-light"} proximity-level-0`} />
              </div>
            );
            continue;
          }
          
          // For dots that need calculation
          if (manhattanDist < IMPACT_RADIUS * 1.5) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < IMPACT_RADIUS) {
              proximity = 1 - dist / IMPACT_RADIUS;
              angle = Math.atan2(dy, dx);
            }
          }
        }
        
        // Calculate CSS classes based on proximity
        const proximityLevel = getProximityLevel(proximity);
        const shadowSize = getShadowSize(proximity);
        const shadowOpacity = getShadowOpacity(proximity);
        
        dotsArray.push(
          <div
            key={`${x}-${y}`}
            className="proximity-dot-container"
            style={{ left: px, top: py }}
          >
            <div
              className={`proximity-dot ${dark ? "dot-dark" : "dot-light"} proximity-level-${proximityLevel}`}
            >
              {proximity > 0.2 && (
                <div
                  className={`proximity-highlight ${dark ? "highlight-dark" : "highlight-light"}`}
                  style={{
                    opacity: proximity * 0.9,
                    transform: `rotate(${-angle}rad)`,
                  }}
                />
              )}
            </div>
            {proximity > 0.1 && (
              <div
                className={`
                  proximity-shadow 
                  ${dark ? "shadow-dark" : "shadow-light"}
                  shadow-size-${shadowSize}
                  shadow-opacity-${shadowOpacity}
                `}
                style={{
                  transform: `rotate(${angle}rad) scaleY(${proximity * 2.5})`,
                }}
              />
            )}
          </div>
        );
      }
    }
    
    return dotsArray;
  };

  return (
    <div
      ref={gridRef}
      className="proximity-grid-bg"
    >
      {renderDots()}
    </div>
  );
}

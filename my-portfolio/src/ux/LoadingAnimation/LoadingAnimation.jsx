import React, { useRef, useEffect, useState } from "react";
import "./LAStyles.css";

// Background component with mousemove tracking
export function LoaderBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const { left, top, width, height } =
        bgRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      bgRef.current.style.setProperty("--mx", x);
      bgRef.current.style.setProperty("--my", y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="loader-bg" ref={bgRef} />;
}

// Animation component (orb and rings) with dynamic gyroscopic spinning (no mouse response)
export function LoaderAnimation() {
  const [isVisible, setIsVisible] = useState(false); // Start hidden, fade in after mount
  const [_tick, setTick] = useState(0); // Force re-render on animation frames (unused but needed)
  const rootRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Define base angles for each ring
  const baseAngles = {
    1: { x: 30, y: 0 },
    2: { x: 0, y: 55 },
    3: { x: 75, y: 0 },
    4: { x: 0, y: 20 },
  };

  // Current rotation angles for each ring
  const rotationAngles = useRef({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  // For rings with secondary spin axes
  const secondaryAngles = useRef({
    // Rings 1, 2, 3 don't need secondary rotation
    4: 0, // Ring 4 has a second rotation axis
  });

  // Fade-in effect, robust to rapid mount/unmount
  useEffect(() => {
    setIsVisible(false); // Always start hidden
    const fadeInTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 20); // Small delay is safest for CSS transition

    return () => clearTimeout(fadeInTimeout);
  }, []); // Only runs on mount

  // Animation loop for continuous ring rotation
  useEffect(() => {
    // Define ring rotation speeds (in milliseconds for a full 360° rotation)
    // Moved inside useEffect to avoid recreation on each render
    const rotationSpeeds = {
      1: 3100, // 3.1s per rotation
      2: 3800, // 3.8s per rotation
      3: 4500, // 4.5s per rotation
      4: 5200, // 5.2s per rotation
    };
    
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;

      // Update rotation angles for each ring based on their speeds
      for (let ring = 1; ring <= 4; ring++) {
        const degreesPerMs = 360 / rotationSpeeds[ring];
        rotationAngles.current[ring] = elapsed * degreesPerMs;
      }

      // Update secondary angle for ring 4 (slightly slower)
      secondaryAngles.current[4] = elapsed * (360 / (rotationSpeeds[4] * 1.5));

      // Force a re-render to update the DOM with new transform values
      setTick((t) => (t + 1) % 1000); // Prevent potential overflow

      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // No external dependencies now that rotationSpeeds is internal

  // Calculate spin style for each ring - no mouse input
  const getRingStyle = (ringNumber) => {
    const spin = rotationAngles.current[ringNumber];
    const base = baseAngles[ringNumber];

    // Each ring gets a unique spin axis for visual variety
    let transform;

    switch (ringNumber) {
      case 1:
        // Ring 1: Z-axis spin (like a coin on a table)
        transform = `translate(-50%, -50%) rotateZ(${spin}deg) rotateX(${base.x}deg)`;
        break;
      case 2:
        // Ring 2: X-axis spin (like a wheel rolling forward)
        transform = `translate(-50%, -50%) rotateX(${spin}deg) rotateY(${base.y}deg)`;
        break;
      case 3:
        // Ring 3: Y-axis spin (like a steering wheel)
        transform = `translate(-50%, -50%) rotateY(${spin}deg) rotateX(${base.x}deg)`;
        break;
      case 4: {
        // Ring 4: Combined spin (Z+X for complex motion)
        // Secondary angle creates wobbling gyroscope effect
        const secondarySpin = secondaryAngles.current[4];
        transform = `translate(-50%, -50%) rotateZ(${spin}deg) rotateX(${
          secondarySpin / 4
        }deg) rotateY(${base.y}deg)`;
        break;
      }
      default:
        transform = `translate(-50%, -50%)`; // Fallback
    }

    return {
      transform,
    };
  };

  return (
    <div ref={rootRef} className={`loader-root${isVisible ? " visible" : ""}`}>
      <div className="loader-orb" />
      <div className="loader-sphere-ring ring1" style={getRingStyle(1)} />
      <div className="loader-sphere-ring ring2" style={getRingStyle(2)} />
      <div className="loader-sphere-ring ring3" style={getRingStyle(3)} />
      <div className="loader-sphere-ring ring4" style={getRingStyle(4)} />
    </div>
  );
}

// Default export for backward compatibility - combines both background and animation
export default function Loader() {
  return (
    <>
      <LoaderBackground />
      <LoaderAnimation />
    </>
  );
}

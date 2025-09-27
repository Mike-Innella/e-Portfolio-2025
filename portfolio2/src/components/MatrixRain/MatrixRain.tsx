"use client";

import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

interface MatrixRainProps {
  className?: string;
}

export default function MatrixRain({ className }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix rain configuration
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Characters to use in the rain
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    const chars = matrixChars.split("");

    // Hidden messages
    const messages = [
      "HIRE MIKE",
      "10X DEV",
      "TALENTED",
      "WORTH IT",
      "INNOVATOR",
      "MIKE INNELLA",
      "FULL STACK",
      "PROBLEM SOLVER",
      "CREATIVE",
      "DEDICATED"
    ];

    // Track message display
    let messageColumn = Math.floor(Math.random() * (columns - 15));
    let currentMessageIndex = 0;
    let messageCharIndex = 0;
    let messageTimer = 0;
    const messageInterval = 200; // Show message every 200 frames

    // Animation function
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        let color = "#00ffcc";
        let glow = false;

        // Check if we should display a message character
        messageTimer++;
        if (messageTimer > messageInterval) {
          const currentMessage = messages[currentMessageIndex];
          const messageStartCol = messageColumn;
          const messageEndCol = messageStartCol + currentMessage.length;

          if (i >= messageStartCol && i < messageEndCol) {
            const charIndex = i - messageStartCol;
            if (drops[i] > 100 && drops[i] < 120) { // Display message at a specific height
              char = currentMessage[charIndex];
              color = "#1f9ec1"; // Bright cyan for message
              glow = true;
              
              // Move to next message after displaying
              if (charIndex === currentMessage.length - 1) {
                messageTimer = 0;
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                messageColumn = Math.floor(Math.random() * (columns - 15));
              }
            }
          }
        }

        // Apply glow effect for special characters
        if (glow) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 0;
        }

        // Gradient effect based on position
        const opacity = Math.max(0, 1 - (drops[i] * fontSize) / canvas.height);
        
        // Occasional bright characters
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(31, 158, 193, ${opacity})`;
        } else {
          // Parse hex color to RGB
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
        }

        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Move drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5; // Variable speed
      }
    };

    // Start animation
    const animationId = setInterval(draw, 35);

    // Cleanup
    return () => {
      clearInterval(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className || ""}`}
      aria-hidden="true"
    />
  );
}

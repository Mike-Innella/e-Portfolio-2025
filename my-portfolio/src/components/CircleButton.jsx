import React, { useState, useEffect } from "react";

function CircleButton({
  link,
  tooltip,
  // eslint-disable-next-line no-unused-vars
  tooltipPlacement, // Not used with native title, but kept for compatibility
  target,
  onClick,
  className = "",
  style = {},
  size = 2.5,
  children,
}) {
  const ButtonTag = link ? "a" : "button";
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile for larger touch targets
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Calculate size based on device
  const buttonSize = isMobile ? (typeof size === 'number' ? size * 1.2 : size) : size;
  
  const buttonProps = {
    className: `inline-flex items-center justify-center rounded-full border-2 cursor-pointer m-2 p-2 transition-all duration-500 ${className}`,
    style: {
      width: `${buttonSize}rem`,
      height: `${buttonSize}rem`,
      borderColor: "var(--text-color)",
      color: "var(--text-color)",
      backgroundColor: "transparent",
      ...style,
    },
    onMouseOver: (e) => {
      e.currentTarget.style.backgroundColor = "var(--hover-color)";
      e.currentTarget.style.borderColor = "var(--hover-color)";
      e.currentTarget.style.color = "var(--hover-text)";
    },
    onMouseOut: (e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.borderColor = "var(--text-color)";
      e.currentTarget.style.color = "var(--text-color)";
    },
    title: tooltip ?? "",
    onClick,
    ...(link ? { href: link, target } : {}),
  };

  return React.createElement(ButtonTag, buttonProps, children);
}

export default CircleButton;

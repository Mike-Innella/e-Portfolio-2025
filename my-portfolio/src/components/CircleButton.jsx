import React from "react";

function CircleButton({
  link,
  tooltip,
  tooltipPlacement, // Not used with native title, but kept for compatibility
  target,
  onClick,
  className = "",
  style = {},
  size = 1,
  children,
}) {
  const ButtonTag = link ? "a" : "button";
  const buttonProps = {
    className: `inline-flex items-center justify-center rounded-full border-2 border-primary text-primary bg-background cursor-pointer m-2 p-2 transition-all duration-500 hover:text-background hover:bg-primary ${className}`,
    style: { width: `${size}rem`, height: `${size}rem`, ...style },
    title: tooltip ?? "",
    onClick,
    ...(link ? { href: link, target } : {}),
  };

  return React.createElement(ButtonTag, buttonProps, children);
}

export default CircleButton;

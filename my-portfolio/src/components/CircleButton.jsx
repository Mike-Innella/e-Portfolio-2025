import React from "react";

function CircleButton({
  link,
  tooltip,
  tooltipPlacement, // Not used with native title, but kept for compatibility
  target,
  onClick,
  className = "",
  style = {},
  size = 2.5,
  children,
}) {
  const ButtonTag = link ? "a" : "button";
  const buttonProps = {
    className: `inline-flex items-center justify-center rounded-full border-2 cursor-pointer m-2 p-2 transition-all duration-500 ${className}`,
    style: {
      width: `${size}rem`,
      height: `${size}rem`,
      borderColor: "var(--accent-color)",
      color: "var(--accent-color)",
      backgroundColor: "var(--background-color)",
      ...style,
    },
    onMouseOver: (e) => {
      e.currentTarget.style.backgroundColor = "var(--accent-color)";
      e.currentTarget.style.color = "var(--background-color)";
    },
    onMouseOut: (e) => {
      e.currentTarget.style.backgroundColor = "var(--background-color)";
      e.currentTarget.style.color = "var(--accent-color)";
    },
    title: tooltip ?? "",
    onClick,
    ...(link ? { href: link, target } : {}),
  };

  return React.createElement(ButtonTag, buttonProps, children);
}

export default CircleButton;

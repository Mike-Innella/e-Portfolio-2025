import React from "react";
import CircleButton from "../CircleButton";

function activeTransformStyle(angle, arcAngle, isMobile, isRowMenu) {
  if (isRowMenu) {
    return "translateX(rem) translateY(-2rem)";
  } else {
    // ARC LAYOUT (your original)
    const radius = isMobile ? "7rem" : "6rem";
    return `translateY(-2rem) rotate(${angle}deg) translate(${radius}) rotate(${-angle}deg)`;
  }
}

export default function MenuItem({
  tooltip,
  action,
  tooltipPlacement,
  size = 2.7,
  menuActive,
  rotationAngle,
  isMobile,
  isRowMenu,
  icon,
}) {
  // For menu items, we want them to be clickable when the menu is active
  const pointerEvents = menuActive ? "auto" : "none";

  return (
    <CircleButton
      className={`menu-item
      ${
        isRowMenu
          ? "relative transition-all duration-300 text-black dark:text-white"
          : "fixed z-[450] left-8 top-1/2 max-lg:left-4 max-lg:top-16 transition-all duration-300"
      }
      ${menuActive ? "visible opacity-100" : "invisible opacity-0"}
    `}
      tooltip={tooltip}
      onClick={action}
      tooltipPlacement={tooltipPlacement}
      size={size}
      style={{
        transform: menuActive
          ? activeTransformStyle(
              rotationAngle,
              -rotationAngle,
              isMobile,
              isRowMenu
            )
          : "",
        pointerEvents,
      }}
    >
      {icon}
    </CircleButton>
  );
}

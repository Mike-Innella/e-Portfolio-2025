import React from "react";
import CircleButton from "../CircleButton";

function activeTransformStyle(angle1, angle2, isMobile) {
  return `
    translateY(${!isMobile ? "-50%" : "0"})
    rotate(${angle1}deg)
    translate(${isMobile ? 7 : 6}rem)
    rotate(${angle2}deg)
  `;
}

export default function MenuItem({
  tooltip,
  action,
  tooltipPlacement,
  size = 3.5,
  menuActive,
  rotationAngle,
  isMobile,
  icon,
}) {
  // For menu items, we want them to be clickable when the menu is active
  const pointerEvents = menuActive ? "auto" : "none";
  
  return (
    <CircleButton
      className={`menu-item fixed z-[450] left-8 top-1/2 transition-all duration-300 ${
        menuActive ? "visible opacity-100" : "invisible opacity-0"
      } max-md:left-4 max-md:top-4`}
      tooltip={tooltip}
      onClick={action}
      tooltipPlacement={tooltipPlacement}
      size={size}
      style={{
        transform: menuActive
          ? activeTransformStyle(rotationAngle, -rotationAngle, isMobile)
          : "",
        pointerEvents: pointerEvents
      }}
    >
      {icon}
    </CircleButton>
  );
}

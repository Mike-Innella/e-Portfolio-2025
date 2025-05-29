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
  return (
    <CircleButton
      className={`menu-item fixed z-[100] bg-background left-8 top-1/2 transition-opacity ${
        menuActive ? "visible opacity-100" : "invisible opacity-0"
      } max-md:left-4 max-md:top-4`}
      tooltip={tooltip}
      onClick={action}
      tooltipPlacement={tooltipPlacement}
      size={size}
      style={
        menuActive
          ? {
              transform: activeTransformStyle(
                rotationAngle,
                -rotationAngle,
                isMobile
              ),
            }
          : {}
      }
    >
      {icon}
    </CircleButton>
  );
}

import React from "react";
import CircleButton from "../CircleButton";

export default function MenuToggle({
  toggleMenu,
  menuActive,
  children
}) {
  return (
    <CircleButton
      onClick={toggleMenu}
      size={4}
      className={`
        menu-toggle fixed z-[200] left-8 top-1/2 -translate-y-1/2 bg-background
        flex items-center
        max-md:left-4 max-md:top-4 max-md:-translate-y-0
      `}
    >
      <span className="font-bold leading-3 mr-2 menu-text">{children}</span>
      <div className="pl-1 menu-burger flex flex-col justify-center">
        {/* Hamburger lines */}
        <span
          className={`
            menu-burger-bar block w-6 h-1 bg-primary rounded-full mb-1 transition-all duration-500
            ${menuActive ? "rotate-[-45deg] translate-y-[0.15em]" : ""}
          `}
        />
        <span
          className={`
            menu-burger-bar block w-6 h-1 bg-primary rounded-full mb-1 transition-all duration-500
            ${menuActive ? "opacity-0" : ""}
          `}
        />
        <span
          className={`
            menu-burger-bar block w-6 h-1 bg-primary rounded-full transition-all duration-500
            ${menuActive ? "rotate-[45deg] -translate-y-[0.15em]" : ""}
          `}
        />
      </div>
    </CircleButton>
  );
}

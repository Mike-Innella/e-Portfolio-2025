import React from "react";
import CircleButton from "../CircleButton";

export default function MenuToggle({
  toggleMenu,
  menuActive,
  children
}) {
  // Directly handle click to make sure it works
  const handleClick = (e) => {
    e.stopPropagation();
    if (toggleMenu) toggleMenu();
  };

  return (
    <CircleButton
      onClick={handleClick}
      size={4}
      className="menu-toggle bg-background flex items-center"
      style={{
        zIndex: 600,
        cursor: 'pointer'
      }}
    >
      <span className="font-bold leading-3 mr-2 menu-text">{children}</span>
      <div className="menu-burger flex flex-col justify-center">
        {/* Hamburger lines */}
        <span
          className={`
            menu-burger-bar block w-3.5 h-0.5 bg-text rounded-full mb-0.5 transition-all duration-500
            ${menuActive ? "rotate-[35deg] translate-y-[0.5em] translate-x-[-0.25em]" : ""}
          `}
          style={{ backgroundColor: "var(--text-color)" }}
        />
        <span
          className={`
            menu-burger-bar block w-3.5 h-0.5 bg-text rounded-full mb-0.5 transition-all duration-500
            ${menuActive ? "opacity-0 scale-0" : ""}
          `}
          style={{ backgroundColor: "var(--text-color)" }}
        />
        <span
          className={`
            menu-burger-bar block w-3.5 h-0.5 bg-text rounded-full transition-all duration-500
            ${menuActive ? "rotate-[-35deg] -translate-y-[0.5em] translate-x-[-0.25em]" : ""}
          `}
          style={{ backgroundColor: "var(--text-color)" }}
        />
      </div>
    </CircleButton>
  );
}

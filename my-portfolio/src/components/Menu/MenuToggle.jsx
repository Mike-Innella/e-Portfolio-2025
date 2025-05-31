import React from "react";
import CircleButton from "../CircleButton";

export default function MenuToggle({ toggleMenu, menuActive, children }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (toggleMenu) toggleMenu();
  };

  return (
    <CircleButton
      onClick={handleClick}
      size={4}
      className="menu-toggle bg-slate-100 dark:bg-[#111315] text-slate-900 dark:text-slate-100 flex items-center group"
      style={{
        zIndex: 600,
        cursor: "pointer",
      }}
    >
      <span className="font-bold leading-3 mr-2 menu-text">{children}</span>
      <div className="menu-burger flex flex-col justify-center">
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full mb-0.5 transition-all duration-500
            bg-burger-dark dark:bg-slate-100
            ${
              menuActive
                ? "rotate-[35deg] translate-y-[0.5em] translate-x-[-0.25em]"
                : ""
            }
          `}
        />
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full mb-0.5 transition-all duration-500
            bg-burger-dark dark:bg-slate-100
            ${menuActive ? "opacity-0 scale-0" : ""}
          `}
        />
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full transition-all duration-500
            bg-burger-dark dark:bg-slate-100
            ${
              menuActive
                ? "rotate-[-35deg] -translate-y-[0.5em] translate-x-[-0.25em]"
                : ""
            }
          `}
        />
      </div>
    </CircleButton>
  );
}

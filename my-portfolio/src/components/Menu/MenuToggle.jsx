import React from "react";
import CircleButton from "../CircleButton";

export default function MenuToggle({
  toggleMenu,
  menuActive,
  children,
  isRowMenu,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (toggleMenu) toggleMenu();
  };

  return (
    <CircleButton
      onClick={handleClick}
      size={4}
      className={`menu-toggle flex items-center group
        ${
          isRowMenu
            ? "bg-slate-900 text-slate-100 shadow-xl"
            : "bg-slate-100 dark:bg-[#111315] text-slate-900 dark:text-slate-100"
        }
        transition-colors duration-300
      `}
      style={{
        zIndex: 600,
        cursor: "pointer",
      }}
    >
      <span className="font-bold leading-3 mr-2 menu-text">{children}</span>
      <div className="menu-burger flex flex-col justify-center">
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full mb-0.5 transition-all duration-500
            ${
              menuActive
                ? "rotate-[35deg] translate-y-[0.5em] translate-x-[-0.25em]"
                : ""
            }
          `}
        />
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full mb-0.5 transition-all duration-500
            ${menuActive ? "opacity-0 scale-0" : ""}
          `}
        />
        <span
          className={`menu-burger-bar block w-3.5 h-0.5 rounded-full transition-all duration-500
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

import React, { useMemo, useState, useCallback } from "react";
import { MdComputer, MdArrowUpward } from "react-icons/md";
import ThemeToggle from "../../ux/ThemeToggle";
import { toggleTheme } from "../../utils/theme";
import MenuToggle from "./MenuToggle";
import MenuItem from "./MenuItem";
import { CustomSectionsConfig } from "../../config";

export default function Menu({ sectionRefs }) {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  // Listen for screen resize to update isMobile
  React.useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [isRowMenu, setIsRowMenu] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  // Listen for screen resize to update isRowMenu
  React.useEffect(() => {
    const checkRowMenu = () =>
      setIsRowMenu(window.matchMedia("(max-width: 1024px)").matches);
    window.addEventListener("resize", checkRowMenu);
    return () => window.removeEventListener("resize", checkRowMenu);
  }, []);

  // Scroll to a section by name
  const scrollToSection = useCallback(
    (sectionName) => {
      const ref = sectionRefs?.[sectionName];
      if (ref?.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
      setMenuActive(false); // Close menu on navigation
    },
    [sectionRefs]
  );

  // Menu actions (can expand as needed)
  const staticMenuItems = useMemo(
    () => [
      {
        icon: <MdArrowUpward size={28} />,
        tooltip: "Go to top",
        action: () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setMenuActive(false);
        },
      },
      {
        icon: <ThemeToggle />, // Stateless icon, not a button, not clickable
        tooltip: "Toggle dark/light theme",
        action: () => {
          toggleTheme();
        }, // MenuItem handles the click!
      },
    ],
    [scrollToSection]
  );

  // Dynamic section-based menu items
  const sectionMenuItems = useMemo(
    () =>
      CustomSectionsConfig.filter((section) => !section.notInMenu).map(
        (section) => ({
          icon: section.headerIcon,
          tooltip: section.name,
          action: () => scrollToSection(section.name),
        })
      ),
    [scrollToSection]
  );

  // Combine all menu items
  const menuItems = useMemo(
    () => [...staticMenuItems, ...sectionMenuItems],
    [staticMenuItems, sectionMenuItems]
  );

  // For "arc" layout
  const startAngle = isMobile ? 0 : -90;
  const rotationAngle = isMobile ? 90 : 180;

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {/* The menu toggle button */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[500] max-lg:left-4 max-lg:top-16 max-md:-translate-y-0 max-sm:left-2 max-sm:top-2 max-lg:bg-slate-900 max-lg:rounded-full max-lg:p-0">
        <MenuToggle
          menuActive={menuActive}
          toggleMenu={handleToggle}
          isRowMenu={isRowMenu}
        >
          ME
          <br />
          NU
        </MenuToggle>
      </div>

      {/* The menu overlay and items */}
      <div
        className={`fixed inset-0 z-[400] ${
          menuActive ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            menuActive ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuActive(false)}
          style={{
            pointerEvents: menuActive ? "auto" : "none",
            touchAction: menuActive ? "none" : "auto", // Prevent scrolling when menu is open on mobile
          }}
        />

        {/* Menu items container */}
        <div
          className="fixed inset-0 z-[450]"
          style={{ pointerEvents: "none" }}
        >
          {isRowMenu ? (
            // ROW layout
            <div
              className={`
        absolute left-16 top-16
        grid grid-flow-col gap-4 max-lg:gap-8 max-lg:w-fit max-lg:top-8 max-lg:left-0 max-md:gap-2 max-md:top-16 max-sm:grid-flow-row max-sm:grid-cols-4 max-sm:gap-2 max-sm:top-4
        transition-all duration-500
    ${
      isRowMenu && menuActive
        ? "bg-slate-900 text-slate-100 shadow-lg rounded-xl px-4 py-2 mx-4"
        : ""
    }
    transition-all duration-500
    ${menuActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
  `}
              style={{
                pointerEvents: menuActive ? "auto" : "none",
              }}
            >
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={`menu-item-row-${index}`}
                  {...menuItem}
                  tooltipPlacement="bottom"
                  menuActive={menuActive}
                  isMobile={true}
                  isRowMenu={true}
                  rotationAngle={0} // not used for row
                />
              ))}
            </div>
          ) : (
            // ARC layout
            menuItems.map((menuItem, index) => {
              let angle = startAngle;
              let increment = 0;
              if (menuItems.length > 1) {
                increment = Math.round(rotationAngle / (menuItems.length - 1));
              }
              angle += index * increment;

              return (
                <MenuItem
                  key={`menu-item-${index}`}
                  {...menuItem}
                  tooltipPlacement="right"
                  menuActive={menuActive}
                  isMobile={false}
                  isRowMenu={false}
                  rotationAngle={angle}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

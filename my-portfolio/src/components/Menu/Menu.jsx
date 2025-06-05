import React, { useMemo, useState, useCallback, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
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
  const [isRowMenu, setIsRowMenu] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const checkRowMenu = () =>
      setIsRowMenu(window.matchMedia("(max-width: 1024px)").matches);
    window.addEventListener("resize", checkRowMenu);
    return () => window.removeEventListener("resize", checkRowMenu);
  }, []);

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
      setMenuActive(false);
    },
    [sectionRefs]
  );

  const staticMenuItems = useMemo(
    () => [
      {
        icon: <MdArrowUpward size={28} />,
        tooltip: "Go to top",
        action: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setMenuActive(false);
        },
      },
      {
        icon: <ThemeToggle />,
        tooltip: "Toggle dark/light theme",
        action: () => {
          toggleTheme();
        },
      },
    ],
    []
  );

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

  const menuItems = useMemo(
    () => [...staticMenuItems, ...sectionMenuItems],
    [staticMenuItems, sectionMenuItems]
  );

  const startAngle = isMobile ? 0 : -90;
  const rotationAngle = isMobile ? 90 : 180;

  const handleToggle = () => setMenuActive((prev) => !prev);

  return (
    <>
      {/* Menu toggle button */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[500] max-lg:left-4 max-lg:top-16 max-md:-translate-y-0 max-sm:left-2 max-sm:top-2 max-lg:bg-white dark:max-lg:bg-black max-lg:rounded-full max-lg:p-0 menu-button">
        <MenuToggle
          menuActive={menuActive}
          toggleMenu={handleToggle}
          isRowMenu={isRowMenu}
          className="z-[500]"
        >
          ME
          <br />
          NU
        </MenuToggle>
      </div>

      {/* Menu overlay and items */}
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
            touchAction: menuActive ? "none" : "auto",
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
                menu-container
                absolute left-16 top-16
                grid grid-flow-col gap-4 ml-32
                max-lg:fixed max-lg:gap-8 max-lg:w-fit max-lg:top-8 max-lg:left-0
                max-md:gap-2 max-md:top-16
                max-sm:grid-flow-row max-sm:grid-cols-4 max-sm:gap-2 max-sm:top-32 max-sm:left-4 max-sm:ml-0
                transition-all duration-500
                ${
                  isRowMenu && menuActive
                    ? "bg-white dark:bg-black max-lg:bg-white max-lg:dark:bg-black text-black dark:text-white shadow-lg rounded-xl px-4 py-2 mx-auto"
                    : ""
                }
                ${
                  menuActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }
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
                  rotationAngle={0}
                />
              ))}
            </div>
          ) : (
            // ARC layout
            menuItems.map((menuItem, index) => {
              const increment =
                menuItems.length > 1
                  ? rotationAngle / Math.max(menuItems.length - 1, 1)
                  : 0;
              const angle = startAngle + index * increment;

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

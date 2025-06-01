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
        action: () => { toggleTheme(); }, // MenuItem handles the click!
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
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[500] max-md:left-4 max-md:top-4 max-md:-translate-y-0 max-sm:left-2">
        <MenuToggle menuActive={menuActive} toggleMenu={handleToggle}>
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
            touchAction: menuActive ? "none" : "auto" // Prevent scrolling when menu is open on mobile
          }}
        />

        {/* Menu items container */}
        <div
          className="fixed inset-0 z-[450]"
          style={{ pointerEvents: "none" }}
        >
          {menuItems.map((menuItem, index) => {
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
                isMobile={isMobile}
                rotationAngle={angle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

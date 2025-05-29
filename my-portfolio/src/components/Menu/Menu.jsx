import React, { useMemo, useState, useCallback } from "react";
import { MdNightsStay, MdComputer, MdArrowUpward } from "react-icons/md";
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
      setMenuActive(false); // Optionally close menu on navigation
    },
    [sectionRefs]
  );

  // Menu actions (can expand as needed)
  const staticMenuItems = useMemo(
    () => [
      {
        icon: <MdArrowUpward size={28} />,
        tooltip: "go to top",
        action: () =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          }),
      },
      {
        icon: <MdNightsStay size={28} />,
        tooltip: "toggle dark/light theme",
        action: () => {
          document.body.classList.toggle("dark-mode");
          if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
          } else {
            localStorage.setItem("theme", "light");
          }
        },
      },
      {
        icon: <MdComputer size={28} />,
        tooltip: "projects",
        action: () => scrollToSection("projects"),
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

  return (
    <div
      className={`menu${
        menuActive ? " menu-active" : ""
      } fixed inset-0 pointer-events-none`}
    >
      {/* Backdrop overlay */}
      <div
        className={`${
          menuActive ? "block" : "hidden"
        } fixed inset-0 z-[99] bg-black/40 pointer-events-auto`}
        onClick={() => setMenuActive(false)}
      />
      <div className="menu-data relative pointer-events-auto z-[100]">
        <MenuToggle
          menuActive={menuActive}
          toggleMenu={() => setMenuActive((a) => !a)}
        >
          ME
          <br />
          NU
        </MenuToggle>
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
  );
}

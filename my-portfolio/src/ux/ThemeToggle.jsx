import React, { useEffect, useState } from "react";
import { getCurrentTheme } from "../utils/theme";
import { FaSun, FaMoon } from "react-icons/fa";

/**
 * Just shows icon according to current theme.
 */
const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Listen to theme changes in case they're toggled elsewhere
    setTheme(getCurrentTheme());
    const observer = new MutationObserver(() => setTheme(getCurrentTheme()));
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return theme === "dark" ? (
    <FaSun className={`h-5 w-5 ${className}`} />
  ) : (
    <FaMoon className={`h-5 w-5 ${className}`} />
  );
};

export default ThemeToggle;

import React, { useState, useEffect } from "react";
import { toggleTheme, getCurrentTheme } from "../utils/theme";
import { FaSun, FaMoon } from "react-icons/fa";

/**
 * ThemeToggle component provides a toggle button for switching between
 * dark and light themes. Shows different icons based on current theme.
 */
const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState("dark"); // Default to dark

  // Initialize theme state on component mount
  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  // Handle theme toggle
  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className={`rounded-full p-2 transition-colors duration-300 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        // Sun icon for dark mode (clicking will switch to light)
        <FaSun className="h-5 w-5" />
      ) : (
        // Moon icon for light mode (clicking will switch to dark)
        <FaMoon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

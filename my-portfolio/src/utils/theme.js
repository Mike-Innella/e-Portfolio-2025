// Theme utility functions for handling dark/light mode

/**
 * Checks if the user prefers dark mode based on system preferences
 * @returns {boolean} true if user prefers dark mode
 */
export const prefersDarkMode = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

/**
 * Initializes the theme based on localStorage or system preference
 * Sets dark mode as the default theme
 */
export const initializeTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // No stored theme: use system/OS preference!
    if (prefersDarkMode()) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
};

/**
 * Toggles between dark and light mode
 * @returns {string} the new theme ('dark' or 'light')
 */
export const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return "dark";
  }
};

/**
 * Gets the current theme
 * @returns {string} 'dark' or 'light'
 */
export const getCurrentTheme = () => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

// tailwind.config.js
/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "rotate-one": "rotateOne 1s linear infinite",
        "rotate-two": "rotateTwo 1s linear infinite",
        "rotate-three": "rotateThree 1s linear infinite",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        rotateOne: {
          "0%": { transform: "rotateX(35deg) rotateY(-45deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(35deg) rotateY(-45deg) rotateZ(360deg)",
          },
        },
        rotateTwo: {
          "0%": { transform: "rotateX(50deg) rotateY(10deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(50deg) rotateY(10deg) rotateZ(360deg)",
          },
        },
        rotateThree: {
          "0%": { transform: "rotateX(35deg) rotateY(55deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(35deg) rotateY(55deg) rotateZ(360deg)",
          },
        },
      },
      colors: {
        // Brand/system colors
        "background": {
          DEFAULT: "#f8fafc", // light mode
          dark: "#111315",    // dark mode
        },
        "accent": {
          DEFAULT: "#2366a8", // light mode
          dark: "#3aa0ea",    // dark mode
        },
        "text": {
          DEFAULT: "#181a1b", // light mode
          dark: "#f8fafc",    // dark mode
        },
        "hover": {
          DEFAULT: "#3aa0ea", // both modes
        },
        "hover-text": {
          DEFAULT: "#6a6b6d", // both modes
        },

        // Duotone (legacy)
        "loader-border": "#EFEFFA",
        "bg-loader": "#1C262B",
        "dark-bg": "#111315",
        "light-bg": "#F0F2E2",
        "text-light": "#F8FAFC",
        "text-dark": "#181A1B",

        // Blues
        "primary-blue": "#3AA0EA",
        "primary-blue-dark": "#2366A8",
      },
      width: {
        loader: "64px",
      },
      height: {
        loader: "64px",
      },
      perspective: {
        800: "800px",
      },
      fontFamily: {
        sans: ['"Source Code Pro"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

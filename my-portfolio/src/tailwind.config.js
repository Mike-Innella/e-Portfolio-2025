/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "rotate-one": "rotateOne 1s linear infinite",
        "rotate-two": "rotateTwo 1s linear infinite",
        "rotate-three": "rotateThree 1s linear infinite",
        "spin-slow": "spin 4s linear infinite",
        logoGlow: "logoGlow 2.5s ease-in-out infinite",
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

        logoGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 24px hsla(188, 100%, 61%, 0.6))",
          },
          "50%": { filter: "drop-shadow(0 0 48px hsla(188, 100%, 61%, 1))" },
        },
      },
      // ... (colors, width, height, perspective, fontFamily as you already have)
      colors: {
        // TODO: The commented out section may be unnecessary

        // // Brand/system colors
        // background: {
        //   DEFAULT: "#f8fafc", // light mode
        //   dark: "#111315", // dark mode
        //   "burger-dark": "#111315", // bar color for light mode
        //   "burger-hover": "#f0f2e2",
        // },
        // accent: {
        //   DEFAULT: "#2366a8", // light mode
        //   dark: "#3aa0ea", // dark mode
        // },
        // text: {
        //   DEFAULT: "#181a1b", // light mode
        //   dark: "#f8fafc", // dark mode
        // },
        // hover: {
        //   DEFAULT: "#3aa0ea", // both modes
        // },
        // "hover-text": {
        //   DEFAULT: "#505050", // both modes
        // },

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

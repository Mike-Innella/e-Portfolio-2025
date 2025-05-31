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
          "0%, 100%": { filter: "drop-shadow(0 0 24px hsla(188, 100%, 61%, 0.6))" },
          "50%": { filter: "drop-shadow(0 0 48px hsla(188, 100%, 61%, 1))" },
        },
      },
      // ... (colors, width, height, perspective, fontFamily as you already have)
      colors: {
        // Brand/system colors
        "background": {
          hex: "#f8fafc", // light mode
          hsl: "hsl(210, 20%, 98%)",
          dark: {
            hex: "#111315", // dark mode
            hsl: "hsl(220, 7%, 8%)"
          }
        },
        "accent": {
          hex: "#2366a8", // light mode
          hsl: "hsl(210, 66%, 40%)",
          dark: {
            hex: "#3aa0ea", // dark mode
            hsl: "hsl(207, 82%, 57%)"
          }
        },
        "text": {
          hex: "#181a1b", // light mode
          hsl: "hsl(210, 7%, 10%)",
          dark: {
            hex: "#f8fafc", // dark mode
            hsl: "hsl(210, 20%, 98%)"
          }
        },
        "hover": {
          hex: "#3aa0ea", // both modes
          hsl: "hsl(207, 82%, 57%)"
        },
        "hover-text": {
          hex: "#6a6b6d", // both modes
          hsl: "hsl(220, 2%, 42%)"
        },

        // Duotone (legacy)
        "loader-border": {
          hex: "#EFEFFA",
          hsl: "hsl(240, 56%, 96%)"
        },
        "bg-loader": {
          hex: "#1C262B",
          hsl: "hsl(205, 20%, 14%)"
        },
        "dark-bg": {
          hex: "#111315",
          hsl: "hsl(220, 7%, 8%)"
        },
        "light-bg": {
          hex: "#F0F2E2",
          hsl: "hsl(75, 38%, 92%)"
        },
        "text-light": {
          hex: "#F8FAFC",
          hsl: "hsl(210, 20%, 98%)"
        },
        "text-dark": {
          hex: "#181A1B",
          hsl: "hsl(210, 7%, 10%)"
        },

        // Blues
        "primary-blue": {
          hex: "#3AA0EA",
          hsl: "hsl(207, 82%, 57%)"
        },
        "primary-blue-dark": {
          hex: "#2366A8",
          hsl: "hsl(210, 66%, 40%)"
        },
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

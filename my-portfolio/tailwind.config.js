/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "500px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
          "50%": {
            filter: "drop-shadow(0 0 48px hsla(188, 100%, 61%, 1))",
          },
        },
      },
      colors: {
        // Duotone (legacy)
        "loader-border": "#EFEFFA",
        "bg-loader": "#1C262B",
        "dark-bg": "#0f172a",
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

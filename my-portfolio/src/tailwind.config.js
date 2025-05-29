// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-one': 'rotateOne 1s linear infinite',
        'rotate-two': 'rotateTwo 1s linear infinite',
        'rotate-three': 'rotateThree 1s linear infinite',
      },
      keyframes: {
        rotateOne: {
          '0%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)' },
        },
        rotateTwo: {
          '0%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)' },
        },
        rotateThree: {
          '0%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)' },
        },
      },
      colors: {
        'loader-border': '#EFEFFA',
        'bg-loader': '#1C262B',
      },
      width: {
        'loader': '64px',
      },
      height: {
        'loader': '64px',
      },
      perspective: {
        '800': '800px',
      },
    },
  },
  plugins: [],
};

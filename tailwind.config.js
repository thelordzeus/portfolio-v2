/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        starFace: "url('../assets/starface.jpg')",
        greenGradient: "url('../assets/gradient.jpg')",
        blackGradient1: "url('../assets/gradient1.png')",
        blackGradient2: "url('../assets/gradient-2.png')",
        nightLife: "url('../assets/skillsbg.gif')",
      },

      animation: {
        reveal: "reveal 0.8s forwards",
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        reveal: {
          "0%": {
            transform: "translatey(100%)",
          },
          "100%": {
            transform: "translatey(0)",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};

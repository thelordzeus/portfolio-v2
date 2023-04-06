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
        nightLife: "url('../assets/nightlife.jpg')",
      },

      animation: {
        reveal: "reveal 0.8s forwards",
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
      },
    },
  },
  plugins: [
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

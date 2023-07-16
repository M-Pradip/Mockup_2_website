/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    letterSpacing: {
      widest: "0.2em",
      wider: "0.01em",
    },
    extend: {
      colors: {
        "primary-blue": "#3A7198",
        "secondary-blue": "#4A8DB8",
        "primary-black": "#171414",
        "dark-grey": "#353333",
        "dark-grey": "#333333",
        "off-white": "#F7F7F7",
        "grey-grey": "#BEC1C7",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [[require("tw-elements/dist/plugin.cjs")]],
  darkMode: "class",
};

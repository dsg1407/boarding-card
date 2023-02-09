/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#1A1924",
      },
    },
  },
  plugins: [],
}

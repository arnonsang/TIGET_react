/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        clifford: "#da373d",
        tigetgold: "#c09e6b",
        tigetgold2: "#c09e6b",
        tigetgoldLight: "#eee4d4",
      },
    },
  },
  plugins: [],
}
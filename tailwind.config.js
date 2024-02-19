/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["theme--dark", "theme--light"],
  presets: [require("./theme/theme-config.js")],
};

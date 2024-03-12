/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      medi: ["Geograph Medium", "sans-serif"],
      thin: ["Geograph Thin", "sans-serif"],
      light: ["Geograph Light", "sans-serif"],
      reg: ["Geograph", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

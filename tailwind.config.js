/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ABEF5F",
      },
      fontFamily: {
        manrope: "Manrope, ui-serif", // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bahnschrift: ['"Bahnschrift Light Condensed"', "sans-serif"], // Add fallback fonts as needed
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes:"url('./images/backdrop_1.jpg)",
      })
    },
  },
  plugins: [],
};

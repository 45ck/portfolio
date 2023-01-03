/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
        nunito: ['Nunito Sans', "sans-serif"],
      }, 
      scale: {
        80: "0.80"
      }
    },
  },
  plugins: [],
}
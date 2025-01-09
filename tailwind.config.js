/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
theme: {
  extend: {
    colors: {
      peach: {
        100: '#ffe5b4', 
        200: '#ffcc99', 
        300: '#ffb380', 
        400: '#ff9966', 
        500: '#ff7f50', 
        600: '#ff6347', 
      },
    },
  },
},
}
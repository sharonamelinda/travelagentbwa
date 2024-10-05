/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'lightblue': '#f1f5fa',
        'thin-dark': '#222534',
        'stars': '#FFDE70'
      }
    },
  },
  plugins: [],
}


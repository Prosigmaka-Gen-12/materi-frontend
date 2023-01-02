/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        utama: '#def03c'
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

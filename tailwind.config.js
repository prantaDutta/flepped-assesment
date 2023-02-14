/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#009aa3',
          DEFAULT: '#006c72',
          dark: '#14303d',
        },
      },
    },
  },
  plugins: [],
}

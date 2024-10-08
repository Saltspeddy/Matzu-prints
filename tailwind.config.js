/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'lobster': [ '"Lobster"', 'sans-serif'],
      'rubik': ['"Rubik"','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

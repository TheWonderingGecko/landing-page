/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.css', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        grey: '#9194A2',
        dark_blue: '#242A45',
        red: '#FA5959',
        blue: '#5267DF',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        primary: "#33FF00",
        accent: "#CCFF00",
        black: '#000000',
        'black/30': "#0000004d",
        white: colors.white,
        transparent: colors.transparent,
      }
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      rubik: ['Rubik Mono One', 'sans-serif'],
    },
    backgroundImage: {
      hero: "url('/images/hero/bg.png')",
      'hero-points': "url('/images/hero/points.png')"
    }
  },
  plugins: [],
}
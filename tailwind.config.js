const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      'hero-points': "url('/images/hero/points.png')",
      'testimonials-block': "url('/images/testimonials/block.svg')"
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    }
  },
  plugins: [],
}
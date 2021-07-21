const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.blueGray,
        white: colors.white
    },
    extend: {
        colors: {
            "hotel-green": "#56919C",
            "hotel-green-darker": "#35707B"
        },
        backgroundImage: theme => ({
            "hero-image": "url('./images/hero_bg.jpg')",
        }),
    },
    container: {
        center: true,
        padding: '1rem',
        screens: {
            lg: "1124px",
            xl: "1124px",
            "2xl": "1124px",
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

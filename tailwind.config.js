const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.blueGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
    },
    extend: {
        colors: {
            "hotel-green": "#56919C",
            "hotel-green-darker": "#35707B"
        },
        backgroundImage: theme => ({
            "hero-image": "url('./images/hero_bg.jpg')",
            "hotel-image": "url('./images/hotel.jpeg')",
            "evening-image": "url('./images/evening.jpeg')",
            "workation-image": "url('./images/workation.jpeg')",
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
    extend: {textDecoration: ['focus-visible'],},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

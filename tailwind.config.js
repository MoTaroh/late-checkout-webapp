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
    inset: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/8': '12.5%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-2/4': '-50%',
        '-3/4': '-75%',
        '-full': '-100%',
      }),
    extend: {
        colors: {
            "hotel-green": "#5F98A3",
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

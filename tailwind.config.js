module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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

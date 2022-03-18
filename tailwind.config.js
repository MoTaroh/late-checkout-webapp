

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
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
            "desktop-ui-image": "url('./images/desktop-ui.png')",
            "wave-image": "url('./images/wave.svg')"
        }),
        fontFamily: {
          perisienne: "'Parisienne', cursive"
        }
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
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}

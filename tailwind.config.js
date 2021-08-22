module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "purple": "#5267DF",
        "red": "#FA5959",
        "blue": "#242A45",
        "grey": "#9194A2",
        "white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
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

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"

  ],
  theme: {
    extend: {
      gridTemplateRows:{
        '10': 'repeat(10, 100px)',
      }
    },
  },
  plugins: [],
}

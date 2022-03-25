module.exports = {
  content: [
    "./src/**/*.{html,js}",

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

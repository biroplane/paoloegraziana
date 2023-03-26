/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "primary": {
          50: "#F8F9F5",
          100: "#EEF2E9",
          200: "#DDE4D3",
          300: "#CCD7BC",
          400: "#BECBA9",
          500: "#ACBD92",
          600: "#8DA56A",
          700: "#687C4B",
          800: "#465332",
          900: "#232919"
        }
      },
      fontFamily:{
        'heading':['Brittanic']
      }
    },
  },
  plugins: [],
}

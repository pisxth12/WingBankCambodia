/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, css , js , vue}"],
  theme: {
    extend: {
      colors:{
        wing : {
          primary : '#a9cf38',
          blue: '#0077ff',
          blueSlate: '#003f82'
        }
      }
    },
  },
  plugins: [],
}


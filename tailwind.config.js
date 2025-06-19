module.exports = {
  content: ["./src/**/*.{html,js,css,vue}"],
  theme: {
    extend: {
      screens: {
        'max320': { max: '320px' },
        'max321': { max: '321px' },

        'max300': { max: '300px' },
        'max350': { max: '350px' },
        'max400': { max: '400px' },
      },
      colors: {
        wing: {
          primary: '#a9cf38',
          blue: '#0077ff',
          blueSlate: '#003f82',
          gray: '#6c6d70',
        },
      },
      fontSize: {
        wing: {
          navFont_1rem: '1rem',
        },
      },
    },
  },
  plugins: [],
};

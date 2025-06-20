module.exports = {
  content: ["./src/**/*.{html,js,css,vue}"],
  theme: {
    extend: {
      screens: {
        'screen320':  '320px',
        'screen321':  '321px',

        'screen300':  '300px',
        'screen350':  '350px',
        'screen400':  '400px',
        'screen575':  '575px',
        'screen767' : '767px',
        'screen1025' : '1025px',
        'min1025' : {min : '1025px'},
        'max1024' : {max : '1024px'},

        




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
        'wing-nav': '1rem',
        'wing-title-lg': '56px',
        'wing-title-md': '50px',
        'wing-title-sm': '35px',


      },
      borderWidth: {
        'wingBorder1': '1px',
        'wingBorder2': '2px',
        'wingBorder3': '3px',
        'wingBorder4': '4px',
        'wingBorder5': '5px',


        'custom': '7px'
      },
       fontWeight: {
        'wingUltraSmall2x': '10',

        'wingUltraSmall': '50',
        'wingsmall': '100',
        'wingMedium': '200',
        'wingLight': '300',
        'wingNormal': '400',
        'wingMedium': '500',
        'wingSemiBold': '600',
        'wingBold': '700',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container : {
      center : true,
    },
    extend: {
      colors : {
        "neu-yellow" : "#FFFF00",
        "neu-pink" : "#FF00F6",
        "neu-purple" : "#6A08CB",
        "neu-white" : "#FFF9E4",
        "neu-orange" : "#FFDC58",
        "neu-blue" : "#3300FF",
        "neu-red3" : "#FEA079",
        "neu-pink3" : "#FFC0CA",
        "neu-purple3" : "#C5A1FF",
        "neu-blue3" : "#A7DCD8",


      },
      width: {
        'custom-red': '1494px',
        '1080' : '1080',
        '30' : '120',
        '520' : '32.5rem'
      },
      fontSize :{
        "40" : "2.5rem"
      },
      borderRadius: {
        '50': '50px',
        '40' : '39px',
        '20' : '20px',
      },
      height :{
        "quiz-h" : "855px"
      }
    },
  },
  plugins: [],
}

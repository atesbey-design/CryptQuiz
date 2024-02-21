/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      // screens:{
      //   xl: '1280px',
      //   '2xl': '1280px',
      // }
    },
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        lexend: ['Lexend Mega', 'sans-serif'],
        public: ['Public Sans', 'sans-serif'],
      },
      colors: {
        "neu-yellow": "#FFFF00",
        "neu-pink": "#FF00F6",
        "neu-purple": "#6A08CB",
        "neu-white": "#FFF9E4",
        "neu-orange": "#FFDC58",
        "neu-blue": "#3300FF",
        "neu-red3": "#FEA079",
        "neu-pink3": "#FFC0CA",
        "neu-purple3": "#C5A1FF",
        "neu-blue3": "#A7DCD8",
        "neu-green3": "#BAFDA2",
        "neu-blue4": "#DBF5F0",
        "neu-green4": "#C7F3BB",
        "neu-pink4": "#FBDFFF",
        "neu-purple2": "#A488EF",
        "neu-brown": "#C5773E",
        "neu-yellow3": "#FBCB22",
        "neu-gray": "#B0AFAA",
        "neu-gray2": "#ADAA9D",
        "bgray": "#505050",
        "blue1": "#69D3E8",
        "orange1": "#F1BF0B",
        "red1": "#FF6B6B",




      },
      height: {
        "6/7": "85%",
      },
      width: {
        '1080': '1080',
        '30': '120',
        '520': '32.5rem',
        '88': '23rem',
      },
      fontSize: {
        "40": "2.5rem",
        "32": "2rem",
        "16": "1rem",
        "14": "0.75rem",
        "8": "0.5rem",
      },
      borderRadius: {
        '50': '50px',
        '40': '40px',
        '20': '20px',
        '80': '80px',
        '10': '10px',
      },
      height: {
        "quiz-h": "768px"
      },
      spacing: {
        '26': '26px'
      }
    },
  },
  plugins: [],
}

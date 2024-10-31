/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b6b8bd',
        secondary:"#ffc86b"
      },
      backgroundColor: {
        primary: '#272829',
        secondary: "#ffc86b"
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary:"Times New Roman"
      }
    },
  },
  plugins: [],
}

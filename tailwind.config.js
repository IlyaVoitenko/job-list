/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proximaNova: "'Proxima Nova',sans-serif",
      },
      colors: {
        "regal-blue": "#3a4562",
        adressTextColor: "#878D9D",
      },
      fontSize: {
        titleFontSize: "20px",
        adressFontSize: "16px",
      },
      letterSpacing: {
        titleLetterSpacing: "-0.625px",
        afressLetterSpacing: "0.23619px",
      },
      lineHeight: {
        titleLineHeight: "25px",
      },
    },
  },
  plugins: [],
};

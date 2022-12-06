/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        square: "square",
      },
      backgroundImage: {
        bgImageMap: "url('/public/Map.png')",
      },
      fontFamily: {
        proximaNova: "'Proxima Nova',sans-serif",
        robot: "'Roboto'",
      },
      colors: {
        "regal-blue": "#3a4562",
        adressTextColor: "#878D9D",
        bgGeolocMap: "#2A3047",
      },
      fontSize: {
        titleFontSize: "20px",
        adressFontSize: "16px",
      },
      letterSpacing: {
        titleLetterSpacing: "-0.625px",
        adressLetterSpacing: "0.23619px",
        detailLetterSpacing: "-0.5625px",
      },
      lineHeight: {
        titleLineHeight: "25px",
      },
    },
  },
  plugins: [],
};

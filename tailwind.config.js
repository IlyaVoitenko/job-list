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
        bgBtnsEmploy: "rgba(161, 177, 219, 0.317343)",
        bgBtnsBenefits: "rgba(255, 207, 0, 0.15)",
        borederColorBtnsEmploy: " rgba(85, 105, 158, 0.3)",
        borederColorBtnsBenefits: "#FFCF00",
        textItemEmployment: "#55699E",
        textItemBenefits: "#988B49",
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
    screens: {
      sm: { min: "380px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

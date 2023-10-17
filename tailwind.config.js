/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#363636",
        gunmetal: {
          50: "#2D333B",
          100: "#29313E",
          150: "#242F40",
        },
        fieldDrab: "#786A3E",
        satinSheenGold: "#CCA43B",
        ecru: "#D9C590",
        platinum: "#E5E5E5",
        pearl: "#DFD5BB",
        battleshipGray: "#837C66",
        davysGray: "#585851",
        bone: "#E2DDD0",
        britishRacingGreen: "#004225",
      },
    },
  },
  plugins: [],
}
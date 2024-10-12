/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      dark: "#151D2B",
      moderateDark: "#1B2432",
      softDark: "#2B3544",
      white: "#F3F4F6",
    },
    backgroundImage: {
      purpleGrad: "linear-gradient(90deg, #a855f6 0%, #eb489a 100%)",
      redGrad: "linear-gradient(90deg, #ff033e 0%, #fd5c63 100%)",
      greenGrad: "linear-gradient(90deg, #008b8b 0%, #32de84 100%)",
    },
  },
}

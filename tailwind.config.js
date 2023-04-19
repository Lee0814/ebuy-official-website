/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        xl: "1200px",
        "2xl": "1200px",
      },
      backgroundColor: {
        footer: "#1D1F21",
      },
      textColor: {
        "footer-low": "#ACACAC ",
      },
    },
  },
  plugins: [],
};
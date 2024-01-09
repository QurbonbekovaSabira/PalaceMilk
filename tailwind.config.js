/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      start: " tailwindcss -i ./src/input.css -o ./src/output.css --watch",
      container: {
        screens: {
          lg: "1280px",
        },
        center: true,
      },
      colors: {
        red: "#F64D4D",
        grey:"#464646",
        blue:"#AEC1E4",
      },
    },
  },
  plugins: [],
};

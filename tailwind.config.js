/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // customDark: "#1C212F",
        customDark: "#1B212F",
        customBlue: "#F7FDFE",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};

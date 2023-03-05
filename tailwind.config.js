/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    theme: {
      colors: {
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
      },
      screens: {
        phone: "40px",

        tablet: "640px",

        desktop: "1024px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

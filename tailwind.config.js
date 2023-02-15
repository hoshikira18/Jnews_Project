/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "./node_modules/flowbite/**/*.js", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  extend: {
    theme: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      },
  },
},
  plugins: [],
  darkMode: "class"
}

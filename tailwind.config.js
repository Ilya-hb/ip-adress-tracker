/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Rubick", "sans"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

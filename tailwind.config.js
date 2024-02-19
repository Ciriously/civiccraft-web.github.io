/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        sans: ["Arimo"],
      },
      textColor: {
        darkgreen: "#006400",
      },
    },
  },
  plugins: [],
};

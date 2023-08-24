/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      serif: ["Poppins"],
      mono: ["Poppins"],
    },
    colors: {
      Purple: "#9036D2",
      White: "#FFFFFF",
      Black: "#000000",
      Grey: "#f0f0f0",
      DarkGrey: "#5A5A5A",
    },
    extend: {},
  },
  plugins: [],
};

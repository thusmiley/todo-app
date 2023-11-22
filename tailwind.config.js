/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./hooks/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBlue: "#55DDFF",
        darkBlue: "#3A7CFD",
        almostWhite: "#C8CBE7",
        lightGrey: "#767992",
        darkGrey: "#4D5067",
        dark49: "#494C6B",
        grey: "#5B5E7E",
        grey94: "#9495A5",
        greyd1: "#D1D2DA",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

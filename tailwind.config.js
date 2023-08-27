/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    colors: {
      milk: "#F8F8F8CC",
      brown: "#E7D7C8",
      black: "#373639",
      white: "#ffffff",
      cardbg: "#D4B2A8",
      darkBrown: "#736A5D",
      line: "#DBC1B5",
      textWhite: "#F8F8F8",
      side: "#F9EEE5",
      gray: "#D9D9D9",
      textmuted: "#51575D",
      mobilebg: "#E6D5D0",
      transparent: "transparent",
    },
    fontFamily: {
      Yeseva: ["var(--font-yeseva-one)"],
      jakarta: ["var(--font-plus-jakarta)"],
    },
    screens: {
      md: "998px",
    },
  },
  plugins: [],
};

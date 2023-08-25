/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      milk: "#F8F8F8CC",
      brown: "#E7D7C8",
      black: "#373639",
      white: "#ffffff",
      cardbg: "#D4B2A8",
      darkBrown: "#736A5D",
    },
    fontFamily: {
      Yeseva: ["var(--font-yeseva-one)"],
      jakarta: ["var(--font-plus-jakarta)"],
    },
  },
  plugins: [],
};

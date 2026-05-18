/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      milk: "#F8F8F8",
      brown: "#E8DDD4",
      black: "#2E2B28",
      white: "#FDFAF7",
      cardbg: "#C9B8AE",
      darkBrown: "#6B5E54",
      line: "#D9CEC7",
      textWhite: "#FAF7F4",
      side: "#F5EDE6",
      textmuted: "#6B6560",
      mobilebg: "#EDE0D8",
      transparent: "transparent",
      sand: "#F0E6DC",
    },
    fontFamily: {
      Yeseva: ["var(--font-vazir-matn)", "sans-serif"],
      jakarta: ["var(--font-vazir-matn)", "sans-serif"],
      vazir: ["var(--font-vazir-matn)", "sans-serif"],
    },
    screens: {
      md: "998px",
    },
  },
  plugins: [],
};

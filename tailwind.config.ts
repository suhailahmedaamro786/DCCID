import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#07111f", 900: "#0b1b31", 800: "#102744", 700: "#17375f" },
        gold: { 400: "#e9c46a", 500: "#d9ad4b", 600: "#bd8d2d" }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(8, 18, 35, .10)"
      }
    }
  },
  plugins: []
};

export default config;
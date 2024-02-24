import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F5F5F5",
      secondary: "#1F1F1F",
      detail: "#D4C4A6",
      detailHovered: "#EBE4D6",
      textAlternate: "#828282",
    },
    backgroundImage: {
      "cta-pattern": "url('/cta-pattern.webp')",
      "banner-pattern": "url('/banner-pattern.webp')",
      "hero-pattern": "url('/hero-pattern.webp')",
    },

    extend: {},
  },
  plugins: [],
};
export default config;

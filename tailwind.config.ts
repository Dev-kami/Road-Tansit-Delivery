import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#344E41",
      },
      backgroundImage: {
        "home-image": "url('/images/delivery-trailer-1.png')",
      },
      fontFamily: {
        lobster: ["var(--font-lobster)"],
      },
    },
  },
  plugins: [],
};
export default config;

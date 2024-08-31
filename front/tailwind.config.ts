import { Roboto_Condensed, Roboto } from "next/font/google";
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
        white: "#DBE2EC",
        lightGreen: "#C2F22D",
        darkGreen: "#163300",
        lightBlue: "#2A3546",
        darkBlue: "#000E26",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
      },

      spacing: {
        'small': '1rem',
        'marginY': '5rem',
        'marginX': '12rem',
        'nav': '5rem'
      }
    },
  },
  plugins: [],
};
export default config;
  
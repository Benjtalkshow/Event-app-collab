import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "var(--font-inter)",
      montserrat: "var(--font-montserrat)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#FFC6BC",
          peach: "#FFC6BC",
          blue: "#D2F5FE",
          orange: "#FFE0C4",
          grey: "#4C4C4C",
          'grey-200': '#E3E3E3'
        },
        secondary: {
          DEFAULT: "#3F3849",
        },
      },
    },
  },
  plugins: [],
};
export default config;

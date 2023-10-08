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
        "login-bg": "url('/images/holding-smartphone-hand.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#FFC6BC",
          peach: "#FFC6BC",
          blue: "#D2F5FE",
          orange: "#FFE0C4",
          grey: "#4C4C4C",
          purple: "#EEE0FF",
        },
        secondary: {
          DEFAULT: "#3F3849",
        },
        timeline: {
          black: "#141414",
          whiteOne: "#FFF",
          whiteTwo: "#F0F0F0",
          brown: "#3F3849",
          lightBlue: "#D2F5FE",
          peach: "#3F3849",
        },
      },
    },
  },
  plugins: [],
};
export default config;

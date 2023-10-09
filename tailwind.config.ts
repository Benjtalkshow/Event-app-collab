import type {Config} from "tailwindcss";

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
        peach: "#FFC6BC",
        lightBlue: "#D2F5FE",
        peachyPink: "#FFE0C4",
        gray: "#4C4C4C",
        lavender: "#EEE0FF",
        charcoal: "#3F3849",
        black: "#141414",
        white: "#FFF",
        lightGrey: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
export default config;

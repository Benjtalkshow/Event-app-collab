import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: 'var(--font-inter)',
      montserrat: 'var(--font-montserrat)',
    },
    extend: {
      backgroundImage: {
        'login-bg': "url('/images/holding-smartphone-hand.png')",
      },
      colors: {
        primary: {
          DEFAULT: '#FFC6BC',
          peach: '#FFC6BC',
          blue: '#D2F5FE',
          orange: '#FFE0C4',
          grey: '#4C4C4C',
        },
        secondary: {
          DEFAULT: '#3F3849',
        },
      },
    },
  },
  plugins: [],
};
export default config;

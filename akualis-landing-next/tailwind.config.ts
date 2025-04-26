// filepath: /home/m-xime/projects/akualis-landing-page/akualis-landing-next/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  // ...other config...
};

export default config;

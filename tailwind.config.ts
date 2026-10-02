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
        amber: {
          DEFAULT: "#F2A20C",
          sun: "#F2A20C",
        },
        chalk: {
          DEFAULT: "#FBF7EC",
        },
        ink: {
          DEFAULT: "#0F1A24",
          soft: "#4A5663",
        },
        royal: {
          DEFAULT: "#1E40C8",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: "#101010",
        card: "#151515",

        primary: "#FFFFFF",
        secondary: "#A1A1AA",

        accent: "#00E5FF",
        success: "#39FF88",

        border: "#242424",
      },

      fontSize: {
        hero: [
          "clamp(4rem,10vw,9rem)",
          {
            lineHeight: "0.95",
            fontWeight: "900",
          },
        ],
      },

      maxWidth: {
        content: "1440px",
      },
    },
  },

  plugins: [],
};

export default config;
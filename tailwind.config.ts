import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          black: "#000000",
          gray: "#6B665F",
          gold: "#B89A7A",
          linen: "#E7E2D8",
          cream: "#FFFFFF",
        },
      },
      fontFamily: {
        playfair: ["var(--font-acheria)", "var(--font-playfair)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "Helvetica Neue", "sans-serif"],
        alexbrush: ["var(--font-alex-brush)", "cursive"],
        acheria: ["var(--font-acheria)", "var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-up": "fade-up 0.8s ease forwards",
        "fade-in": "fade-in 1s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

const { transform } = require('next/dist/build/swc');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "loop-scroll2": {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      animation: {
        "loop-scroll": "loop-scroll 25s linear infinite",
        "loop-scroll2": "loop-scroll2 20s linear infinite"
      }
    },
  },
  plugins: [],
};

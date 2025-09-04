/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["font-heading", "font-body"],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom":
          "inset 5px 5px 10px #a3a3a3, inset -5px -5px 10px #ffffff",
        "custom-neumorphic": "5px 5px 10px #a3a3a3, -5px -5px 10px #ffffff",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideOut: "slideOut 0.3s ease-in",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

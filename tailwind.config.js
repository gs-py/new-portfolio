/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "2.5rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#e9e9ee",
          sunk: "#e3e3e9",
          raised: "#eeeef2",
        },
        ink: {
          DEFAULT: "#1e1f26",
          muted: "#565863",
          faint: "#666875",
        },
        accent: {
          DEFAULT: "#4c4fd4",
          strong: "#3d40b8",
          soft: "#c9cbf3",
        },
        graphite: {
          DEFAULT: "#22232b",
          soft: "#33343e",
        },
        shade: "#c4c5cd",
        glow: "#ffffff",
      },
      boxShadow: {
        neu: "9px 9px 18px #c6c7ce, -9px -9px 18px #ffffff",
        "neu-sm": "5px 5px 11px #cbccd3, -5px -5px 11px #ffffff",
        "neu-lg": "18px 18px 36px #c0c1c9, -18px -18px 36px #ffffff",
        "neu-in": "inset 6px 6px 12px #c9cad1, inset -6px -6px 12px #ffffff",
        "neu-in-sm": "inset 3px 3px 7px #cccdd4, inset -3px -3px 7px #ffffff",
        "neu-in-lg": "inset 11px 11px 22px #c5c6ce, inset -11px -11px 22px #ffffff",
        "neu-flat": "2px 2px 5px #cfd0d7, -2px -2px 5px #ffffff",
        "neu-none": "0px 0px 0px #c6c7ce, 0px 0px 0px #ffffff",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px) scale(0.985)" },
          to: { opacity: "1", transform: "none" },
        },
        sweep: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.22,1,0.36,1) both",
        breathe: "breathe 2.6s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

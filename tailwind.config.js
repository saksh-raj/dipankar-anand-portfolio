/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0D0D0D",
        card: "#111111",
        line: "rgba(255,255,255,0.08)",
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        muted: "#6B6B72",
        accent: {
          DEFAULT: "#22D3EE",
          soft: "rgba(34,211,238,0.14)",
          glow: "rgba(34,211,238,0.35)",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        eyebrow: "0.22em",
      },
      fontSize: {
        display: ["clamp(3rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.045em" }],
        h2: ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-3%,-2%)" },
          "30%": { transform: "translate(2%,-4%)" },
          "50%": { transform: "translate(-1%,3%)" },
          "70%": { transform: "translate(3%,2%)" },
          "90%": { transform: "translate(-2%,1%)" },
        },
      },
      animation: {
        grain: "grain 8s steps(6) infinite",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#1A1A1A",
        paper: "#FFFFFF",
        "paper-warm": "#F4F4F2",
        muted: "#6B6B6B",
        "muted-2": "#9A9A9A",
        line: "#E5E5E3",
        "line-strong": "#D4D4D0",
        accent: "#4F46E5",
        "accent-soft": "#6366F1",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tightish: "-0.02em",
      },
      maxWidth: {
        container: "1440px",
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'stat': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
    },
  },
  plugins: [],
};

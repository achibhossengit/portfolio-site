export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "fade-up": "fadeUp 500ms cubic-bezier(0.645, 0.045, 0.355, 1) both",
      },
      transitionTimingFunction: {
        portfolio: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      boxShadow: {
        lift: "0 20px 30px -15px rgb(0 0 0 / 0.35)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    ({ addBase }) => {
      addBase({
        html: { scrollBehavior: "smooth" },
        body: { minHeight: "100vh" },
        "#root": { minHeight: "100vh" },
        ":focus-visible": {
          outline: "2px solid var(--color-primary)",
          outlineOffset: "3px",
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
          },
        },
        '[data-theme="dark"]': {
          "color-scheme": "dark",
          "--color-base-100": "#0c0f14",
          "--color-base-200": "#12171f",
          "--color-base-300": "#1a222d",
          "--color-base-content": "#c5cdd8",
          "--color-primary": "#7dd3c0",
          "--color-primary-content": "#0c0f14",
          "--color-accent": "#7dd3c0",
          "--color-accent-content": "#0c0f14",
          "--color-neutral": "#9aa3b2",
          "--color-neutral-content": "#0c0f14",
        },
        '[data-theme="light"]': {
          "color-scheme": "light",
          "--color-base-100": "#fdf6e3",
          "--color-base-200": "#eee8d5",
          "--color-base-300": "#d6cfc0",
          "--color-base-content": "#586e75",
          "--color-primary": "#2aa198",
          "--color-primary-content": "#fdf6e3",
          "--color-accent": "#2aa198",
          "--color-accent-content": "#fdf6e3",
          "--color-neutral": "#657b83",
          "--color-neutral-content": "#fdf6e3",
        },
      });
    },
  ],
  daisyui: {
    themes: ["dark --prefersdark", "light --default"],
    logs: false,
  },
};

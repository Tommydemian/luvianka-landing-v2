const { title } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "2rem",
      "4xl": "4rem",
    },

    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        "src-sans": ["var(--font-src-sans)"],
        "grand-hotel": ["var(--font-grand-hotel)"],

        // Semantic
        title: ["var(--font-oswald)"],
      },
      colors: {
        // Descriptive (Visual-based) approach
        red: {
          primary: "var(--red-base)",
          secondary: "var(--red-deep)",
          accent: "var(--red-bright)",
        },

        // Semantic (Purpose-based) approach
        action: {
          primary: "var(--red-base)",
          secondary: "var(--red-deep)",
        },
        surface: {
          red: "var(--red-deep)",
          gray: "var(--gray-base)",
        },
        text: {
          highlight: "var(--red-bright)",
        },
      },
      borderRadius: {
        cta: "2.188rem", // 35px
      },
      spacing: {
        "nav-heigth": "var(--navigation-height)",
        "size-60": "3.75rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

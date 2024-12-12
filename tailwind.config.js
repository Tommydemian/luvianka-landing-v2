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
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        "src-sans": ["var(--font-src-sans)"],
        "grand-hotel": ["var(--font-grand-hotel)"],
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
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

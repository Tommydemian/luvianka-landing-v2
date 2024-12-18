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
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "xl.5": "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
    },

    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        "src-sans": ["var(--font-src-sans)"],
        "grand-hotel": ["var(--font-grand-hotel)"],

        // Semantic
        title: ["var(--font-oswald)"],
        decorative: ["var(--font-grand-hotel)"],
      },
      colors: {
        // Descriptive (Visual-based) approach
        red: {
          primary: "var(--red-base)",
          "primary-hover": "var(--color-primary-hover)",

          secondary: "var(--red-deep)",
          accent: "var(--red-bright)",
        },

        "ligth-gray": "#E0E0E0",

        // Semantic (Purpose-based) approach
        action: {
          primary: "var(--red-base)",
          secondary: "var(--red-deep)",
        },
        surface: {
          red: "var(--red-deep)",
          gray: "var(--gray-base)",
          beige: "#f8f0ed",
          snow: "#FDF8F5",
        },
        root: {
          highlight: "var(--red-bright)",
          primary: "var(--text-base)",
          secondary: "#FFFFFF",
          accent: "var(--red-base)",
        },
      },
      borderRadius: {
        cta: "var(--cta-border-radius)",
        "product-card": "1.25rem",
      },
      spacing: {
        "nav-heigth": "var(--navigation-height)",
        "size-24": "1.5rem",
        "size-30": "1.875rem",
        "size-35": "2.188rem",
        "size-45": "2.813rem",
        "size-60": "3.75rem",
        "text-with-image-flow-content-mobile": "0.688rem",
        "text-with-image-flow-content-desktop": "1.375rem",
        "empresa-section-py-mobile": "2.5rem",
        "empresa-section-py-desktop": "4.375rem",
        // em spacing
        "em-size-35": "2.188rem",
      },
      transitionDuration: {
        "cubic-bezier-base": "var(--transition-timing-cubic-bezier-base)",
      },
      willChange: {
        "background-color": "background-color",
        "box-shadow": "box-shadow",
      },
      boxShadow: {
        cta: "var(--cta-shadow)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

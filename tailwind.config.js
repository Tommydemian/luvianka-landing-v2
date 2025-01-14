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
      "2xl.5": "2.5rem",
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
      screens: {
        "mobile-base": "390px",
      },
      colors: {
        // Descriptive (Visual-based) approach
        red: {
          primary: "var(--red-base)",
          "primary-hover": "var(--color-primary-hover)",
          "primary-active": "#c41f39",
          "primary-focus": "#ffd1d8",

          secondary: "var(--red-deep)",
          accent: "var(--red-bright)",
        },

        "black-hover": "#333333",
        "black-active": "#1a1a1a",
        "black-focus": "#666666",

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
        "product-dropdown": "1rem",
      },
      spacing: {
        "nav-heigth": "var(--navigation-height)",
        "size-16": "1rem",
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
        "product-dropdown-top": "var(--product-dropdown-top)",
      },
      willChange: {
        "background-color": "background-color",
        "box-shadow": "box-shadow",
      },
      boxShadow: {
        cta: "var(--cta-shadow)",
        "product-dropdown": "var(--product-dropdown-box-shadow)",
        "nav-mobile-cta": "0px -1px 42.8px 0px #0000001A",
        "wspp-link":
          "0 1px 6px 0 rgba(0, 0, 0, .06), 0 2px 32px 0 rgba(0, 0, 0, .16)",
      },
      transitionProperty: {
        menu: "opacity, transform",
        cta: "background-color, box-shadow",
        "product-dropdown": "visibility, opacity, transform",
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.22, 0, 0.26, 1)",
        // Semantic
        menu: "cubic-bezier(0.22, 0, 0.36, 1)",
      },
      transitionDuration: {
        menu: "300ms",
        150: "150ms",
        600: "600ms",
      },
      keyframes: {
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-8px)" },
        },
      },
      animation: {
        "menu-in": "menu-in 300ms cubic-bezier(0.22, 0, 0.36, 1)",
        "menu-out": "menu-out 300ms cubic-bezier(0.22, 0, 0.36, 1)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

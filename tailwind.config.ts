import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "360px",   // iPhone SE / Small Phones
        "sm": "640px",   // Standard Mobile / iPhone 13/14
        "md": "768px",   // Tablets / iPads
        "lg": "1024px",  // Small Laptops
        "xl": "1280px",  // Large Laptops
        "2xl": "1536px", // Extra Large Screens
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Space Mono, sans-serif",
            h1: {
              fontFamily: "Space Mono, sans-serif",
              fontWeight: "700",
              fontSize: "2rem", // Default size
              "@screen md": { fontSize: "2.5rem" }, // Bigger on iPads
              "@screen lg": { fontSize: "3rem" }, // Even bigger on laptops
            },
            h2: {
              fontFamily: "Space Mono, sans-serif",
              fontWeight: "600",
              fontSize: "1.5rem",
              "@screen md": { fontSize: "2rem" },
              "@screen lg": { fontSize: "2.25rem" },
            },
            p: {
              fontFamily: "Space Mono, sans-serif",
              lineHeight: "1.75",
              fontSize: "1rem",
              "@screen md": { fontSize: "1.125rem" },
              "@screen lg": { fontSize: "1.25rem" },
            },
            code: {
              fontFamily: "Space Mono, sans-serif",
            },
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
});

export default config;

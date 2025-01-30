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
        "xxs": "320px",  // Explicitly add 320px support
        "xs": "360px",   // iPhone SE / Small Phones
        "sm": "640px",   // Standard Mobile
        "md": "768px",   // Tablets
        "lg": "1024px",  // Small Laptops
        "xl": "1280px",  // Large Laptops
        "2xl": "1536px", // Extra Large Screens
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.5rem", // Smaller for very small screens
              "@screen xs": { fontSize: "1.75rem" },
              "@screen sm": { fontSize: "2rem" },
              "@screen md": { fontSize: "2.5rem" },
            },
            p: {
              fontSize: "0.875rem",
              "@screen xs": { fontSize: "1rem" },
              "@screen sm": { fontSize: "1.125rem" },
            },
            button: {
              fontSize: "0.875rem",
            },
          },
        },
      },
      spacing: {
        18: "4.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",  // Smaller padding for 320px screens
          xs: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "4rem",
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

import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
            },
            h2: {
              fontFamily: "Space Mono, sans-serif",
              fontWeight: "600",
            },
            p: {
              fontFamily: "Space Mono, sans-serif",
              lineHeight: "1.75",
            },
            code: {
              fontFamily: "Space Mono, sans-serif",
            },
          },
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

import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: object = withMT({
  // Specify the files Tailwind should scan for class names
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App folder for Next.js
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Reusable components
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory (if applicable)
  ],
  theme: {
    extend: {
      // Extend default theme configurations
      fontFamily: {
        sans: ["Noto Sans Mono", "sans-serif"], // Customize default sans font
      },
      colors: {
        // Add custom colors if needed
        primary: "#1E90FF", // Example: Dodger Blue
        secondary: "#FF6347", // Example: Tomato Red
      },
      spacing: {
        // Add custom spacing (useful for padding/margin)
        18: "4.5rem", // Example: 18 is equivalent to 4.5rem
      },
    },
  },
  plugins: [
    // Add plugins if needed
    require("@tailwindcss/typography"), // Tailwind Typography for rich text
    require("@tailwindcss/forms"), // Tailwind Forms for styled form inputs
  ],
});

export default config;

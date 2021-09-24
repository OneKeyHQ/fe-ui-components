const {
  colors,
  boxShadow,
  screens,
  borderRadius,
  fontFamily,
  spacing,
} = require("./src/components/utils/tailwind");

module.exports = {
  mode: "jit",
  prefix: "okd-",
  purge: {
    mode: "all",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      screens,
      fontFamily,
      spacing,
    },
    borderRadius,
    boxShadow,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};

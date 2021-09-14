const { colors, boxShadow, screens, borderRadius, fontFamily } = require("./src/components/utils/tailwind");

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
      colors: colors,
      screens: screens,
      fontFamily: fontFamily,
    },
    borderRadius: borderRadius,
    boxShadow: boxShadow,
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};

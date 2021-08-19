const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require('./src/components/utils/tailwind');

module.exports = {
  mode: "jit",
  prefix: 'okd-',
  purge: {
    mode: 'all',
    content: ["./src/**/*.{js,jsx,ts,tsx}"]
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
          "PingFang SC",
          '"Microsoft YaHei"',
          '"Source Han Sans SC"',
          '"Noto Sans CJK SC"',
          "WenQuanYi Micro Hei",
        ],
      },
    },
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

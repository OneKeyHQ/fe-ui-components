module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
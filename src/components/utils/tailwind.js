const getColor = (colorVar, { opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${colorVar}), ${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(${colorVar}), var(${opacityVariable}, 1))`;
  }

  return `rgb(var(${colorVar}))`;
};

const colors = {
  white: (params) => getColor("--white", params),
  black: (params) => getColor("--black", params),
  "white-ground": (params) => getColor("--white-ground", params),
  "gray-50": (params) => getColor("--gray-50", params),
  "gray-100": (params) => getColor("--gray-100", params),
  "gray-200": (params) => getColor("--gray-200", params),
  "gray-300": (params) => getColor("--gray-300", params),
  "gray-400": (params) => getColor("--gray-400", params),
  "gray-500": (params) => getColor("--gray-500", params),
  "gray-600": (params) => getColor("--gray-600", params),
  "gray-700": (params) => getColor("--gray-700", params),
  "gray-800": (params) => getColor("--gray-800", params),
  "gray-900": (params) => getColor("--gray-900", params),
  "brand-50": (params) => getColor("--brand-50", params),
  "brand-100": (params) => getColor("--brand-100", params),
  "brand-200": (params) => getColor("--brand-200", params),
  "brand-300": (params) => getColor("--brand-300", params),
  "brand-400": (params) => getColor("--brand-400", params),
  "brand-500": (params) => getColor("--brand-500", params),
  "brand-600": (params) => getColor("--brand-600", params),
  "brand-700": (params) => getColor("--brand-700", params),
  "brand-800": (params) => getColor("--brand-800", params),
  "brand-900": (params) => getColor("--brand-900", params),
  "green-50": (params) => getColor("--green-50", params),
  "green-100": (params) => getColor("--green-100", params),
  "green-200": (params) => getColor("--green-200", params),
  "green-300": (params) => getColor("--green-300", params),
  "green-400": (params) => getColor("--green-400", params),
  "green-500": (params) => getColor("--green-500", params),
  "green-600": (params) => getColor("--green-600", params),
  "green-700": (params) => getColor("--green-700", params),
  "green-800": (params) => getColor("--green-800", params),
  "green-900": (params) => getColor("--green-900", params),
  "blue-50": (params) => getColor("--blue-50", params),
  "blue-100": (params) => getColor("--blue-100", params),
  "blue-200": (params) => getColor("--blue-200", params),
  "blue-300": (params) => getColor("--blue-300", params),
  "blue-400": (params) => getColor("--blue-400", params),
  "blue-500": (params) => getColor("--blue-500", params),
  "blue-600": (params) => getColor("--blue-600", params),
  "blue-700": (params) => getColor("--blue-700", params),
  "blue-800": (params) => getColor("--blue-800", params),
  "blue-900": (params) => getColor("--blue-900", params),
  "yellow-50": (params) => getColor("--yellow-50", params),
  "yellow-100": (params) => getColor("--yellow-100", params),
  "yellow-200": (params) => getColor("--yellow-200", params),
  "yellow-300": (params) => getColor("--yellow-300", params),
  "yellow-400": (params) => getColor("--yellow-400", params),
  "yellow-500": (params) => getColor("--yellow-500", params),
  "yellow-600": (params) => getColor("--yellow-600", params),
  "yellow-700": (params) => getColor("--yellow-700", params),
  "yellow-800": (params) => getColor("--yellow-800", params),
  "yellow-900": (params) => getColor("--yellow-900", params),
  "red-50": (params) => getColor("--red-50", params),
  "red-100": (params) => getColor("--red-100", params),
  "red-200": (params) => getColor("--red-200", params),
  "red-300": (params) => getColor("--red-300", params),
  "red-400": (params) => getColor("--red-400", params),
  "red-500": (params) => getColor("--red-500", params),
  "red-600": (params) => getColor("--red-600", params),
  "red-700": (params) => getColor("--red-700", params),
  "red-800": (params) => getColor("--red-800", params),
  "red-900": (params) => getColor("--red-900", params),
};

const boxShadow = {
  sm: "0 1px 2px 0 rgba(var(--shadowRGB), 0.05)",
  DEFAULT:
    "0 1px 3px 0 rgba(var(--shadowRGB), 0.1), 0 1px 2px 0 rgba(var(--shadowRGB), 0.06)",
  md:
    "0 4px 6px -1px rgba(var(--shadowRGB), 0.1), 0 2px 4px -1px rgba(var(--shadowRGB), 0.06)",
  lg:
    "0 10px 15px -3px rgba(var(--shadowRGB), 0.1), 0 4px 6px -2px rgba(var(--shadowRGB), 0.05)",
  xl:
    "0 20px 25px -5px rgba(var(--shadowRGB), 0.1), 0 10px 10px -5px rgba(var(--shadowRGB), 0.04)",
  "2xl": "0 25px 50px -12px rgba(var(--shadowRGB), 0.25)",
  "3xl": "0 35px 60px -15px rgba(var(--shadowRGB), 0.3)",
  inner: "inset 0 2px 4px 0 rgba(var(--shadowRGB), 0.06)",
  none: "none",
};

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const borderRadius = {
  none: "0",
  sm: "0.375rem",
  DEFAULT: "0.75rem",
  lg: "1.5rem",
  full: "9999px",
};

const fontFamily = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    '"PingFang SC"',
    '"Microsoft YaHei"',
    '"Source Han Sans SC"',
    '"Noto Sans CJK SC"',
    '"WenQuanYi Micro Hei"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
};

module.exports = {
  colors,
  boxShadow,
  screens,
  borderRadius,
  fontFamily,
};

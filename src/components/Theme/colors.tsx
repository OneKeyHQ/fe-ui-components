/** default white theme */
const theme1 = {
  "gray-50": "249, 249, 251",
  "gray-100": "242, 242, 247",
  "gray-200": "231, 231, 238",
  "gray-300": "211, 211, 222",
  "gray-400": "160, 160, 176",
  "gray-500": "110, 110, 134",
  "gray-600": "73, 73, 95",
  "gray-700": "53, 53, 75",
  "gray-800": "31, 31, 49",
  "gray-900": "18, 18, 30",
  "brand-50": "235, 249, 236",
  "brand-100": "215, 244, 218",
  "brand-200": "163, 229, 169",
  "brand-300": "103, 213, 114",
  "brand-400": "51, 198, 65",
  "brand-500": "0, 184, 18",
  "brand-600": "0, 147, 14",
  "brand-700": "0, 111, 11",
  "brand-800": "0, 88, 9",
  "brand-900": "0, 66, 6",
  "green-50": "239, 251, 242",
  "green-100": "223, 246, 229",
  "green-200": "182, 235, 195",
  "green-300": "134, 222, 156",
  "green-400": "93, 210, 122",
  "green-500": "52, 199, 89",
  "green-600": "42, 159, 71",
  "green-700": "31, 120, 54",
  "green-800": "25, 95, 43",
  "green-900": "19, 72, 32",
  "blue-50": "235, 245, 255",
  "blue-100": "215, 234, 255",
  "blue-200": "163, 207, 255",
  "blue-300": "103, 176, 255",
  "blue-400": "51, 149, 255",
  "blue-500": "0, 122, 255",
  "blue-600": "0, 98, 204",
  "blue-700": "0, 74, 154",
  "blue-800": "0, 58, 122",
  "blue-900": "0, 44, 92",
  "yellow-50": "255, 251, 235",
  "yellow-100": "255, 247, 215",
  "yellow-200": "255, 237, 163",
  "yellow-300": "255, 225, 103",
  "yellow-400": "255, 214, 51",
  "yellow-500": "255, 204, 0",
  "yellow-600": "204, 163, 0",
  "yellow-700": "154, 123, 0",
  "yellow-800": "122, 98, 0",
  "yellow-900": "92, 74, 0",
  "red-50": "255, 240, 239",
  "red-100": "255, 224, 223",
  "red-200": "255, 184, 180",
  "red-300": "255, 138, 132",
  "red-400": "255, 98, 89",
  "red-500": "255, 59, 48",
  "red-600": "204, 47, 38",
  "red-700": "154, 36, 29",
  "red-800": "122, 28, 23",
  "red-900": "92, 21, 17",
  "white-ground": "255,255,255",
  white: "255,255,255",
  black: "0, 0, 0",
  shadowRGB: "0,0,0",
} as const;

/** dark theme */
const theme2 = {
  "gray-50": "18, 18, 30",
  "gray-100": "31, 31, 49",
  "gray-200": "53, 53, 75",
  "gray-300": "73, 73, 95",
  "gray-400": "110, 110, 134",
  "gray-500": "160, 160, 176",
  "gray-600": "211, 211, 222",
  "gray-700": "231, 231, 238",
  "gray-800": "242, 242, 247",
  "gray-900": "249, 249, 251",
  "brand-50": "0, 66, 6",
  "brand-100": "0, 88, 9",
  "brand-200": "0, 111, 11",
  "brand-300": "0, 147, 14",
  "brand-400": "0, 184, 18",
  "brand-500": "51, 198, 65",
  "brand-600": "103, 213, 114",
  "brand-700": "163, 229, 169",
  "brand-800": "215, 244, 218",
  "brand-900": "235, 249, 236",
  "green-50": "19, 72, 32",
  "green-100": "25, 95, 43",
  "green-200": "31, 120, 54",
  "green-300": "42, 159, 71",
  "green-400": "52, 199, 89",
  "green-500": "93, 210, 122",
  "green-600": "134, 222, 156",
  "green-700": "182, 235, 195",
  "green-800": "223, 246, 229",
  "green-900": "239, 251, 242",
  "blue-50": "0, 44, 92",
  "blue-100": "0, 58, 122",
  "blue-200": "0, 74, 154",
  "blue-300": "0, 98, 204",
  "blue-400": "0, 122, 255",
  "blue-500": "51, 149, 255",
  "blue-600": "103, 176, 255",
  "blue-700": "163, 207, 255",
  "blue-800": "215, 234, 255",
  "blue-900": "235, 245, 255",
  "yellow-50": "92, 74, 0",
  "yellow-100": "122, 98, 0",
  "yellow-200": "154, 123, 0",
  "yellow-300": "204, 163, 0",
  "yellow-400": "255, 204, 0",
  "yellow-500": "255, 214, 51",
  "yellow-600": "255, 225, 103",
  "yellow-700": "255, 237, 163",
  "yellow-800": "255, 247, 215",
  "yellow-900": "255, 251, 235",
  "red-50": "92, 21, 17",
  "red-100": "122, 28, 23",
  "red-200": "154, 36, 29",
  "red-300": "204, 47, 38",
  "red-400": "255, 59, 48",
  "red-500": "255, 98, 89",
  "red-600": "255, 138, 132",
  "red-700": "255, 184, 180",
  "red-800": "255, 224, 223",
  "red-900": "255, 240, 239",
  "white-ground": "13, 13, 18",
  white: "18, 18, 30",
  black: "255,255,255",
  shadowRGB: "255,255,255",
} as const;

const theme = {
  light: theme1,
  dark: theme2,
} as const;

const DEFAULT_THEME_VARIANT = "light";

export const getDefaultTheme = (initial: string): keyof typeof theme => {
  if (Object.keys(theme).includes(initial))
    return initial as keyof typeof theme;
  if (typeof window === "undefined") return DEFAULT_THEME_VARIANT;

  /** 如果被 OneKey Desktop 注入，使用默认 desktop 注入的结果 */
  const isHostByOneKeyDesktop =
    (window as any).$ONEKEY_SETTINGS_THEME === "dark" ? "dark" : "light";
  /** 当前系统主题 */
  const isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  return isHostByOneKeyDesktop || isSystemDarkMode || DEFAULT_THEME_VARIANT;
};

export type ThemeVariant = keyof typeof theme;
export type ThemeValues = typeof theme[ThemeVariant];

export default theme;

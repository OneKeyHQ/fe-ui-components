import { useContext, createContext, useMemo } from "react";

import type { ThemeVariant, ThemeValues } from '../Theme/colors';
import type { LocaleSymbol } from '../locales';
import { screens } from "../utils/tailwind";

export type ScreenState = {
  layout: keyof typeof screens;
  screenWidth: number | null;
  screenHeight: number | null;
};

export type ContextValue = {
  themeVariant: ThemeVariant;
  theme: ThemeValues;
  setThemeVariant: (k: ThemeVariant) => void;
  locale: LocaleSymbol;
  setLocale: (k: LocaleSymbol) => void;
} & ScreenState;


export const Context = createContext<ContextValue>({} as ContextValue);

export const useConfig = () => useContext(Context);

export const useLocale = () => {
  const context = useContext(Context);

  return useMemo(() => {
    return {
      locale: context.locale,
      setLocale: context.setLocale,
    };
  }, [context.locale, context.setLocale]);
};

export const useTheme = () => {
  const context = useContext(Context);

  return useMemo(() => {
    return {
      themeVariant: context.themeVariant,
      setThemeVariant: context.setThemeVariant,
    };
  }, [context.themeVariant, context.setThemeVariant]);
}

export const useColor = (color?: keyof ThemeValues) => {
  const context = useContext(Context);

  const colors = useMemo(() => {
    return context.theme;
  }, [context.theme]);
  if (color) {
    return colors[color];
  }
  return colors;
}

export const useLayout = () => {
  const context = useContext(Context);

  return context.layout;
}

export const useScreen = () => {
  const context = useContext(Context);

  return useMemo(() => {
    return {
      width: context.screenWidth,
      height: context.screenHeight,
    };
  }, [context.screenWidth, context.screenHeight]);
}
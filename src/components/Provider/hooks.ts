import { useContext, createContext, useMemo } from "react";

export const Context = createContext<{theme: any; locale: any; setLocale: any;}>({theme: null, locale: null, setLocale: null});

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
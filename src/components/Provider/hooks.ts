import { useContext, createContext } from "react";

export const Context = createContext<{theme: any; locale: any}>({theme: null, locale: null});

export const useConfig = () => useContext(Context);
export const useLocale = () => useContext(Context).locale;
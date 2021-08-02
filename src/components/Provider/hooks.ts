import { useContext, createContext } from "react";

export const Context = createContext<{theme: any}>({theme: null});

export const useConfig = () => useContext(Context);

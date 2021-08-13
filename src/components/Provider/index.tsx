import React, { FC, useEffect, useState, useMemo } from "react";
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from "react-intl";

import { Context } from "./hooks";
import { COLORS } from "../Theme";
import locales from "../locales";
import { getLocaleSymbol } from "../utils";

export type localeType = IntlConfig["locale"];

const deepParseRecord = (
  obj: Record<string, Record<string, string> | string>,
  prefix: string = ""
): Record<string, string> => {
  return Object.entries(obj).reduce((memo, current) => {
    const [key, value] = current;
    if (typeof value === "object") {
      return {
        ...memo,
        ...deepParseRecord(value, `${prefix}${key}`),
      };
    }
    return {
      ...memo,
      [`${prefix}-${key}`]: value,
    };
  }, {});
};

const cache = createIntlCache();

const Provider: FC<{ locale: localeType }> = ({ children, locale }) => {
  const [theme, setTheme] = useState<Record<string, string>>();

  useEffect(() => {
    const theme = deepParseRecord(COLORS);
    setTheme(theme);
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof document === "undefined") return;
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  const validLocaleSymbol = getLocaleSymbol(locale);
  const messages = locales[validLocaleSymbol];

  const [intl, setIntl] = useState(
    createIntl({ locale: validLocaleSymbol, messages }, cache)
  );

  useEffect(() => {
    setIntl(createIntl({ locale: validLocaleSymbol, messages }, cache));
  }, [validLocaleSymbol, messages]);

  const providerValue = useMemo(() => {
    return {
      theme,
      locale: intl.locale,
    };
  }, [theme, intl.locale]);

  return (
    <Context.Provider value={providerValue}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </Context.Provider>
  );
};

export default Provider;

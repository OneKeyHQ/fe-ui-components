import React, { FC, useEffect, useState, useMemo, useCallback } from "react";
import {
  createIntl,
  createIntlCache,
  RawIntlProvider,
  IntlConfig,
} from "react-intl";
import cookie from "js-cookie";

import { Context } from "./hooks";

import { COLORS } from "../Theme";
import locales from "../locales";
import { getLocaleSymbol, LocaleSymbol, OK_LOCALE_CACHE_KEY, TranslationMap } from "../utils";

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

export type UIProviderProps = {
  /**
   * react-intl config
   */
  intl?: IntlConfig;
  /**
   * message map for locale config, using partial for non required translation projects
   */
  messagesMap?: Partial<TranslationMap>;
  /**
   * fallback locale symbol
   */
  defaultLocale?: LocaleSymbol;
};

const Provider: FC<UIProviderProps> = ({
  children,
  intl,
  messagesMap,
  defaultLocale,
}) => {
  const [theme, setTheme] = useState<Record<string, string>>();

  useEffect(() => {
    const theme = deepParseRecord(COLORS);
    setTheme(theme);
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof document === "undefined") return;
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  const validLocaleSymbol = getLocaleSymbol(intl?.locale);

  const getMessage = useCallback(
    (activeLocale) => ({
      ...locales[activeLocale],
      ...(messagesMap?.[activeLocale] ??
        messagesMap?.[defaultLocale] ??
        intl?.messages ??
        {}),
    }),
    [intl?.messages, messagesMap, defaultLocale]
  );

  const [globalIntl, setGlobalIntl] = useState(
    createIntl(
      {
        locale: validLocaleSymbol,
        messages: getMessage(validLocaleSymbol),
      },
      cache
    )
  );

  useEffect(() => {
    console.log(validLocaleSymbol, getMessage(validLocaleSymbol));
    setGlobalIntl(
      createIntl(
        { locale: validLocaleSymbol, messages: getMessage(validLocaleSymbol) },
        cache
      )
    );
  }, [validLocaleSymbol, getMessage]);

  const providerValue = useMemo(() => {
    const setLocale = (nextLocale: LocaleSymbol) => {
      const validNextLocaleSymbol = getLocaleSymbol(nextLocale);
      const nextMessages = getMessage(validNextLocaleSymbol);
      setGlobalIntl(
        createIntl(
          {
            locale: validNextLocaleSymbol,
            messages: nextMessages,
          },
          cache
        )
      );
      cookie.set(OK_LOCALE_CACHE_KEY, validNextLocaleSymbol, {
        expires: 365,
        domain: ".onekey.so",
      });
    };

    return {
      theme,
      setLocale,
      locale: globalIntl.locale,
    };
  }, [theme, globalIntl.locale, getMessage]);

  return (
    <Context.Provider value={providerValue}>
      <RawIntlProvider value={globalIntl}>{children}</RawIntlProvider>
    </Context.Provider>
  );
};

export default Provider;

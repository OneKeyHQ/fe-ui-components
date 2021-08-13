import cookie from 'js-cookie';

export const OK_LOCALE_CACHE_KEY = '_onekey_locale_';

export const localeSymbols = ['zh-CN', 'en-US'] as const;
export type LocaleSymbol = (typeof localeSymbols)[number];

/**
 * isomorphic get user current locale
 *
 * @param {locale} optional a local string
 * @returns LocaleSymbol, one of 'zh-CN' | 'en-US'
 */
export const getLocaleSymbol = (locale?: string): LocaleSymbol => {
  const DEFAULT = localeSymbols[0];
  const userSystemDefaultLang = locale || cookie.get(OK_LOCALE_CACHE_KEY) || navigator.language || DEFAULT;

  if (localeSymbols.includes(userSystemDefaultLang)) {
    return userSystemDefaultLang;
  }

  return localeSymbols.find(localeSymbol => {
    // user is zh or en，zh-CN includes zh
    if (localeSymbol.includes(userSystemDefaultLang)) {
      return localeSymbol;
    }

    return null;
  }) || DEFAULT;
}
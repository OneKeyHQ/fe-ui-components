import cookie from 'js-cookie';
import localMap from '../locales';

export const OK_LOCALE_CACHE_KEY = '_onekey_locale_';

export type LocaleSymbol = keyof typeof localMap;
export type TranslationMap = Record<LocaleSymbol, Record<string, string>>

export const localeSymbols = Object.keys(localMap) as LocaleSymbol[];

/**
 * isomorphic get user current locale
 *
 * @param {locale} optional a local string
 * @returns LocaleSymbol, one of 'zh-CN' | 'en-US'
 */
export const getLocaleSymbol = (locale?: string): LocaleSymbol => {
  const DEFAULT = localeSymbols[0];
  const userSystemDefaultLang = locale || cookie.get(OK_LOCALE_CACHE_KEY) || (typeof navigator !== 'undefined' && navigator.language) || DEFAULT;

  if (localeSymbols.includes(userSystemDefaultLang)) {
    return userSystemDefaultLang;
  }

  // user is zh or en，zh-CN includes zh
  return localeSymbols.find(
    localeSymbol => localeSymbol.includes(userSystemDefaultLang)
  ) ?? DEFAULT;
}

export const getNumberFromPxString = (size: string): number => {
  return parseInt(size.replace('px', ''), 10);
};

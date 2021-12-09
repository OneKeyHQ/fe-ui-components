import { useEffect, useState } from 'react';
import { IS_BROWSER } from '../utils';

// Grap from https://github.com/streamich/react-use/blob/master/src/useSessionStorage.ts
export const useSessionStorage = <T>(
  key: string,
  initialValue?: T,
  raw?: boolean
): [T, (value: T) => void] => {
  if (!IS_BROWSER) {
    return [initialValue as T, () => {}];
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState<T>(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);
      if (typeof sessionStorageValue !== 'string') {
        sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
        return initialValue;
      } else {
        return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
      }
    } catch {
      // If user is in private mode or has storage restriction
      // sessionStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    try {
      const serializedState = raw ? String(state) : JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    } catch {
      // If user is in private mode or has storage restriction
      // sessionStorage can throw. Also JSON.stringify can throw.
    }
  });

  return [state, setState];
};

const __KEY_FOR_IFRAME_DO_NOT_USE__ = 'iframe_for_onekey_do_not_use'

export const useIsOneKeyIframe = () => {
  const [isIframe, updateSessionValue] = useSessionStorage(__KEY_FOR_IFRAME_DO_NOT_USE__, false)

  useEffect(() => {
    if (!IS_BROWSER || !globalThis.location?.search) return
    const params = new URLSearchParams(globalThis.location.search)
    const isInjectedIframe = params.get(__KEY_FOR_IFRAME_DO_NOT_USE__) !== null
    if (isInjectedIframe) {
      updateSessionValue(true)
    }
  }, [updateSessionValue])

  return isIframe
}

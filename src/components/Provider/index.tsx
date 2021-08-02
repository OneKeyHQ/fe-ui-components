import React, { FC, useEffect, useState, useMemo } from 'react';
import { Context } from './hooks';

import { COLORS } from '../Theme';

const deepParseRecord = (obj: Record<string, Record<string, string> | string>, prefix: string = ''): Record<string, string> => {
  return Object.entries(obj).reduce((memo, current) => {
    const [key, value] = current;
    if (typeof value === 'object') {
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
}

const Provider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Record<string, string>>();

  useEffect(() => {
    const theme = deepParseRecord(COLORS);
    setTheme(theme);
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof document === 'undefined') return;
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  const providerValue = useMemo(() => {
    return {
      theme
    };
  }, [theme]);

  return (
    <Context.Provider value={providerValue}>{children}</Context.Provider>
  );
}

export default Provider;
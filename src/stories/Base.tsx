import React from "react";
import { Switch, useTheme, useLocale } from "../components";

export const LocaleSwitch = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="okd-flex okd-items-center">
      <div className="okd-text-gray-500 okd-font-bold okd-text-xs okd-uppercase okd-tracking-wider okd-mr-4">
        LOCALE:
      </div>
      <div className="okd-flex okd-my-2 okd-items-center">
        <Switch
          value={locale === "zh-CN"}
          onChange={(val) => setLocale(val ? "zh-CN" : "en-US")}
          label="zh-CN"
        />
      </div>
    </div>
  );
};

export const ThemeSwitch = () => {
  const { themeVariant, setThemeVariant } = useTheme();

  return (
    <div className="okd-flex okd-items-center">
      <div className="okd-text-gray-500 okd-font-bold okd-text-xs okd-uppercase okd-tracking-wider okd-mr-4">
        THEME:
      </div>
      <div className="okd-flex okd-my-2 okd-items-center">
        <Switch
          value={!!(themeVariant === "light")}
          onChange={(val) => setThemeVariant(val ? "light" : "dark")}
          label="light"
        />
      </div>
    </div>
  );
};

const ConfigBar = () => {
  return (
    <div className="okd-flex okd-mb-4 okd-space-x-8">
      <LocaleSwitch />
      <ThemeSwitch />
    </div>
  );
};

export default ConfigBar;

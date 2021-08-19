import React, { useEffect, useState } from "react";
import { Switch, useTheme, useLocale } from "../components";

export const LocaleSwitch = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="okd-flex okd-items-center">
      <div className="okd-font-bold okd-w-24">LOCALE:</div>
      <div className="okd-flex okd-my-2 okd-items-center">
        <div className="okd-mx-5 okd-w-24 okd-font-bold okd-text-right">
          en-US
        </div>
        <Switch
          value={locale === "zh-CN"}
          onChange={(val) => setLocale(val ? "zh-CN" : "en-US")}
        />
        <div className="okd-mx-5 okd-w-24 okd-font-bold">zh-CN</div>
      </div>
    </div>
  );
};

export const ThemeSwitch = () => {
  const { themeVariant, setThemeVariant } = useTheme();

  return (
    <div className="okd-flex okd-items-center">
      <div className="okd-font-bold okd-w-24">THEME:</div>
      <div className="okd-flex okd-my-2 okd-items-center">
        <div className="okd-mx-5 okd-w-24 okd-font-bold okd-text-right">
          dark
        </div>
        <Switch
          value={!!(themeVariant === "light")}
          onChange={(val) => setThemeVariant(val ? "light" : "dark")}
        />
        <div className="okd-mx-5 okd-w-24 okd-font-bold">light</div>
      </div>
    </div>
  );
};

const ConfigBar = () => {
  return (
    <>
      <LocaleSwitch />
      <ThemeSwitch />
    </>
  );
};

export default ConfigBar;

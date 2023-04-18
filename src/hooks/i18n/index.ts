import { useMemo } from "react";
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enNavbar from "./locales/en/navbar.json";
import zhCommon from "./locales/zh/common.json";
import zhHome from "./locales/zh/home.json";
import zhNavbar from "./locales/zh/navbar.json";

type I18n = {
  en: {
    common: typeof enCommon;
    navbar: typeof enNavbar;
    home: typeof enHome;
  };
  zh: {
    common: typeof zhCommon;
    navbar: typeof zhNavbar;
    home: typeof zhHome;
  };
};

const i18n: I18n = {
  en: {
    common: enCommon,
    navbar: enNavbar,
    home: enHome,
  },
  zh: {
    common: zhCommon,
    navbar: zhNavbar,
    home: zhHome,
  },
};

export function t<
  L extends keyof I18n = "en",
  N extends keyof I18n[L] = "common"
>(key: keyof I18n[L][N], lang: L = "en" as L, namespace: N = "common" as N) {
  return i18n[lang][namespace][key];
}

export function useI18n<
  L extends keyof I18n = "en",
  N extends keyof I18n[L] = "common"
>(lang: L = "en" as L, namespace: N = "common" as N) {
  return useMemo(
    () => (key: keyof I18n[L][N]) => t(key, lang, namespace),
    [lang, namespace]
  );
}

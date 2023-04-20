import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
} from "react";
import enCommon from "./locales/en/common.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enNavbar from "./locales/en/navbar.json";
import zhCommon from "./locales/zh/common.json";
import zhFooter from "./locales/zh/footer.json";
import zhHome from "./locales/zh/home.json";
import zhNavbar from "./locales/zh/navbar.json";

type Trans = {
  common: typeof enCommon;
  navbar: typeof enNavbar;
  home: typeof enHome;
  footer: typeof enFooter;
};

export type NS = keyof Trans;
export type Lang = "en" | "zh";

type I18n = {
  [key in Lang]: Trans;
};

const i18n: I18n = {
  en: {
    common: enCommon,
    navbar: enNavbar,
    home: enHome,
    footer: enFooter,
  },
  zh: {
    common: zhCommon,
    navbar: zhNavbar,
    home: zhHome,
    footer: zhFooter,
  },
};

export const I18nContext = createContext({
  lang: "en" as Lang,
  setLang: (() => {}) as Dispatch<SetStateAction<Lang>>,
});

export function t<L extends Lang = "en", N extends NS = "common">(
  key: keyof I18n[L][N],
  ns: N = "common" as N,
  lang: L = "en" as L
) {
  return i18n[lang][ns][key];
}

/**
 * 使用翻译函数
 * @param ns 命名空间
 * @param lang 使用语言
 * @returns 翻译函数
 */
export function useI18n<L extends Lang = "en", N extends NS = "common">(
  ns?: N,
  lang?: L
) {
  const { lang: contextLang } = useContext(I18nContext);
  const _ns = ns || ("common" as N);
  const _lang = lang || (contextLang as L) || ("en" as L);
  return useMemo(
    () => (key: keyof I18n[L][N]) => t(key, _ns, _lang),
    [lang, ns]
  );
}

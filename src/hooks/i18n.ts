import { useRouter } from "next/router";
import { useMemo } from "react";

type Prefix = {
  hello: string;
  world: string;
};

type Lang = "en" | "zh";

type I18n = {
  [key in Lang]: Prefix;
};

const i18n: I18n = {
  en: {
    hello: "Hello",
    world: "World",
  },
  zh: {
    hello: "你好",
    world: "世界",
  },
};

export function t(key: keyof Prefix, lang?: Lang) {
  const { locale, defaultLocale } = useRouter();
  return useMemo(() => {
    return i18n[lang || ((locale || defaultLocale) as Lang)][key];
  }, [key, lang]);
}

import { UseProvideReturn } from "@/types";
import { defaultLang, Lang, locales } from "@/utils";
import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export const I18nContext = createContext({
  lang: defaultLang as Lang,
  setLang: (() => {}) as Dispatch<SetStateAction<Lang>>,
  detectedLang: defaultLang as Lang | undefined,
  setDetectedLang: (() => {}) as Dispatch<SetStateAction<Lang | undefined>>,
});

export const useProvideI18n = (
  pageLang?: Lang
): UseProvideReturn<"I18n", typeof I18nContext> => {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const [detectedLang, setDetectedLang] = useState<Lang>();

  useEffect(() => {
    if (!pageLang) {
      axios.get("https://ipapi.co/json").then((res) => {
        const detectedLang = res.data.languages
          .split(",")
          .find((lang: Lang) => locales.includes(lang));
        setDetectedLang(detectedLang);
        setLang(pageLang || detectedLang || defaultLang);
      });
    }
  }, []);

  return {
    I18nProvider: I18nContext.Provider,
    I18nValue: {
      lang,
      setLang,
      detectedLang,
      setDetectedLang,
    },
  };
};

export function useI18nContext() {
  return useContext(I18nContext);
}

import { Footer, Header, HeaderContext } from "@/components";
import {
  I18nContext,
  Lang,
  defaultLang as _defaultLang,
  locales,
} from "@/utils";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import "@/styles/globals.css";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  // 向全局注入 header ref
  const [headerRef, setHeaderRef] = useState(null as HTMLDivElement | null);

  // 切换语言
  const [showChangeLang, setShowChangeLang] = useState(false);
  const [defaultLang, setDefaultLang] = useState<Lang>(_defaultLang);
  const [lang, setLang] = useState((pageProps.lang as Lang) || defaultLang);
  useEffect(() => {
    if (!pageProps.lang) {
      axios.get("https://ipapi.co/json").then((res) => {
        const detectedLang = res.data.languages
          .split(",")
          .find((lang: Lang) => locales.includes(lang));
        setDefaultLang(detectedLang || _defaultLang);
        setLang((pageProps.lang as Lang) || detectedLang || _defaultLang);
      });
    }
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, defaultLang }}>
      <HeaderContext.Provider
        value={{
          header: headerRef,
          setHeader: setHeaderRef,
          showChangeLang,
          setShowChangeLang,
        }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderContext.Provider>
    </I18nContext.Provider>
  );
}

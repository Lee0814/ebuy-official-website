import { Footer, Header, HeaderContext } from "@/components";
import type { AppProps } from "next/app";
import { useState } from "react";

import { I18nContext, Lang } from "@/hooks";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [headerRef, setHeaderRef] = useState(null as HTMLDivElement | null);
  const [lang, setLang] = useState("en" as Lang);

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      <HeaderContext.Provider value={{ headerRef, setHeaderRef }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderContext.Provider>
    </I18nContext.Provider>
  );
}

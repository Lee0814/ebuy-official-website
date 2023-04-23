import { Footer, Header } from "@/components";
import type { AppProps } from "next/app";

import { useProvideHeader, useProvideI18n } from "@/states";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { HeaderProvider, HeaderValue } = useProvideHeader();
  const { I18nProvider, I18nValue } = useProvideI18n(pageProps.lang);

  return (
    <I18nProvider value={I18nValue}>
      <HeaderProvider value={HeaderValue}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HeaderProvider>
    </I18nProvider>
  );
}

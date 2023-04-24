import { Footer, Header } from "@/components";
import { useProvideHeader, useProvideI18n } from "@/states";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

import "@/styles/globals.css";
import classNames from "classnames";

const Inter = localFont({
  src: "../assets/fonts/Inter.ttf",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const { HeaderProvider, HeaderValue } = useProvideHeader();
  const { I18nProvider, I18nValue } = useProvideI18n(pageProps.lang);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        {/* <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
        <script>vConsole = new window.VConsole();</script> */}
      </Head>
      <I18nProvider value={I18nValue}>
        <HeaderProvider value={HeaderValue}>
          <Header />
          <main className={classNames(Inter.variable, "font-sans")}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </HeaderProvider>
      </I18nProvider>
    </>
  );
}

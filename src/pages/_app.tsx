import { Footer, Header, HeaderContext } from "@/components";
import type { AppProps } from "next/app";
import { useState } from "react";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [headerRef, setHeaderRef] = useState(null as HTMLDivElement | null);

  return (
    <HeaderContext.Provider value={{ headerRef, setHeaderRef }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </HeaderContext.Provider>
  );
}

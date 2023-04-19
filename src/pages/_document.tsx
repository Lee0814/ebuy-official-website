import { Footer, Header, HeaderContext } from "@/components";
import { Head, Html, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  const [headerRef, setHeaderRef] = useState(null as HTMLDivElement | null);

  return (
    <Html>
      <Head />
      <body>
        <HeaderContext.Provider value={{ headerRef, setHeaderRef }}>
          <Header />
          <Main />
          <Footer />
        </HeaderContext.Provider>
        <NextScript />
      </body>
    </Html>
  );
}

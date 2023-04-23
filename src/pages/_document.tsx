import { defaultLang } from "@/utils";
import _Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

function Document({ lang }: DocumentProps & { lang: string }) {
  return (
    <Html lang={lang || defaultLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await _Document.getInitialProps(ctx);
  return { ...initialProps, lang: ctx.query.lang };
};

export default Document;

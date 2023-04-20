import { I18nContext, locales } from "@/utils";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, memo, useContext } from "react";

export const Link = memo((props: PropsWithChildren<LinkProps>) => {
  const router = useRouter();
  const { lang } = useContext(I18nContext);
  const needAddLang = locales.some((l) => router.asPath.startsWith(`/${l}`));

  return (
    <NextLink
      {...props}
      href={needAddLang ? `/${lang}${props.href}` : props.href}
    >
      {props.children}
    </NextLink>
  );
});

import { useI18nContext } from "@/states";
import { locales } from "@/utils";
import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, memo } from "react";

export const Link = memo((props: PropsWithChildren<LinkProps>) => {
  const router = useRouter();
  const { lang } = useI18nContext();
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

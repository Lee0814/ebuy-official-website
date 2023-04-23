import { useI18n } from "@/hooks";
import { useHeaderContext, useI18nContext } from "@/states";
import { Lang, capitalizeTheFirstLetter, locales } from "@/utils";
import { useClickAway } from "ahooks";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  memo,
  useEffect,
  useRef
} from "react";
import { Link } from "./link";

import logo from "@/assets/images/logo.png";

export const Header = memo(() => {
  const t = useI18n("navbar");

  // 向全局注入 header ref
  const headerRef = useRef<HTMLDivElement>(null);
  const { setHeader } = useHeaderContext();
  useEffect(() => {
    setHeader(headerRef.current);
  }, []);

  // start 切换语言
  // 语言切换弹窗弹窗
  const changeLangRef = useRef<HTMLDivElement>(null);
  const changeLangButtonRef = useRef<HTMLButtonElement>(null);
  const { showChangeLang, setShowChangeLang } = useHeaderContext();
  useClickAway(
    () => setShowChangeLang(false),
    [changeLangRef, changeLangButtonRef]
  );

  // 语言切换
  const router = useRouter();
  const { lang, setLang } = useI18nContext();
  const changeLang = (locale: Lang) => {
    const pathLang = locales.find((l) => router.asPath.startsWith(`/${l}`));
    if (pathLang) {
      router.push(router.asPath.replace(`/${pathLang}`, `/${locale}`));
    } else {
      router.push(`/${locale}${router.asPath}`);
    }
    setLang(locale);
  };
  // end 切换语言

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 h-[70px] w-full overflow-hidden bg-white py-[10px]"
    >
      <div className="mx-auto flex h-full max-w-[1220px] items-center justify-between">
        <Image src={logo} alt="ebuy" height={50} />
        <div className="flex items-center space-x-[40px]">
          <ul className="flex space-x-[40px]">
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/">{t("download")}</Link>
            </li>
            <li>
              <Link href="/">{t("cooperation")}</Link>
            </li>
            <li>
              <Link href="/">{t("join")}</Link>
            </li>
          </ul>
          <button className="rounded-[4px] bg-[#ED3838] px-[15px] py-[9px] text-[16px] font-[500] leading-[24px]">
            {t("contact")}
          </button>
          <div className="relative">
            <button
              ref={changeLangButtonRef}
              onClick={() => setShowChangeLang(!showChangeLang)}
              className="rounded-[4px] border-[1px] border-white p-[8px] text-[16px] font-[500] leading-[24px]"
            >
              {capitalizeTheFirstLetter(lang)}
            </button>
            <div
              ref={changeLangRef}
              className={`${
                !showChangeLang ? "invisible" : ""
              } absolute right-0 flex w-[80px] flex-col`}
            >
              {locales.map((locale) => (
                <button
                  key={locale}
                  className="w-full rounded-[4px] border-[1px] border-white p-[8px] text-[16px] font-[500] leading-[24px]"
                  onClick={() => changeLang(locale)}
                >
                  {capitalizeTheFirstLetter(locale)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .down-animation {
          animation: down 0.3s ease-in-out forwards;
        }
        .up-animation {
          animation: up 0.3s ease-in-out forwards;
        }
        @keyframes down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </header>
  );
});

import { useI18n } from "@/hooks";
import { useHeaderContext, useI18nContext } from "@/states";
import { Lang, capitalizeTheFirstLetter, locales } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useEffect, useRef } from "react";
import { Link } from "./link";

import logo from "@/assets/images/logo.png";
import { useClickAway } from "ahooks";

export const Header = memo(() => {
  const t = useI18n("navbar");

  // start 切换语言
  // 语言切换弹窗弹窗
  const changeLangRef = useRef<Array<HTMLDivElement | null>>([]);
  const changeLangButtonRef = useRef<Array<HTMLButtonElement | null>>([]);
  const { showChangeLang, setShowChangeLang } = useHeaderContext();
  useClickAway(
    () => setShowChangeLang(false),
    [...changeLangRef.current, ...changeLangButtonRef.current]
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

  // start 透明状态切换
  const { showTransparentHeader } = useHeaderContext();
  useEffect(() => {
    setShowChangeLang(false);
  }, [showTransparentHeader]);

  const HeaderContent = memo(({ index }: { index: number }) => (
    <div className="ebuy-container flex h-full items-center justify-between !overflow-visible">
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
            ref={(ref) => (changeLangButtonRef.current[index] = ref)}
            onClick={() => setShowChangeLang(!showChangeLang)}
            className="rounded-[4px] border-[1px] border-white p-[8px] text-[16px] font-[500] leading-[24px]"
          >
            {capitalizeTheFirstLetter(lang)}
          </button>
          <div
            ref={(ref) => (changeLangRef.current[index] = ref)}
            className={`${!showChangeLang ? "invisible" : ""} ${
              index === 0 ? "bg-transparent" : "bg-white"
            } absolute right-0 flex w-[80px] flex-col border-[0.5px]`}
          >
            {locales.map((locale) => (
              <button
                key={locale}
                className="w-full rounded-[4px] p-[8px] text-[16px] font-[500] leading-[24px]"
                onClick={() => {
                  changeLang(locale);
                  setShowChangeLang(false);
                }}
              >
                {capitalizeTheFirstLetter(locale)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {showTransparentHeader !== undefined && (
        <header
          className="sticky top-0 z-50 -mb-[70px] h-[70px] w-full bg-transparent py-[10px] text-white"
          style={
            showTransparentHeader
              ? { transform: "translateY(-100%)", overflow: "hidden" }
              : undefined
          }
        >
          <HeaderContent index={0} />
        </header>
      )}
      <header
        className="sticky top-0 z-50 h-[70px] w-full bg-white py-[10px] transition-transform duration-500"
        style={
          showTransparentHeader !== undefined && !showTransparentHeader
            ? { transform: "translateY(-100%)", overflow: "hidden" }
            : undefined
        }
      >
        <HeaderContent index={1} />
      </header>
    </>
  );
});

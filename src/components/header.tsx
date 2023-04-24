import { useI18n } from "@/hooks";
import { useHeaderContext, useI18nContext } from "@/states";
import { Lang, capitalizeTheFirstLetter, locales } from "@/utils";
import { useClickAway, useScroll, useSize } from "ahooks";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "./link";

import styles from "./header.module.scss";

import logo from "@/assets/images/logo.png";

type Position = {
  left: number;
  top: number;
};

export const Header = memo(() => {
  const t = useI18n("navbar");

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

  // start 菜单切换
  const actionRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  useClickAway(() => setShowMenu(false), actionRef);
  // end 菜单切换

  // start 下滚隐藏头部 上滚显示头部
  const { showHeader, headerType, setShowHeader } = useHeaderContext();
  const [lastScroll, setLastScroll] = useState<Position>();
  const scroll = useScroll();
  useEffect(() => {
    if (!scroll) return;
    if (!lastScroll) {
      setLastScroll(scroll);
      setShowHeader(true);
      return;
    }
    if (scroll.top > lastScroll.top) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScroll(scroll);
    setShowChangeLang(false);
    setShowMenu(false);
  }, [scroll]);
  // end 下滚隐藏头部 上滚显示头部

  // start 手机端 header
  const headerRef = useRef<HTMLHeadElement>(null);
  const size = useSize(headerRef);
  const isMobile = useMemo(() => {
    setShowChangeLang(false);
    setShowMenu(false);
    return size && size.width <= 1280;
  }, [size]);
  // end 手机端 header

  return (
    <header
      ref={headerRef}
      className={classNames(
        "h-[70px] w-full py-[10px]",
        styles["header"],
        {
          [styles["mobile"]]: isMobile,
          [styles["header-out"]]: !showHeader,
        },
        styles[headerType!]
      )}
    >
      <div className="ebuy-container flex h-full items-center justify-between">
        <Image src={logo} alt="ebuy" height={50} className="w-[146px] " />
        <div className="gap-reverse flex flex-row-reverse items-center gap-[21px] md:gap-[20px] lg:flex-row lg:gap-[40px]">
          <div className="relative">
            <div
              ref={actionRef}
              className={classNames(
                styles["action-icon"],
                "visible lg:hidden",
                {
                  [styles["action-icon-close"]]: showMenu,
                }
              )}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul
              className={classNames(
                "hidden flex-col md:gap-[20px] lg:flex lg:flex-row lg:gap-[40px]",
                {
                  ["absolute right-0 top-[50px] w-[200px] gap-[10px] text-ellipsis bg-white p-[10px] underline"]:
                    isMobile,
                  ["flex"]: showMenu,
                }
              )}
            >
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
          </div>
          <button className="rounded-[4px] bg-[#ED3838] px-[15px] py-[9px] text-[16px] font-[500] leading-[24px] text-white">
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
              className={classNames(
                "absolute right-0 z-50 flex w-[80px] flex-col border-[0.5px]",
                {
                  ["invisible"]: !showChangeLang,
                  ["bg-white"]: isMobile,
                }
              )}
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
    </header>
  );
});

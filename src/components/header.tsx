import { useI18n, useResponsive } from "@/hooks";
import { useHeaderContext, useI18nContext } from "@/states";
import { Lang, capitalizeTheFirstLetter, locales } from "@/utils";
import { useClickAway, useScroll } from "ahooks";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useEffect, useRef, useState } from "react";
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
  const changeLangButtonRef = useRef<HTMLDivElement>(null);
  const { showChangeLang, setShowChangeLang } = useHeaderContext();
  // useClickAway(
  //   () => setShowChangeLang(false),
  //   [changeLangRef, changeLangButtonRef]
  // );

  // 语言切换
  const router = useRouter();
  const { lang, setLang } = useI18nContext();

  const changeLang = (locale: Lang) => {
    const pathLang = locales.find((l) => router.asPath.startsWith(`/${l}`));
    console.log(pathLang);

    if (pathLang === "en") locale = "zh-CN";
    else if (pathLang === "zh-CN") locale = "en";
    else {
      router.push(`/${locale}${router.asPath}`);
    }
    router.push(router.asPath.replace(`/${pathLang}`, `/${locale}`));
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
    //初始化
    if (!scroll) return;
    if (!lastScroll) {
      setLastScroll(scroll);
      setShowHeader(true);
      return;
    }
    //向下滑动
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
  const { lg } = useResponsive();
  // end 手机端 header

  return (
    <header
      className={classNames(
        "h-[70px] w-full py-[10px] lg:h-[114px]",
        styles["in"],
        {
          [styles["mobile"]]: lg,
          [styles["out"]]: !showHeader,
        },
        styles[headerType!]
      )}
    >
      <div
        className={classNames(
          "ebuy-container flex h-full items-center justify-between"
        )}
      >
        <Image
          src={logo}
          alt="ebuy"
          height={50}
          className={classNames(" col-start-1 col-end-6 w-[146px]")}
        />
        {/* 右侧导航 */}
        <div
          className={classNames(
            "col-start-6 col-end-25  flex h-full flex-row-reverse items-center justify-start gap-[21px] md:gap-[0px] lg:flex-col-reverse lg:items-end lg:justify-between lg:py-[12px] "
          )}
        >
          <div className={classNames("relative")}>
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
                    lg,
                  ["!flex"]: showMenu,
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
          {/* 联系我们 */}
          <div className={classNames("flex text-[16px] ", styles["contract"])}>
            <div
              className={classNames(" px-[15px]  text-[16px] font-[500] ")}
              onClick={() => router.push(router.asPath + "#message")}
            >
              {t("contact")}
            </div>
            <div>|</div>
            {/* 语言切换dom */}
            <div className={classNames("relative")}>
              <div
                ref={changeLangButtonRef}
                // onClick={() => setShowChangeLang(!showChangeLang)}
                onClick={() => {
                  changeLang(lang);
                }}
                className={classNames(" pl-[15px]  font-[500] ")}
              >
                {lang === "zh-CN" ? "En" : "简体"}
              </div>
              <div
                ref={changeLangRef}
                className={classNames(
                  "absolute right-0 z-50 flex w-[80px] flex-col border-[0.5px]",
                  {
                    ["invisible"]: !showChangeLang,
                    ["bg-white"]: lg,
                  }
                )}
              >
                {locales.map((locale) => (
                  <button
                    key={locale}
                    className={classNames(
                      "w-full rounded-[4px] p-[8px] font-[500] leading-[24px]"
                    )}
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
      </div>
    </header>
  );
});

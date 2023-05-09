import { useI18n, useResponsive } from "@/hooks";

import { useHeaderContext, useI18nContext } from "@/states";

import { locales } from "@/utils";

import { useClickAway, useScroll } from "ahooks";
import classNames from "classnames";

import Image from "next/image";

import { useRouter } from "next/router";

import { memo, useEffect, useRef, useState } from "react";

import { Link } from "./link";

import styles from "./header.module.scss";

import logo from "@/assets/images/logo.svg";

type Position = {
  left: number;

  top: number;
};



export const Header = memo(() => {
  const t = useI18n("navbar");

  // start 切换语言

  const router = useRouter();
  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    setIsAbout(router.asPath.includes("about"));
  }, [router.asPath]);

  const { lang, detectedLang, setLang } = useI18nContext();

  const changeLang = () => {
    const pathLang = locales.find((l) => router.asPath.startsWith(`/${l}`));

    const pathLangIndex = locales.findIndex((l) =>
      router.asPath.startsWith(`/${l}`)
    );

    const detectedLangIndex = locales.findIndex((l) => detectedLang === l);

    const newLangIndex = pathLang
      ? (pathLangIndex + 1) % locales.length
      : (detectedLangIndex + 1) % locales.length;

    setLang(locales[newLangIndex]);

    if (!pathLang)
      return router.push(`/${locales[newLangIndex]}${router.asPath}`);

    router.push(
      router.asPath.replace(`/${pathLang}`, `/${locales[newLangIndex]}`)
    );
  };

  // end 切换语言

  // start 菜单切换

  const actionRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState(false);

  useClickAway(() => setShowMenu(false), actionRef);

  // end 菜单切换

  // start 下滚隐藏头部 上滚显示头部

  let { showHeader, headerType, setShowHeader, setHeaderType } =
    useHeaderContext({ headerType: "transparent" });
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
      if (scroll.top) setHeaderType("white");
      else {
        setHeaderType("transparent");
      }

      setShowHeader(true);
    }

    setLastScroll(scroll);

    setShowMenu(false);
  }, [scroll]);

  // end 下滚隐藏头部 上滚显示头部

  // start 手机端 header

  const { lg } = useResponsive();

  // end 手机端 header

  return (
    <header
      className={classNames(
        "h-[92px] w-full py-[10px]  lg:h-[114px]",

        styles["in"],

        {
          [styles["mobile"]]: lg,

          [styles["out"]]: !showHeader,
        },

        isAbout ? styles["white"] : styles[headerType! || "transparent"]
      )}
    >
      <div
        className={classNames(
          "ebuy-container flex h-full items-center justify-between "
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
            "col-start-6 col-end-25  flex  h-full flex-row-reverse items-center justify-start gap-[21px] lg:flex-col-reverse lg:items-end lg:justify-between lg:gap-[0px] lg:py-[12px] "
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
                "hidden flex-col text-[17px] md:gap-[20px] lg:flex lg:flex-row lg:gap-[40px]",

                {
                  ["absolute right-0 top-[50px] w-[200px] gap-[10px] text-ellipsis bg-white p-[10px] text-black underline"]:
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

          <div className={classNames("flex text-[16px]", styles["contract"])}>
            <Link
              className={classNames("px-[15px] text-[16px] font-[500]")}
              href="#message"
            >
              {t("contact")}
            </Link>

            <div>|</div>

            {/* 语言切换dom */}

            <div className={classNames("relative")}>
              <div
                onClick={changeLang}
                className={classNames("cursor-pointer pl-[15px] font-[500]")}
              >
                {lang === "zh-CN" ? "En" : "简体"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

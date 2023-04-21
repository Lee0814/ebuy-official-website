import { useI18n } from "@/hooks";
import { useSize } from "ahooks";
import { memo, useEffect, useState } from "react";

import styles from "./styles.module.scss";

export const Banner = memo(() => {
  const t = useI18n("home");

  // 处理banner高度
  const ratio = 8 / 5;
  const [html, setHtml] = useState<HTMLHtmlElement | null>(null);
  const size = useSize(html);
  useEffect(() => {
    setHtml(document.querySelector("html"));
  }, []);

  return (
    <>
      <section
        style={{ aspectRatio: ratio }}
        className={`${styles.banner} fixed top-0 -z-10 w-full bg-cover bg-bottom`}
      >
        <div className="mx-auto flex h-full max-w-[1220px] flex-col items-center justify-center text-white">
          <span className="mb-[9px] whitespace-pre-wrap text-center text-[50px] font-[600] leading-[70px]">
            {t("slogan-1")}
          </span>
          <span className="mb-[50px] whitespace-pre-wrap text-center text-[40px] font-[500] leading-[56px]">
            {t("slogan-2")}
          </span>
          <button className="rounded-[8px] border-[1px] border-solid border-white px-[48px] py-[18px] text-[32px] font-bold leading-[48px]">
            {t("be-our-customer")}
          </button>
        </div>
      </section>
      <div style={{ aspectRatio: ratio }} className="-z-10 -mb-[70px]"></div>
    </>
  );
});

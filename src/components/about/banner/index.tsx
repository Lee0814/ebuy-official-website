import { useI18n, useInView, useWindowSize } from "@/hooks";
import classNames from "classnames";
import { memo, useMemo } from "react";

import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const ratio = 8 / 5;
export const Banner = memo(() => {
  const t = useI18n("about");

  const router = useRouter();

  // 处理banner高度
  const windowSize = useWindowSize();
  const bannerOverflow = useMemo(
    () => windowSize && windowSize.width / ratio > windowSize.height,
    [windowSize]
  );

  const [slogan1Ref, slogan1InView] = useInView();
  const [slogan2Ref, slogan2InView] = useInView();

  return (
    <section
      style={!bannerOverflow ? { aspectRatio: ratio } : { height: "100vh" }}
      className={classNames(
        styles.banner,
        "-mt-[70px] w-full bg-cover bg-bottom pt-[70px] lg:-mt-[114px]"
      )}
    >
      <div
        className={classNames(
          "ebuy-container !flex h-full flex-col items-start justify-center text-white"
        )}
      >
        <span
          ref={slogan1Ref}
          className={classNames(
            "mb-[22px] whitespace-pre-wrap text-center text-[44px] font-[600] leading-[62px] tracking-[4px] first-letter:mb-[9px]  md:pb-3 md:pl-[196px] md:text-[50px] md:leading-[70px]",
            {
              head1: slogan1InView,
            }
          )}
        >
          {t("slogan-1")}
        </span>
        <span
          ref={slogan2Ref}
          className={classNames(
            "mb-[22px] whitespace-pre-wrap text-center text-[44px] font-[600] leading-[62px] first-letter:mb-[9px]  md:pb-3 md:pl-[196px] md:text-[40px] md:leading-[70px]",
            {
              head2: slogan2InView,
            }
          )}
        >
          {t("slogan-2")}
        </span>
      </div>
    </section>
  );
});

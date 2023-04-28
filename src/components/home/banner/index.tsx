import { useI18n, useInView, useWindowSize } from "@/hooks";
import classNames from "classnames";
import { memo, useMemo } from "react";

import { Link } from "@/components/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const ratio = 8 / 5;
export const Banner = memo(() => {
  const t = useI18n("home");

  const router = useRouter();

  // 处理banner高度
  const windowSize = useWindowSize();
  const bannerOverflow = useMemo(
    () => windowSize && windowSize.width / ratio > windowSize.height,
    [windowSize]
  );

  const [slogan1Ref, slogan1InView] = useInView();
  const [slogan2Ref, slogan2InView] = useInView();
  const [beOurCustomerRef, beOurCustomerInView] = useInView();

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
          "ebuy-container !flex h-full flex-col items-center justify-center text-white"
        )}
      >
        <span
          ref={slogan1Ref}
          className={classNames(
            "whitespace-pre-wrap text-center text-[44px] font-[600] leading-[62px] first-letter:mb-[9px] md:border-b-[2px] md:border-solid md:border-white md:px-[24px] md:pb-3 md:text-[50px] md:leading-[70px]",
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
            "mb-[50px] whitespace-pre-wrap text-center text-[32px] font-[400] leading-[45px] md:text-[40px] md:font-[500] md:leading-[56px]",
            {
              head2: slogan2InView,
            }
          )}
        >
          {t("slogan-2")}
        </span>
        <div
          ref={beOurCustomerRef}
          className={classNames({
            head3: beOurCustomerInView,
          })}
        >
          <Link
            className={classNames(
              "rounded-[8px] border-[1px] border-solid border-white px-[20px] py-[8px] text-[28px] font-[400] leading-[40px] md:px-[48px] md:py-[18px] md:text-[32px] md:font-bold md:leading-[48px]"
            )}
            href="#message"
          >
            {t("be-our-customer")}
          </Link>
        </div>
      </div>
    </section>
  );
});

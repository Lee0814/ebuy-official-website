import { useI18n } from "@/hooks";
import { useScroll } from "ahooks";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination, Swiper as _Swiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

import { useHeaderContext } from "@/states";
import benefit_1_1 from "./images/benefit-1-1.png";
import benefit_1_2 from "./images/benefit-1-2.png";
import benefit_1_3 from "./images/benefit-1-3.png";
import benefit_2_1 from "./images/benefit-2-1.png";
import benefit_2_2 from "./images/benefit-2-2.png";
import benefit_2_3 from "./images/benefit-2-3.png";
import benefit_3_1 from "./images/benefit-3-1.png";
import benefit_3_2 from "./images/benefit-3-2.png";
import benefit_3_3 from "./images/benefit-3-3.png";

const allImages = [
  [benefit_1_1, benefit_1_2, benefit_1_3],
  [benefit_2_1, benefit_2_2, benefit_2_3],
  [benefit_3_1, benefit_3_2, benefit_3_3],
];

export const Benefit = memo(() => {
  const t = useI18n("home");

  // 优势相关
  const benefits = useMemo(
    () =>
      Array.from(allImages, (_, i) => ({
        title: t(`benefit-${i + 1}-title` as any),
        description: t(`benefit-${i + 1}-description` as any),
        images: allImages[i],
      })),
    [t]
  );
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  // 恢复自动播放
  let timer: NodeJS.Timeout;
  const autoPlay = useCallback((swiper: _Swiper) => {
    timer = setTimeout(() => {
      swiper.autoplay?.start();
    }, 5000);
  }, []);
  useEffect(() => () => clearTimeout(timer), []);

  // start 监听滚动调整header颜色和位置变化
  // 复制 header 并修改样式以及页面销毁时还原

  // 是否显示可读header
  const scroll = useScroll();
  const benefitRef = useRef<HTMLDivElement>(null);
  const showReadableHeader = useMemo(() => {
    if (!scroll?.top || !benefitRef.current) return false;
    return scroll.top > benefitRef.current.offsetTop - 70;
  }, [scroll?.top]);

  // 切换header
  const { setShowTransparentHeader } = useHeaderContext({
    showTransparentHeader: true,
  });
  useEffect(
    () => setShowTransparentHeader(showReadableHeader),
    [showReadableHeader]
  );
  // end 监听滚动调整header颜色和位置变化

  return (
    <section
      ref={benefitRef}
      className={`${styles.benefit} bg-[#fff9f0] bg-center bg-no-repeat pb-[40px] pt-[64px] bg-blend-normal`}
    >
      <div className="ebuy-container relative flex flex-col items-center justify-center">
        <span className="mb-[48px] text-[28px] font-[400] leading-[40px] text-[#E79A44] md:text-[40px] md:font-[500] md:leading-[60px]">
          {t("benefit-title")}
        </span>
        <button className="left-arrow absolute bottom-[151px] left-0 hidden h-[77px] w-[48px] items-center justify-center rounded-[12px] bg-white md:flex">
          <svg
            fill="#ed3838"
            width="32px"
            height="21px"
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
          </svg>
        </button>
        <Swiper
          className="w-full max-w-[1054px]"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ el: ".custom-pagination", clickable: true }}
          navigation={{
            prevEl: ".left-arrow",
            nextEl: ".right-arrow",
          }}
          onActiveIndexChange={(swiper) =>
            setCurrentBenefitIndex(swiper.activeIndex)
          }
          onAutoplayPause={autoPlay}
          autoplay
          loop
        >
          {benefits.map((_, i) => (
            <SwiperSlide key={`benefit-${i + 1}`}>
              <div className="flex max-w-[1054px] flex-col items-center">
                <span className="mb-[24px] text-[44px] font-[600] leading-[62px] text-[#333333] md:text-[50px] md:font-bold md:leading-[75px]">
                  {benefits[currentBenefitIndex].title}
                </span>
                <span className="mb-[45px] text-center text-[28px] font-[400] leading-[40px] text-[#333333] md:font-[500] md:leading-[42px]">
                  {benefits[currentBenefitIndex].description}
                </span>
                <div className="flex h-[190px] w-full justify-between">
                  {benefits[i].images.map((image, j) => (
                    <Image
                      className="max-w-[330px]"
                      key={`benefit-${i + 1}-${j + 1}`}
                      alt={`benefit-${i + 1}-${j + 1}`}
                      src={image}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-[41px] flex justify-center !space-x-[24px] md:!space-x-[12px]"></div>
        </Swiper>
        <button className="right-arrow absolute bottom-[151px] right-0 hidden h-[77px] w-[48px] items-center justify-center rounded-[12px] bg-white md:flex">
          <svg
            fill="#ed3838"
            width="32px"
            height="21px"
            viewBox="0 0 22 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
          </svg>
        </button>
        <style jsx global>{`
          .custom-pagination > .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #d8d8d8 !important;
          }
          .custom-pagination > .swiper-pagination-bullet-active {
            background: #ed3838 !important;
          }
          @media (max-width: 750.1px) {
            .custom-pagination > .swiper-pagination-bullet {
              width: 17%;
              height: 12px;
              border-radius: 12px;
            }
          }
        `}</style>
      </div>
    </section>
  );
});

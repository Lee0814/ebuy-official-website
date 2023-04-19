import { useI18n } from "@/hooks";
import Image from "next/image";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Autoplay, Navigation, Pagination, Swiper as _Swiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./index.module.scss";

import benefitImage1_1 from "@/assets/images/home/benefit-1-1.png";
import benefitImage1_2 from "@/assets/images/home/benefit-1-2.png";
import benefitImage1_3 from "@/assets/images/home/benefit-1-3.png";
import benefitImage2_1 from "@/assets/images/home/benefit-2-1.png";
import benefitImage2_2 from "@/assets/images/home/benefit-2-2.png";
import benefitImage2_3 from "@/assets/images/home/benefit-2-3.png";
import benefitImage3_1 from "@/assets/images/home/benefit-3-1.png";
import benefitImage3_2 from "@/assets/images/home/benefit-3-2.png";
import benefitImage3_3 from "@/assets/images/home/benefit-3-3.png";
import { HeaderContext } from "@/components";
import { useScroll } from "ahooks";

const images = [
  [benefitImage1_1, benefitImage1_2, benefitImage1_3],
  [benefitImage2_1, benefitImage2_2, benefitImage2_3],
  [benefitImage3_1, benefitImage3_2, benefitImage3_3],
];

export default function Home() {
  const t = useI18n("en", "home");

  // 优势相关
  const benefits = useMemo(
    () =>
      Array.from(images, (_, i) => ({
        title: t(`benefit-${i + 1}-title` as any),
        description: t(`benefit-${i + 1}-description` as any),
        images: images[i],
      })),
    [t]
  );
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  // 恢复自动播放
  const autoPlay = useCallback((swiper: _Swiper) => {
    setTimeout(() => {
      swiper.autoplay.start();
    }, 5000);
  }, []);

  // 监听滚动调整header颜色和位置变化
  const { headerRef } = useContext(HeaderContext);
  const benefitRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();
  useEffect(() => {
    if (!scroll?.top || !benefitRef.current || !headerRef) return;
    if (scroll.top > benefitRef.current.offsetTop - 70) {
      headerRef.style.color = "#000";
      headerRef.style.backgroundColor = "#fff";
    } else {
      headerRef.style.color = "#fff";
      headerRef.style.backgroundColor = "transparent";
    }
  }, [scroll?.top]);

  return (
    <main>
      <section
        className={`${styles.banner} sticky top-0 -z-10 bg-cover bg-bottom pt-[70px]`}
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
      <section
        ref={benefitRef}
        className={`${styles.benefit} bg-[#fff9f0] bg-center bg-no-repeat bg-blend-normal`}
      >
        <div className="mx-auto flex  h-[582px] max-w-[1220px] flex-col items-center justify-center">
          <span className="mb-[48px] text-[40px] font-[500] leading-[60px] text-[#E79A44]">
            {t("benefit-title")}
          </span>
          <span className="mb-[24px] text-[50px] font-bold leading-[75px] text-[#333333]">
            {benefits[currentBenefitIndex].title}
          </span>
          <span className="mb-[45px] text-[28px] font-[500] leading-[42px] text-[#333333]">
            {benefits[currentBenefitIndex].description}
          </span>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="h-[190px] w-[1054px]"
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
              <SwiperSlide key={i}>
                <div className="flex h-[190px] w-[1054px] justify-between">
                  {benefits[i].images.map((image, j) => (
                    <Image
                      key={`benefit-${i + 1}-${j + 1}`}
                      alt={`benefit-${i + 1}-${j + 1}`}
                      src={image}
                      width={330}
                      height={190}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-[41px] space-x-[12px]"></div>
          <style jsx global>{`
            .custom-pagination > .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: #d8d8d8 !important;
            }
            .custom-pagination > .swiper-pagination-bullet-active {
              background: #ed3838 !important;
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}

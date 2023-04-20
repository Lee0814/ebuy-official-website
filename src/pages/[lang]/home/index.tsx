import { HeaderContext } from "@/components";
import { useI18n } from "@/hooks";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";
import { useScroll, useSize } from "ahooks";
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
import Map from "./components/Map";
import Partner from "./components/partner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.scss";

import benefitImage1_1 from "./images/benefit-1-1.png";
import benefitImage1_2 from "./images/benefit-1-2.png";
import benefitImage1_3 from "./images/benefit-1-3.png";
import benefitImage2_1 from "./images/benefit-2-1.png";
import benefitImage2_2 from "./images/benefit-2-2.png";
import benefitImage2_3 from "./images/benefit-2-3.png";
import benefitImage3_1 from "./images/benefit-3-1.png";
import benefitImage3_2 from "./images/benefit-3-2.png";
import benefitImage3_3 from "./images/benefit-3-3.png";

const images = [
  [benefitImage1_1, benefitImage1_2, benefitImage1_3],
  [benefitImage2_1, benefitImage2_2, benefitImage2_3],
  [benefitImage3_1, benefitImage3_2, benefitImage3_3],
];

export default function Home() {
  const t = useI18n("home");

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
  let timer: NodeJS.Timeout;
  const autoPlay = useCallback((swiper: _Swiper) => {
    timer = setTimeout(() => {
      swiper.autoplay?.start();
    }, 5000);
  }, []);
  useEffect(() => () => clearTimeout(timer), []);

  // start 监听滚动调整header颜色和位置变化
  // 复制 header 并修改样式以及页面销毁时还原
  const { header } = useContext(HeaderContext);
  const [newHeader, setNewHeader] = useState(header);
  useEffect(() => {
    if (!header) return;
    const newHeader = header.cloneNode(true) as HTMLDivElement;
    setNewHeader(newHeader);
    newHeader.style.color = "#fff";
    newHeader.style.marginBottom = "-70px";
    newHeader.classList.remove("bg-white");
    header.parentNode?.insertBefore(newHeader, header);
    header.style.transform = "translateY(-100%)";
    return () => {
      newHeader.remove();
      header.style.transform = "";
      header.classList.remove("up-animation");
      header.classList.remove("down-animation");
    };
  }, [header]);

  // 是否显示可读header
  const scroll = useScroll();
  const benefitRef = useRef<HTMLDivElement>(null);
  const showReadableHeader = useMemo(() => {
    if (!scroll?.top || !benefitRef.current || !header) return false;
    return scroll.top > benefitRef.current.offsetTop - 70;
  }, [scroll?.top]);

  // 切换header
  useEffect(() => {
    if (!header || !newHeader) return;
    if (showReadableHeader) {
      newHeader.style.transform = "translateY(-100%)";
      header.classList.remove("up-animation");
      header.classList.add("down-animation");
    } else {
      newHeader.style.transform = "translateY(0)";
      header.classList.remove("down-animation");
      header.classList.add("up-animation");
    }
  }, [showReadableHeader]);
  // end 监听滚动调整header颜色和位置变化

  // 处理banner高度
  const ratio = 8 / 5;
  const [html, setHtml] = useState<HTMLHtmlElement | null>(null);
  const size = useSize(html);
  useEffect(() => {
    setHtml(document.querySelector("html"));
  }, []);

  return (
    <main>
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
      <section
        ref={benefitRef}
        className={`${styles.benefit} bg-[#fff9f0] bg-center bg-no-repeat bg-blend-normal`}
      >
        <div className="relative mx-auto flex max-w-[1220px] flex-col items-center justify-center">
          <span className="mb-[48px] mt-[64px] text-[40px] font-[500] leading-[60px] text-[#E79A44]">
            {t("benefit-title")}
          </span>
          <button className="left-arrow absolute bottom-[151px] left-0 flex h-[77px] w-[48px] items-center justify-center rounded-[12px] bg-white">
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
            className="max-w-[1054px]"
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
              <SwiperSlide key={i}>
                <div className="flex max-w-[1054px] flex-col items-center">
                  <span className="mb-[24px] text-[50px] font-bold leading-[75px] text-[#333333]">
                    {benefits[currentBenefitIndex].title}
                  </span>
                  <span className="mb-[45px] text-[28px] font-[500] leading-[42px] text-[#333333]">
                    {benefits[currentBenefitIndex].description}
                  </span>
                  <div className="flex h-[190px] w-full justify-between">
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
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination mb-[40px] mt-[41px] flex justify-center space-x-[12px]"></div>
          </Swiper>
          <button className="right-arrow absolute bottom-[151px] right-0 flex h-[77px] w-[48px] items-center justify-center rounded-[12px] bg-white">
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
          `}</style>
        </div>
      </section>
      <Partner />
      <Map />
    </main>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

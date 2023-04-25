import { useI18n, useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Autoplay, Pagination, Swiper as _Swiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import boxHighlight from "./images/box-h.png";
import box from "./images/box.png";
import carHighlight from "./images/car-h.png";
import car from "./images/car.png";
import cartHighlight from "./images/cart-h.png";
import cart from "./images/cart.png";
import dollarHighlight from "./images/dollar-h.png";
import dollar from "./images/dollar.png";

import styles from "./styles.module.scss";

const images = [
  {
    picture: one,
    iconNormal: cart,
    iconHighlight: cartHighlight,
  },
  {
    picture: two,
    iconNormal: box,
    iconHighlight: boxHighlight,
  },
  {
    picture: three,
    iconNormal: car,
    iconHighlight: carHighlight,
  },
  {
    picture: three,
    iconNormal: dollar,
    iconHighlight: dollarHighlight,
  },
];
const Business = () => {
  const t = useI18n("home");
  const { md } = useResponsive();

  const businesses = images.map((image, index) => ({
    title: t(`business-${index + 1}-title` as any),
    title2: t(`business-${index + 1}-title-2` as any),
    description: t(`business-${index + 1}-description` as any),
    ...image,
  }));

  const [currentIndex, setCurrentIndex] = useState(1);

  const desktop = (
    <div
      className={classNames(
        "flex w-full flex-col gap-[57px] overflow-hidden md:mx-auto md:max-w-[1288px] md:flex-row md:gap-[20px] md:overflow-visible md:px-[32px] xl:gap-[43px]"
      )}
    >
      {/* 选择 */}
      <div className={classNames("flex flex-1 flex-col")}>
        {businesses.map((business, index) => (
          <div
            key={`business-title-${index}`}
            className={classNames(
              "flex flex-col rounded-[16px] px-[24px] py-[30px] lg:-ml-[60px]",
              {
                ["bg-[#1D1F21] md:bg-[#3D3D3D]"]: currentIndex === index,
              }
            )}
            onMouseOver={() => setCurrentIndex(index)}
          >
            <div className={classNames("flex items-center")}>
              <Image
                className={classNames("mr-[14px] h-[30px] w-[30px]")}
                alt={business.title}
                src={
                  !md && currentIndex === index
                    ? business.iconNormal
                    : business.iconHighlight
                }
              />
              <span
                className={classNames(
                  "text-[32px] leading-[39px] text-[#3A2D1B]",
                  {
                    ["text-[#F5F5F5]"]: currentIndex === index,
                  }
                )}
              >
                {business.title}
              </span>
              <span
                className={classNames(
                  "ml-[8px] text-[28px] leading-[34px] text-[#B6863E]",
                  {
                    ["text-[#F5F5F5]"]: currentIndex === index,
                  }
                )}
              >
                {currentIndex === index
                  ? `${business.title2 ? `【${business.title2}】` : ""}`
                  : business.title2}
              </span>
            </div>
            <div
              className={classNames(
                "ml-[46px] text-[24px] leading-[29px] text-[#BDBDBD]",
                {
                  ["hidden"]: currentIndex !== index,
                }
              )}
            >
              {business.description}
            </div>
          </div>
        ))}
      </div>
      {/* 图片 */}
      <div className={classNames("flex items-start")}>
        {businesses.map((business, index) => (
          <div key={`business-${index + 1}`}>
            <Image
              loading="eager"
              key={`business-pic-${index}`}
              className={classNames("max-w-[290px]", {
                ["visible md:hidden"]: currentIndex !== index,
              })}
              alt={business.title}
              src={business.picture}
            />
          </div>
        ))}
      </div>
    </div>
  );

  // 移动端切换
  const [swiper, setSwiper] = useState<_Swiper>();
  let timer: NodeJS.Timeout;
  const autoPlay = useCallback((swiper: _Swiper) => {
    timer = setTimeout(() => {
      swiper.autoplay?.start();
    }, 5000);
  }, []);
  useEffect(() => {
    if (!swiper || swiper.destroyed) return;
    swiper?.slideTo(currentIndex);
  }, [currentIndex, swiper]);
  useEffect(() => () => clearTimeout(timer), []);

  const mobile = (
    <div
      className={classNames(
        "mobile flex w-full flex-col gap-[57px] overflow-hidden md:mx-auto md:max-w-[1288px] md:flex-row md:gap-[20px] md:overflow-visible md:px-[32px] xl:gap-[43px]"
      )}
    >
      {/* 选择 */}
      <Swiper
        slidesPerView={1}
        onSwiper={setSwiper}
        className={classNames("w-[614px] overflow-visible")}
        slidePrevClass={styles["custom-swiper-slide-prev-1"]}
        slideNextClass={styles["custom-swiper-slide-next-1"]}
      >
        {businesses.map((business, index) => (
          <SwiperSlide key={`business-title-${index}`}>
            <div
              className={classNames(
                "business-title flex w-[500px] flex-col rounded-[16px] bg-[#1D1F21] px-[24px] py-[30px] lg:-ml-[60px]",
                {
                  ["!h-[185px] !w-[614px]"]: currentIndex === index,
                  ["!h-[140px] !w-[614px]"]: currentIndex !== index,
                }
              )}
              onMouseOver={() => setCurrentIndex(index)}
            >
              <div className={classNames("flex items-center")}>
                <Image
                  className={classNames("mr-[14px] h-[30px] w-[30px]")}
                  alt={business.title}
                  src={
                    !md && currentIndex === index
                      ? business.iconNormal
                      : business.iconHighlight
                  }
                />
                <span
                  className={classNames(
                    "text-[32px] leading-[39px] text-[#3A2D1B]",
                    {
                      ["text-[#F5F5F5]"]: currentIndex === index,
                    }
                  )}
                >
                  {business.title}
                </span>
                <span
                  className={classNames(
                    "ml-[8px] text-[28px] leading-[34px] text-[#B6863E]",
                    {
                      ["text-[#F5F5F5]"]: currentIndex === index,
                    }
                  )}
                >
                  {currentIndex === index
                    ? `${business.title2 ? `【${business.title2}】` : ""}`
                    : business.title2}
                </span>
              </div>
              <div
                className={classNames(
                  "ml-[46px] text-[24px] leading-[29px] text-[#BDBDBD]",
                  {
                    ["hidden"]: currentIndex !== index,
                  }
                )}
              >
                {business.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 图片 */}
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{ el: ".custom-pagination", clickable: true }}
        className={classNames("w-[614px] overflow-visible")}
        slidePrevClass={styles["custom-swiper-slide-prev-2"]}
        slideNextClass={styles["custom-swiper-slide-next-2"]}
        onActiveIndexChange={(swiper) => {
          if (swiper.realIndex < 0)
            return setCurrentIndex(businesses.length - 1);
          if (swiper.realIndex >= businesses.length) return setCurrentIndex(0);
          setCurrentIndex(swiper.realIndex);
        }}
        onAutoplayPause={autoPlay}
        autoplay
        loop
      >
        {businesses.map((business, index) => (
          <SwiperSlide key={`business-pic-${index}`}>
            <div className="flex items-center justify-center">
              <Image
                loading="eager"
                key={`business-pic-${index}`}
                className={classNames("w-[348px]", {
                  ["!w-[486px]"]: currentIndex !== index,
                })}
                alt={business.title}
                src={business.picture}
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className={classNames(
            "custom-pagination mt-[41px] flex justify-center !space-x-[24px] md:!space-x-[12px]"
          )}
        ></div>
      </Swiper>
    </div>
  );

  return (
    <section className={classNames("min-h-[1012px] w-full bg-[#fbfbfb]")}>
      <div className={classNames("pb-[100px] pt-[72px]")}>
        {/* 标题 */}
        <div
          className={classNames(
            "ebuy-container pb-[52px] text-center md:text-left"
          )}
        >
          <div className={classNames("text-[50px] font-bold text-[#3A2D1B]")}>
            {t("business-title")}
          </div>
          <div className={classNames("pt-[32px] text-[28px]")}>
            {t("business-description")}
          </div>
        </div>
        {!md ? desktop : mobile}
      </div>
    </section>
  );
};

export { Business };

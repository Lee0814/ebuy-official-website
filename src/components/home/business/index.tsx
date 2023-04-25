import { useI18n } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

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

  const businessList = images.map((image, index) => ({
    title: t(`business-${index + 1}-title` as any),
    title2: t(`business-${index + 1}-title-2` as any),
    description: t(`business-${index + 1}-description` as any),
    icon: image.iconNormal,
    iconHighlight: image.iconHighlight,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

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
        {/* 选择栏 */}
        <div className={classNames("mx-auto box-border max-w-[1264px] px-2")}>
          {/* 左侧 */}
          <div
            className={classNames(
              "box-border flex w-full flex-col items-center overflow-scroll md:flex-row md:items-start md:justify-between md:overflow-hidden"
            )}
          >
            {/* 单个 */}
            <div
              className={classNames(
                "mb-[40px] mt-[42px] flex overflow-hidden md:mb-0 md:block"
              )}
            >
              {businessList.map((business, index) => (
                <div
                  key={index}
                  className={classNames(
                    "relative md:flex",
                    currentIndex === index
                      ? styles.activeBusiness
                      : styles.normalBusiness
                  )}
                  onMouseOver={() => setCurrentIndex(index)}
                >
                  <div className={classNames("pl-6 pr-3", styles.icon)}>
                    <Image
                      className={classNames(
                        "w-8 max-w-[unset]",
                        currentIndex === index ? "pt-[6px]" : "pt-0"
                      )}
                      alt={business.title}
                      src={
                        currentIndex === index
                          ? business.icon
                          : business.iconHighlight
                      }
                    />
                  </div>
                  <div>
                    <div className={classNames(styles.businessTitle)}>
                      {/* 移动端icon */}
                      <Image
                        className={classNames(styles.mobileIcon, "md:hidden")}
                        alt={business.title}
                        src={businessList[index].iconHighlight}
                      />
                      <span>{business.title}</span>
                      <span className={classNames(styles.specialTitle)}>
                        {currentIndex === index
                          ? `${business.title2 ? `【${business.title2}】` : ""}`
                          : business.title2}
                      </span>
                    </div>
                    <div className={classNames(styles.businessIntro)}>
                      {business.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={classNames("flex items-center justify-center")}>
              <Image
                className={classNames("max-w-[546px] md:max-w-[290px]")}
                alt={businessList[currentIndex].title}
                src={images[currentIndex].picture}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Business };

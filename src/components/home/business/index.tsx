import Image from "next/image";
import { useState } from "react";

import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import boxh from "./images/box-h.png";
import box from "./images/box.png";
import carh from "./images/car-h.png";
import car from "./images/car.png";
import carth from "./images/cart-h.png";
import cart from "./images/cart.png";
import dallorh from "./images/dallor-h.png";
import dallor from "./images/dallor.png";
import styles from "./styles.module.scss";

const Business = () => {
  const images = [one, two, three, one];
  const buninessList = [
    {
      title: "EASY ORDERING",
      intro:
        "Pick all you need on your phone and submit order anytime. anywhere.",
      icon: cart,
      iconh: carth,
    },
    {
      title: "FRESH PACKING",
      intro:
        "We pack your products at a safe ambient temperature to keep fresh.",
      icon: box,
      iconh: boxh,
    },
    {
      title: "FAST DELIVERY",
      intro: "We deliver your order within 1 ~ 8 hours after packing.",
      icon: car,
      iconh: carh,
    },
    {
      title: "PAYMENT FRIENDLY",
      title2: "Buy Now Pay Later",
      intro:
        "Check your cost and bill on your phone anythime anywhere and make the payment with Bank Transfer / Giro, Paynow, Cheque, etc.",
      icon: dallor,
      iconh: dallorh,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="min-h-[1012px] w-full  bg-[#fbfbfb]">
      <div className="    pb-[100px] pt-[72px]">
        {/* 标题 */}
        <div className="ebuy-container  pb-[94px] text-center md:text-left">
          <div className=" text-[50px] font-bold text-[#3A2D1B]  ">
            What We Do ?
          </div>
          <div className="pt-[32px]  text-[28px] ">
            24/7 operation for ordering, packing, delivery and customer service.
          </div>
        </div>
        {/* 选择栏 */}
        <div className="mx-auto box-border max-w-[1500px] px-2">
          {/* 左侧 */}
          <div className=" box-border flex w-full  flex-col items-center overflow-scroll  md:flex-row md:items-start md:justify-between md:overflow-hidden ">
            {/* 单个 */}
            <div
              className={`mb-[40px] mt-[42px] flex overflow-hidden md:mb-0 md:block`}
            >
              {buninessList.map((business, index) => (
                <div
                  key={index}
                  className={`${
                    currentIndex === index
                      ? styles.activeBusiness
                      : styles.normalBusiness
                  } relative md:flex`}
                  onMouseOver={() => setCurrentIndex(index)}
                >
                  <div className={`pl-6 pr-3 ${styles.icon}`}>
                    <Image
                      className={`w-8 max-w-[unset]  ${
                        currentIndex === index ? "pt-[6px]" : "pt-0"
                      }`}
                      alt=""
                      src={
                        currentIndex === index
                          ? buninessList[index].icon
                          : buninessList[index].iconh
                      }
                    />
                  </div>
                  <div>
                    <div className={`${styles.businessTitle}`}>
                      {/* 移动端icon */}
                      <Image
                        className={`${styles.mobileIcon} md:hidden`}
                        alt=""
                        src={buninessList[index].iconh}
                      />
                      <span>{business.title}</span>
                      <span className={`${styles.specialTitle}`}>
                        {currentIndex === index
                          ? `${business.title2 ? `【${business.title2}】` : ""}`
                          : business.title2}
                      </span>
                    </div>
                    <div className={`${styles.businessIntro}`}>
                      {business.intro}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`flex items-center justify-center `}>
              <Image
                className="max-w-[546px] md:max-w-[290px]"
                alt=""
                src={images[currentIndex]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Business };

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
    <section className=" min-h-[1012px] w-full  bg-[#fbfbfb]">
      <div className="    pb-[100px] pt-[72px]">
        {/* 标题 */}
        <div className="mx-auto w-full max-w-[1224px] px-3 pb-[72px]">
          <div className="text-[50px] font-bold  text-[#3A2D1B]">
            What We Do ?
          </div>
          <div className=" pt-[37px] text-[28px]">
            24/7 operation for ordering, packing, delivery and customer service.
          </div>
        </div>
        <div className="mx-auto max-w-[1440px]">
          {/* 选择栏 */}
          <div className="  ml-[96px]  flex max-w-[1224px] ">
            {/* 左侧 */}
            <div className={`${styles.left} box-border`}>
              {/* 单个 */}

              {buninessList.map((business, index) => (
                <div
                  key={index}
                  className={`${
                    currentIndex === index
                      ? styles.activeBusiness
                      : styles.normalBusiness
                  } flex`}
                  onMouseOver={() => setCurrentIndex(index)}
                >
                  <div className="pl-6 pr-3 pt-1">
                    <Image
                      className="w-8 max-w-[unset]"
                      alt=""
                      src={
                        currentIndex === index
                          ? buninessList[index].icon
                          : buninessList[index].iconh
                      }
                    ></Image>
                  </div>
                  <div>
                    <div className={`${styles.businessTitle}`}>
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
            <div className="flex max-w-[290px] items-center justify-center">
              <Image
                className="max-h-[540px] w-full"
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

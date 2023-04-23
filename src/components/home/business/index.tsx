import Image from "next/image";
import { useState } from "react";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";

import styles from "./styles.module.scss";
const Business = () => {
  const images = [one, two, three, one];
  const buninessList = [
    {
      title: "EASY ORDERING",
      intro:
        "Pick all you need on your phone and submit order anytime. anywhere.",
    },
    {
      title: "FRESH PACKING",
      intro:
        "We pack your products at a safe ambient temperature to keep fresh.",
    },
    {
      title: "FAST DELIVERY",
      intro: "We deliver your order within 1 ~ 8 hours after packing.",
    },
    {
      title: "PAYMENT FRIENDLY",
      title2: "Buy Now Pay Later",
      intro:
        "Check your cost and bill on your phone anythime anywhere and make the payment with Bank Transfer / Giro, Paynow, Cheque, etc.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex h-[1000px] w-full justify-center bg-[#fbfbfb]">
      <div className=" px-24  pb-[100px] pt-[72px]">
        {/* 标题 */}
        <div className="pb-[72px]">
          <div className="text-[50px] font-bold  text-[#3A2D1B]">
            What We Do ?
          </div>
          <div className=" pt-[37px] text-[28px]">
            24/7 operation for ordering, packing, delivery and customer service.
          </div>
        </div>
        {/* 选择栏 */}
        <div className="flex">
          {/* 左侧 */}
          <div className="mr-10 mt-[42px] flex flex-col">
            {/* 单个 */}

            {buninessList.map((business, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index
                    ? styles.activeBusiness
                    : styles.normalBusiness
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`${styles.businessTitle}`}>
                  <span>{business.title}</span>
                  <span className={`${styles.specialTitle}`}>
                    {currentIndex === index
                      ? `【${business.title2}】`
                      : business.title2}
                  </span>
                </div>
                <div className={`${styles.businessIntro}`}>
                  {business.intro}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-[290px] items-center justify-center">
            <Image className="w-full" alt="" src={images[currentIndex]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Business };

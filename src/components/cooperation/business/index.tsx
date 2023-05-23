import { useI18n, useResponsive } from "@/hooks";
import classNames from "classnames";
import { memo } from "react";
import { PropertyCardLeft } from "./PropertiCardLeft";
import { PropertyCardRight } from "./PropertiCardRight";
import styles from './style.module.scss'
import Image from "next/image";


import d1 from "./images/1.png";
import style from "./style.module.scss";

import d2 from "./images/2.png";
import d3 from "./images/3.png";
import d4 from "./images/4.png";

import m1 from "./images/1m.png";
import m2 from "./images/2m.png";
import m3 from "./images/3m.png";
import m4 from "./images/4m.png";
import pm5 from "./images/5.png"

export const Business = memo(() => {
  const images = [
    { m: [m1], d: [d1] },
    { m: [m2], d: [d2] },
    { m: [m3], d: [d3] },
    { m: [m4], d: [d4] },
  ];
  const { md } = useResponsive();
  const t = useI18n("about");
  const descDatas: Array<{
    title?: string;
    text: any;
    img: any;
    text2?: any;
    text3?: any;
    button: any;
  }> = [
    {
      text: "We can be your agent in Singapore and bring your goods to every street in Singapore through our mobile shopping mall.",
      text2:"If you have a product to expand the market, welcome to contact us.",
      img: images[0],
      button: "Settle in",
    },
    {
      title: "Storage Sharing",
      text:(<section className={classNames(styles.pm5_content, 'h-[55px]')}>
         <Image src={pm5} alt='' className={classNames(style.pm5_img)}></Image>
         {"Shipping and storing your goods at more efficiently and lower cost."}
      </section>),
      text2:(<section className={classNames(styles.pm5_content,'h-[20px]')}>
          <Image src={pm5} alt='' className={classNames(style.pm5_img)}></Image>
          {"Deliver your goods on demand anytime, anywhere."}
      </section>),
      text3:(<section className={classNames(styles.pm5_content)}>
        <Image src={pm5} alt='' className={classNames(style.pm5_img)}></Image>
        {"Dedicated storage space is also supported."}
      </section>),
      img: images[1],
      button: "Contact",
    },
    {
      title: "Truck Rental",
      text: "Build your logistics team with Low-Cost.",
      text2: "Service is only available during the day (9am-9pm).",
      img: images[2],
      button: "Contact",
    },
    {
      title: "Consignment",
      text: `Put your goods on our platforms("EBuy易购生鲜" and "EBuyMart" for B2B and B2C respectively) to sale for grabing more customers and orders.`,

      img: images[3],
      button: "Contact",
    },
  ];
  return (
    <section className={classNames(" md:py-[72px] md:pb-0")}>
      {/* 标题 */}
      <div className={classNames('w-full flex justify-center relative ')}>
        <span className={classNames(styles.title,'absolute')}>Grow your business in singapore</span>
      </div>
      <div className={classNames("w-full mb:bg-[#f5f5f5] bg-white md:bg-[unset] ")}>
        <div className="ebuy-container !block text-center">
          <PropertyCardRight
            descData={descDatas}
            type={"right1"}
            width={"w-full md:w-[364px]  mb-[56px] md:mb-0"}
          />
        </div>
      </div>
      <div className={classNames("w-full md:bg-[#fbfbfb]  bg-[#f5f5f5]", {
          [style.mobileBg2]: md,
        })}
      >
        <div className="ebuy-container !block">
          <PropertyCardRight
            descData={descDatas}
            type={"right2"}
            width={"w-full md:w-[340px]"}
          />
        </div>
      </div>
      <div className={classNames("  w-full bg-white  ")}>
        <div className="ebuy-container !block">
          <PropertyCardLeft
            descData={descDatas}
            type={"left1"}
            width={"w-full md:w-[475px]"}
          />
        </div>
      </div>
      <div
        className={classNames(
          "col-start-1 col-end-25 w-full md:bg-[#fbfbfb] bg-[#f5f5f5]"
        )}
      >
        <div className="ebuy-container !block">
          <PropertyCardRight
            descData={descDatas}
            type={"right3"}
            width={"w-full md:w-[428px]"}
          />
        </div>
      </div>
    </section>
  );
});

import { useI18n, useResponsive } from "@/hooks";
import classNames from "classnames";
import { memo } from "react";
import { PropertyCardLeft } from "./PropertiCardLeft";
import { PropertyCardRight } from "./PropertiCardRight";

import d1 from "./images/1.png";
import style from "./style.module.scss";

import d2 from "./images/2.png";
import d3 from "./images/3.png";
import d4 from "./images/4.png";

export const Business = memo(() => {
  const images = [
    { m: [d1], d: [d1] },
    { m: [d2], d: [d2] },
    { m: [d3], d: [d3] },
    { m: [d4], d: [d4] },
  ];
  const { md } = useResponsive();
  const t = useI18n("about");
  const descDatas: Array<{
    title?: string;
    text: string;
    img: any;
    text2?: string;
    button: string;
  }> = [
    {
      text: "We can be your agent in Singapore and bring your goods to every street in Singapore through our mobile shopping mall.",
      text2:
        " If you have a product to expand the market, welcome to contact us.",
      img: images[0],
      button: "Settle in",
    },
    {
      title: "Storage Sharing",
      text: "We can be your agent in Singapore and bring your goods to every street in Singapore through our mobile shopping mall.",

      img: images[1],
      button: "Contact",
    },
    {
      title: "Truck Rental",
      text: "Build your logistics team with Low-Cost.",
      text2: "Service is only available during the day (9am-9pm).",
      img: images[2],
      button: "Settle in",
    },
    {
      title: "Consignment",
      text: `Put your goods on our platforms("EBuy易购生鲜" and "EBuyMart" for B2B and B2C respectively) to sale for grabing more customers and orders.`,

      img: images[3],
      button: "Settle in",
    },
  ];
  return (
    <section className={classNames("  py-[72px]", {})}>
      {/* 标题 */}
      <div
        className={classNames(
          "w-full pb-[72px] pt-[100px] text-center text-[42px] font-[700] leading-[51px] text-[#333]"
        )}
      >
        Grow your business in singapore
      </div>
      <div className={classNames("w-full   bg-[#f5f5f5] md:bg-[unset] ")}>
        <div className="ebuy-container !block">
          <PropertyCardRight descData={descDatas[0]} width={"w-[364px]"} />
        </div>
      </div>
      <div
        className={classNames("w-full  md:bg-[#fbfbfb]  ", {
          [style.mobileBg2]: md,
        })}
      >
        <div className="ebuy-container !block">
          <PropertyCardRight
            descData={descDatas[1]}
            width={"w-[461px] md:w-[340px]"}
          />
        </div>
      </div>
      <div className={classNames("  w-full bg-[#f5f5f5] md:bg-white  ")}>
        <div className="ebuy-container !block">
          <PropertyCardLeft
            descData={descDatas[2]}
            width={"w-full md:w-[475px]"}
          />
        </div>
      </div>
      <div
        className={classNames(
          "col-start-1 col-end-25 w-full md:bg-[#fbfbfb]   "
        )}
      >
        <div className="ebuy-container !block">
          <PropertyCardRight
            descData={descDatas[3]}
            width={"w-full md:w-[428px]"}
          />
        </div>
      </div>
    </section>
  );
});

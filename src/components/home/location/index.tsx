import classNames from "classnames";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import mapCn from "./images/map-china.png";
import mapMs from "./images/map-ms.png";
import mapSgp from "./images/map-sgp.png";
import styles from "./styles.module.scss";

import { useI18n, useInView } from "@/hooks";

const countries = [
  {
    mapBg: mapSgp,
  },
  {
    mapBg: mapMs,
  },
  {
    mapBg: mapCn,
  },
];

export const Location = memo(() => {
  const [locationRef1, titleInView1] = useInView({ type: "title" });
  const [locationRef2, titleInView2] = useInView({ type: "title" });
  const t = useI18n("home");
  const [currentIndex, setCurrentIndex] = useState(0);
  const companyInfo = countries.map((country, index) => ({
    country: t(`location-${index + 1}-country` as any),
    name: t(`location-${index + 1}-name` as any),
    address: t(`location-${index + 1}-address` as any),
  }));

  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section className={classNames(" bg-[#fff] ")}>
      <div className={classNames("ebuy-container py-[76px]")}>
        <div className={classNames("col-start-1 col-end-25")}>
          <div
            ref={locationRef1}
            className={classNames(
              "px-[32px] pb-[32px] text-center text-[42px] font-bold leading-[51px] text-[#000] opacity-0 md:text-center ",
              { location1: titleInView1 }
            )}
          >
            {t("location-1-title")}
          </div>
          <div
            ref={locationRef2}
            className={classNames(
              "box-border text-center text-[22px] font-[400] leading-[44px] text-[#333] opacity-0 md:text-center",
              { location2: titleInView1 }
            )}
          >
            {t("location-1-description")}
          </div>
        </div>
        <div
          className={classNames(
            "col-start-1 col-end-25 box-border flex justify-center space-x-[104.17px] pb-[48px] pt-[52px] text-[24px] md:text-[40px]"
          )}
        >
          {companyInfo.map((company, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={classNames(
                "flex cursor-pointer flex-col items-center  ",
                styles["countrySelect"],
                {
                  ["text-[#333]"]: currentIndex === index,
                  ["text-[#666]"]: currentIndex != index,
                }
              )}
            >
              <span className={classNames("Inter z-40 text-[28px]")}>
                {company.country}
              </span>
              <span
                className={classNames(
                  "relative -top-[20px] -mb-[14px] h-[20px] w-[80%] rounded-[3.5pt] bg-[#EFEFEF]",
                  {
                    ["!bg-[#ed3838]"]: currentIndex === index,
                  }
                )}
              ></span>
            </div>
          ))}
        </div>
        {/* 公司 + 地图 栅格布局 */}
        <div
          ref={mapRef}
          className={classNames("relative col-start-1 col-end-25 ")}
          style={{
            boxShadow: "20px 20px 0px 0px #F9F9F9",
          }}
        >
          <Image
            className={classNames("h-full w-full")}
            src={countries[currentIndex].mapBg}
            alt=""
          />
          <div
            className={classNames(
              "absolute  left-[50px] top-[40px] flex w-[35%] flex-col items-start   justify-between bg-[#fff] px-2 py-[20px] md:px-6 md:py-[40px]  "
            )}
            style={{
              boxShadow: "0px 2px 15px 0px rgba(11,36,40,0.28)",
            }}
          >
            <div
              className={classNames(
                "pb-[16px] text-center text-[16px] leading-[39px]  text-[#333333]  md:pb-[24px] md:text-[24px] lg:pb-[32px]"
              )}
            >
              {companyInfo[currentIndex].name}
            </div>
            <div
              className={classNames(
                " text-[12px] leading-[29px] text-[#666666] md:text-[20px]"
              )}
            >
              {companyInfo[currentIndex].address}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

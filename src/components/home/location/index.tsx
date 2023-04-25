import { useSize } from "ahooks";
import classNames from "classnames";
import Image from "next/image";
import { memo, useRef, useState } from "react";

import styles from "./styles.module.scss";

import { useI18n } from "@/hooks";
import location from "./images/map-location.png";
import picChina from "./images/pic-china.png";

const countries = [
  {
    mapBg: styles.mapSgp,
  },
  {
    mapBg: styles.mapMs,
  },
  {
    mapBg: styles.mapCn,
  },
];

export const Location = memo(() => {
  const t = useI18n("home");

  const [currentIndex, setCurrentIndex] = useState(0);
  const companyInfo = countries.map((country, index) => ({
    country: t(`location-${index + 1}-country` as any),
    name: t(`location-${index + 1}-title` as any),
    address: t(`location-${index + 1}-address` as any),
  }));

  const mapRef = useRef<HTMLDivElement>(null);
  const size = useSize(mapRef);
  const scale = Math.max(0, (size?.width || 0) / 1440 - 1);

  return (
    <section className={classNames("bg-[#FBFBFB] pb-[43px] pt-[72px]")}>
      <div className={classNames("ebuy-container")}>
        <div
          className={classNames(
            "px-[32px] pb-[12px] text-[44px] text-[#333333] md:text-center md:text-[50px]"
          )}
        >
          Where We Are
        </div>
        <div
          className={classNames(
            "ebuy-container box-border text-[28px] leading-[40px] md:text-center md:leading-[44px]"
          )}
        >
          Ebuy mainly provides online-to-offline services in Singapore and
          Malaysia, We also have an office in China.
        </div>
      </div>
      <div
        className={classNames(
          "ebuy-container box-border flex justify-center space-x-[104.17px] pb-[48px] pt-[52px] text-[24px] md:text-[40px]"
        )}
      >
        {companyInfo.map((company, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={classNames(
              "flex cursor-pointer flex-col items-center text-[#666]",
              {
                ["text-[#333]"]: currentIndex === index,
              }
            )}
          >
            <span className={classNames("z-40 italic")}>{company.country}</span>
            <span
              className={classNames(
                "relative -top-[20px] -mb-[14px] h-[20px] w-[80%] rounded-[3.5pt] bg-[#ffc4c4]",
                {
                  ["!bg-[#ed3838]"]: currentIndex === index,
                }
              )}
            ></span>
          </div>
        ))}
      </div>
      <div
        ref={mapRef}
        className={classNames(
          countries[currentIndex].mapBg,
          "flex h-[634px] w-full items-center justify-center bg-cover bg-center bg-no-repeat"
        )}
      >
        {/* 卡片 */}
        <div
          className={classNames("relative flex w-fit bg-white bg-cover", {
            ["w-[540px]"]: currentIndex == 1,
          })}
          style={{
            transform: `translateY(${scale * 100}px)`,
          }}
        >
          <div className={classNames("h-[140px] w-[140px]")}>
            <Image
              className={classNames("h-full w-full")}
              alt="logo"
              src={picChina}
            ></Image>
          </div>
          {/* 公司描述 */}
          <div
            className={classNames(
              "px-5",
              currentIndex === 1 ? "flex-1 py-[15px]" : "py-6"
            )}
          >
            <div className={classNames("text-[#333333]")}>
              {companyInfo[currentIndex].name}
            </div>
            <div
              className={classNames(
                currentIndex === 1 ? "pb-1" : "py-2",
                "pt-3 text-[#666666]"
              )}
            >
              {companyInfo[currentIndex].address}
            </div>
            {/* <div className={classNames("text-[#666666]")}>
              {companyInfo[currentIndex].phone}
            </div> */}
          </div>
          <div
            className={classNames(
              "absolute -bottom-[44px] left-[50%] -translate-x-[50%]"
            )}
          >
            <Image
              className={classNames("h-8 w-8")}
              style={{
                transform: `scale(${scale + 1})`,
              }}
              alt="location"
              src={location}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
});

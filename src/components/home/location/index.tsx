import classNames from "classnames";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import mapCn from "./images/map-china.png";
import location from "./images/map-location.png";
import mapMs from "./images/map-ms.png";
import mapSgp from "./images/map-sgp.png";

import { useI18n } from "@/hooks";

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
  const t = useI18n("home");
  const [outerRadio, setOuter] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const companyInfo = countries.map((country, index) => ({
    country: t(`location-${index + 1}-country` as any),
    name: t(`location-${index + 1}-name` as any),
    address: t(`location-${index + 1}-address` as any),
  }));

  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section className={classNames("ebuy-container bg-[white] py-[72px]")}>
      <div className={classNames("col-start-1 col-end-25")}>
        <div
          className={classNames(
            " px-[32px] pb-[12px] text-[44px] font-bold text-[#000] md:text-center md:text-[50px]"
          )}
        >
          {t("location-1-title")}
        </div>
        <div
          className={classNames(
            " box-border text-[22px]  leading-[40px] text-[#333] md:text-center md:leading-[44px]"
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
              "flex cursor-pointer flex-col items-center ",
              {
                ["text-[#333]"]: currentIndex === index,
                ["text-[#666]"]: currentIndex != index,
              }
            )}
          >
            <span className={classNames("Inter z-40 text-[32px]")}>
              {company.country}
            </span>
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
      {/* 公司 + 地图 栅格布局 */}
      <div ref={mapRef} className={classNames("col-start-1 col-end-25 flex")}>
        <div
          className={classNames(
            " flex min-w-[280px] max-w-[600px] flex-1 flex-col items-center justify-center bg-[#f9f9f9] px-6 "
          )}
        >
          <div
            className={classNames(
              "pb-12 text-center text-[32px] leading-[39px] text-[#333333]"
            )}
          >
            {companyInfo[currentIndex].name}
          </div>
          <div
            className={classNames(
              "text-center text-[24px] leading-[29px] text-[#666666]"
            )}
          >
            {companyInfo[currentIndex].address}
          </div>
        </div>
        <div
          className={classNames("relative flex-1 md:h-[450px] 3xl:h-[600px]")}
        >
          <Image
            className={classNames(
              "absolute left-[50%] top-[50%] h-[48px] w-[48px] translate-x-[-50%] translate-y-[-19px]"
            )}
            alt=""
            src={location}
          />
          <Image
            className={classNames("h-full w-full")}
            src={countries[currentIndex].mapBg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

import { useSize } from "ahooks";
import classNames from "classnames";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import mapCn from "./images/map-china.png";
import location from "./images/map-location.png";
// import mapMs from "./images/map-malaysia.png";
// import mapSgp from "./images/map-singapore.png";

import { useI18n } from "@/hooks";

const countries = [
  {
    mapBg: mapCn,
  },
  {
    mapBg: mapCn,
  },
  {
    mapBg: mapCn,
  },
];

export const Location = memo(() => {
  const t = useI18n("home");

  const [currentIndex, setCurrentIndex] = useState(0);
  const companyInfo = countries.map((country, index) => ({
    country: t(`location-${index + 1}-country` as any),
    name: t(`location-${index + 1}-name` as any),
    address: t(`location-${index + 1}-address` as any),
  }));

  const mapRef = useRef<HTMLDivElement>(null);
  const size = useSize(mapRef);
  const scale = Math.max(0, (size?.width || 0) / 1440 - 1);

  return (
    <section className={classNames("bg-white] pb-[43px] pt-[72px]")}>
      <div className={classNames("ebuy-container")}>
        <div
          className={classNames(
            "px-[32px] pb-[12px] text-[44px] font-bold text-[#000] md:text-center md:text-[50px]"
          )}
        >
          Where We Are
        </div>
        <div
          className={classNames(
            "ebuy-container box-border text-[28px] font-bold leading-[40px] text-[#333] md:text-center md:leading-[44px]"
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
      {/* 左侧公司 */}
      <div ref={mapRef} className={classNames("ebuy-container flex")}>
        <div
          className={classNames(
            "flex min-w-[280px] flex-1 flex-col items-center justify-center bg-[#f9f9f9] px-6 "
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
        <div className={classNames("relative h-[450px] max-w-[680px]")}>
          <Image
            className={classNames(
              "absolute left-[50%] top-[50%] h-[48px] w-[48px] translate-x-[-50%] translate-y-[-19px]"
            )}
            alt=""
            src={location}
          />
          <Image
            className={classNames("h-full w-full")}
            src={countries[0].mapBg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

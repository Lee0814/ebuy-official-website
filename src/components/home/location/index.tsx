import Image from "next/image";
import { memo, useState } from "react";
import mapChina from "./images/map-china.png";
import location from "./images/map-location.png";
import mapMalaysia from "./images/map-malaysia.png";
import mapSingapore from "./images/map-singapore.png";
import picChina from "./images/pic-china.png";

import styles from "./styles.module.scss";

export const Location = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countries = ["Singapore", "Malaysia", "China"];
  const companies = [mapSingapore, mapMalaysia, mapChina];
  const companyInfo = [
    {
      name: "Ebuy Pte Ltd",
      address: "32 Quality Rd, Singapore 618804",
      phone: "电话：+86-1234-1347",
      bg: styles.sgpMap,
    },
    {
      name: "Ebuy Sdn. Bhd",
      address:
        "3, Jalan Silc 1/5, Kawasan Perindustrian SILC, 79200 Iskandar Puteri, Johor, 马来西亚",
      phone: "电话：+86-1234-1347",
      bg: styles.myMap,
    },
    {
      name: "成都海獭科技有限公司",
      address: "新川路和乐一街新川路和乐一街新川路和乐一街",
      phone: "电话：+86-1234-1347",
      bg: styles.cdMap,
    },
  ];
  return (
    <section className="flex flex-col items-center bg-[#FBFBFB] pb-[43px] pt-[72px]">
      <div className="pb-3 text-[50px] text-[#333333]">Where We Are</div>
      <div className="box-border w-[1200px] px-5 text-center text-[28px] leading-[44px]">
        Ebuy mainly provides online-to-offline services in Singapore and
        Malaysia, We also have an office in China.
      </div>
      <div className="box-border flex w-[1440px] justify-between px-[283px] pb-[43px] pt-14 text-[40px]">
        {countries.map((country, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className={
              currentIndex === index ? styles.activeCountry : styles.country
            }
            key={index}
          >
            <span>{country}</span>
            <span className={styles.countryBg}></span>
          </div>
        ))}
      </div>
      <div className={companyInfo[currentIndex].bg}>
        {/* 卡片 */}

        <div
          className={`${styles.company} ${
            currentIndex == 1 ? "w-[540px]" : ""
          }`}
        >
          <div className="h-[140px] w-[140px]">
            <Image className="h-full w-full" alt="" src={picChina}></Image>
          </div>
          {/* 公司描述 */}
          <div
            className={`px-5  ${
              currentIndex === 1 ? "flex-1 py-[15px]" : "py-6"
            } `}
          >
            <div className="text-[#333333]">
              {companyInfo[currentIndex].name}
            </div>
            <div
              className={`pt-3 text-[#666666] ${
                currentIndex === 1 ? "pb-1" : "py-2"
              }`}
            >
              {companyInfo[currentIndex].address}
            </div>
            <div className="text-[#666666]">
              {companyInfo[currentIndex].phone}
            </div>
          </div>
        </div>
        <div
          className={`${styles.position}  ${
            currentIndex == 1 ? "bottom-[196px]" : ""
          }`}
        >
          <Image className="h-8 w-8" alt="位置图标" src={location}></Image>
        </div>
      </div>
    </section>
  );
});

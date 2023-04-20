import { useState } from "react";
import map from "./Map.module.scss";
export default () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countries = ["Singapore", "Malaysia", "China"];
  return (
    <section className="flex flex-col items-center bg-[#FBFBFB] pb-[43px] pt-[72px]">
      <div className="  pb-3 text-[50px] text-[#333333]">Where We Are</div>
      <div className="box-border w-[1200px]  px-5  text-center  text-[28px]  leading-[44px]">
        Ebuy mainly provides online-to-offline services in Singapore and
        Malaysia, We also have an office in China.
      </div>
      <div className="container box-border flex justify-between px-[283px] pb-[43px] pt-14 text-[40px]">
        {countries.map((country, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? map.activeCountry : map.country}
          >
            <span>{country}</span>
          </div>
        ))}
      </div>
      <div className="w-full">
        <img src="" alt="" />
      </div>
    </section>
  );
};

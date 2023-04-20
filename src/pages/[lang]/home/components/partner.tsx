import Image from "next/image";
import partner from "./partner.module.scss";

import p11 from "../images/partnerlogo/11.png";
import p12 from "../images/partnerlogo/12.png";
import p13 from "../images/partnerlogo/13.png";
import p14 from "../images/partnerlogo/14.png";
import p15 from "../images/partnerlogo/15.png";
import p16 from "../images/partnerlogo/16.png";
import p17 from "../images/partnerlogo/17.png";

import p21 from "../images/partnerlogo/21.png";
import p22 from "../images/partnerlogo/22.png";
import p23 from "../images/partnerlogo/23.png";
import p24 from "../images/partnerlogo/24.png";
import p25 from "../images/partnerlogo/25.png";
import p26 from "../images/partnerlogo/26.png";
import p27 from "../images/partnerlogo/27.png";

import p31 from "../images/partnerlogo/31.png";
import p32 from "../images/partnerlogo/32.png";
import p33 from "../images/partnerlogo/33.png";
import p34 from "../images/partnerlogo/34.png";
import p35 from "../images/partnerlogo/35.png";
import p36 from "../images/partnerlogo/36.png";
import p37 from "../images/partnerlogo/37.png";

import p41 from "../images/partnerlogo/41.png";
import p42 from "../images/partnerlogo/42.png";
import p43 from "../images/partnerlogo/43.png";
import p44 from "../images/partnerlogo/44.png";
import p45 from "../images/partnerlogo/45.png";
import p46 from "../images/partnerlogo/46.png";
import p47 from "../images/partnerlogo/47.png";

import p51 from "../images/partnerlogo/51.png";
import p52 from "../images/partnerlogo/52.png";
import p53 from "../images/partnerlogo/53.png";
import p54 from "../images/partnerlogo/54.png";
import p55 from "../images/partnerlogo/55.png";
import p56 from "../images/partnerlogo/56.png";
import p57 from "../images/partnerlogo/57.png";

const partnerLogos = [
  [p11, p12, p13, p14, p15, p16, p17],
  [p21, p22, p23, p24, p25, p26, p27],
  [p31, p32, p33, p34, p35, p36, p37],
  [p41, p42, p43, p44, p45, p46, p47],
  [p51, p52, p53, p54, p55, p56, p57],
];

export default () => {
  return (
    <section className=" flex justify-center bg-white">
      <div className="mx-[120px] box-border w-[1440px]">
        <div className="pt-[72px] text-center">
          <span className="text-[64px] text-[#333333]">EBUY</span>
          <span className="text-[50px]"> Grows with You</span>
        </div>
        <div className="text-center text-[28px] leading-[44px]">
          As a trusted partner, we serve more than 1000 F&B businesses such as
          Haidilao Hot Pot, Putien, Wen Jia Bao and A Kitchen. Since the release
          of{" "}
          <span className="rounded-[8pt] bg-[#FFD4D4] px-4 py-1">
            EBuy 易购生鲜 APP
          </span>{" "}
          , EBUY has been striving to improve the customer experience and your
          business efficiency.
        </div>
        <div className="relative flex flex-col py-[100px]">
          <div className={partner.leftMist}></div>
          <div className={partner.rightMist}></div>

          {partnerLogos.map((rows) => (
            <div className=" flex h-[140px] justify-between py-[10px]">
              {rows.map((partner) => (
                <div className="flex h-[120px] w-[120px] items-center">
                  <Image
                    className="max-h-[120px] w-[120px]"
                    alt=""
                    src={partner}
                  ></Image>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

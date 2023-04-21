import Image from "next/image";
import { memo } from "react";

import styles from "./styles.module.scss";

import p11 from "./images/logo-1-1.png";
import p12 from "./images/logo-1-2.png";
import p13 from "./images/logo-1-3.png";
import p14 from "./images/logo-1-4.png";
import p15 from "./images/logo-1-5.png";
import p16 from "./images/logo-1-6.png";
import p17 from "./images/logo-1-7.png";

import p21 from "./images/logo-2-1.png";
import p22 from "./images/logo-2-2.png";
import p23 from "./images/logo-2-3.png";
import p24 from "./images/logo-2-4.png";
import p25 from "./images/logo-2-5.png";
import p26 from "./images/logo-2-6.png";
import p27 from "./images/logo-2-7.png";

import p31 from "./images/logo-3-1.png";
import p32 from "./images/logo-3-2.png";
import p33 from "./images/logo-3-3.png";
import p34 from "./images/logo-3-4.png";
import p35 from "./images/logo-3-5.png";
import p36 from "./images/logo-3-6.png";
import p37 from "./images/logo-3-7.png";

import p41 from "./images/logo-4-1.png";
import p42 from "./images/logo-4-2.png";
import p43 from "./images/logo-4-3.png";
import p44 from "./images/logo-4-4.png";
import p45 from "./images/logo-4-5.png";
import p46 from "./images/logo-4-6.png";
import p47 from "./images/logo-4-7.png";

import p51 from "./images/logo-5-1.png";
import p52 from "./images/logo-5-2.png";
import p53 from "./images/logo-5-3.png";
import p54 from "./images/logo-5-4.png";
import p55 from "./images/logo-5-5.png";
import p56 from "./images/logo-5-6.png";
import p57 from "./images/logo-5-7.png";

const partnerLogos = [
  [p11, p12, p13, p14, p15, p16, p17],
  [p21, p22, p23, p24, p25, p26, p27],
  [p31, p32, p33, p34, p35, p36, p37],
  [p41, p42, p43, p44, p45, p46, p47],
  [p51, p52, p53, p54, p55, p56, p57],
];

export const Partner = memo(() => {
  return (
    <section className="flex justify-center bg-white">
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
          <div className={styles.leftMist}></div>
          <div className={styles.rightMist}></div>
          {partnerLogos.map((rows) => (
            <div className="flex h-[140px] justify-between py-[10px]">
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
});

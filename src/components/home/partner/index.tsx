import Image from "next/image";
import { memo, useEffect, useRef } from "react";

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
  [p11, p21, p31, p41, p51],
  [p12, p22, p32, p42, p52],
  [p13, p23, p33, p43, p53],
  [p14, p24, p34, p44, p54],
  [p15, p25, p35, p45, p55],
  [p16, p26, p36, p46, p56],
  [p17, p27, p37, p47, p57],
];

export const Partner = memo(() => {
  const dynamicDom = useRef<HTMLDivElement>(null);
  let node: Node;
  useEffect(() => {
    let styleObj = dynamicDom.current?.style!;
    let transitionX = 0;

    let isAdd: number = 0;
    console.log(
      dynamicDom.current!.scrollLeft,
      dynamicDom.current!.firstElementChild!.scrollWidth
    );
    const moveFn = () => {
      styleObj.transform = `translateX(-${(transitionX += 1)}px)`;

      // if (
      //   transitionX >
      //   dynamicDom.current!.firstElementChild!.scrollWidth + 20
      // ) {
      //   dynamicDom.current!.appendChild(dynamicDom.current!.firstElementChild!);
      // }

      isAdd = requestAnimationFrame(moveFn);
    };

    if (!isAdd) {
      moveFn();
    }
  });

  return (
    <section className="bg-white pt-[72px]">
      <div className="ebuy-container text-center">
        <span className="text-[44px] text-[#333333] md:text-[64px]">EBUY</span>
        <span className="text-[30px] md:text-[50px]"> Grows with You</span>
        <div className="text-center text-[20px] leading-[44px] md:text-[28px]">
          As a trusted partner, we serve more than 1000 F&B businesses such as
          Haidilao Hot Pot, Putien, Wen Jia Bao and A Kitchen. Since the release
          of
          <span className="rounded-[8px] bg-[#FFD4D4] px-4 py-1">
            EBuy 易购生鲜 APP
          </span>
          , EBUY has been striving to improve the customer experience and your
          business efficiency.
        </div>
        <div className="relative flex flex-col py-[100px]">
          <div className={styles.leftMist}></div>
          <div className={styles.rightMist}></div>
          {/* 视口 */}
          <div className="h-full overflow-x-hidden">
            {/* 滚动块 */}
            {/* 单个图片块 */}
            <div
              ref={dynamicDom}
              className={`flex w-[2880px] justify-between  ${styles.ani}`}
            >
              {partnerLogos.map((column, index) => (
                <div key={index}>
                  {column.map((src, index) => (
                    <div
                      key={index}
                      className="flex h-[144px] items-center justify-center"
                    >
                      <Image
                        className="max-h-[120px] w-[120px]"
                        src={src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              ))}
              {/* {单个滚动块} */}
              <div></div>
              {partnerLogos.map((column, index) => (
                <div key={index}>
                  {column.map((src, index) => (
                    <div
                      key={index}
                      className="flex h-[144px] items-center justify-center"
                    >
                      <Image
                        className="max-h-[120px] w-[120px]"
                        src={src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

import classNames from "classnames";
import { memo, useEffect, useRef } from "react";
import { ECard } from "./evaluatCard";
export const Evaluation = memo(() => {
  const dom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(dom.current?.scrollTop);
    console.log(dom.current);
  });
  const evaluations = [
    {
      name: "Hai Di Lao Dining Pte. Ltd",
      desc: "Hai Di Lao Mian Guan 2",
      text: "The meat is fresh and just right. Surveyor carefully read the remarks, the work is in place.",
      img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb45e33c055d2e6fd779884efdfcd0fe8f1fe7b32c7d8a00272a0ef67872b6c3",
    },
    {
      name: "H&J TIBET PTE. LTD",
      desc: "Miss Tang 14-18",
      text: "Quickly put the little brother service in place, I fill in the wrong address, the little brother phone contact soon to me. Thank you very much!",
      img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng98a71cc90415baa63400b2cb3f34d911c94531f43a08fc1cdb5ea88bdf2b904d",
    },
    {
      name: "ASHION SPICY HOT POT",
      desc: "Ashion Spicy Hot Pot 21",
      text: "So night, brother hard, fast delivery. Thank you",
      img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng339ecc6429bcff7c0053b1ecd50d5e8f1252077115b7cb7b9863d62c410248fd",
    },
    {
      name: "Gu Xiang Ji Pte Ltd",
      desc: "Da Yan 118",
      text: "This apple is better than Aksu in New Zealand! Crispy and sweet! The ugliest apple I've ever seen and the best apple I've ever eaten",
      img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9e0fcf8cbdb8d1c74bc9ebb4f7cfb93a3f51fd86c191271129233f1aac7e3bf8",
    },
  ];

  // const imgs=[]
  // const news = []
  //    for(let i=0;i<4;i++){
  //   news.push({
  //       name:t(`evaluation-${i}-customer-company`),
  //     desc:t(`evaluation-${i}-customer-people`),
  //     text:t(`evaluation-${i}-customer-text`),
  //     img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb45e33c055d2e6fd779884efdfcd0fe8f1fe7b32c7d8a00272a0ef67872b6c3",
  //   })
  // }

  return (
    <section ref={dom} className="w-full bg-[#fbfbfb] pb-[72px] pt-[100px]">
      {/* 主体 */}
      <div className={classNames("ebuy-container ")}>
        {/* 标题 */}
        <div
          className={classNames(
            "pb-[100px]  text-center text-[50px] font-bold leading-[60px] text-black"
          )}
        >
          Customer Evaluation
        </div>
        {/* 评价 */}
        <div className={classNames("ebuy-container ")}>
          <div className={classNames("mr-[46px] flex justify-between")}>
            {/* 卡片 */}
            <ECard eva={evaluations[0]} />
            <ECard eva={evaluations[1]} />
          </div>
          <div
            className={classNames("ml-[46px] mt-[78px] flex justify-between")}
          >
            <ECard eva={evaluations[2]} />
            <ECard eva={evaluations[3]} />
          </div>
        </div>
      </div>
    </section>
  );
});

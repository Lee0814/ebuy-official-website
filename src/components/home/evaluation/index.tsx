import { useI18n } from "@/hooks";
import classNames from "classnames";
import { memo, useEffect, useRef } from "react";
import { ECard } from "./evaluatCard";
export const Evaluation = memo(() => {
  const dom = useRef<HTMLDivElement>(null);
  const t = useI18n("home");
  useEffect(() => {});
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

  // 所有的列
  const [cols, setCols] = useState(
    evalutionProps.map((column, index) => (
      <div key={index} className={classNames("!min-w-[500px] ")}>
        <div className={classNames("mb-[76px] min-h-[276px] md:mr-[100px]")}>
          <ECard eva={evalutionProps[index][0]} />
        </div>
        <div className={classNames(" md:ml-[100px]")}>
          <ECard eva={evalutionProps[index][1]} />
        </div>
      </div>
    ))
  );

  return (
    <section ref={dom} className={classNames("w-full py-[45px] md:pb-[56px]")}>
      {/* 主体 */}
      <div className={classNames("ebuy-container")}>
        {/* 标题 */}
        <div
          className={classNames(
            "col-start-1 col-end-25 pb-[32px] text-center text-[42px] font-bold leading-[51px] text-black"
          )}
        >
          {t("evaluation-title")}
        </div>
        <div
          className={classNames(
            "col-start-1 col-end-25 mb-[40px] text-center text-[22px] font-[400] leading-[32px]"
          )}
        >
          {t("evaluation-description-1")}
          <span className="mx-[0.5em] font-[600]">
            {t("evaluation-description-2")}
          </span>
          {t("evaluation-description-3")}
        </div>
        {/* 评价 */}
        {/* <div className={classNames("ebuy-container  col-start-1 col-end-25")}>
          <div className={classNames("mr-[46px] flex justify-between")}>

            <ECard eva={evaluations[0]} />
            <ECard eva={evaluations[1]} />
          </div>
          <div
            className={classNames("ml-[46px] mt-[78px] flex justify-between")}
          >
            <ECard eva={evaluations[2]} />
            <ECard eva={evaluations[3]} />
          </div>
        </div> */}

        {/* 卡片 */}
        <div
          className={classNames(
            "col-start-1 col-end-25 mb-[52px] pr-[20px] md:col-end-12"
          )}
        >
          <ECard eva={evaluations[0]} />
        </div>
        <div
          className={classNames(
            "col-start-1 col-end-25 md:col-start-12 md:col-end-25 md:pl-[46px]"
          )}
        >
          {/* 超出部分 */}
          <div
            ref={partnerRef}
            className={classNames(
              "h-max-full grid w-full  grid-flow-col justify-between "
            )}
            style={{
              transform: `translateX(-${offset}px)`,
            }}
          >
            {/* 每一列 */}
            {cols}
          </div>
        </div>
      </div>
    </section>
  );
});

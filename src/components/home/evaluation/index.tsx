import { useI18n } from "@/hooks";
import { rAFWithControl } from "@/utils";
import { useInViewport } from "ahooks";
import classNames from "classnames";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ECard } from "./evaluatCard";
export const Evaluation = memo(() => {
  const dom = useRef<HTMLDivElement>(null);
  const t = useI18n("home");
  useEffect(() => {});
  const evaluations = [
    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb45e33c055d2e6fd779884efdfcd0fe8f1fe7b32c7d8a00272a0ef67872b6c3",

    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng98a71cc90415baa63400b2cb3f34d911c94531f43a08fc1cdb5ea88bdf2b904d",

    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng339ecc6429bcff7c0053b1ecd50d5e8f1252077115b7cb7b9863d62c410248fd",

    "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9e0fcf8cbdb8d1c74bc9ebb4f7cfb93a3f51fd86c191271129233f1aac7e3bf8",
  ];
  const evalutionProps: Array<
    Array<{
      name: string;
      desc: string;
      text: string;
      img: string;
    }>
  > = [];
  for (let i = 0; i < 16; i++) {
    if (!evalutionProps[Math.floor(i / 2)])
      evalutionProps[Math.floor(i / 2)] = [];
    evalutionProps[Math.floor(i / 2)].push({
      name: t(`evaluation-${i + 1}-customer-company` as any),
      desc: t(`evaluation-${i + 1}-customer-people` as any),
      text: t(`evaluation-${i + 1}-customer-text` as any),
      // img: evaluations[Math.floor(Math.random() * 4)],
      img: evaluations[0],
    });
  }
  //偏移逻辑
  // 滚动的偏移量
  const [offset, setOffset] = useState(0);

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

  // 控制动画的开始和结束
  const partnerRef = useRef<HTMLDivElement>(null);
  const [inViewport, ratio] = useInViewport(partnerRef, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  const animation = useMemo(
    () =>
      rAFWithControl(60, () => {
        setOffset((offset) => {
          return offset + 1;
        });
      }),
    []
  );
  const startAnimation = useCallback(() => {
    animation.start();
  }, [animation]);
  const stopAnimation = useCallback(() => {
    animation.stop();
  }, [animation]);
  useEffect(() => {
    if (!inViewport || !ratio) return stopAnimation();
    if (inViewport && ratio > 0.35) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [inViewport, ratio]);
  useEffect(() => {
    if (offset + 1 >= partnerRef.current!.firstElementChild!.clientWidth) {
      setCols((cols) => {
        const _cols = [...cols];
        const _col = _cols.shift();
        _cols.push(_col!);
        return _cols;
      });
      setOffset(0);
    }
  }, [offset]);
  useEffect(() => stopAnimation, []);
  return (
    <section
      ref={dom}
      className={classNames(
        "w-full bg-[#fbfbfb] py-[45px]  md:pb-[100px] md:pt-[72px]"
      )}
    >
      {/* 主体 */}
      <div className={classNames("ebuy-container ")}>
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
        {/* 固定窗口 */}
        <div
          className={classNames(
            "col-start-1 col-end-25 w-full overflow-x-hidden "
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

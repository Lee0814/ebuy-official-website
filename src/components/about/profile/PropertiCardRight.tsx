import { useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
export const PropertyCardRight = (props: {
  descData: {
    title: string;
    text: string;
    img: { m: Array<any>; d: Array<any> };
    text2: string;
  };
  width?: string;
}) => {
  const { md } = useResponsive();
  const { descData, width } = props;
  const images = (
    <div
      className={classNames(
        "flex   justify-between md:min-w-[342px] md:pl-[50px]"
      )}
    >
      <Image
        className={classNames("h-auto w-[48%]  md:w-[340px]", width)}
        src={md ? descData.img.m[0] : descData.img.d[0]}
        alt=""
      />
      <Image
        className={classNames("h-auto  w-[48%] md:w-[340px]", width)}
        src={md ? descData.img.m[1] : descData.img.d[1]}
        alt=""
      />
    </div>
  );

  const image = (
    <div
      className={classNames(
        "flex    justify-end md:min-w-[342px] md:pl-[50px]"
      )}
    >
      <Image
        className={classNames("h-auto  md:w-[340px]", width)}
        src={md ? descData.img.m[0] : descData.img.d[0]}
        alt=""
      />
    </div>
  );

  return (
    <div
      className={classNames(
        "col-start-1 col-end-25 flex flex-col items-center justify-between py-[72px] md:flex-row md:pb-[72px]  md:pt-[unset]",
        {}
      )}
    >
      {/* 左侧图片 */}
      {md && descData.img.m.length == 2 ? images : image}
      {/* 右侧文字 */}
      <div
        className={classNames(
          "flex  flex-col  justify-between pl-[20px] pt-[56px] md:min-h-[289px] md:w-[71%] md:py-[27px]"
        )}
      >
        <div className={classNames(" text-[42px] font-[600]")}>
          {descData.title}
        </div>
        <div
          className={classNames(
            "py-[32px] text-[26px] leading-[44px] text-[#333] md:pb-[16px] md:pt-[8px] md:text-[20px] md:leading-[31px]"
          )}
        >
          {descData.text}
        </div>
        <div
          className={classNames(
            "text-[26px] leading-[44px] text-[#333]  md:text-[20px] md:leading-[31px]"
          )}
        >
          {descData.text2}
        </div>
      </div>
    </div>
  );
};

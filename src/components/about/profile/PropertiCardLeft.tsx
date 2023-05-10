import classNames from "classnames";
import Image from "next/image";
export const PropertyCardLeft = (props: {
  descData: { title: string; text: string; img: any; text2: string };
  width?: number;
}) => {
  const { descData, width } = props;
  return (
    <div
      className={classNames("flex items-center justify-between pb-[72px]", {})}
    >
      {/* 左侧文字 */}
      <div
        className={classNames(
          "flex min-h-[289px] w-[71%] flex-col justify-between py-[27px] pl-[20px]"
        )}
      >
        <div className={classNames(" text-[42px] font-[600]")}>
          {descData.title}
        </div>
        <div
          className={classNames(
            "pb-[16px] pt-[8px] text-[20px]  leading-[31px] text-[#333]"
          )}
        >
          {descData.text}
        </div>
        <div className={classNames("text-[20px]  leading-[31px] text-[#333]")}>
          {descData.text2}
        </div>
      </div>
      {/* 右侧图片 */}
      <div className={classNames("flex   min-w-[342px] justify-end pl-[50px]")}>
        <Image
          className={classNames(
            "h-auto  w-[340px]",
            width ? `w-[${width}]` : `w-[340px]`
          )}
          src={descData.img}
          alt=""
        />
      </div>
    </div>
  );
};

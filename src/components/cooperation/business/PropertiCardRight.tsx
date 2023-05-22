import { useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
export const PropertyCardRight = (props: {
  descData: {
    title?: string;
    text: string;
    img: { m: Array<any>; d: Array<any> };
    text2?: string;
    button: string;
  };
  width?: string;
}) => {
  const { md } = useResponsive();
  const { descData, width } = props;
  // console.log(props);
  console.log(props.descData.button)
  
  
 


  return (
    <div
      className={classNames(
        "] col-start-1 col-end-25 flex flex-col items-center justify-between py-[72px] md:flex-row  ",
        {}
      )}
    >
      {/* 左侧图片 */}
      <div className={classNames("flex    justify-end md:min-w-[342px] ")}>
        <Image
          className={classNames("h-auto  md:w-[340px]", width)}
          src={md ? descData.img.m[0] : descData.img.d[0]}
          alt=""
        />
      </div>
      {/* 右侧文字 */}
      <div
        className={classNames(
          "flex  flex-col  justify-between pl-[20px] pt-[56px] md:min-h-[289px] md:w-[60%] md:py-[27px]"
        )}
      >
        <div
          className={classNames(
            "text-[42px] font-[700] leading-[51px] text-[#333] ",
            {
              ["hidden"]: !descData.title,
            }
          )}
        >
          {descData.title}
        </div>
        <div>
          <div
            className={classNames(
              "pb-[16px] pt-[8px] text-[26px] leading-[44px] text-[#333] md:text-[20px] md:leading-[31px]"
            )}
          >
            {descData.text}
          </div>
          <div
            className={classNames(
              "text-[26px] leading-[44px] text-[#333]  md:text-[20px] md:leading-[31px]",
              {
                ["hidden"]: !descData.text2,
              }
            )}
          >
            {descData.text2}
          </div>
        </div>
        {/* 按钮 */}
        <div>
          <span
            className={classNames(
              "bg-[#f5f5f5] px-[44px] py-[12px] text-[20px] leading-[24px] text-[#ED3838] "
            )}
          >
            {descData.button}
          </span>
        </div>
      </div>
    </div>
  );
};

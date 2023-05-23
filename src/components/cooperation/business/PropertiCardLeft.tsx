import { useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export const PropertyCardLeft = (props: {
  descData:  Array<{
    title?: string;
    text: string;
    img: any;
    text2?: string;
    text3?: string;
    button: string;
  }> ;
  width?: string;
  type?:string;
}) => {
  const { md } = useResponsive();
  const { descData, width ,type} = props;
  console.log(type);

  const titledom = <div className={classNames()}>{descData[2].title}</div>;
  return (
    <div
      className={classNames(
        "col-start-1 col-end-25 flex flex-col-reverse items-center justify-between py-[72px] md:flex-row   ",
        {}
      )}
    >
      {/* 左侧 */}
      <div
        className={classNames(
          "flex flex-col  justify-between pt-[56px] md:min-h-[289px] md:w-[60%] md:py-[27px] md:pl-[20px]"
        )}
      >
        <div
          className={classNames(
            "text-[42px] font-[700] leading-[51px] text-[#333] ",
            {
              ["hidden"]: !descData[2].title,
            }
          )}
        >
          {descData[2].title}
        </div>
        <div className={classNames('mb-[72px]')}>
          {/* 文本 */}
          <div
            className={classNames(
              " md:py-[32px] pt-[32px] text-[26px] leading-[44px] text-[#333]  md:pb-[16px] md:pt-[8px]  md:text-[20px] md:leading-[31px]"
            )}
          >
            {descData[2].text}
          </div>
          <div
            className={classNames(
              "text-[26px] leading-[44px]  text-[#333]  md:text-[20px] md:leading-[31px]",
              {
                ["hidden"]: !descData[2].text2,
                ["mt-[28px]"]:type==='left1'
              }
            )}
          >
            {descData[2].text2}
          </div>
        </div>
        {/* 按钮 */}
        <Link href='#message'>
          <span
            className={classNames(
              "bg-[#f5f5f5] md:px-[44px] px-[29px] py-[12px] md:text-[20px] text-[28px] rounded-md leading-[24px] text-[#ED3838] hover:bg-[#ED3838] hover:text-white"
            )}
          >
            {descData[2].button}
          </span>
        </Link>
      </div>
      {/* 右侧图片 */}
      <div
        className={classNames(
          "flex    justify-end md:min-w-[342px] md:pl-[50px]"
        )}
      >
        <Image
          className={classNames("h-auto  md:w-[340px]", width)}
          src={md?descData[2].img.m[0]:descData[2].img.d[0]}
          alt=""
        />
      </div>
    </div>
  );
};

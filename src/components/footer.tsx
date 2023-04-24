import qrcode from "@/assets/images/qrcode.jpg";
import { useI18n } from "@/hooks";
import Image from "next/image";
import { memo } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

export const Footer = memo(() => {
  const t = useI18n("footer");

  return (
    <footer className="bg-white">
      {/* start 表单 */}
      <div className="ebuy-container mb-[40px] pt-[60px]">
        <div className="mb-[10px] text-[50px] font-bold leading-[75px] text-[#333333]">
          {t("contact")}
        </div>
        <div className="mb-[56px] text-[28px] font-[500] leading-[44px]">
          {t("detail")}
        </div>
        <div className="space-y-[32px] px-[24px] text-[24px] font-[400] leading-[36px] text-[#333333]">
          <div className="flex flex-col md:flex-row  md:justify-between">
            <div className="flex  flex-col space-y-[16px] md:w-[45%]">
              <span>{t("first-name")}</span>
              <input
                style={{ border: "1px solid #DDDDDD" }}
                className="h-[56px] w-full max-w-[650px] rounded-[4px] px-8 py-4"
                type="text"
              />
            </div>
            <div className="flex  flex-col md:w-[45%] md:items-end">
              <div className="w-full max-w-[650px] space-y-[16px]">
                <span>{t("last-name")}</span>
                <input
                  style={{ border: "1px solid #DDDDDD" }}
                  className="h-[56px] w-full rounded-[4px] px-8 py-4"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span className="after:ml-[4px] after:text-[24px] after:font-[500] after:leading-[36px] after:text-[#ed3838] after:content-['*']">
              {t("telephone")}
            </span>
            <IntlTelInput
              containerClassName="intl-tel-input"
              inputClassName="form-control"
              separateDialCode={true}
            />
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span>{t("email")}</span>
            <input
              style={{ border: "1px solid #DDDDDD" }}
              className="h-[56px] w-full rounded-[4px]"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span>{t("help")}</span>
            <textarea
              style={{ border: "1px solid #DDDDDD" }}
              className="h-[112px] w-full rounded-[4px] px-8 py-4"
            />
          </div>
        </div>
        <div className="mt-[48px] flex items-center justify-center">
          <button className="bg-[#ED3838] px-[78px] py-[19px] text-[24px] leading-[36px] text-white">
            {t("submit")}
          </button>
        </div>
      </div>
      {/* end 表单 */}
      {/* start 信息 */}
      <div className="bg-[#1d1f21]">
        <div className="ebuy-container flex flex-col justify-between pb-[34px] pt-[72px] text-[28px]  leading-[20px] text-[#acacac] text-[400] md:flex-row md:text-[14px]">
          {/* 食材供应 */}
          <div>
            {/* 标题 */}
            <div className=" mb-8 text-[32px] leading-[100%] text-[600] text-white md:mb-[25px] md:text-[20px] md:leading-[28px]">
              餐饮食材供应
            </div>

            <ul className="flex max-w-[568px] justify-between leading-[100%] md:flex-col md:space-y-[12px] md:leading-[20px] ">
              <li className="flex flex-col md:block md:space-x-[28px] ">
                <span>新鲜蔬菜</span>
                <span className="my-[24px] md:my-0">新鲜水果</span>
              </li>
              <li className="flex flex-col md:block md:space-x-[28px]">
                <span>营养面食</span>
                <span className="my-[24px] md:my-0">干活调料</span>
              </li>
              <li className="flex flex-col md:block md:space-x-[28px]">
                <span>肉类冻品</span>
                <span className="my-[24px] md:my-0">酒水饮料</span>
              </li>
            </ul>
            <li className="mt-[10px] list-none">
              <span className="leading-[100%] ">
                ebuy商家端订货App（最快当日送货）
              </span>
            </li>
          </div>
          {/* 第二个 */}
          <div className="mt-[72px] md:mt-0">
            <div className="mb-5 text-[32px] leading-[100%]  text-[600] text-white md:mb-[25px] md:text-[20px] md:leading-[28px]">
              其他服务
            </div>
            <ul className="flex flex-wrap justify-between leading-[100%] md:block    md:space-y-[12px] md:leading-[20px] ">
              <li className=" py-3 md:py-0">批发合作</li>
              <li className="list-none py-3 md:py-0">共享仓储</li>
              <li className="list-none py-3 md:py-0">定制化供应服务</li>
              <li className="list-none py-3 md:py-0 ">
                ebuymart线上生鲜超市（次日达）
              </li>
            </ul>
          </div>
          {/* 第三个 */}
          <div className="mt-[50px] leading-[100%] md:mt-0 ">
            <ul className="space-y-[12px]">
              <li className=" text-[32px] text-[600] text-white md:text-[20px] md:leading-[28px]">
                联系我们
              </li>
              <li className="pt-8 text-[44px] leading-[100%] text-[#ededed] text-[600] md:pt-0  md:text-[24px] md:leading-[33px]">
                9774-5658
              </li>
              <li className="pt-6 leading-[100%] md:pt-0 md:leading-[20px]">
                地址：32 Quallity Road,Singapore 618804
              </li>
              <li className="pt-6 leading-[100%] md:pt-0 md:leading-[20px]">
                联系邮箱：xxxxxx@xxxxx.COM
              </li>
              <li className="pt-6 leading-[100%] md:pt-0 md:leading-[20px]">
                服务时间：周一至周五 9:00 am——6:00 pm
              </li>
            </ul>
          </div>
          {/* 第四个 */}
          <div className="mt-[72px] md:mt-0 ">
            <ul>
              <li className="mb-[25px]  text-[32px] text-[600] text-white md:text-[20px] md:leading-[28px]">
                关注我们
              </li>
              <li className="mb-[8px] h-[260px] w-[260px]  bg-white md:h-[89px] md:w-[89px]">
                <Image className="h-full w-full" src={qrcode} alt=""></Image>
              </li>
              <li className="pt-[12px] leading-[100%] md:pt-0 md:leading-[20px]">
                Ebuy官方微信公众号
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[86px] flex flex-col justify-center px-8 pb-[34px]  text-[24px] text-[#acacac] text-[400] md:mt-[100px] md:flex-row md:items-center md:space-x-[120px] md:text-[12px] md:leading-[17px]">
          <div>川ICP备XXXXXXX号 | 版权所有</div>
          <div className="pb-[24px] pt-[12px] md:pb-0 md:pt-0 md:leading-10">
            总部地址：81AClemenceauAve,UESquare,Suite17.S239918
          </div>
        </div>
      </div>
      {/* end 信息 */}
    </footer>
  );
});

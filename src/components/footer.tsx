import { useI18n } from "@/hooks";
import { memo, useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Test() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
      />
    </div>
  );
}

export const Footer = memo(() => {
  const t = useI18n("footer");

  return (
    <footer className="bg-white">
      {/* start 表单 */}
      <div className="ebuy-container mb-[40px] pt-[60px]">
        <div className="mb-[10px] text-[50px] font-bold leading-[75px] text-[#333333]">
          Get in touch with us
        </div>
        <div className="mb-[56px] text-[28px] font-[500] leading-[44px]">
          if you have any questions and requests, please feel free to call 9774
          5658 or fill in the form below
        </div>
        <div className="space-y-[32px] px-[24px] text-[24px] font-[400] leading-[36px] text-[#333333]">
          <div className="flex">
            <div className="flex flex-1 flex-col space-y-[16px]">
              <span>First Name</span>
              <input
                style={{ border: "1px solid #DDDDDD" }}
                className="h-[56px] w-full max-w-[500px] rounded-[4px] px-2 py-4"
                type="text"
              />
            </div>
            <div className="flex flex-1 flex-col items-end">
              <div className="w-full max-w-[500px] space-y-[16px]">
                <span>Last Name</span>
                <input
                  style={{ border: "1px solid #DDDDDD" }}
                  className="h-[56px] w-full rounded-[4px] px-2 py-4"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span className="after:ml-[4px] after:text-[24px] after:font-[500] after:leading-[36px] after:text-[#ed3838] after:content-['*']">
              Telephone number
            </span>
            <div className="flex h-[56px] items-center">
              {/* <div className="flex h-full w-[118px] items-center justify-center bg-[#EFEFEF]">
                中 +86
              </div> */}
              <Test />
              <input
                style={{ border: "1px solid #DDDDDD" }}
                className="h-full w-full rounded-[4px]"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span>E-mail</span>
            <input
              style={{ border: "1px solid #DDDDDD" }}
              className="h-[56px] w-full rounded-[4px]"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-[16px]">
            <span>How cam we help you?</span>
            <textarea
              style={{ border: "1px solid #DDDDDD" }}
              className="h-[56px] w-full rounded-[4px] px-2 py-4"
            />
          </div>
        </div>
        <div className="mt-[48px] flex items-center justify-center">
          <button className="bg-[#ED3838] px-[78px] py-[19px] text-[24px] leading-[36px] text-white">
            SEND
          </button>
        </div>
      </div>
      {/* end 表单 */}
      {/* start 信息 */}
      <div className="bg-[#1d1f21]">
        <div className="ebuy-container flex justify-between pb-[34px] pt-[56px] text-[14px] leading-[20px] text-[#acacac] text-[400]">
          <ul className="space-y-[12px]">
            <li className="mb-[25px] text-[20px] leading-[28px] text-[600] text-white">
              餐饮食材供应
            </li>
            <li className="space-x-[28px]">
              <span>新鲜蔬菜</span>
              <span>新鲜水果</span>
            </li>
            <li className="space-x-[28px]">
              <span>营养面食</span>
              <span>干活调料</span>
            </li>
            <li className="space-x-[28px]">
              <span>肉类冻品</span>
              <span>酒水饮料</span>
            </li>
            <li>
              <span>ebuy商家端订货App（最快当日送货）</span>
            </li>
          </ul>
          <ul className="space-y-[12px]">
            <li className="mb-[25px] text-[20px] leading-[28px] text-[600] text-white">
              其他服务
            </li>
            <li>批发合作</li>
            <li>共享仓储</li>
            <li>定制化供应服务</li>
            <li>ebuymart线上生鲜超市（次日达）</li>
          </ul>
          <ul className="space-y-[12px]">
            <li className="text-[20px] leading-[28px] text-[600] text-white">
              联系我们
            </li>
            <li className="text-[24px] leading-[33px] text-[#ededed] text-[600]">
              9774-5658
            </li>
            <li>地址：32 Quallity Road,Singapore 618804</li>
            <li>联系邮箱：xxxxxx@xxxxx.COM</li>
            <li>服务时间：周一至周五 9:00 am——6:00 pm</li>
          </ul>
          <ul>
            <li className="mb-[25px] text-[20px] leading-[28px] text-[600] text-white">
              关注我们
            </li>
            <li className="mb-[8px] h-[89px] w-[89px] bg-white"></li>
            <li>微信公众号</li>
          </ul>
        </div>
        <div className="mt-[100px] flex items-center justify-center space-x-[120px] pb-[34px] text-[12px] leading-[17px] text-[#acacac] text-[400]">
          <div>川ICP备XXXXXXX号 | 版权所有</div>
          <div>总部地址：81AClemenceauAve,UESquare,Suite17.S239918</div>
        </div>
      </div>
      {/* end 信息 */}
    </footer>
  );
});

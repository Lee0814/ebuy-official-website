import { useI18n } from "@/hooks";
import intlTelInput from "intl-tel-input";
import { useEffect, useRef } from "react";

// import "intl-tel-input/build/css/intlTelInput.css";

useEffect(() => {
  const countryRef = useRef(null);
  const input = document.querySelector("#phone");
  // intlTelInput(countryRef, {
  //   utilsScript: "path/to/utils.js",
  // });
});

export const Footer = () => {
  const t = useI18n("en", "navbar");

  return (
    <footer className="relative">
      <div className="container    mx-auto  box-border bg-white px-6  py-16">
        <div className="text-[50px] font-bold">Get in touch with us</div>
        <div className="pb-14 pt-3 text-[28px] ">
          if you have any questions and requests, please feel free to call 9774
          5658 or fill in the form below
        </div>
        <div className="flex justify-between pb-4 text-2xl text-[#333333]">
          <div className="flex flex-col">
            <span className="pb-4">First Name</span>
            <input
              style={{ border: "1px solid #DDDDDD" }}
              className="box-border h-[56px] w-[500px] px-2 py-4  "
              placeholder="名"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="pb-4">Last Name</span>
            <input
              style={{ border: "1px solid #DDDDDD" }}
              className="box-border h-[56px] w-[500px] px-2 py-4  "
              placeholder="姓"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col py-4 text-2xl text-[#333333]">
          <span className="pb-4">Telephone number</span>
          <div className="flex h-[56px] items-center">
            <div className="h-full w-[118px] bg-[#EFEFEF]">国区</div>
            <input
              ref={"countryRef"}
              id="countryInput"
              style={{ border: "1px solid #DDDDDD" }}
              className="box-border h-full w-full flex-1 px-2 py-4  "
              placeholder="电话"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col py-4 text-2xl text-[#333333]">
          <span className="pb-4">How cam we help you</span>
          <textarea
            style={{ border: "1px solid #DDDDDD" }}
            className="box-border h-[112px] w-full px-2 py-4  "
          />
        </div>
        <div className="flex items-center justify-center pt-8">
          <button className="bg-[#ED3838] px-20 py-5 text-2xl text-white">
            SEND
          </button>
        </div>
      </div>

      <div className="box-border   bg-footer pt-[56px]">
        <div className="container mx-auto  flex  justify-between bg-footer   pt-14 text-[14px] text-footer-low">
          <ul>
            <li className="pb-6  text-[20px] text-white">餐饮食材供应</li>
            <li className=" pb-3 ">
              <span className="pr-4">新鲜蔬菜</span>
              <span>新鲜水果</span>
            </li>
            <li className=" pb-3 ">
              <span className="pr-4">营养面食</span>
              <span>干活调料</span>
            </li>
            <li className=" pb-3 ">
              <span className="pr-4">肉类冻品</span>
              <span>酒水饮料</span>
            </li>
            <li className=" pb-3 ">
              <span>ebuy商家端订货App（最快当日送货）</span>
            </li>
          </ul>
          <ul>
            <li className="pb-6  text-[20px] text-white">其他服务</li>
            <li className=" pb-3 ">批发合作</li>
            <li className=" pb-3 ">共享仓储</li>
            <li className=" pb-3 ">定制化供应服务</li>
            <li className=" pb-3 ">ebuymart线上生鲜超市（次日达）</li>
          </ul>
          <ul>
            <li className="pb-4  text-[20px] text-white">联系我们</li>
            <li className=" pb-3 text-[20px] text-white">9774-5658</li>
            <li className=" pb-3 ">地址：32 Quallity Road,Singapore 618804</li>
            <li className=" pb-3 ">联系邮箱：xxxxxx@xxxxx.COM</li>
            <li className=" pb-3 ">服务时间：周一至周五 9:00 am——6:00 pm</li>
          </ul>
          <ul>
            <li className="pb-6 text-2xl text-white">关注我们</li>
            <li className="mb-[9px] h-[91px] w-[91px]  bg-white"></li>
            <li>微信公众号</li>
          </ul>
        </div>
        <div className="flex items-center justify-center pb-9 pt-24 text-footer-low">
          <div className="px-16">川ICP备XXXXXXX号 | 版权所有</div>
          <div className="px-16">
            总部地址：81AClemenceauAve,UESquare,Suite17.S239918
          </div>
        </div>
      </div>
    </footer>
  );
};

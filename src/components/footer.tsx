import officialAccount from "@/assets/images/official-account.jpg";
import { useI18n } from "@/hooks";
import { useI18nContext } from "@/states";
import axios from "axios";
import classNames from "classnames";
import Image from "next/image";
import { memo, useState } from "react";
import {
  CountryIso2,
  CountrySelector,
  defaultCountries,
} from "react-international-phone";
import "react-international-phone/style.css";
import header from "./header.module.scss";

export const Footer = memo(() => {
  const lang = useI18nContext().lang;
  const t = useI18n("footer");

  const [isShow, setIsShow] = useState(false);
  const [country, setCountry] = useState<CountryIso2>("cn");
  const [countryCode, setCountryCode] = useState<string>("+86");
  const [attention, setAttention] = useState("");
  //选择国家的回调
  const selectedCountry = (country: any) => {
    const { iso2 } = country;
    let number = defaultCountries.find(
      ([name, b, short, code]) => short === iso2
    )![3];
    setCountry(iso2);

    setCountryCode(`+${number}`);
  };
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    help: "",
  });

  const submitForm = () => {
    if (formValue.phone.replace(" ", "").length == 0) {
      lang === "en"
        ? setAttention("Telephone number cannot be empty")
        : setAttention("电话号码不能为空");
    } else {
      axios
        .post("http://192.168.6.38/core/api/manage/contactUs", {
          fistName: formValue.firstName,
          lastName: formValue.lastName,
          phone: `${countryCode} ${formValue.phone}`,
          email: formValue.email,
          lang: lang,
          message: formValue.help,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            setFormValue({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              help: "",
            });
            lang === "en"
              ? setAttention("Send successfully,we'll contact you soon!")
              : setAttention("发送成功，客服将尽快与您联系");
          } else {
            setAttention(res.data.msg);
          }
        })
        .catch(() => {
          setAttention("发送失败，请检查网络");
        });
    }
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  return (
    <footer className={classNames("bg-white")}>
      {/* start 表单 */}
      <div className={classNames("ebuy-container mb-[40px] pt-[60px]")}>
        <div
          className={classNames(
            "col-start-1 col-end-25 mb-[10px] text-[50px] font-bold leading-[75px] text-[#333333]"
          )}
        >
          {t("contact")}
        </div>
        <div
          className={classNames(
            "col-start-1 col-end-25 mb-[56px] text-[28px] font-[500] leading-[44px]"
          )}
        >
          {t("detail")}
        </div>
        <div
          className={classNames(
            "col-start-1 col-end-25 space-y-[32px]  text-[24px] font-[400] leading-[36px] text-[#333333]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col md:flex-row md:justify-between"
            )}
          >
            {/* 姓 */}
            <div
              className={classNames("flex flex-col space-y-[16px] md:w-[45%]")}
            >
              <span>{t("first-name")}</span>
              <input
                className={classNames(
                  "h-[56px] w-full max-w-[650px] rounded-[4px] px-8 py-4",
                  header.defaultInput
                )}
                value={formValue.firstName}
                onChange={(e) =>
                  setFormValue({ ...formValue, firstName: e.target.value })
                }
                type="text"
              />
            </div>
            <div
              className={classNames("flex flex-col md:w-[45%] md:items-end")}
            >
              <div
                className={classNames("w-full max-w-[650px] space-y-[16px]")}
              >
                <span>{t("last-name")}</span>
                <input
                  className={classNames(
                    "h-[56px] w-full rounded-[4px] px-8 py-4",
                    header.defaultInput
                  )}
                  value={formValue.lastName}
                  onChange={(e) =>
                    setFormValue({ ...formValue, lastName: e.target.value })
                  }
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={classNames("flex flex-col space-y-[16px]")}>
            <span
              className={classNames(
                "after:ml-[4px] after:text-[24px] after:font-[500] after:leading-[36px] after:text-[#ed3838] after:content-['*']"
              )}
            >
              {t("telephone")}
            </span>
            <div className={classNames("relative flex")}>
              <CountrySelector
                selectedCountry={country}
                onSelect={selectedCountry}
                className={classNames("hidden md:block")}
              />
              <span
                className={classNames(
                  "absolute left-[110px] top-[10px] hidden md:block"
                )}
              >
                {countryCode}
              </span>
              <input
                className={classNames(
                  "h-[56px] w-full rounded-[4px] pl-8 pr-8 md:pl-[96px]",
                  // {
                  //   [header.errorForm]: isError,
                  // },
                  header.defaultInput
                )}
                value={formValue.phone}
                onChange={(e) =>
                  setFormValue({ ...formValue, phone: e.target.value })
                }
                type="text"
              />
            </div>
          </div>
          <div className={classNames("flex flex-col space-y-[16px]")}>
            <span>{t("email")}</span>
            <input
              className={classNames(
                "h-[56px] w-full rounded-[4px] px-8",
                header.defaultInput
              )}
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              type="text"
            />
          </div>
          <div className={classNames("flex flex-col space-y-[16px]")}>
            <span>{t("help")}</span>
            <textarea
              className={classNames(
                "h-[112px] w-full rounded-[4px] px-8 py-4",
                header.defaultInput
              )}
              value={formValue.help}
              onChange={(e) =>
                setFormValue({ ...formValue, help: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className={classNames(
            "relative col-start-1 col-end-25 mt-[48px] flex items-center justify-center"
          )}
        >
          <button
            onClick={submitForm}
            className={classNames(
              " bg-[#ED3838] px-[78px] py-[19px] text-[24px] leading-[36px] text-white hover:bg-[#b92b2b]"
              // {
              //   ["bg-[#585858]"]: !formValue.phone.length,
              //   ["bg-[#ED3838]"]: formValue.phone.length,
              // }
            )}
          >
            {t("submit")}
          </button>
          {isShow && (
            <div
              className={classNames(
                "absolute bottom-6 left-[59%] text-[24px]  text-red-700",
                {}
              )}
            >
              {attention}
            </div>
          )}
        </div>
      </div>
      {/* end 表单 */}
      {/* start 信息 */}
      <div className={classNames("bg-[#1d1f21]")}>
        <div
          className={classNames(
            "ebuy-container !flex flex-col justify-between pb-[34px] pt-[72px] text-[28px]  leading-[20px] text-[#acacac] text-[400] md:flex-row md:text-[14px]"
          )}
        >
          {/* 食材供应 */}
          <div className={classNames(`col-start-1 col-end-6`)}>
            {/* 标题 */}
            <div
              className={classNames(
                "mb-8 text-[32px] leading-[100%] text-[600] text-white md:mb-[25px] md:text-[20px] md:leading-[28px]"
              )}
            >
              餐饮食材供应
            </div>

            <ul
              className={classNames(
                "flex max-w-[568px] justify-between leading-[100%] md:flex-col md:space-y-[12px] md:leading-[20px]"
              )}
            >
              <li
                className={classNames(
                  "flex flex-col md:block md:space-x-[28px]"
                )}
              >
                <span>新鲜蔬菜</span>
                <span className={classNames("my-[24px] md:my-0")}>
                  新鲜水果
                </span>
              </li>
              <li
                className={classNames(
                  "flex flex-col md:block md:space-x-[28px]"
                )}
              >
                <span>营养面食</span>
                <span className={classNames("my-[24px] md:my-0")}>
                  干活调料
                </span>
              </li>
              <li
                className={classNames(
                  "flex flex-col md:block md:space-x-[28px]"
                )}
              >
                <span>肉类冻品</span>
                <span className={classNames("my-[24px] md:my-0")}>
                  酒水饮料
                </span>
              </li>
            </ul>
            <li className={classNames("mt-[10px] list-none")}>
              <span className={classNames("leading-[100%]")}>
                ebuy商家端订货App（最快当日送货）
              </span>
            </li>
          </div>
          {/* 第二个 */}
          <div
            className={classNames("col-start-8 col-end-13 mt-[72px] md:mt-0")}
          >
            <div
              className={classNames(
                "mb-5 text-[32px] leading-[100%] text-[600] text-white md:mb-[25px] md:text-[20px] md:leading-[28px]"
              )}
            >
              其他服务
            </div>
            <ul
              className={classNames(
                "flex flex-wrap justify-between leading-[100%] md:block md:space-y-[12px] md:leading-[20px]"
              )}
            >
              <li className={classNames("py-3 md:py-0")}>批发合作</li>
              <li className={classNames("list-none py-3 md:py-0")}>共享仓储</li>
              <li className={classNames("list-none py-3 md:py-0")}>
                定制化供应服务
              </li>
              <li className={classNames("list-none py-3 md:py-0")}>
                ebuymart线上生鲜超市（次日达）
              </li>
            </ul>
          </div>
          {/* 第三个 */}
          <div
            className={classNames(
              "col-start-15 col-end-21 mt-[50px] leading-[100%] md:mt-0"
            )}
          >
            <ul className={classNames("space-y-[12px]")}>
              <li
                className={classNames(
                  "text-[32px] text-[600] text-white md:text-[20px] md:leading-[28px]"
                )}
              >
                联系我们
              </li>
              <li
                className={classNames(
                  "pt-8 text-[44px] leading-[100%] text-[#ededed] text-[600] md:pt-0  md:text-[24px] md:leading-[33px]"
                )}
              >
                9774-5658
              </li>
              <li
                className={classNames(
                  "pt-6 leading-[100%] md:pt-0 md:leading-[20px]"
                )}
              >
                地址：32 Quallity Road,Singapore 618804
              </li>
              <li
                className={classNames(
                  "pt-6 leading-[100%] md:pt-0 md:leading-[20px]"
                )}
              >
                联系邮箱：ebuysdnbhd@gmail.com
              </li>
              <li
                className={classNames(
                  "pt-6 leading-[100%] md:pt-0 md:leading-[20px]"
                )}
              >
                服务时间：周一至周五 9:00 am——6:00 pm
              </li>
            </ul>
          </div>
          {/* 第四个 */}
          <div className={classNames("col-start-22  mt-[72px] md:mt-0")}>
            <ul>
              <li
                className={classNames(
                  "mb-[25px] text-[32px] text-[600] text-white md:text-[20px] md:leading-[28px]"
                )}
              >
                关注我们
              </li>
              <li
                className={classNames(
                  "mb-[8px] h-[260px] w-[260px] bg-white md:h-[89px] md:w-[89px]"
                )}
              >
                <Image
                  className={classNames("h-full w-full")}
                  src={officialAccount}
                  alt="official account"
                ></Image>
              </li>
              <li
                className={classNames(
                  "pt-[12px] leading-[100%] md:pt-0 md:leading-[20px]"
                )}
              >
                Ebuy官方微信公众号
              </li>
            </ul>
          </div>
        </div>
        <div
          className={classNames(
            "mt-[86px] flex flex-col justify-center px-8 pb-[34px] text-[24px] text-[#acacac] text-[400] md:mt-[100px] md:flex-row md:items-center md:space-x-[120px] md:text-[12px] md:leading-[17px]"
          )}
        >
          <div>川ICP备XXXXXXX号 | 版权所有</div>
          <div
            className={classNames(
              "pb-[24px] pt-[12px] md:pb-0 md:pt-0 md:leading-10"
            )}
          >
            总部地址：81AClemenceauAve,UESquare,Suite17.S239918
          </div>
        </div>
      </div>
      {/* end 信息 */}
    </footer>
  );
});

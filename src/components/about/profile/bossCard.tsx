import { useI18n } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import boss from "./images/boss.png";
export const BossCard = () => {
  const t = useI18n("about");
  return (
    <div
      className={classNames(
        "col-start-1  col-end-25 flex flex-col   md:flex-row md:items-center md:justify-between md:pb-[72px]",
        {}
      )}
    >
      {/* 左侧图片 */}
      <div
        className={classNames(
          " flex w-full justify-end md:block md:h-[289px] md:w-[29%] md:min-w-[342px] md:px-[50px]"
        )}
      >
        <Image
          className={classNames(
            "h-[289px] w-[290px] px-[24px] md:w-[242px] md:px-[unset]"
          )}
          src={boss}
          alt=""
        />
      </div>
      {/* 右侧文字 */}
      <div
        className={classNames(
          "pt[27px] min-h-[289px] w-full flex-1 translate-y-[-72px] flex-col justify-between pl-[20px]  md:flex md:w-[71%] md:translate-y-[unset] md:py-[27px]"
        )}
      >
        <div className={classNames("  text-[42px] font-[600] ")}>
          {t("boss-name")}
        </div>
        <div
          className={classNames(
            "pt-[24px] text-[26px] leading-[44px] text-[#333] md:pt-[8px] md:pt-[unset] md:text-[20px] md:leading-[31px]"
          )}
        >
          {t("boss-profile-1")}
        </div>
        <div
          className={classNames(
            "pt-[24px] text-[26px]  leading-[44px] text-[#333]  md:text-[20px] md:leading-[31px]"
          )}
        >
          {t("boss-profile-2")}
        </div>
      </div>
    </div>
  );
};

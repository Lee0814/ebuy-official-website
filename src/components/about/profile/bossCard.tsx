import { useI18n } from "@/hooks";
import classNames from "classnames";

export const BossCard = () => {
  const t = useI18n("about");
  return (
    <div
      className={classNames("flex items-center justify-between pb-[72px]", {})}
    >
      {/* 左侧图片 */}
      <div className={classNames("h-[289px] w-[29%] min-w-[342px] px-[50px]")}>
        <img
          className={classNames("h-[289px]  w-[242px]")}
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4ac218e13e6c42aebed6cbcfc1507488_mergeImage.png"
          alt=""
        />
      </div>
      {/* 右侧文字 */}
      <div
        className={classNames(
          "flex min-h-[289px] w-[71%] flex-1 flex-col justify-between py-[27px] pl-[20px]"
        )}
      >
        <div className={classNames(" text-[42px] font-[600]")}>
          {t("boss-name")}
        </div>
        <div
          className={classNames(
            "pt-[8px] text-[20px] leading-[31px] text-[#333]"
          )}
        >
          {t("boss-profile-1")}
        </div>
        <div className={classNames("text-[20px]  leading-[31px] text-[#333]")}>
          {t("boss-profile-2")}
        </div>
      </div>
    </div>
  );
};

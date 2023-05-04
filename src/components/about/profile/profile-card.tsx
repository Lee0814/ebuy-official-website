import { useI18n } from "@/hooks";
import classNames from "classnames";

export const ProfileCard = (props: { direction?: boolean }) => {
  const { direction } = props;
  const t = useI18n("about");
  return (
    <div
      className={classNames("flex justify-between py-[72px]", {
        ["flex-row-reverse"]: direction,
      })}
    >
      <div className={classNames("flex w-[30%] justify-center")}>
        <img
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4ac218e13e6c42aebed6cbcfc1507488_mergeImage.png"
          alt=""
        />
      </div>
      <div
        className={classNames(
          " flex w-[68%] flex-col justify-between py-[27px]"
        )}
      >
        <div className={classNames(" text-[42px] font-[700]")}>
          {t("boss-name")}
        </div>
        <div
          className={classNames(
            "pt-[8px] text-[20px] font-[600] leading-[31px] text-[#333]"
          )}
        >
          {t("boss-profile-1")}
        </div>
        <div
          className={classNames(
            "text-[20px] font-[600] leading-[31px] text-[#333]"
          )}
        >
          {t("boss-profile-2")}
        </div>
      </div>
    </div>
  );
};

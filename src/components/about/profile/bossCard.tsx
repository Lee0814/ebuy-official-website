import { useI18n } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import boss from "./images/boss.png";
import bossStyle from "./boss.module.scss"

export const BossCard = () => {
  const t = useI18n("about");
  return (
    <div className={classNames(bossStyle.boss_container)}>
      {/* 左侧图片 */}
      <div className={classNames(bossStyle.boss_img_container)}>
        <Image className={classNames(bossStyle.boss_img)}
          src={boss}
          alt=""
        />
      </div>
      {/* 右侧文字 */}
      <div className={classNames(bossStyle.boss_content)}>
        <div className={classNames(bossStyle.boss_name)}>
          {t("boss-name")}
        </div>
        <div className={classNames(bossStyle.boss_profile1)}>
          {t("boss-profile-1")}
        </div>
        <div className={classNames(bossStyle.boss_profile2)}>
          {t("boss-profile-2")}
        </div>
      </div>
    </div>
  );
};

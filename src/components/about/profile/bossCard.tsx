import { useI18n ,windowSizeRange,useResponsive} from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import boss from "./images/boss.png";
import bossStyle from "./boss.module.scss"
import { useI18nContext } from "@/states";

export const BossCard = () => {
  const t = useI18n("about");  
  const { md } = useResponsive();
  const lang = useI18nContext().lang;
  const windowWidth=windowSizeRange()
  const windowSize=windowWidth>768

  const langChangeView=()=>{
    if(windowSize){
      if(!md){
        if(lang==='en'){
          return (
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
          )
        }else if(lang==='zh-CN'){
          return (
            <div className={classNames(bossStyle.boss_content_zh)}>
              <div className={classNames(bossStyle.boss_name)}>
                {t("boss-name")}
              </div>
              <div className={classNames(bossStyle.boss_profile_zh)}>
                <p>{t("boss-profile-1")}</p>
                <p>{t("boss-profile-2")}</p>
              </div>
            </div>
          )
        }
      }
    }else{
      return(
        <div className={classNames(bossStyle.boss_content)}>
            <div className={classNames(bossStyle.boss_name)}>
              {t("boss-name")}
            </div>
            <div className={classNames(bossStyle.boss_profile1)}>
              {t("boss-profile-1")}
            </div>
            <div className={classNames(bossStyle.boss_profile2,{
            })}>
              {t("boss-profile-2")}
            </div>
        </div>
      )
    }
  }

  return (
    <div className={classNames(bossStyle.boss_container)}>
      {/* 左侧图片 */}
      <div className={classNames(bossStyle.boss_img_container)}>
        <Image className={classNames(bossStyle.boss_img)}
          src={boss}
          alt=""
        />
      </div>
      {langChangeView()}

      {/* 右侧文字 --英文 */}
      {/* <div className={classNames(bossStyle.boss_content,{
        ["md:!hidden"]:lang==='zh-CN'&&windowSize
        // windowSize?["md:!hidden"]:lang==='zh-CN'
      })}>
        <div className={classNames(bossStyle.boss_name)}>
          {t("boss-name")}
        </div>
        <div className={classNames(bossStyle.boss_profile1)}>
          {t("boss-profile-1")}
        </div>
        <div className={classNames(bossStyle.boss_profile2,{
          ["md:!pt-0"]:lang==='zh-CN'
        })}>
          {t("boss-profile-2")}
        </div>
      </div> */}

        {/* 右侧文字 --中文*/}
      {/* <div className={classNames(bossStyle.boss_content_zh,{
        ["md:!hidden"]:lang==='en'&&windowSize
      })}>
        <div className={classNames(bossStyle.boss_name)}>
          {t("boss-name")}
        </div>
        <div className={classNames(bossStyle.boss_profile_zh)}>
          <p>{t("boss-profile-1")}</p>
          <p>{t("boss-profile-2")}</p>
        </div>
      </div> */}
    </div>  
  );
};

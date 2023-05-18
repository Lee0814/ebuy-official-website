import classNames from "classnames";
import styles from "./styles.module.scss"
import phone_m from './images/phone1-m.png'
import phone from './images/phone1.png'
import Image from "next/image";
import app_1 from "./images/app-1-m.png"
import ecode from "./images/ecode-m.png"
import { useI18n, useInView, useWindowSize ,useResponsive} from "@/hooks";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";


// console.log(window);

export const Banner = () => {
  const t=useI18n('download')
 
  // 切换手机大图
  const { md } = useResponsive();

  return (
    <section className={classNames('w-full h-[600px] overflow-hidden',styles.banner)}>
      <div className={
        classNames('ebuy-container !flex flex-col pb-[25px] md:flex md:flex-row-reverse justify-between  md:pb-[48px] h-[100%]')
        }>
        {/* 手机大图 */}
        <div className={classNames('pt-[88px] md:min-w-[374px] md:flex md:items-center')}>
          <Image src={!md ? phone : phone_m} alt="" className={classNames(styles.phone,"block mx-auto")}></Image>
        </div>

        {/* 文字内容区域 */}
        <div className={classNames(' md:flex md:flex-col md:justify-end md:pb-[48px] md:h-full md:mt-[118px]')}>
          <div className={classNames('leading-[69px] md:w-[100%]',styles.title)}>{t('title')}</div>
          <ul className={classNames(styles.sub_ul)}>
            <li>{t('subtitle1')} </li>
            <li>{t('subtitle2')}  </li>
            <li>{t('subtitle3')} </li>
          </ul>

          {/* 图片 下载方式 */}
          <div className={classNames('flex items-end pb-[24px] md:pb-[12px]')}>
            <Image src={app_1} alt="" className={classNames('w-[214px] h-[65px]')}></Image>
            <Image src={ecode} alt=""  className={classNames('w-[120px] ml-[54px]')}></Image>
          </div>
          
          {/* 底部文字 */}
          <div  className={classNames('text-[24px] text-white leading-[29px] mb-[25px] md:pb-[48px]')}>{t('footertitle')} </div>
        </div>
      </div>
    </section>
  )
};


 

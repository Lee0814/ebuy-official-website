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
    <section className={classNames('w-full',styles.banner)}>
      <div className={
        classNames('ebuy-container !flex flex-col pb-[25px] md:flex-row-reverse justify-between h-full')
        }>
        {/* 手机大图 */}
        <div className={classNames('pt-[88px] md:flex-1 md:flex md:justify-center')}>
          <Image src={!md ? phone : phone_m} alt="" className={classNames('w-[431px]  md:translate-y-[-10%] mx-auto md:w-[374px] ' )}></Image>
        </div>

        {/* 文字内容区域 */}
        <div className={classNames('md:w-[58%] md:flex md:flex-col md:justify-end md:mb-[48px]')}>
          <div className={classNames('pb-[32px] font-[700] text-[#fff] text-[50px] leading-[69px] md:text-[60px] ')}>{t('title')}</div>
          <ul className={classNames('text-[#fff] text-[26px] leading-[36px] pb-[56px]')}>
            <li>{t('subtitle1')} </li>
            <li>{t('subtitle2')}  </li>
            <li>{t('subtitle3')} </li>
          </ul>

          {/* 图片 下载方式 */}
          <div className={classNames('flex items-end pb-[24px]')}>
            <Image src={app_1} alt="" className={classNames('w-[214px] h-[65px]')}></Image>
            <Image src={ecode} alt=""  className={classNames('w-[120px] ml-[54px]')}></Image>
          </div>
          
          {/* 底部文字 */}
          <div  className={classNames('text-[24px] text-white leading-[29px] ')}>{t('footertitle')} </div>
        </div>
      </div>;
    </section>
  )
};


 

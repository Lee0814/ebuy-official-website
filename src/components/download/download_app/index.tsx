import Image from "next/image";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import phone1_m from "./images/phone1-m.png";
import phone2_m from "./images/phone2-m.png";
import ecode from "./images/ecode.jpg"
import store from "./images/store.png"
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useI18n, useInView, useWindowSize ,useResponsive} from "@/hooks";
import { useState,useEffect } from "react";

export const DownloadApp=()=>{
    let nowWindowSize=0
    const {md}=useResponsive()
    const t=useI18n('download')
    // start监听浏览器窗口宽度变化
    function MyComponent(){
        const [windowSize, setWindowSize] = useState({
            width:0
        });
          useEffect(() => {
            // 定义一个回调函数，用于更新窗口大小状态
            function handleResize() {
              setWindowSize({
                width: window.innerWidth,
              });
            }
            // 添加事件监听器
            window.addEventListener("resize", handleResize);
        
            // 在组件销毁时，移除事件监听器
            return () => window.removeEventListener("resize", handleResize);
          }, []); // 在组件挂载和卸载时，添加和移除事件监听器
         
        nowWindowSize=windowSize.width
    }
    MyComponent()
    // end监听浏览器窗口宽度变化

    // 判断窗口大小渲染相应图片内容
    const nowPhoto=(pic1:any,pic2:any)=>{
        if(!md){
            if(nowWindowSize<=1070){
                return pic1
            }else{
                return pic2
            }
        }else{
            return pic1
        }
    }

    return(
        <section>
             {/* 上 */}
             <div className={classNames('ebuy-container',styles.content1)}>
                <Image src={nowPhoto(phone1_m,phone1)} alt="" className={classNames(' w-[515px]  block mx-auto md:mx-0')}></Image>
                <div className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <div className={classNames(styles.ecode_top)}>
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div>
             </div>

            {/* 下 */}
            <div className={classNames('ebuy-container !flex-col-reverse md:!flex-row',styles.content2)}>
                <div  className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div  className={classNames(styles.ecode_content)}>
                        <div  className={classNames(styles.ecode_top)}>
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div  className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div> 
                <Image src={nowPhoto(phone2_m,phone2)} alt="" className={classNames(' w-[532px] block mx-auto md:mx-0')}></Image>
           
            </div>
        </section>
    )
}
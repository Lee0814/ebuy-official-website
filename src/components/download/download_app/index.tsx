import Image from "next/image";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import phone1_m from "./images/phone1-m.png";
import phone2_m from "./images/phone2-m.png";
import ecode from "./images/ecode.jpg"
import store from "./images/store.png"
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useI18n, useInView, windowSizeRange, useResponsive } from "@/hooks";
import { useState, useEffect, useRef } from "react";

export const DownloadApp = () => {
    const { md } = useResponsive()
    const t = useI18n('download')
    const nowWindowSize = windowSizeRange()

    const codeElement1 = useRef(null);
    const codeElement2 = useRef(null);
    //点击跳转苹果商城下载
    useEffect(() => {
        const downloadApp = (element: any) => {
            const handleClick = () => {
                window.location.href ="https://apps.apple.com/cn/app/ebuy%E6%98%93%E8%B4%AD%E7%94%9F%E9%B2%9C/id1072583697?l=en";
            };
            element.addEventListener("click", handleClick);
            return () => element.removeEventListener("click", handleClick);
        };
        if (md) {
            const cleanup1 = downloadApp(codeElement1.current);
            const cleanup2 = downloadApp(codeElement2.current);
            return () => {
                cleanup1();
                cleanup2();
            };
        }
    }, [md]);

    // 判断窗口大小渲染相应图片内容
    const nowPhoto = (pic1: any, pic2: any) => {
        if (!md) {
            if (nowWindowSize <= 1070) {
                return pic1
            } else {
                return pic2
            }
        } else {
            return pic1
        }
    }

    return (
        <section>
            {/* 上 */}
            <div className={classNames('ebuy-container', styles.content1)}>
                <Image src={nowPhoto(phone1_m, phone1)} alt="" className={classNames(' w-[515px]  block mx-auto md:mx-0')}></Image>
                <div className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <div ref={codeElement1} className={classNames(styles.ecode_top, {
                        })}>
                            {/* {md?download():''} */}
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div>
            </div>

            {/* 下 */}
            <div className={classNames('ebuy-container !flex-col-reverse md:!flex-row', styles.content2)}>
                <div className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <div ref={codeElement2} className={classNames(styles.ecode_top)}>
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div>
                <Image src={nowPhoto(phone2_m, phone2)} alt="" className={classNames(' w-[532px] block mx-auto md:mx-0')}></Image>

            </div>
        </section>
    )
}
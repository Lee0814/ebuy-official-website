import Image from "next/image";
import phone1 from "./images/phone1.png";
import phone2 from "./images/phone2.png";
import phone1_m from "./images/phone1-m.png";
import phone2_m from "./images/phone2-m.png";
import ecode from "./images/ecode.png"
import store from "./images/apple_store.png"
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
  const [downloadRef1, downloadInView1] = useInView({ type: "context" });
  const [downloadRef2, downloadInView2] = useInView({ type: "context" });
  const [phoneRef1, phoneInView1] = useInView({ type: "context" });
  const [phoneRef2, phoneInView2] = useInView({ type: "context" });
  const [textRef1, textInView1] = useInView({ type: "context" });
  const [textRef2, textInView2] = useInView({ type: "context" });

    return (
        <section>
            {/* 上 */}
            <div ref={downloadRef1} className={classNames('ebuy-container', styles.content1,nowWindowSize<1071?{topMove:downloadInView1}:{},{
                ["opacity-0"]:nowWindowSize<1071
            })}>
                <Image ref={phoneRef1} src={nowPhoto(phone1_m, phone1)} alt="" className={classNames(' w-[515px]  block mx-auto md:mx-0 ',nowWindowSize>1070?{rightMove:phoneInView1}:{},{
                    ["opacity-0"]:nowWindowSize>1070
                })}></Image>
                <div ref={textRef1} className={classNames(styles.download,nowWindowSize>1070?{leftMove:textInView1}:{},{
                    ["opacity-0"]:nowWindowSize>1070
                })}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <Image ref={codeElement1} src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div>
            </div>

            {/* 下 */}
            <div ref={downloadRef2}  className={classNames('ebuy-container !flex-col-reverse md:!flex-row', styles.content2,nowWindowSize<1071?{topMove:downloadInView2}:{},{
                 ["opacity-0"]:nowWindowSize<1071
            })}>
                <div ref={textRef2} className={classNames(styles.download,nowWindowSize>1070?{rightMove:textInView2}:{},{
                     ["opacity-0"]:nowWindowSize>1070
                })}>
                    <div>
                        <div className={classNames(styles.download_title)}>{t('downloadApp')}</div>
                        <div className={classNames(styles.download_text)}>{t('downloadTxet')}</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <Image ref={codeElement2} src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                        <Image src={ecode} alt="" className={classNames(styles.ecode)}></Image>
                    </div>
                </div>
                <Image ref={phoneRef2} src={nowPhoto(phone2_m, phone2)} alt="" className={classNames(' w-[532px] block mx-auto md:mx-0',nowWindowSize>1070?{leftMove:phoneInView2}:{},{
                    ["opacity-0"]:nowWindowSize>1070
                })}></Image>

            </div>
        </section>
    )
}
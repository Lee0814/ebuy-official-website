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

export const DownloadApp=()=>{
    const {md}=useResponsive()
    return(
        <section>
             {/* 上 */}
             <div className={classNames('ebuy-container mt-[100px] mb-[124px] w-full',styles.content)}>
                <Image src={!md?phone1:phone1_m} alt="" className={classNames(' w-[515px]  block mx-auto')}></Image>
                <div className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>Download mobile App</div>
                        <div className={classNames(styles.download_text)}>Download the Ebuy app for ios and Android, which will help you order food faster and smarter</div>
                    </div>
                    {/* 二维码 */}
                    <div className={classNames(styles.ecode_content)}>
                        <div className={classNames(styles.ecode_top)}>
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames('w-[120px] mt-[48px]')}></Image>
                    </div>
                </div>
             </div>

            {/* 下 */}
            <div className={classNames('ebuy-container !flex-col-reverse md:!flex-row',styles.content)}>
                <div  className={classNames(styles.download)}>
                    <div>
                        <div className={classNames(styles.download_title)}>Download mobile App</div>
                        <div className={classNames(styles.download_text)}>Download the Ebuy app for ios and Android, which will help you order food faster and smarter</div>
                    </div>
                    {/* 二维码 */}
                    <div  className={classNames(styles.ecode_content)}>
                        <div  className={classNames(styles.ecode_top)}>
                            <Image src={store} alt="" className={classNames(styles.ecode_store)}></Image>
                            <div  className={classNames(styles.ecode_text)}>App Store</div>
                        </div>
                        <Image src={ecode} alt="" className={classNames('w-[120px]  mt-[48px]')}></Image>
                    </div>
                </div> 
                <Image src={!md?phone2:phone2_m} alt="" className={classNames(' w-[532px]  block mx-auto')}></Image>
           
            </div>
        </section>
    )
}
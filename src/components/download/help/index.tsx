import Image from "next/image"
import pm1 from "./images/1.png"
import pm2 from "./images/2.png"
import pm3 from "./images/3.png"
import classNames from "classnames"
import styles from "./styles.module.scss"


export const Help=()=>{
    return(
        <section className={classNames('bg-[#F5F5F5]')}>
           <div className={classNames('ebuy-container w-full',styles.help_container)}>
             {/* 上 */}
             <div className={classNames(styles.top)}>
                <div className={classNames(styles.help_title)}>How can we help you</div>
                <div className={classNames(styles.top_content)}>
                     There are fresh ingredients from all over the world, as well as processed cooked food, we can always provide you with the daily needs of the restaurant, and we also have a customized delivery service, to make it convenient for you to order.
                </div>
            </div>

            {/* 下 */}
            <div>
                <ul className={classNames(styles.help_ul)}>
                    <li className={classNames(styles.help_li)}>
                        <div className={classNames(styles.ul_content)}>
                                <Image src={pm1} alt="" className={classNames('md:w-[40px]',styles.ul_img)}></Image>
                                <div className={classNames(styles.li_title)}>intelligent search</div>
                        </div>
                        <div className={classNames(styles.li_content)}>Multiple smart search modes make it easier to find what you want</div>
                    </li>
                    <li className={classNames(styles.help_li)}>
                        <div className={classNames(styles.ul_content)}>
                            <Image src={pm2} alt="" className={classNames('md:w-[45px]',styles.ul_img)}></Image>
                            <div className={classNames(styles.li_title)}>Exclusive collection</div>
                        </div>
                        <div className={classNames(styles.li_content)}>We will keep your collection record for a long time and keep you informed of the inventory status</div>
                    </li>
                    <li className={classNames(styles.help_li)}>
                        <div className={classNames(styles.ul_content)}>
                            <Image src={pm3} alt="" className={classNames('md:w-[45px]',styles.ul_img)}></Image>
                            <div className={classNames(styles.li_title)}>Customer service</div>
                        </div>
                        <div className={classNames('!mb-0',styles.li_content)}>Our customer service will be there whenever you need it and come up with a satisfactory solution for you</div>
                    </li>
                </ul>
            </div>

           </div>
        </section>
    )
}
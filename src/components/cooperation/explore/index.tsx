import classNames from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";


export const Expore = () => {
  return (
    <div className={classNames(styles.banner,'overflow-hidden')}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.title)}>
          Cant't find service
        </div>
        <div className={classNames(styles.text)}>
          Let's explore more possible ways of cooperation
        </div>
        <Link href="#message" className={classNames(styles.btn)}>
          <span className={classNames(styles.btn_text)}
          >
            Message Us
          </span>
        </Link>
      </div>
    </div>
  );
};

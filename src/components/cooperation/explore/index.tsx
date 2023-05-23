import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";

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
        <div className={classNames(styles.btn)}>
          <span className={classNames(styles.btn_text)}
          >
            Message Us
          </span>
        </div>
      </div>
    </div>
  );
};

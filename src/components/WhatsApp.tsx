import callWhatsapp from "@/assets/images/whatsapp.png";
import { useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import { memo, useEffect, useRef} from "react";
import "react-international-phone/style.css";
import { default as styles } from "./header.module.scss";

export const WhatsApp = memo(() => {
  const { md } = useResponsive();

  //点击联系WhatsApp客服
  const toCall = useRef(null)
  useEffect(() => {
    const toCallWhatsapp = (element: any) => {
      const handleClick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=60126758730";
      };
      element.addEventListener("click", handleClick);
      return () => element.removeEventListener("click", handleClick);
    };
    const cleanup = toCallWhatsapp(toCall.current);
    return () => {
      cleanup();
    };
  }, [md]);

  return (
    <div >
      <Image ref={toCall}
        className={classNames(styles.whatsapp)}
        src={callWhatsapp}
        alt="Call WhatsApp"
      ></Image>
    </div>
  );
});

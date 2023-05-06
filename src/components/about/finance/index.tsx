import { useI18n } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import chart from "./images/chart.png";
export const Finance = () => {
  const t = useI18n("about");
  return (
    <section className={classNames("ebuy-container py-[72px] text-[#333]")}>
      <div
        className={classNames(
          "col-start-1 col-end-25 text-[42px] font-[700] leading-[51px]"
        )}
      >
        {t("finance-title")}
      </div>
      <div
        className={classNames(
          "col-start-1 col-end-25 pt-[32px] text-[20px] leading-[31px]"
        )}
      >
        {t("finance-1")}
      </div>
      <div
        className={classNames(
          "col-start-1 col-end-25 pb-[56px] pt-[30px] text-[20px] leading-[32px]"
        )}
      >
        {t("finance-2")}
      </div>
      <div className={classNames("col-start-1 col-end-25 ")}>
        <Image src={chart} alt=""></Image>
      </div>
    </section>
  );
};

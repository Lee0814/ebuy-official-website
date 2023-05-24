import { useI18n } from "@/hooks";
import classNames from "classnames";
import styles from "./style.module.scss";
export const Mission = () => {
  const t = useI18n("about");
  return (
    <section className={classNames(" w-full bg-cover", styles.bg)}>
      <div
        className={classNames(
          "ebuy-container min-h-[680px] w-full "
        )}
      >
        <div
          className={classNames(
            "col-start-1 col-end-25 flex items-center justify-center"
          )}
        >
          <div
            className={classNames(
              "my-[40px] flex  flex-col justify-between rounded-lg bg-[rgba(255,255,255,0.84)] px-[86px] py-[40px] md:my-[unset] md:w-[74%] md:py-[72px] !w-[1068px] !h-[537px]"
            )}
          >
            <div className={classNames("flex flex-col items-center")}>
              <div
                className={classNames("text-[42px] font-[600] leading-[51px]")}
              >
                {t("mission-title")}
              </div>
              <div
                className={classNames(
                  "pt-[32px] text-center text-[26px] leading-[44px] text-[#333] md:text-[20px] md:leading-[31px]"
                )}
              >
                {t("mission-text")}
              </div>
            </div>
            <div className={classNames("flex flex-col items-center pt-[72px]")}>
              <div
                className={classNames("text-[42px] font-[600] leading-[51px]")}
              >
                {t("vision-title")}
              </div>
              <div
                className={classNames(
                  "pt-[32px] text-center text-[26px] leading-[44px] text-[#333] md:text-[20px] md:leading-[31px]"
                )}
              >
                {t("vision-text")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

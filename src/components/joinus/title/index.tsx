import { useI18n } from "@/hooks";
import classNames from "classnames";

export const Title = () => {
  const t = useI18n("joinus");
  return (
    <section
      className={classNames(
        "ebuy-container text-center text-[42px] font-[700] leading-[51px] text-[#333333]"
      )}
    >
      <div
        className={classNames(
          "col-start-1 col-end-25 pb-[72px] pt-[100px] md:pb-[92px] md:pt-[97px] "
        )}
      >
        {t("title")}
      </div>
    </section>
  );
};

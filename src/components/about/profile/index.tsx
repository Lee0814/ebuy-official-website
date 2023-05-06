import { useI18n } from "@/hooks";
import classNames from "classnames";
import { memo } from "react";
import { PropertyCardLeft } from "./PropertiCardLeft";
import { PropertyCardRight } from "./PropertiCardRight";
import { BossCard } from "./bossCard";
import test from "./images/text.png";
export const Profile = memo(() => {
  const t = useI18n("about");
  const descDatas: Array<{
    title: string;
    text: string;
    img: any;
    text2: string;
  }> = [];

  for (let i = 1; i < 7; i++) {
    descDatas.push({
      title: t(`profile-${i}-title` as any),
      text: t(`profile-${i}-text` as any),
      text2: t(`profile-${i}-text2` as any),
      img: test,
    });
  }

  return (
    <section className={classNames("ebuy-container  py-[72px]")}>
      {/* 老板介绍 */}
      <div className={classNames("col-start-1 col-end-25 w-full  ")}>
        <BossCard />
        <PropertyCardLeft descData={descDatas[0]} width={410} />
        <PropertyCardRight descData={descDatas[1]} width={340} />
        <PropertyCardLeft descData={descDatas[2]} width={415} />
        <PropertyCardRight descData={descDatas[3]} width={340} />
        <PropertyCardLeft descData={descDatas[4]} width={340} />
        <PropertyCardRight descData={descDatas[5]} width={393} />
      </div>
    </section>
  );
});

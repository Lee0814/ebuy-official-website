import { useI18n } from "@/hooks";
import classNames from "classnames";
import { memo } from "react";
import { ProfileCard } from "./profile-card";
export const Profile = memo(() => {
  const t = useI18n("about");

  return (
    <section className={classNames("ebuy-container  py-[72px]")}>
      {/* 老板介绍 */}
      <div className={classNames("col-start-1 col-end-25 w-full  ")}>
        <ProfileCard direction={false} />
        <ProfileCard direction={true} />
        <ProfileCard direction={false} />
        <ProfileCard direction={true} />
      </div>
    </section>
  );
});

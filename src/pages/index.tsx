import { useI18n } from "@/hooks";
import styles from "./index.module.scss";

export default function Home() {
  const t = useI18n("en", "home");
  return (
    <main>
      <section
        className={`${styles.banner} flex h-[900px] flex-col items-center justify-center bg-cover bg-bottom pt-[60px] text-white`}
      >
        <span className="mb-[9px] text-[50px] font-[600]">{t("slogan-1")}</span>
        <span className="mb-[50px]">{t("slogan-2")}</span>
        <button className="px-[48px] py-[18px]">{t("be-our-customer")}</button>
      </section>
    </main>
  );
}

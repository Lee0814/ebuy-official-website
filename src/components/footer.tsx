import { useI18n } from "@/hooks";

export const Footer = () => {
  const t = useI18n("en", "navbar");
  return (
    <header>
      <h1>{t("home")}</h1>
      <h2>{t("home")}</h2>
    </header>
  );
};

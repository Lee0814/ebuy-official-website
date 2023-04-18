import logo from "@/assets/images/logo.png";
import { useI18n } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const t = useI18n("en", "navbar");
  return (
    <header className="fixed top-0 z-10 w-full">
      <div className="container mx-auto mt-[10px] flex h-[50px] items-center justify-between text-white">
        <Image src={logo} alt="ebuy" height={50} />
        <div className="flex items-center">
          <ul className="flex">
            <li className="mr-6">
              <Link href="/">{t("home")}</Link>
            </li>
            <li className="mr-6">
              <Link href="/">{t("about")}</Link>
            </li>
            <li className="mr-6">
              <Link href="/">{t("download")}</Link>
            </li>
            <li className="mr-6">
              <Link href="/">{t("cooperation")}</Link>
            </li>
            <li className="mr-6">
              <Link href="/">{t("join")}</Link>
            </li>
          </ul>
          <button className="rounded-[4px] bg-[#ED3838] px-[15px] py-[9px]">
            {t("contact")}
          </button>
        </div>
      </div>
    </header>
  );
};

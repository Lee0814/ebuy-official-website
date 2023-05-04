import { Banner, Profile } from "@/components/about";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";
export default function About() {
  return (
    <>
      <Banner />
      <Profile />
    </>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

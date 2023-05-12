import { Banner } from "@/components/download";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";
export default function About() {
  return (
    <>
      <Banner />
    </>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

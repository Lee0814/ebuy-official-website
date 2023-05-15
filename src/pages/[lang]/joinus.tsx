import { Banner, Title } from "@/components/joinus";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";
export default function About() {
  return (
    <>
      <Banner />
      <Title />
    </>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";

export default function About() {
  return <div>About</div>;
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

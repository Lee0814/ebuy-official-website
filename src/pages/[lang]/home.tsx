import {
  Banner,
  Benefit,
  Business,
  Evaluation,
  Location,
  Partner,
  BusinessTest,
} from "@/components/home";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";

export default function Home() {
  return (
    <>
      <Banner />
      <Benefit />
      <Business />
      <BusinessTest />
      <Partner />
      <Evaluation />
      <Location />
    </>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

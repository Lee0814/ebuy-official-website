import {
  Banner,
  Benefit,
  Business,
  Location,
  Partner,
  Evaluation,
} from "@/components/home";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";

export default function Home() {
  return (
    <main>
      <Banner />
      <Benefit />
      <Business />
      <Partner />
      <Evaluation />
      <Location />
    </main>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

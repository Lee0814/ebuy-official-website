import {
  Banner,
  Benefit,
  Business,
  Location,
  Partner,
} from "@/components/home";
import { getI18nStaticPaths, getI18nStaticProps } from "@/utils";

export default function Home() {
  return (
    <main>
      <Banner />

      <Benefit />
      <Business />
      <Partner />
      <Location />
    </main>
  );
}

export const getStaticProps = getI18nStaticProps;
export const getStaticPaths = getI18nStaticPaths;

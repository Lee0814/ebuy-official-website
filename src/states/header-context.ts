import { UseProvideReturn } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const HeaderContext = createContext({
  header: null as HTMLDivElement | null,
  setHeader: (() => {}) as Dispatch<SetStateAction<HTMLDivElement | null>>,
  showChangeLang: false as boolean,
  setShowChangeLang: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const useProvideHeader = (): UseProvideReturn<
  "Header",
  typeof HeaderContext
> => {
  const [header, setHeader] = useState<HTMLDivElement | null>(null);
  const [showChangeLang, setShowChangeLang] = useState<boolean>(false);

  return {
    HeaderProvider: HeaderContext.Provider,
    HeaderValue: {
      header,
      setHeader,
      showChangeLang,
      setShowChangeLang,
    },
  };
};

export const useHeaderContext = () => useContext(HeaderContext);

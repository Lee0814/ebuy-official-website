import { UseProvideReturn } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const HeaderContext = createContext({
  showChangeLang: false as boolean,
  setShowChangeLang: (() => {}) as Dispatch<SetStateAction<boolean>>,
  showTransparentHeader: undefined as boolean | undefined,
  setShowTransparentHeader: (() => {}) as Dispatch<SetStateAction<boolean | undefined>>,
});

export const useProvideHeader = (): UseProvideReturn<
  "Header",
  typeof HeaderContext
> => {
  const [showChangeLang, setShowChangeLang] = useState<boolean>(false);
  const [showTransparentHeader, setShowTransparentHeader] = useState<boolean>();

  return {
    HeaderProvider: HeaderContext.Provider,
    HeaderValue: {
      showChangeLang,
      setShowChangeLang,
      showTransparentHeader,
      setShowTransparentHeader,
    },
  };
};

export interface HeaderContextProps {
  showTransparentHeader?: boolean;
}
export const useHeaderContext = ({
  showTransparentHeader,
}: HeaderContextProps = {}) => {
  const headerContext = useContext(HeaderContext);
  showTransparentHeader &&
    useEffect(() => {
      const showTransparentHeader = headerContext.showTransparentHeader;
      headerContext.setShowTransparentHeader(showTransparentHeader);
      return () => {
        headerContext.setShowTransparentHeader(showTransparentHeader);
      };
    }, [showTransparentHeader]);
  return headerContext;
};

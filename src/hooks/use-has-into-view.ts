import { useEventListener } from "ahooks";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from ".";

export const useInView = (offset?: number) => {
  const wSize = useWindowSize();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const handleScroll = useCallback(() => {
    if (ref.current && wSize) {
      const rect = ref.current.getBoundingClientRect();
      setInView(rect.top < wSize.height - rect.height - (offset ?? 0));
    }
  }, [ref.current, wSize, setInView]);
  useEventListener("scroll", handleScroll);
  useEffect(handleScroll, [ref.current, wSize]);
  return [ref as RefObject<any>, inView] as const;
};

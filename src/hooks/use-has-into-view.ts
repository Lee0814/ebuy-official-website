import { useEventListener } from "ahooks";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from ".";
import { useResponsive } from "@/hooks";
import { log } from "console";

interface UseInViewOption {
  triggerOnce?: boolean;
  offset?: number;
  type?: "title" | "context";
}
export const useInView = ({
  triggerOnce,
  offset,
  type,
}: UseInViewOption = {}) => {
  const { md } = useResponsive();
  const wSize = useWindowSize();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const handleScroll = useCallback(() => {
    if (triggerOnce && inView) return;
    if (ref.current && wSize) {
      const rect = ref.current.getBoundingClientRect();
      console.log(rect);
      if (type == "title")
        setInView(rect.top / 1.2 < wSize.height - rect.height - (offset ?? 0));
      else {
        if (!md) {
          if (wSize.width > 1024) {
            setInView(rect.top / 1.8 < wSize.height - rect.height * 1.6 - (offset ?? 0));
          } else {
            setInView(rect.top / 1.8 < wSize.height - rect.height / 2.2 - (offset ?? 0));
          }
        } else {
          setInView(rect.top / 1.8 < wSize.height - rect.height / 2 - (offset ?? 0));
        }

      }

    }
  }, [ref.current, wSize, setInView]);
  useEventListener("scroll", handleScroll);
  useEffect(handleScroll, [ref.current, wSize]);
  return [ref as RefObject<any>, inView] as const;
};

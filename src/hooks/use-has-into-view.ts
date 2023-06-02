import { useEventListener } from "ahooks";
import React, { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from ".";
import { useResponsive } from "@/hooks";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [inView, setInView] = useState(false);
  const [isJoinus, setJoinus] = useState(true);
  const [isDownload, setDownload] = useState(true);
  const [isCooperation, setCooperation] = useState(true);
  const [isAbout, setAbout] = useState(true);

  useEffect(() => {
    if (router.asPath.split("/").includes("joinus")) {
      setJoinus(() => true);
    } else {
      setJoinus(() => false);
    }
    if (router.asPath.split("/").includes("download")) {
      setDownload(() => true);
    } else {
      setDownload(() => false);
    }
    if (router.asPath.split("/").includes("cooperation")) {
      setCooperation(() => true);
    } else {
      setCooperation(() => false);
    }
    if (router.asPath.split("/").includes("about")) {
      setAbout(() => true);
    } else {
      setAbout(() => false);
    }
  }, [router.asPath]);

  const handleScroll = useCallback(() => {
    if (triggerOnce && inView) return;
    if (ref.current && wSize) {
      const rect = ref.current.getBoundingClientRect();
      // console.log(isDownload);
      if (type == "title")
        setInView(rect.top / 1.2 < wSize.height - rect.height - (offset ?? 0));
      else {
        if (!md) {
          if (wSize.width > 1024) {
            if (isJoinus) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * 1.5 - (offset ?? 0));
            } 
            else if (isCooperation) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * .8 - (offset ?? 0));
            } else if (isAbout) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * .8 - (offset ?? 0));
            }
          } else {
            if (isJoinus) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * .2- (offset ?? 0));
            } 
             else if (isCooperation) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * .3 - (offset ?? 0));
            } else if (isAbout) {
              setInView(rect.top / 1.8 < wSize.height - rect.height * .08 - (offset ?? 0));
            }
          }
        } else {
          if (isJoinus) {
            console.log(1234);
            setInView(rect.top / 1.8 < wSize.height - rect.height *.06 - (offset ?? 0));
          }  
          else if (isCooperation) {
            setInView(rect.top / 1.8 < wSize.height - rect.height * .4 - (offset ?? 0));
          } else if (isAbout) {
            setInView(rect.top / 1.8 < wSize.height - rect.height * .1 - (offset ?? 0));
          }
        }

        const down=()=>{
          if(!md){
            if(isDownload){
              if(wSize.width>1070){
                setInView(rect.top / 1.8 < wSize.height - rect.height * 1.1 - (offset ?? 0))
              }else{
                setInView(rect.top / 1.8 < wSize.height - rect.height * 0.26 - (offset ?? 0))
              }
            }
          }else{
            setInView(rect.top / 1.8 < wSize.height - rect.height * .26 - (offset ?? 0))
          }
        }
        down()
      }

    }
  }, [ref.current, wSize, setInView]);
  useEventListener("scroll", handleScroll);
  useEffect(handleScroll, [ref.current, wSize]);
  return [ref as RefObject<any>, inView] as const;
};

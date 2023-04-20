import { I18n, I18nContext, Lang, NS, defaultNS, t } from "@/utils";
import { useContext, useMemo } from "react";

/**
 * 使用翻译函数
 * @param ns 命名空间
 * @param lang 使用语言
 * @returns 翻译函数
 */
export function useI18n<
  L extends Lang = typeof defaultLang,
  N extends NS = typeof defaultNS
>(ns?: N, lang?: L) {
  const { lang: contextLang, defaultLang } = useContext(I18nContext);
  const _ns = ns || (defaultNS as N);
  const _lang = lang || (contextLang as L) || (defaultLang as L);
  return useMemo(
    () => (key: keyof I18n[L][N]) => t(key, _ns, _lang),
    [_lang, _ns]
  );
}

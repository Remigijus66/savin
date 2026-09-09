import { useLocation } from "react-router-dom";
import { content, langFromPath, otherLang, pageIdFromPath, paths } from "./content/site";

/**
 * Kalba ir tekstai imami iš adreso – atskiro konteksto nereikia.
 * Language and copy are derived from the URL; no separate context needed.
 */
export function useLang() {
  const { pathname } = useLocation();

  const lang = langFromPath(pathname);
  const pageId = pageIdFromPath(pathname);
  const other = otherLang[lang];

  return {
    lang,
    pageId,
    t: content[lang],
    path: paths[lang],
    otherLang: other,
    otherPath: paths[other][pageId],
  };
}

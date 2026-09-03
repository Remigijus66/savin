// Kalbų registras ir maršrutai / Language registry and routes.

import { lt } from "./lt";
import { en } from "./en";
import type { Lang, PageId, SiteContent } from "./types";

export type { Lang, PageId, SiteContent } from "./types";

export const content: Record<Lang, SiteContent> = { lt, en };

/** Nepriklauso nuo kalbos. */
export const contactDetails = {
  phone: "+370 650 11233",
  email: "jolita@savin.lt",
};

export const pageOrder: PageId[] = [
  "home",
  "kasEsu",
  "kurKvieciu",
  "duk",
  "susisiekime",
];

/** Kiekvieno puslapio adresas abiem kalbomis. */
export const paths: Record<Lang, Record<PageId, string>> = {
  lt: {
    home: "/",
    kasEsu: "/kas-esu",
    kurKvieciu: "/kur-kvieciu-ir-kuo-tikiu",
    duk: "/duk",
    susisiekime: "/susisiekime",
  },
  en: {
    home: "/en",
    kasEsu: "/en/about-me",
    kurKvieciu: "/en/what-i-offer",
    duk: "/en/faq",
    susisiekime: "/en/contact",
  },
};

export const otherLang: Record<Lang, Lang> = { lt: "en", en: "lt" };

/** Kalba nustatoma pagal adreso pradžią. */
export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "lt";
}

/** Kuris puslapis atidarytas – kad kalbos jungiklis liktų tame pačiame puslapyje. */
export function pageIdFromPath(pathname: string): PageId {
  const lang = langFromPath(pathname);
  const normalised = pathname.replace(/\/+$/, "") || "/";

  const match = pageOrder.find((id) => paths[lang][id] === normalised);

  return match ?? "home";
}

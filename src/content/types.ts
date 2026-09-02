// Bendra abiejų kalbų turinio struktūra / Shared shape for both languages.

export type Lang = "lt" | "en";

export type PageId = "home" | "kasEsu" | "kurKvieciu" | "duk" | "susisiekime";

export type LinkItem = {
  text: string;
  url?: string;
};

export type Principle = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string[];
};

export type Group = {
  title: string;
  items: LinkItem[];
};

export type SiteContent = {
  nav: Record<PageId, string>;

  meta: {
    htmlLang: string;
    title: string;
    description: string;
    keywords: string;
  };

  ui: {
    ctaLabel: string;
    languageLabel: string;
    languageTitle: string;
    photoAlt: string;
    name: string;
  };

  contact: {
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    address: string;
  };

  kasEsu: {
    title: string;
    greeting: string;
    intro: string;
    teaser: string;
    teaserLink: string;
    kelias: { title: string; paragraphs: string[] };
    studijos: { title: string; paragraphs: string[]; groups: Group[] };
    gyvenimas: { title: string; paragraphs: string[] };
  };

  kurKvieciu: {
    title: string;
    teaser: string;
    teaserLink: string;
    terapija: { title: string; paragraphs: string[] };
    principai: { title: string; intro: string; items: Principle[] };
    koTiketis: { title: string; items: string[] };
  };

  duk: {
    title: string;
    subtitle: string;
    intro: string;
    teaserLink: string;
    items: FaqItem[];
  };

  susisiekime: {
    title: string;
    teaser: string;
    teaserLink: string;
  };
};

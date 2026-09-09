// Bendra abiejų kalbų turinio struktūra / Shared shape for both languages.

export type Lang = "lt" | "en";

export type PageId = "home" | "kasEsu" | "kurKvieciu" | "duk" | "susisiekime";

/** Fraze pastraipos viduryje, kuri virsta nuoroda. */
export type PhraseLink = {
  phrase: string;
  url: string;
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
  items: string[];
};

/** Kiekvieno puslapio <title> ir aprasymas paieskos sistemoms. */
export type PageSeo = {
  title: string;
  description: string;
};

export type SiteContent = {
  nav: Record<PageId, string>;

  meta: {
    htmlLang: string;
    title: string;
    description: string;
    keywords: string;
  };

  /* Atskiras title/description kiekvienam puslapiui - kitaip visi
     penki puslapiai paieskoje atrodo vienodai. */
  seo: Record<PageId, PageSeo>;

  ui: {
    ctaLabel: string;
    ctaKurKvieciuLabel: string;
    languageLabel: string;
    languageTitle: string;
    photoAlt: string;
    name: string;
    tagline: string;
  };

  /* Pradzios puslapio tekstas salia nuotraukos.
     headline renderinamas kaip <h1> (SEO), bet atrodo kaip paprastas tekstas. */
  home: {
    greeting: string;
    headline: string;
    paragraphs: string[];
  };

  footer: {
    pagesTitle: string;
    contactTitle: string;
    rights: string;
  };

  contact: {
    title: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    address: string;
    messengerLabel: string;
    messengerUrl: string;
  };

  kasEsu: {
    title: string;
    greeting: string;
    intro: string;
    /* Frazes, kurios pastraipose renderinamos kaip nuorodos */
    links: PhraseLink[];
    /* Sakinys su nuoroda i /kas-esu: before + <Link>link</Link> + after */
    introCta: { before: string; link: string; after: string };
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
    trail: string;
    teaserLink: string;
    items: FaqItem[];
  };

  susisiekime: {
    title: string;
    teaser: string;
    teaserLink: string;
  };
};

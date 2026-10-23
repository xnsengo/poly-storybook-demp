// Bilingual route map. Each page key lists its English and French paths, so
// the language toggle and hreflang tags always point at the matching page.
// Paths mirror investia.ca's own EN/FR slugs (the EN homepage lives at "/").
export type Locale = "en" | "fr";

export const ROUTES = {
  home: { en: "/", fr: "/accueil" },
  experience: { en: "/investia-experience", fr: "/experience-investia" },
  products: { en: "/products-and-services", fr: "/produits-et-services" },
  advisor: { en: "/find-an-advisor", fr: "/trouver-un-conseiller" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof ROUTES;

export const LOCALE_TAG: Record<Locale, string> = { en: "en-CA", fr: "fr-CA" };

export const otherLocale = (locale: Locale): Locale =>
  locale === "en" ? "fr" : "en";

/** hreflang alternates for a page, for the Layout `alternates` prop. */
export function pageAlternates(page: PageKey) {
  return [
    { hreflang: LOCALE_TAG.en, href: ROUTES[page].en },
    { hreflang: LOCALE_TAG.fr, href: ROUTES[page].fr },
    { hreflang: "x-default", href: ROUTES[page].en },
  ];
}

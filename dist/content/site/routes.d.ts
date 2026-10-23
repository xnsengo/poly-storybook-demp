export type Locale = "en" | "fr";
export declare const ROUTES: {
    readonly home: {
        readonly en: "/";
        readonly fr: "/accueil";
    };
    readonly experience: {
        readonly en: "/investia-experience";
        readonly fr: "/experience-investia";
    };
    readonly products: {
        readonly en: "/products-and-services";
        readonly fr: "/produits-et-services";
    };
    readonly advisor: {
        readonly en: "/find-an-advisor";
        readonly fr: "/trouver-un-conseiller";
    };
};
export type PageKey = keyof typeof ROUTES;
export declare const LOCALE_TAG: Record<Locale, string>;
export declare const otherLocale: (locale: Locale) => Locale;
/** hreflang alternates for a page, for the Layout `alternates` prop. */
export declare function pageAlternates(page: PageKey): ({
    hreflang: string;
    href: "/find-an-advisor" | "/investia-experience" | "/products-and-services" | "/";
} | {
    hreflang: string;
    href: "/accueil" | "/experience-investia" | "/produits-et-services" | "/trouver-un-conseiller";
})[];

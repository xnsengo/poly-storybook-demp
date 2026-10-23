import { AdvisorContent } from '../../../content/advisor/advisor-content';
/** One advisor as returned by investia.ca ObtenirConseillers (via /api/advisors). */
export type Advisor = {
    Id: number;
    Prenom: string;
    Nom: string;
    Telephone: string;
    Poste?: string | null;
    Cellulaire?: string | null;
    SiteWeb?: string | null;
    Adresse: string;
    Ville: string;
    CodePostal: string;
    Province: string;
    Distance: number;
    UrlEnvoyerCourriel: string;
};
export type AdvisorSearchProps = {
    /** Sent to the relay as lang=en|fr (investia.ca sc_lang). */
    lang?: "en" | "fr";
    hero?: AdvisorContent["hero"];
    search?: AdvisorContent["search"];
    portal?: AdvisorContent["portal"];
    /** Same-origin relay endpoint. */
    endpoint?: string;
};
/**
 * @ployComponent
 * @ployComponentId advisor-search
 * @ployComponentType section
 * @ployComponentTags advisor-locator, search, form, bilingual, hero
 * @ployComponentDescription Find-an-advisor page hero band rebuilt from investia.ca: light-blue band with the fixed line-splash background, blue H1 and intro, then two white cards. "No advisor" card holds a working city/postal-code search that calls the same-origin relay (default /api/advisors?q=&lang=) and renders every source state: empty-input error with live re-validation, spinner in the disabled button while loading, "{n} results" count, advisor cards (send message, phone with optional extension, optional mobile, address, Google Maps directions link, optional "visit website" button) six at a time with a "see more" button, and a 100 km no-result warning with a contact link. Equal-distance results are shuffled like the source; a ?codePostal= URL parameter runs a search on load. "Already have an advisor" card has the client-services phone and the client-portal button. Below 1140px the portal card comes first; once a search runs on desktop the columns become 2/3 and 1/3 with the portal card sticky and centered. All copy comes from props (EN/FR dictionary in src/content/advisor/advisor-content.ts).
 * @ployComponentStatus stable
 */
export declare function AdvisorSearch({ lang, hero, search, portal, endpoint, }: AdvisorSearchProps): import('react').JSX.Element;

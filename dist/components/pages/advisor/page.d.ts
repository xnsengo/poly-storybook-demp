import { Locale } from '../../../content/site/routes';
export type AdvisorPageProps = {
    /** Content language: "en" serves /find-an-advisor, "fr" serves /trouver-un-conseiller. */
    locale?: Locale;
};
/**
 * @ployComponent
 * @ployComponentId advisor-page
 * @ployComponentType page
 * @ployComponentTags advisor-locator, bilingual
 * @ployComponentDescription Investia find-an-advisor page inside the shared SiteShell (nav, footer, CIRO/OCRI strip), in source order: the advisor-search band (H1, intro, working city/postal-code search through the same-origin /api/advisors relay, client-portal card) and the advisor-value band (value of advice copy and pill photo). Copy comes from the typed EN/FR dictionary in src/content/advisor/advisor-content.ts; "en" renders at /find-an-advisor and "fr" at /trouver-un-conseiller, and the language toggle links the two.
 * @ployComponentStatus stable
 */
export declare function AdvisorPage({ locale }: AdvisorPageProps): import('react').JSX.Element;

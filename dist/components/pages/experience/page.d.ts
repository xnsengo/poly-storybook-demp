import { Locale } from '../../../content/site/routes';
export type ExperiencePageProps = {
    /** Content language: "en" serves /investia-experience, "fr" serves /experience-investia. */
    locale?: Locale;
};
/**
 * @ployComponent
 * @ployComponentId experience-page
 * @ployComponentType page
 * @ployComponentTags inner-page, bilingual, advisors
 * @ployComponentDescription Investia "The Investia Experience" / "L'expérience Investia" page inside the shared SiteShell (nav with this page active, footer, CIRO strip), with sections in source order: light-blue hero with animated curve and advisor pins, full-width advisor CTA band, commitment timeline plus simplicity row, calculators band with animated curve and cyclist artwork, and tracking (Client Portal, mobile app, client documents with an interest-rate modal). Copy comes from the typed EN/FR dictionary in src/content/experience/experience-content.ts; the language toggle links the two routes.
 * @ployComponentStatus stable
 */
export declare function ExperiencePage({ locale }: ExperiencePageProps): import('react').JSX.Element;

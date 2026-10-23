import { HomeLocale } from '../../../content/home/home-content';
export type HomePageProps = {
    /** Content language: "en" serves /, "fr" serves /accueil. */
    locale?: HomeLocale;
};
/**
 * @ployComponent
 * @ployComponentId home-page
 * @ployComponentType page
 * @ployComponentTags homepage, bilingual
 * @ployComponentDescription Investia homepage composed from the design-system sections in source order inside the shared SiteShell (nav, footer, CIRO/OCRI strip): hero carousel, action strip, benefit cards, products panel, life-event dialogs, news and careers rows. All copy comes from the typed EN/FR dictionary in src/content/home/home-content.ts, selected by the locale prop; "en" renders at / and "fr" at /accueil, and the language toggle links the two.
 * @ployComponentStatus stable
 */
export declare function HomePage({ locale }: HomePageProps): import('react').JSX.Element;

import { Locale } from '../../../content/site/routes';
export type ProductsPageProps = {
    /** Content language: "en" serves /products-and-services, "fr" serves /produits-et-services. */
    locale?: Locale;
};
/**
 * @ployComponent
 * @ployComponentId products-page
 * @ployComponentType page
 * @ployComponentTags products, bilingual
 * @ployComponentDescription Investia Products and services page inside the shared SiteShell, in investia.ca source order: hero with animated heart curve, find-an-advisor CTA band, mutual-funds specialty row, savings and investment product cards (three columns) and the PPI insurance card (two-thirds width). All copy comes from the typed EN/FR dictionary in src/content/products/products-content.ts, selected by the locale prop; product links stay absolute to investia.ca in the matching language.
 * @ployComponentStatus stable
 */
export declare function ProductsPage({ locale }: ProductsPageProps): import('react').JSX.Element;

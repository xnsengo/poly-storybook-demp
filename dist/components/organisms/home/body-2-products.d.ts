export type Body2ProductsProps = {
    heading?: string;
    body?: string;
    items?: string[];
    imageSrc?: string;
    imageAlt?: string;
    actionLabel?: string;
    actionHref?: string;
};
/**
 * @ployComponent
 * @ployComponentId body-2-products
 * @ployComponentType section
 * @ployComponentTags products, media, cta
 * @ployComponentDescription Fishing photograph beside a blue products and services panel on the Investia homepage.
 * @ployComponentStatus stable
 */
export declare function Body2Products({ heading, body, items, imageSrc, imageAlt, actionLabel, actionHref, }?: Body2ProductsProps): import('react').JSX.Element;

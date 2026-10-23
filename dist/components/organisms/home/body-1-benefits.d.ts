export type Body1Benefit = {
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
    overlaySrc?: string;
    overlayAlt?: string;
    actionLabel: string;
    actionHref: string;
};
export type Body1BenefitsProps = {
    items?: Body1Benefit[];
    heading?: string;
};
/**
 * @ployComponent
 * @ployComponentId body-1-benefits
 * @ployComponentType section
 * @ployComponentTags cards, carousel, advice
 * @ployComponentDescription Three image-led Investia benefit cards, shown as a desktop row and a swipeable mobile track.
 * @ployComponentStatus stable
 */
export declare function Body1Benefits({ items, heading, }?: Body1BenefitsProps): import('react').JSX.Element;

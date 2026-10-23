export type ProductsHeroProps = {
    title: string;
    body?: string;
    /** Desktop crop, 1000px and up (investia.ca _dsktp). */
    imageSrc: string;
    /** Tablet crop, 768-999px (investia.ca _tblt). Falls back to imageSrc. */
    tabletImageSrc?: string;
    /** Phone crop, under 768px (investia.ca _phne). Falls back to tabletImageSrc, then imageSrc. */
    mobileImageSrc?: string;
    /** Show the animated heart curve over the photo. */
    showCurve?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId products-hero
 * @ployComponentType section
 * @ployComponentTags hero, media, motion, bilingual
 * @ployComponentDescription Inner-page hero matching investia.ca's heroV2 hero-n1: light-blue band with a photo anchored bottom-centre (separate desktop, tablet and phone crops), a blue Muoto H1 and a semibold intro line. A blue heart-shaped curve draws in (0.8s stroke dash) when the hero enters the viewport, for every visitor; positions follow the Products and services page at each breakpoint. Title, intro and images are props, so EN and FR pages share it.
 * @ployComponentStatus stable
 */
export declare function ProductsHero({ title, body, imageSrc, tabletImageSrc, mobileImageSrc, showCurve, }: ProductsHeroProps): import('react').JSX.Element;

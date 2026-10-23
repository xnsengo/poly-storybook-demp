export type ExperienceHeroProps = {
    title: string;
    subtitle: string;
    /** Desktop background (1000px and up), investia.ca _dsktp crop. */
    imageSrc: string;
    /** Tablet background (768-999px), investia.ca _tblt crop. */
    tabletImageSrc: string;
    /** Phone background (under 768px), investia.ca _phne crop. */
    mobileImageSrc: string;
    /** Large advisor pin (top right of the curve). */
    pinOneSrc: string;
    /** Small advisor pin (start of the curve). */
    pinTwoSrc: string;
};
/**
 * @ployComponent
 * @ployComponentId experience-hero
 * @ployComponentType section
 * @ployComponentTags hero, media, animation, bilingual
 * @ployComponentDescription Investia inner-page hero (investia.ca heroV2 hero-n1) for The Investia experience: light-blue band with a photographic background cropped per breakpoint (phone, tablet 768-999, desktop 1000+), page H1 and semibold intro. A blue growth curve draws in and two advisor photo pins pop in each time the hero enters the viewport, and reset when it leaves, for every visitor. Title, intro and all images are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export declare function ExperienceHero({ title, subtitle, imageSrc, tabletImageSrc, mobileImageSrc, pinOneSrc, pinTwoSrc, }: ExperienceHeroProps): import('react').JSX.Element;

export type Body1HeroSlide = {
    id: string;
    title: string;
    body?: string;
    imageSrc: string;
    /** Tablet crop (768-999px), like investia.ca's _tblt images. Falls back to imageSrc. */
    tabletImageSrc?: string;
    /** Phone crop (under 768px), like investia.ca's _phne images. Falls back to tabletImageSrc, then imageSrc. */
    mobileImageSrc?: string;
    actionLabel: string;
    actionHref: string;
    /** Opens in a new tab and shows the external icon. */
    external?: boolean;
    /** Accessible name for the action, e.g. "<label> opens in a new tab". */
    actionAriaLabel?: string;
    /** Icon after the action label. Defaults to "external" for external links, else "arrow". */
    actionIcon?: "arrow" | "external" | "none";
    secondaryLabel?: string;
    secondaryHref?: string;
    decoration?: "projects" | "tfsa" | "portal";
};
export type Body1HeroProps = {
    items?: Body1HeroSlide[];
    initialSlide?: number;
    /** Accessible name of the carousel region. */
    ariaLabel?: string;
    /** Swiper a11y messages, for localized pages. */
    a11y?: {
        paginationBulletMessage?: string;
        prevSlideMessage?: string;
        nextSlideMessage?: string;
    };
    /** Autoplay interval in ms (investia.ca uses 8000). Set 0 to disable. */
    autoplayDelay?: number;
};
/**
 * @ployComponent
 * @ployComponentId body-1-hero
 * @ployComponentType section
 * @ployComponentTags hero, carousel, media, bilingual
 * @ployComponentDescription Five-slide Investia campaign carousel with photographic backgrounds, a primary text action per slide (arrow, external or no icon), an optional secondary link and clickable pagination. Matches investia.ca motion: 600ms fade, 8s autoplay without looping (stops on pagination click, swipe or keyboard focus; runs for every visitor), and on each active slide the blue curve draws in and the pin pops in. All copy, links, accessible labels and Swiper a11y messages are props, so EN and FR pages share it.
 * @ployComponentStatus stable
 */
export declare function Body1Hero({ items, initialSlide, ariaLabel, a11y, autoplayDelay, }?: Body1HeroProps): import('react').JSX.Element;

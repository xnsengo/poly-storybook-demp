export type Body2FeatureAction = {
    label: string;
    href: string;
    primary?: boolean;
    external?: boolean;
    /** Accessible name, e.g. a localized "opens in a new tab" label. */
    ariaLabel?: string;
};
export type Body2FeatureItem = {
    id: string;
    heading: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
    mediaWidth: number;
    mediaHeight: number;
    flip?: boolean;
    brandArtwork?: boolean;
    actions: Body2FeatureAction[];
};
export type Body2NewsTeamsProps = {
    items?: Body2FeatureItem[];
};
/**
 * @ployComponent
 * @ployComponentId body-2-news-teams
 * @ployComponentType section
 * @ployComponentTags news, careers, media
 * @ployComponentDescription Alternating economic news and recruitment rows with pill-shaped imagery and external calls to action. Rows, copy, images, actions and their accessible labels are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export declare function Body2NewsTeams({ items }?: Body2NewsTeamsProps): import('react').JSX.Element;

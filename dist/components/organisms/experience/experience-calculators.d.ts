export type ExperienceCalculator = {
    title: string;
    body: string;
    linkLabel: string;
    href: string;
};
export type ExperienceCalculatorsProps = {
    heading: string;
    items: ExperienceCalculator[];
    /** Faint horizontal-lines background artwork (SVG). */
    linesSrc: string;
    /** Wide cut-out landscape anchored to the bottom of the band. */
    imageSrc: string;
    imageAlt?: string;
};
/**
 * @ployComponent
 * @ployComponentId experience-calculators
 * @ployComponentType section
 * @ployComponentTags calculators, cards, illustration, animation, bilingual
 * @ployComponentDescription Light-blue Investia calculators band (investia.ca grille-section-calculateurs): large blue H2, white rounded cards (stacked under 1140px, three across above) with H3, paragraph and a text link with an east arrow, over a faint lines background and a wide cut-out landscape (cyclist) pinned to the bottom. A blue curve behind the landscape draws in each time it enters the viewport and resets when it leaves, for every visitor. Copy, links and artwork are props.
 * @ployComponentStatus stable
 */
export declare function ExperienceCalculators({ heading, items, linesSrc, imageSrc, imageAlt, }: ExperienceCalculatorsProps): import('react').JSX.Element;

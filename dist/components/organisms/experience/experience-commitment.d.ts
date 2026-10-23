export type ExperienceCommitmentStep = {
    title: string;
    /** Bold lead; several strings render with line breaks (as the FR source does). */
    lead: string[];
    body: string;
};
export type ExperienceCommitmentListItem = {
    /** Material Icons Outlined ligature, e.g. "assessment". */
    icon: string;
    text: string;
};
export type ExperienceCommitmentProps = {
    heading: string;
    steps: ExperienceCommitmentStep[];
    simplicity: {
        heading: string;
        items: ExperienceCommitmentListItem[];
        actionLabel: string;
        actionHref: string;
        imageSrc: string;
        imageAlt?: string;
    };
};
/**
 * @ployComponent
 * @ployComponentId experience-commitment
 * @ployComponentType section
 * @ployComponentTags timeline, steps, list, image, bilingual
 * @ployComponentDescription Investia "Our Commitment" band (investia.ca grille-section-engagement): an H2, then a three-step timeline (blue ring markers joined by a blue rule; vertical with a left rail under 1140px, horizontal row above), each step with H3, bold lead and paragraph. Below, a "Simplicity" row pairs an oval-cropped photo with an H2, an icon list (Material Icons Outlined) and an outlined pill button; image sits above the text on phones and to the left from 768px. All copy, icons, link and image are props.
 * @ployComponentStatus stable
 */
export declare function ExperienceCommitment({ heading, steps, simplicity, }: ExperienceCommitmentProps): import('react').JSX.Element;

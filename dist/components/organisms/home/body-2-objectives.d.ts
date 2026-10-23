export type Body2Objective = {
    label: string;
    /** Bold lead question shown under the dialog title. */
    lead?: string;
    /** Supporting paragraph under the lead. */
    body?: string;
    /** Embeddable video URL (e.g. a Vimeo player URL). */
    videoSrc?: string;
    /** Accessible title for the video iframe; defaults to the label. */
    videoTitle?: string;
};
export type Body2ObjectivesProps = {
    /** One string, or several lines rendered with line breaks. */
    heading?: string | string[];
    items?: Body2Objective[];
    imageSrc?: string;
    imageAlt?: string;
    /** Anchor id so other sections can link to this block. */
    id?: string;
    closeLabel?: string;
};
/**
 * @ployComponent
 * @ployComponentId body-2-objectives
 * @ployComponentType section
 * @ployComponentTags objectives, dialog, video, illustration, bilingual
 * @ployComponentDescription Life-event buttons on a pale blue surface with graph artwork and a cutout couple. The graph's two areas rise with a small bounce each time they scroll into view (static under reduced motion). Each button opens an accessible modal dialog with a title, lead question, paragraph and an embedded video. Heading lines, items, image, anchor id and the close label are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export declare function Body2Objectives({ heading, items, imageSrc, imageAlt, id, closeLabel, }?: Body2ObjectivesProps): import('react').JSX.Element;

import { AdvisorContent } from '../../../content/advisor/advisor-content';
export type AdvisorValueProps = AdvisorContent["value"];
/**
 * @ployComponent
 * @ployComponentId advisor-value
 * @ployComponentType section
 * @ployComponentTags advisor, media, text-image, bilingual
 * @ployComponentDescription "Value of an advisor" band from investia.ca find-an-advisor: heading, one or more paragraphs and a text link with an east arrow glyph on the left; a pill-shaped (288px radius) cover photo on the right that stretches to the copy height. Phone stacks copy above a 288x180 pill; tablet uses a 72px gap with a 238px minimum pill; desktop a 112px gap. Heading, paragraphs, link and image (local /images/ path) are props.
 * @ployComponentStatus stable
 */
export declare function AdvisorValue({ heading, paragraphs, link, image, }: Partial<AdvisorValueProps>): import('react').JSX.Element;

export type ExperienceMaterialIconProps = {
    /** Material Icons ligature name, e.g. "east", "open_in_new", "check_circle". */
    name: string;
    /** "outlined" uses Material Icons Outlined, "filled" uses Material Icons. */
    variant?: "outlined" | "filled";
    /** Glyph size in px. */
    size?: number;
    className?: string;
};
/**
 * @ployComponent
 * @ployComponentId experience-material-icon
 * @ployComponentType component
 * @ployComponentTags icon, decoration
 * @ployComponentDescription Decorative Material Icons glyph (aria-hidden), rendered from the site's self-hosted Material Icons / Material Icons Outlined fonts in /fonts, exactly as investia.ca renders its list, link and download icons. Pass the ligature name, the outlined or filled variant and a pixel size; color follows currentColor.
 * @ployComponentStatus stable
 */
export declare function ExperienceMaterialIcon({ name, variant, size, className, }: ExperienceMaterialIconProps): import('react').JSX.Element;

export type Body1Action = {
    label: string;
    href: string;
};
export type Body1ActionsProps = {
    items?: Body1Action[];
};
/**
 * @ployComponent
 * @ployComponentId body-1-actions
 * @ployComponentType section
 * @ployComponentTags cta, advisor, portal
 * @ployComponentDescription Pale-blue full-width action strip linking to advisor search and the client portal.
 * @ployComponentStatus stable
 */
export declare function Body1Actions({ items }?: Body1ActionsProps): import('react').JSX.Element;

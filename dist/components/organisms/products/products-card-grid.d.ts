export type ProductsCard = {
    id: string;
    /** Card title, e.g. the plan acronym. */
    title: string;
    /** Bold line under the title, e.g. the plan's full name. */
    subtitle?: string;
    /** One string per paragraph. */
    body: string[];
    linkLabel: string;
    href: string;
    /** Opens in a new tab and shows the external icon. */
    external?: boolean;
    /** Accessible name, e.g. "<label> opens in a new tab". */
    ariaLabel?: string;
};
export type ProductsCardGridProps = {
    title: string;
    items: ProductsCard[];
    /** "thirds": three equal columns from 768px. "two-thirds": each card spans two of three columns. */
    layout?: "thirds" | "two-thirds";
    /** Last band before the footer: 96px bottom padding from 768px instead of 60px. */
    last?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId products-card-grid
 * @ployComponentType section
 * @ployComponentTags cards, products, bilingual
 * @ployComponentDescription H3 heading over a grid of grey (#eff1f4) 20px-rounded product cards from investia.ca's Products and services page. Each card has an H4 title, optional bold subtitle, one or more paragraphs and an outlined pill link pinned to the card bottom so buttons align across a row (hover turns it #2962ff; external links open in a new tab with the external icon). layout="thirds" gives three columns from 768px; "two-thirds" makes each card two columns wide (the insurance card). Cards stack full width on phones with full-width buttons.
 * @ployComponentStatus stable
 */
export declare function ProductsCardGrid({ title, items, layout, last, }: ProductsCardGridProps): import('react').JSX.Element;

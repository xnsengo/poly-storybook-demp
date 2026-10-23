import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType } from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | null | undefined;
    tone?: "default" | "inverse" | null | undefined;
    elevation?: "flat" | "overlay" | "raised" | null | undefined;
    bordered?: boolean | null | undefined;
    padding?: "none" | "source" | "default" | "compact" | "comfortable" | null | undefined;
    linked?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type CardProps = VariantProps<typeof cardVariants> & ComponentPropsWithoutRef<"div"> & {
    /** Link state is derived from href, as, or the slotted child. */
    linked?: never;
    /** `a` for a card that navigates, `article` or `li` inside a list. */
    as?: ElementType;
    href?: string;
    /**
     * Merge these classes and props into the element passed as children
     * instead of rendering our own. The Radix convention — reach for it when
     * wrapping a framework Link or an element that already exists, because
     * nesting one inside our own tag is invalid HTML and fails hydration.
     */
    asChild?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId card
 * @ployComponentType component
 * @ployComponentTags surface, container, measured
 * @ployComponentDescription The measured surface. raised/overlay use measured shadows or subtle defaults when none are available, so a dropdown, a popover and a modal agree with the cards around them.
 * @ployComponentStatus stable
 */
export declare function Card({ as, href, variant, tone, elevation, bordered, padding, className, asChild, ...props }: CardProps): import('react').JSX.Element;
export {};

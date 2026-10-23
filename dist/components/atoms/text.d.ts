import { VariantProps } from 'class-variance-authority';
import { ElementType, HTMLAttributes } from 'react';
declare const textVariants: (props?: ({
    variant?: "small" | "body" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TextProps = HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof textVariants> & {
    /** `p` by default. Any element — a caption, a list item, an inline span. */
    as?: ElementType;
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
 * @ployComponentId text
 * @ployComponentType component
 * @ployComponentTags typography, body-copy
 * @ployComponentDescription The measured body-copy styles. Color is inherited from the section; alignment and weight are call-site utilities.
 * @ployComponentStatus stable
 */
export declare function Text({ variant, as, className, asChild, ...props }: TextProps): import('react').JSX.Element;
export {};

import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const tagVariants: (props?: ({
    tone?: "secondary" | "outline" | "solid" | "accent" | "neutral" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TagProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tagVariants> & {
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
 * @ployComponentId tag
 * @ployComponentType component
 * @ployComponentTags badge, chip, label, measured
 * @ployComponentDescription The measured pill. Tones are tints of existing tokens, never new hues.
 * @ployComponentStatus stable
 */
export declare function Tag({ tone, className, asChild, ...props }: TagProps): import('react').JSX.Element;
export {};

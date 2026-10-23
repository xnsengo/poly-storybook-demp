import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const containerVariants: (props?: ({
    width?: "narrow" | "standard" | "wide" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ContainerProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants> & {
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
 * @ployComponentId container
 * @ployComponentType component
 * @ployComponentTags layout, gutters, responsive
 * @ployComponentDescription content narrow 650px · standard 1140px · wide 1368px (derived) · full bleed. Measured gutters, never zero.
 * @ployComponentStatus stable
 */
export declare function Container({ width, className, asChild, ...props }: ContainerProps): import('react').JSX.Element;
export {};

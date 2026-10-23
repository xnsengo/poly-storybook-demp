import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const displayHeadingVariants: (props?: ({
    size?: 1 | 2 | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type DisplayHeadingProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof displayHeadingVariants> & {
    /** The semantic tag. The document outline and the visual level are separate decisions. */
    as?: HeadingTag;
    /** Merge these classes into an element you already have, instead of rendering our own. */
    asChild?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId displayHeading
 * @ployComponentType component
 * @ployComponentTags typography, scale, responsive
 * @ployComponentDescription The measured display scale, sizes 1-2, responsive at md.
 * @ployComponentStatus stable
 */
export declare function DisplayHeading({ size, as, className, asChild, ...props }: DisplayHeadingProps): import('react').JSX.Element;
export {};

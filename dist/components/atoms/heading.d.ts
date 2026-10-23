import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const headingVariants: (props?: ({
    level?: 1 | 2 | 3 | 4 | 5 | 6 | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants> & {
    /** The semantic tag. The document outline and the visual level are separate decisions. */
    as?: HeadingTag;
    /** Merge these classes into an element you already have, instead of rendering our own. */
    asChild?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId heading
 * @ployComponentType component
 * @ployComponentTags typography, scale, responsive
 * @ployComponentDescription The measured heading scale, levels 1-6, responsive at md.
 * @ployComponentStatus stable
 */
export declare function Heading({ level, as, className, asChild, ...props }: HeadingProps): import('react').JSX.Element;
export {};

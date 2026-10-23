import { VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes } from 'react';
declare const linkVariants: (props?: ({
    variant?: "inline" | "standalone" | null | undefined;
    tone?: "inherit" | "accent" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof linkVariants> & {
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
 * @ployComponentId link
 * @ployComponentType component
 * @ployComponentTags navigation, inline, measured-states
 * @ployComponentDescription Measured link treatment; the source declares no hover change, so none is applied. tone='inherit' hands color back to the surface.
 * @ployComponentStatus stable
 */
export declare function Link({ variant, tone, className, asChild, ...props }: LinkProps): import('react').JSX.Element;
export {};

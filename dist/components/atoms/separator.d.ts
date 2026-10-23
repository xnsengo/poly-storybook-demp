import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
declare const separatorVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    tone?: "default" | "inverse" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SeparatorProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof separatorVariants> & {
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
 * @ployComponentId separator
 * @ployComponentType component
 * @ployComponentTags divider, rule, measured
 * @ployComponentDescription The measured rule between blocks. Carries no margin — space it at the call site.
 * @ployComponentStatus stable
 */
export declare function Separator({ orientation, tone, className, asChild, ...props }: SeparatorProps): import('react').JSX.Element;
export {};

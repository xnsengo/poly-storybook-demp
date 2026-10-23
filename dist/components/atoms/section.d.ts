import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, Ref } from 'react';
declare const sectionVariants: (props?: ({
    space?: "default" | "condensed" | "flushTop" | "flushBottom" | "flush" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type SectionProps = HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants> & {
    /**
     * Merge these classes and props into the element passed as children
     * instead of rendering our own. The Radix convention — reach for it when
     * wrapping a framework Link or an element that already exists, because
     * nesting one inside our own tag is invalid HTML and fails hydration.
     */
    asChild?: boolean;
    /** Forwarded to the rendered element (React 19 ref-as-prop). */
    ref?: Ref<HTMLElement>;
};
/**
 * @ployComponent
 * @ployComponentId section
 * @ployComponentType component
 * @ployComponentTags layout, rhythm, responsive
 * @ployComponentDescription Measured vertical rhythm: 40px mobile, 48px desktop, with condensed and flush variants. Surface, width and layout stay the section's own. Recommended for a band, not required. className overrides the rhythm — a band that differs takes py-3 lg:py-10, a footer measuring no bottom padding takes pb-0.
 * @ployComponentStatus stable
 */
export declare function Section({ space, className, asChild, ...props }: SectionProps): import('react').JSX.Element;
export {};

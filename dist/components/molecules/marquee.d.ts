import { ComponentProps, ReactNode } from 'react';
export type MarqueeProps = ComponentProps<"div"> & {
    children: ReactNode;
    reverse?: boolean;
    pauseOnHover?: boolean;
    paused?: boolean;
    vertical?: boolean;
    /** Integer >= 2. Leave omitted for the default four copies. */
    repeat?: number;
    fade?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId marquee
 * @ployComponentType component
 * @ployComponentTags motion, logos, ticker
 * @ployComponentDescription Automatically repeats display content. Set --duration, --gap and --fade with className. Vertical mode requires a fixed height. Copies are decorative; use a carousel for interactive slides.
 * @ployComponentStatus stable
 */
export declare function Marquee({ className, reverse, pauseOnHover, paused, children, vertical, repeat, fade, ...props }: MarqueeProps): import('react').JSX.Element;

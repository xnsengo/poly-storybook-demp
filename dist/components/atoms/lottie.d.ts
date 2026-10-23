import { ComponentPropsWithoutRef } from 'react';
/**
 * @ployComponent
 * @ployComponentId lottie
 * @ployComponentType component
 * @ployComponentTags media, animation, captured
 * @ployComponentDescription Plays the captured JSON or dotLottie URL in its measured aspect ratio.
 * @ployComponentStatus stable
 */
export declare function Lottie({ src, alt, aspectRatio, className, style, ...props }: Omit<ComponentPropsWithoutRef<"figure">, "children"> & {
    src: string;
    alt: string;
    aspectRatio?: number;
    className?: string;
}): import('react').JSX.Element;

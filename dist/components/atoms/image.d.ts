import { VariantProps } from 'class-variance-authority';
import { ImgHTMLAttributes } from 'react';
declare const imageVariants: (props?: ({
    filled?: boolean | null | undefined;
    rounded?: "none" | "default" | "full" | "card" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const RATIOS: {
    readonly square: "aspect-square";
    readonly "4/3": "aspect-[4/3]";
    readonly "3/2": "aspect-[3/2]";
    readonly "16/9": "aspect-video";
    readonly "5/3": "aspect-[5/3]";
};
type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> & Pick<VariantProps<typeof imageVariants>, "rounded"> & {
    children?: never;
    dangerouslySetInnerHTML?: never;
    /** A fixed frame. The image fills it — the two are not separable. */
    ratio?: keyof typeof RATIOS | number;
    /** How the picture fills a frame. Cropping is the default. */
    fit?: "cover" | "contain";
    /** Edge to edge: always square, whatever `rounded` says. */
    fullBleed?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId image
 * @ployComponentType component
 * @ployComponentTags media, artwork, measured
 * @ployComponentDescription Use <Image src={url} alt={description} /> in the column; it takes the site's image radius. fullBleed: edge to edge, always square. rounded="none": a deliberate square. People: Avatar, not rounded="full". ratio={width / height} sets an exact frame; presets like ratio="16/9" work. Never nest children; put captions beside Image.
 * @ployComponentStatus stable
 */
export declare function Image({ ratio, fit, rounded: requested, fullBleed, className, alt, children: _children, dangerouslySetInnerHTML: _dangerouslySetInnerHTML, ...props }: ImageProps): import('react').JSX.Element;
export {};

import { VariantProps } from 'class-variance-authority';
import { ImgHTMLAttributes } from 'react';
declare const avatarVariants: (props?: ({
    shape?: "circle" | "rounded" | "square" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & VariantProps<typeof avatarVariants> & {
    children?: never;
    dangerouslySetInnerHTML?: never;
};
/**
 * @ployComponent
 * @ployComponentId avatar
 * @ployComponentType component
 * @ployComponentTags portrait, person, measured
 * @ployComponentDescription Use <Avatar src={url} alt={name} size="md" /> for a person, cropped square at the measured size. Avatar renders img directly: never nest img or initials inside it.
 * @ployComponentStatus stable
 */
export declare function Avatar({ shape, size, className, alt, children: _children, dangerouslySetInnerHTML: _dangerouslySetInnerHTML, ...props }: AvatarProps): import('react').JSX.Element;
export {};

import { SVGProps } from 'react';
type LogoSize = {
    width?: number;
    height?: number;
};
type LogoProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & LogoSize;
/**
 * @ployComponent
 * @ployComponentId logo
 * @ployComponentType component
 * @ployComponentTags brand, identity, measured
 * @ployComponentDescription The selected brand identity, rendered at its measured proportions.
 * @ployComponentStatus stable
 */
export declare function Logo({ className, width, height, ...props }: LogoProps): import('react').JSX.Element;
export declare const logoPresentation: {
    kind: "svg" | "img" | "text";
    adaptive: boolean;
    background: string;
};
export {};

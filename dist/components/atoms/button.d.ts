import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType } from 'react';
declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | null | undefined;
    tone?: "brand" | "light" | "dark" | null | undefined;
    size?: "sm" | "md" | null | undefined;
    block?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ButtonProps = VariantProps<typeof buttonVariants> & ComponentPropsWithoutRef<"a"> & {
    /** Override the tag: an href selects an anchor; otherwise a button. */
    as?: ElementType;
    /** Merge into the child element. */
    asChild?: boolean;
};
/**
 * @ployComponent
 * @ployComponentId button
 * @ployComponentType component
 * @ployComponentTags action, cta, measured
 * @ployComponentDescription Measured action with safe spacing and an 8px icon gap. Override spacing through className. Outline inherits text/border; outline and ghost accept tone=brand|light|dark. Uses <a> with href, otherwise <button>; as overrides the tag. Pass type=submit for form actions.
 * @ployComponentStatus stable
 */
export declare function Button({ as, variant, tone, size, block, className, asChild, ...props }: ButtonProps): import('react').JSX.Element;
export {};

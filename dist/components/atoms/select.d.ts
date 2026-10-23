import { SelectHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { fieldVariants } from './field-variants';
/**
 * @ployComponent
 * @ployComponentId select
 * @ployComponentType component
 * @ployComponentTags form, field, measured
 * @ployComponentDescription The measured select. A native <select> with the chevron drawn over it, so keyboard and mobile behavior stay native.
 * @ployComponentStatus stable
 */
export declare function Select({ className, surface, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & Pick<VariantProps<typeof fieldVariants>, "surface">): import('react').JSX.Element;

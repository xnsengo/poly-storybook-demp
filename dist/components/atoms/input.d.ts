import { InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { fieldVariants } from './field-variants';
/**
 * @ployComponent
 * @ployComponentId input
 * @ployComponentType component
 * @ployComponentTags form, field, measured
 * @ployComponentDescription The measured text field. Use placeholder for text inside an empty field and aria-label or an external label for its accessible name. Do not overlay a static label on entered text. If a captured floating label is required, reserve its own space and derive its position from whether the value is empty, never from validity.
 * @ployComponentStatus stable
 */
export declare function Input({ className, surface, ...props }: InputHTMLAttributes<HTMLInputElement> & Pick<VariantProps<typeof fieldVariants>, "surface">): import('react').JSX.Element;

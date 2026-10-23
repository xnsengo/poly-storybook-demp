import { TextareaHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { fieldVariants } from './field-variants';
/**
 * @ployComponent
 * @ployComponentId textarea
 * @ployComponentType component
 * @ployComponentTags form, field, measured
 * @ployComponentDescription The measured multi-line field. Grows instead of taking the fixed control height.
 * @ployComponentStatus stable
 */
export declare function Textarea({ className, surface, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & Pick<VariantProps<typeof fieldVariants>, "surface">): import('react').JSX.Element;

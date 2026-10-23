import { ComponentPropsWithoutRef } from 'react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
/**
 * @ployComponent
 * @ployComponentId radio-group
 * @ployComponentType component
 * @ployComponentTags form, control, radio, measured
 * @ployComponentDescription The measured radio group. Radix gives it arrow-key roving focus, which a set of styled divs does not have.
 * @ployComponentStatus stable
 */
export declare function RadioGroup({ className, ...props }: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId radio-group-item
 * @ployComponentType component
 * @ployComponentTags form, control, radio, measured
 * @ployComponentDescription One option. The checkbox's box drawn round — same border, same fill, same size.
 * @ployComponentStatus stable
 */
export declare function RadioGroupItem({ className, ...props }: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>): import('react').JSX.Element;

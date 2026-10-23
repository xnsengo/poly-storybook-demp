import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from "@radix-ui/react-tabs";
declare const tabsVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const tabsPreviewClasses: Record<string, string>;
/**
 * @ployComponent
 * @ployComponentId tabs
 * @ployComponentType component
 * @ployComponentTags tabs, switcher, measured
 * @ployComponentDescription The measured tab row. Radix owns the roving arrow keys, the ARIA wiring and the one-panel-at-a-time rule.
 * @ployComponentStatus stable
 */
export declare function Tabs({ variant, className, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & VariantProps<typeof tabsVariants>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tabs-list
 * @ployComponentType component
 * @ployComponentTags tabs, switcher, measured
 * @ployComponentDescription The row of triggers, at the source's own measured treatment.
 * @ployComponentStatus stable
 */
export declare function TabsList({ className, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.List>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tabs-trigger
 * @ployComponentType component
 * @ployComponentTags tabs, switcher, measured
 * @ployComponentDescription One tab. Marks itself active the way the source marks its own.
 * @ployComponentStatus stable
 */
export declare function TabsTrigger({ className, children, description, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    description?: string;
}): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tabs-content
 * @ployComponentType component
 * @ployComponentTags tabs, switcher
 * @ployComponentDescription One panel. Radix mounts only the active one.
 * @ployComponentStatus stable
 */
export declare function TabsContent({ className, ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Content>): import('react').JSX.Element;
export {};

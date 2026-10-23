import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
/** Lucide's `x`, inlined. One glyph does not justify a dependency. */
export declare function CloseIcon({ className, ...props }: ComponentPropsWithoutRef<"svg">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription A modal. Radix owns the focus trap, Escape, scroll lock and the aria-modal wiring — none of which is visible in a screenshot when it is missing.
 * @ployComponentStatus stable
 */
export declare function Dialog(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Root>): import('react').JSX.Element;
export declare function DialogTrigger(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-content
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog, measured
 * @ployComponentDescription The modal panel: a Card at the page's overlay elevation, portalled so an ancestor with overflow:hidden cannot clip it.
 * @ployComponentStatus stable
 */
export declare function DialogContent({ children, className, animate, showCloseButton, closeLabel, overlayClassName, ...props }: {
    children: ReactNode;
    className?: string;
    /** Extra classes for the scrim, e.g. a higher z-index. Empty by default. */
    overlayClassName?: string;
    /** Accessible name of the close button, for localized dialogs. */
    closeLabel?: string;
    /** Fade and zoom on open. Defaults to what this source does elsewhere. */
    animate?: boolean;
    /** The X in the top-right. Turn it off for a dialog that dismisses its own way. */
    showCloseButton?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-header
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription Title and description. Layout only: no surface of its own and no rule under it — the Card is the surface.
 * @ployComponentStatus stable
 */
export declare function DialogHeader({ className, ...props }: ComponentPropsWithoutRef<"div">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-footer
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription The action row. Layout only: no surface and no divider above it.
 * @ployComponentStatus stable
 */
export declare function DialogFooter({ className, ...props }: ComponentPropsWithoutRef<"div">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-title
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription Required by Radix: without a Title the dialog has no accessible name and Radix warns on every open. Renders through Heading, so it sits on the measured scale.
 * @ployComponentStatus stable
 */
export declare function DialogTitle({ children, level, className, ...props }: {
    children: ReactNode;
    /** Which step of the measured scale. A dialog title is usually h3. */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Title>, "className" | "children">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-description
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription The supporting line under the title. Renders through Text, at the page's secondary colour.
 * @ployComponentStatus stable
 */
export declare function DialogDescription({ children, className, ...props }: {
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Description>, "className" | "children">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId dialog-close
 * @ployComponentType component
 * @ployComponentTags overlay, modal, dialog
 * @ployComponentDescription Dismisses the dialog. Pass children to use your own control; with none it draws the X.
 * @ployComponentStatus stable
 */
export declare function DialogClose({ children, className, ...props }: {
    children?: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Close>, "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId popover
 * @ployComponentType component
 * @ployComponentTags overlay, popover
 * @ployComponentDescription A non-modal panel anchored to its trigger. Closes on outside pointerdown and Escape, and restores focus.
 * @ployComponentStatus stable
 */
export declare function Popover(props: ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>): import('react').JSX.Element;
export declare function PopoverTrigger(props: ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>): import('react').JSX.Element;
export declare function PopoverAnchor(props: ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId popover-content
 * @ployComponentType component
 * @ployComponentTags overlay, popover, measured
 * @ployComponentDescription The popover panel. shadcn's positioning and motion; the surface is this page's own Card at overlay elevation.
 * @ployComponentStatus stable
 */
export declare function PopoverContent({ children, className, align, sideOffset, animate, ...props }: {
    children: ReactNode;
    className?: string;
    /** Fade, zoom and slide from the trigger's side. */
    animate?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tooltip-provider
 * @ployComponentType component
 * @ployComponentTags overlay, tooltip
 * @ployComponentDescription Radix requires one above any tooltip. Tooltip mounts its own, so this is only needed to share a delay across a page.
 * @ployComponentStatus stable
 */
export declare function TooltipProvider({ delayDuration, ...props }: ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tooltip
 * @ployComponentType component
 * @ployComponentTags overlay, tooltip
 * @ployComponentDescription A label on hover and on keyboard focus. Wraps its own Provider so a single tooltip works without one.
 * @ployComponentStatus stable
 */
export declare function Tooltip(props: ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>): import('react').JSX.Element;
export declare function TooltipTrigger(props: ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId tooltip-content
 * @ployComponentType component
 * @ployComponentTags overlay, tooltip, measured
 * @ployComponentDescription The label itself. NOT a card: a tooltip is a label, so it takes the page's inverse surface rather than the overlay elevation.
 * @ployComponentStatus stable
 */
export declare function TooltipContent({ className, sideOffset, children, animate, ...props }: {
    className?: string;
    /** Fade, zoom and slide in. */
    animate?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, "className">): import('react').JSX.Element;

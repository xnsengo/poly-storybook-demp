import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Accordion from "@radix-ui/react-accordion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
/** Unstyled interaction parts for sections that own their navigation shell. */
export declare const NavbarParts: typeof NavigationMenu;
export declare const NavbarAccordion: typeof Accordion;
export declare const NavbarDialog: typeof Dialog;
/**
 * @ployComponent
 * @ployComponentId navbar-skip-link
 * @ployComponentType component
 * @ployComponentTags navigation, accessibility
 * @ployComponentDescription First focusable item in a site header. Pages provide <main id="main-content" tabIndex={-1}>; targetId can select another main landmark.
 * @ployComponentStatus stable
 */
export declare function NavbarSkipLink({ targetId, label, className, ...props }?: Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    targetId?: string;
    label?: string;
}): import('react').JSX.Element;
/**
 * One treatment for a nav link and a dropdown trigger both, so a menu label
 * cannot end up a different size from the plain link beside it.
 */
export declare const navItemVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
export type NavItemVariants = VariantProps<typeof navItemVariants>;
/**
 * How the bar sits on the page. A variant, like every other primitive's axis —
 * the measurement picks the default, and a call site names the other one.
 */
declare const navbarVariants: (props?: ({
    position?: "fixed" | "absolute" | "static" | "sticky" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * @ployComponent
 * @ployComponentId navbar
 * @ployComponentType component
 * @ployComponentTags navigation, header, dropdown, measured
 * @ployComponentDescription The measured bar. Radix NavigationMenu owns the open state, so one dropdown is open at a time and clicking the page closes it.
 * @ployComponentStatus stable
 */
export declare function Navbar({ brand, brandFlush, children, actions, mobile, position, className, ...props }: {
    /** The wordmark. It never shrinks — see the flex-none below. */
    brand: ReactNode;
    /**
     * Pull the mark left by the bar's own gutter at desktop, so it lines up with
     * the page content rather than sitting a gutter further in.
     *
     * Off by default and deliberately not measured. Whether a bar reads better
     * flush depends on the mark's own bearing, which no probe can see: a wordmark
     * with built-in whitespace already looks flush and moves too far, and on one
     * source it simply looked wrong. A tenant turns it on when it helps.
     */
    brandFlush?: boolean;
    /** NavbarLink and NavbarMenu items. */
    children: ReactNode;
    /** CTAs on the right of the bar. */
    actions?: ReactNode;
    /** Contents of the mobile panel. Omit for a bar with no mobile menu. */
    mobile?: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<"header">, "className"> & VariantProps<typeof navbarVariants>): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-link
 * @ployComponentType component
 * @ployComponentTags navigation, header
 * @ployComponentDescription A plain nav link — no dropdown. Same treatment as a menu trigger.
 * @ployComponentStatus stable
 */
export declare function NavbarLink({ href, children, className, ...props }: {
    href: string;
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Link>, "href" | "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-menu
 * @ployComponentType component
 * @ployComponentTags navigation, header, dropdown
 * @ployComponentDescription A nav item that opens a panel. Pass the sub-navigation as children; NavbarMenuLink renders one row of it.
 * @ployComponentStatus stable
 */
export declare function NavbarMenu({ label, layout, panelClassName, children, className, ...props }: {
    label: string;
    /** A list under its trigger, or a column grid across the bar. */
    layout?: "list" | "mega";
    panelClassName?: string;
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-menu-link
 * @ployComponentType component
 * @ployComponentTags navigation, header, dropdown
 * @ployComponentDescription One row inside a dropdown panel.
 * @ployComponentStatus stable
 */
export declare function NavbarMenuLink({ href, children, description, className, ...props }: {
    href: string;
    children: ReactNode;
    /** Optional second line, for a nav that describes its destinations. */
    description?: string;
    className?: string;
} & Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Link>, "href" | "className">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-mobile-nav
 * @ployComponentType component
 * @ployComponentTags navigation, header, mobile, measured
 * @ployComponentDescription The mobile panel's list. Wrap the sheet's contents in this so a group can open.
 * @ployComponentStatus stable
 */
export declare function NavbarMobileNav({ children, className, defaultValue, size, bordered, ...props }: {
    children: ReactNode;
    className?: string;
    /**
     * The panel's type. A phone menu is often set far larger than the bar it
     * replaces — `heading` is this page's own h3. Set it on the PANEL so a
     * group row and a plain row cannot end up different sizes.
     */
    size?: "nav" | "heading";
    /** A rule under every row. Off, the rows space themselves symmetrically. */
    bordered?: boolean;
    /** Open one group on load. Radix keys groups by string, never by number. */
    defaultValue?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "children" | "value" | "defaultValue" | "dir" | "onChange">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-mobile-group
 * @ployComponentType component
 * @ployComponentTags navigation, header, mobile, disclosure, measured
 * @ployComponentDescription A subnav on a phone: the label opens to reveal its links. Every desktop NavbarMenu needs one of these, or its links are unreachable on mobile.
 * @ployComponentStatus stable
 */
export declare function NavbarMobileGroup({ label, children, value, className, ...props }: {
    label: string;
    children: ReactNode;
    /** Optional: defaults to the label. Radix needs one stable id per row. */
    value?: string;
    className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className" | "value">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId navbar-mobile-link
 * @ployComponentType component
 * @ployComponentTags navigation, header, mobile, measured
 * @ployComponentDescription One row in the mobile panel — a top-level destination, or a link inside a group.
 * @ployComponentStatus stable
 */
export declare function NavbarMobileLink({ href, children, className, ...props }: {
    href: string;
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">): import('react').JSX.Element;
export {};

import { ReactNode } from 'react';
export type FooterLink = {
    label: string;
    href: string;
    external?: boolean;
    cookiePreferences?: boolean;
    /** Accessible name override, e.g. a localized "opens in a new tab" label. */
    ariaLabel?: string;
    /** Language of the link text when it differs from the page (e.g. "fr"). */
    lang?: string;
};
export type FooterBadge = {
    label: string;
    href: string;
    src: string;
    alt: string;
};
export declare const footerPrimaryLinks: FooterLink[];
export declare const footerSecondaryLinks: FooterLink[];
export declare const footerLegalLinks: FooterLink[];
export declare const footerBadges: FooterBadge[];
/** Typed, always-visible footer destinations, including the cookie-manager trigger. */
export declare function SiteFooterLinks({ items, variant, onCookiePreferences, }: {
    items: FooterLink[];
    variant?: "primary" | "secondary" | "legal";
    onCookiePreferences?: () => void;
}): import('react').JSX.Element;
/** Store badges retain their captured dimensions and wrap instead of shrinking. */
export declare function SiteFooterApp({ title, badges, benefits, }: {
    title: string;
    badges: FooterBadge[];
    benefits: FooterLink;
}): import('react').JSX.Element;
export type FooterSocial = {
    label: string;
    href: string;
    icon: ReactNode;
    /** Accessible name override; defaults to "<label> opens in a new tab". */
    ariaLabel?: string;
};
export declare function SiteFooterSocials({ items }: {
    items: FooterSocial[];
}): import('react').JSX.Element;

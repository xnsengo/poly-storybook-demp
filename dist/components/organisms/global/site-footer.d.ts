import { FooterBadge, FooterLink, FooterSocial } from '../../molecules/site-footer-links';
export type SiteFooterProps = {
    primaryLinks?: FooterLink[];
    secondaryLinks?: FooterLink[];
    legalLinks?: FooterLink[];
    socialLinks?: FooterSocial[];
    appTitle?: string;
    appBadges?: FooterBadge[];
    appBenefits?: FooterLink;
    slogan?: string;
    subsidiaryNote?: string;
    copyrightLabel?: string;
    onCookiePreferences?: () => void;
    className?: string;
};
/**
 * @ployComponent
 * @ployComponentId site-footer
 * @ployComponentType section
 * @ployComponentTags footer, links, app, legal
 * @ployComponentDescription Investia's dark page footer with destination groups, app badges, social links, legal links and subsidiary information.
 * @ployComponentStatus stable
 *
 * Defaults reproduce the captured English footer. Link arrays, social artwork,
 * badge src/alt, app labels, slogan, subsidiary copy and copyright label are
 * editable; explicit empty arrays or strings remain empty. The year starts at
 * the captured 2026 value and updates after mount.
 *
 * Desktop uses three flexible columns inside a 1140px inner container; mobile
 * keeps all groups visible in source order with 16px gutters. Legal links and
 * badges wrap in narrower hosts. This footer supplies its own opaque inverse
 * surface and normal-flow spacing; the source has no sticky artwork/reveal
 * band, newsletter form or adjacent CTA inside this region.
 *
 * Connect onCookiePreferences to the host consent manager. By default the
 * trigger invokes OneTrust when available, otherwise dispatches the window
 * event `investia:cookie-preferences` for the host to handle. No form handler
 * is needed. External destinations retain new-tab labeling and focus states.
 */
export declare function SiteFooter({ primaryLinks, secondaryLinks, legalLinks, socialLinks, appTitle, appBadges, appBenefits, slogan, subsidiaryNote, copyrightLabel, onCookiePreferences, className, }?: SiteFooterProps): import('react').JSX.Element;

import { ComponentProps } from 'react';
import { SiteNavSearch, SiteNavLink } from './site-nav-content';
export type SiteNavProps = {
    position?: "static";
    links?: SiteNavLink[];
    accounts?: SiteNavLink[];
    advisor?: SiteNavLink;
    language?: SiteNavLink;
    searchPlaceholder?: string;
    search?: Omit<ComponentProps<typeof SiteNavSearch>, "placeholder">;
    /** Destination and accessible name of the logo link. */
    homeHref?: string;
    homeLabel?: string;
    /** Optional image logo (e.g. the French wordmark); defaults to the inline English logo. */
    logoSrc?: string;
    logoAlt?: string;
    connectLabel?: string;
    /** Href of the page being viewed; the matching primary link gets aria-current and investia.ca's blue underline. */
    currentHref?: string;
    labels?: {
        mainNav?: string;
        accountNav?: string;
        mobileNav?: string;
        menuTitle?: string;
        openMenu?: string;
        closeMenu?: string;
        skipToContent?: string;
    };
};
/**
 * @ployComponent
 * @ployComponentId site-nav
 * @ployComponentType section
 * @ployComponentTags navigation, desktop, mobile
 * @ployComponentDescription Investia's white brand bar, navy utility strip, account dropdown and viewport mobile menu.
 * @ployComponentStatus stable
 *
 * The default position="static" keeps the source header in normal document flow:
 * 124px on desktop and 60px on mobile, with no page offset required. The account
 * menu opens on click. Primary items are plain links with no dropdown panel, as on
 * investia.ca. Below 1200px a modal menu replaces both desktop rows; the account
 * disclosure keeps the captured destinations accessible.
 * Links, account destinations, utility links and search copy can be
 * overridden independently. Provide <main id="main-content" tabIndex={-1}>.
 * Bilingual-ready: every visible and accessible label (connect, search, menu,
 * nav landmarks, language toggle with its lang attribute) and the logo image
 * are props, so a French page passes its own copy and the FR wordmark.
 * currentHref marks the matching primary link as the current page (blue label and underline).
 * The guide may supply a sample-only backing surface; this header owns only its
 * white bar, navy utility strip and pale-blue expanded panel.
 */
export declare function SiteNav({ position, links, accounts, advisor, language, searchPlaceholder, search, homeHref, homeLabel, logoSrc, logoAlt, connectLabel, currentHref, labels, }?: SiteNavProps): import('react').JSX.Element;

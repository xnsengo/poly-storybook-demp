export type SiteNavLink = {
    label: string;
    href: string;
    /** Language of the link text when it differs from the page (e.g. "fr"). */
    lang?: string;
    /** Accessible name override. */
    ariaLabel?: string;
};
export declare const primaryLinks: SiteNavLink[];
export declare const accountLinks: SiteNavLink[];
export declare const preventHover: (event: {
    preventDefault(): void;
}) => void;
export declare function SiteNavSearch({ placeholder, inputLabel, submitLabel, action, }?: {
    placeholder?: string;
    inputLabel?: string;
    submitLabel?: string;
    action?: string;
}): import('react').JSX.Element;
export declare function SiteNavPortal({ title, description, href, actionLabel, informationLabel, informationHref, }?: {
    title?: string;
    description?: string;
    href?: string;
    actionLabel?: string;
    informationLabel?: string;
    informationHref?: string;
}): import('react').JSX.Element;
export declare function SiteNavConnect({ links, label, navLabel, }?: {
    links?: SiteNavLink[];
    label?: string;
    navLabel?: string;
}): import('react').JSX.Element;
export declare function SiteNavMobileAccounts({ links, advisor, language, connectLabel, }?: {
    links?: SiteNavLink[];
    advisor?: SiteNavLink;
    language?: SiteNavLink;
    connectLabel?: string;
}): import('react').JSX.Element;

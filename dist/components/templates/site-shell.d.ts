import { ReactNode } from 'react';
import { Locale, PageKey } from '../../content/site/routes';
export type SiteShellProps = {
    locale?: Locale;
    /** Route key from src/content/site/routes.ts; sets the language toggle target. */
    page: PageKey;
    children: ReactNode;
};
/**
 * @ployComponent
 * @ployComponentId site-shell
 * @ployComponentType component
 * @ployComponentTags layout, navigation, footer, bilingual
 * @ployComponentDescription Shared Investia page chrome for every route: site nav, <main id="main-content">, footer and CIRO/OCRI regulatory strip, in EN or FR. Nav, footer and regulatory copy come from the homepage EN/FR dictionary. The `page` key (src/content/site/routes.ts) points the language toggle at the same page in the other language and the logo at that locale's homepage, so the toggle never leaves the site, and marks the matching menu link as the current page. Pass page sections as children.
 * @ployComponentStatus stable
 */
export declare function SiteShell({ locale, page, children }: SiteShellProps): import('react').JSX.Element;

"use client";

import type { ReactNode } from "react";
import { SiteNav } from "@/components/organisms/global/site-nav";
import { SiteFooter } from "@/components/organisms/global/site-footer";
import { Body3RegulatoryLogo } from "@/components/organisms/global/body-3-regulatory-logo";
import { ICONS } from "@/components/atoms/icons";
import { homeContent } from "@/content/home/home-content";
import {
  ROUTES,
  otherLocale,
  type Locale,
  type PageKey,
} from "@/content/site/routes";

const socialIcons = {
  linkedin: <ICONS.socialLinkedin />,
  facebook: <ICONS.socialFacebook />,
};

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
export function SiteShell({ locale = "en", page, children }: SiteShellProps) {
  const content = homeContent[locale];
  const { socialLinks, ...footer } = content.footer;
  const target = otherLocale(locale);
  return (
    <>
      <SiteNav
        {...content.nav}
        homeHref={ROUTES.home[locale]}
        currentHref={ROUTES[page][locale]}
        language={
          content.nav.language && {
            ...content.nav.language,
            href: ROUTES[page][target],
          }
        }
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="bg-ploy-background-primary text-ploy-text-primary outline-none"
      >
        {children}
      </main>
      <SiteFooter
        {...footer}
        socialLinks={socialLinks.map(({ network, ...link }) => ({
          ...link,
          icon: socialIcons[network],
        }))}
      />
      <Body3RegulatoryLogo {...content.regulatory} />
    </>
  );
}

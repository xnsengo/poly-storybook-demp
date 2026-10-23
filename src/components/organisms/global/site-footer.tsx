"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import { ICONS } from "@/components/atoms/icons";
import {
  SiteFooterApp,
  SiteFooterLinks,
  SiteFooterSocials,
  footerBadges,
  footerLegalLinks,
  footerPrimaryLinks,
  footerSecondaryLinks,
  type FooterBadge,
  type FooterLink,
  type FooterSocial,
} from "@/components/molecules/site-footer-links";

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

const defaultSocialLinks: FooterSocial[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/investiafinancialservices",
    icon: <ICONS.socialLinkedin />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/InvestiaFinancialServices/",
    icon: <ICONS.socialFacebook />,
  },
];
const defaultBenefits: FooterLink = {
  label: "Discover the benefits",
  href: "https://investia.ca/mobile-app",
};

function openCookiePreferences() {
  const manager = (
    window as Window & { OneTrust?: { ToggleInfoDisplay?: () => void } }
  ).OneTrust;
  if (manager?.ToggleInfoDisplay) {
    manager.ToggleInfoDisplay();
  } else {
    window.dispatchEvent(new CustomEvent("investia:cookie-preferences"));
  }
}

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
export function SiteFooter({
  primaryLinks = footerPrimaryLinks,
  secondaryLinks = footerSecondaryLinks,
  legalLinks = footerLegalLinks,
  socialLinks = defaultSocialLinks,
  appTitle = "Download the Investia app",
  appBadges = footerBadges,
  appBenefits = defaultBenefits,
  slogan = "Get ahead",
  subsidiaryNote = "Investia Financial Services Inc. is a wholly-owned subsidiary of Industrial Alliance Insurance and Financial Services Inc., a life and health insurance company which operates under the trade name iA Financial Group.",
  copyrightLabel = "Investia Financial Services - All rights reserved",
  onCookiePreferences = openCookiePreferences,
  className = "",
}: SiteFooterProps = {}) {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      data-ploy-component="site-footer"
      className={`relative z-[300] bg-ploy-neutral-inverse py-12 text-ploy-neutral-light md:py-[60px] ${className}`}
    >
      <Container className="px-4 md:px-8">
        <div className="grid min-w-0 grid-cols-1 md:grid-cols-3 md:gap-x-9 md:pb-9">
          <div className="mb-9 min-w-0 md:mb-0">
            <SiteFooterLinks items={primaryLinks} variant="primary" />
          </div>
          <div className="mb-[72px] min-w-0 md:mb-0">
            <SiteFooterLinks items={secondaryLinks} />
          </div>
          <div className="mb-[74px] min-w-0 md:mb-0">
            <SiteFooterApp
              title={appTitle}
              badges={appBadges}
              benefits={appBenefits}
            />
          </div>
        </div>
        <div className="mb-9 border-b border-white/25 pb-9">
          <SiteFooterSocials items={socialLinks} />
        </div>
        <div className="mb-9">
          <SiteFooterLinks
            items={legalLinks}
            variant="legal"
            onCookiePreferences={onCookiePreferences}
          />
        </div>
        <Text className="m-0 mb-9 font-heading text-[32px] leading-[41.28px] font-normal">
          {slogan}
        </Text>
        <Text className="m-0 mb-3 text-[12px] leading-[15.48px] font-normal">
          {subsidiaryNote}
        </Text>
        <Text className="m-0 text-[12px] leading-[17px] font-normal">
          © {year} {copyrightLabel}
        </Text>
      </Container>
    </footer>
  );
}

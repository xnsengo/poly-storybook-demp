"use client";

import { ExternalLink, LockKeyhole, Search } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { Heading } from "@/components/atoms/heading";
import { NavbarAccordion, NavbarParts } from "@/components/molecules/navbar";

export type SiteNavLink = {
  label: string;
  href: string;
  /** Language of the link text when it differs from the page (e.g. "fr"). */
  lang?: string;
  /** Accessible name override. */
  ariaLabel?: string;
};
export const primaryLinks: SiteNavLink[] = [
  {
    label: "The Investia experience",
    href: "/investia-experience",
  },
  {
    label: "Products and services",
    href: "/products-and-services",
  },
  {
    label: "Find an advisor",
    href: "/find-an-advisor",
  },
];
export const accountLinks: SiteNavLink[] = [
  {
    label: "Advisor Centre",
    href: "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280",
  },
  { label: "Client Portal", href: "https://client.investia.ca/" },
];
export const preventHover = (event: { preventDefault(): void }) =>
  event.preventDefault();

export function SiteNavSearch({
  placeholder = "Search",
  inputLabel = "Search input",
  submitLabel = "Search",
  action = "https://investia.ca/search",
}: {
  placeholder?: string;
  inputLabel?: string;
  submitLabel?: string;
  action?: string;
} = {}) {
  return (
    <form
      role="search"
      action={action}
      method="get"
      className="relative h-10 w-[192px] shrink-0 overflow-hidden rounded-[4px] border border-[#7f7f7f] bg-ploy-background-primary"
    >
      <Input
        type="search"
        name="q"
        aria-label={inputLabel}
        placeholder={placeholder}
        className="h-[38px] w-full border-0 pr-[38px]"
      />
      <Button
        as="button"
        type="submit"
        variant="ghost"
        aria-label={submitLabel}
        className="absolute inset-y-0 right-0 h-[38px] w-[38px] rounded-none border-0 p-0"
      >
        <Search size={16} />
      </Button>
    </form>
  );
}

export function SiteNavPortal({
  title = "Client Portal",
  description = "Already a client? Register now and access your portfolio online.",
  href = "https://client.investia.ca/",
  actionLabel = "Create account",
  informationLabel = "About multi-factor authentication (MFA)",
  informationHref = "https://investia.ca/multi-factor-authentication-clients",
}: {
  title?: string;
  description?: string;
  href?: string;
  actionLabel?: string;
  informationLabel?: string;
  informationHref?: string;
} = {}) {
  return (
    <div className="max-w-[470px]">
      <a href={href} className="block no-underline">
        <Heading level={1} className="text-ploy-accent-primary">
          {title}
        </Heading>
        <Text className="mt-6 text-ploy-text-primary">{description}</Text>
        <Text
          as="span"
          className="mt-6 inline-flex items-center gap-1 font-bold text-ploy-accent-primary"
        >
          {actionLabel}
          <ExternalLink size={17} />
        </Text>
      </a>
      <a
        href={informationHref}
        className="mt-5 block max-w-[300px] text-ploy-accent-primary"
      >
        <Text className="font-bold leading-[22px]">{informationLabel}</Text>
      </a>
    </div>
  );
}

export function SiteNavConnect({
  links = accountLinks,
  label = "Connect",
  navLabel = "Account navigation",
}: { links?: SiteNavLink[]; label?: string; navLabel?: string } = {}) {
  return (
    <NavbarParts.Root className="relative" aria-label={navLabel}>
      <NavbarParts.List className="m-0 list-none p-0">
        <NavbarParts.Item className="relative">
          <NavbarParts.Trigger
            asChild
            onPointerMove={preventHover}
            onPointerLeave={preventHover}
          >
            <Button
              as="button"
              variant="primary"
              className="h-10 rounded-none px-4 text-sm leading-[16px]"
            >
              <Text
                as="span"
                variant="small"
                className="font-bold leading-[16px]"
              >
                {label}
              </Text>
              <LockKeyhole size={14} className="shrink-0" />
            </Button>
          </NavbarParts.Trigger>
          <NavbarParts.Content
            onPointerMove={preventHover}
            onPointerLeave={preventHover}
            className="absolute left-0 top-[60px] z-50 w-[137px] overflow-hidden rounded-[4px] border border-[#7f7f7f] bg-ploy-background-primary"
          >
            {links.map((link) => (
              <NavbarParts.Link
                key={link.label}
                href={link.href}
                className="flex h-10 items-center px-4 hover:bg-ploy-background-secondary"
              >
                <Text
                  as="span"
                  variant="small"
                  className="whitespace-nowrap font-bold text-ploy-text-primary"
                >
                  {link.label}
                </Text>
              </NavbarParts.Link>
            ))}
          </NavbarParts.Content>
        </NavbarParts.Item>
      </NavbarParts.List>
    </NavbarParts.Root>
  );
}

export function SiteNavMobileAccounts({
  links = accountLinks,
  advisor = {
    label: "Advisor opportunities",
    href: "https://investia.ca/advisor-opportunities",
  },
  language = { label: "FR", href: "/accueil", lang: "fr" },
  connectLabel = "Connect",
}: {
  links?: SiteNavLink[];
  advisor?: SiteNavLink;
  language?: SiteNavLink;
  connectLabel?: string;
} = {}) {
  const row =
    "flex h-10 w-full items-center justify-center border-b border-white/25 px-4 text-white hover:bg-ploy-accent-primary hover:underline";
  return (
    <div className="shrink-0 bg-[#01233f]">
      <a href={advisor.href} className={row}>
        <Text as="span" variant="small" className="font-bold leading-4">
          {advisor.label}
        </Text>
      </a>
      <NavbarAccordion.Root type="single" collapsible>
        <NavbarAccordion.Item value="connect">
          <NavbarAccordion.Header>
            <NavbarAccordion.Trigger
              className={`${row} data-[state=open]:bg-ploy-accent-primary`}
            >
              <Text as="span" variant="small" className="font-bold leading-4">
                {connectLabel}
              </Text>
              <LockKeyhole size={14} className="ml-2" />
            </NavbarAccordion.Trigger>
          </NavbarAccordion.Header>
          <NavbarAccordion.Content>
            {links.map((link) => (
              <a key={link.label} href={link.href} className={row}>
                <Text as="span" variant="small" className="font-bold leading-4">
                  {link.label}
                </Text>
              </a>
            ))}
          </NavbarAccordion.Content>
        </NavbarAccordion.Item>
      </NavbarAccordion.Root>
      <a
        href={language.href}
        lang={language.lang}
        aria-label={language.ariaLabel}
        className={row}
      >
        <Text as="span" variant="small" className="font-bold leading-4">
          {language.label}
        </Text>
      </a>
    </div>
  );
}

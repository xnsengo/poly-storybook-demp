import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@/components/atoms/link";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";

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

export const footerPrimaryLinks: FooterLink[] = [
  { label: "About us", href: "https://investia.ca/about-investia" },
  { label: "Contact us", href: "https://investia.ca/contact-us" },
  { label: "Careers", href: "https://investia.ca/career" },
];
export const footerSecondaryLinks: FooterLink[] = [
  {
    label: "Connect to the Client Portal",
    href: "https://client.investia.ca/",
    external: true,
  },
  {
    label: "Find an advisor",
    href: "/find-an-advisor",
  },
  { label: "Advice Zone", href: "https://ia.ca/advice-zone", external: true },
  {
    label: "Economic news",
    href: "https://ia.ca/economic-publications",
    external: true,
  },
];
export const footerLegalLinks: FooterLink[] = [
  {
    label: "Unclaimed property",
    href: "https://investia.ca/unclaimed-property",
  },
  {
    label: "Legal and compliance",
    href: "https://investia.ca/legal-and-compliance",
  },
  { label: "Terms of use", href: "https://investia.ca/terms-conditions" },
  {
    label: "Privacy",
    href: "https://ia.ca/protection-personal-information",
    external: true,
  },
  {
    label: "Accessibility",
    href: "https://ia.ca/accessibility",
    external: true,
  },
  { label: "Sitemap", href: "https://investia.ca/site-map" },
  {
    label: "Investia Administrative Fee Schedule",
    href: "https://investia.ca/grille-frais",
  },
  {
    label: "iA Financial Group",
    href: "https://ia.ca/individuals",
    external: true,
  },
  {
    label: "Cookies preference",
    href: "#cookie-preferences",
    cookiePreferences: true,
  },
];
export const footerBadges: FooterBadge[] = [
  {
    label: "App Store",
    alt: "App Store",
    src: "/images/2fd22d0a-app-store-en.webp",
    href: "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-en-investia-footer&mt=8",
  },
  {
    label: "Google Play",
    alt: "Google Play",
    src: "/images/a08910f6-google-play-en.webp",
    href: "https://play.google.com/store/apps/details?id=ca.investia.mobile&hl=en&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-en-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-en-investia-footer",
  },
];

const ringClass =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";
const focusClass = `${ringClass} hover:underline`;
// investia.ca footer links (primary and secondary columns) hover to #dbf0ff; legal links only underline.
const lightHover = "hover:text-[#dbf0ff]";

/** Typed, always-visible footer destinations, including the cookie-manager trigger. */
export function SiteFooterLinks({
  items,
  variant = "secondary",
  onCookiePreferences,
}: {
  items: FooterLink[];
  variant?: "primary" | "secondary" | "legal";
  onCookiePreferences?: () => void;
}) {
  const primary = variant === "primary";
  const legal = variant === "legal";
  return (
    <ul
      className={
        legal
          ? "m-0 flex list-none flex-col flex-wrap gap-x-8 gap-y-4 p-0 md:flex-row md:items-center"
          : `m-0 flex list-none flex-col p-0 ${primary ? "gap-6" : "gap-5"}`
      }
    >
      {items.map((item) => (
        <li
          key={`${item.href}-${item.label}`}
          className={`min-w-0 ${primary ? "border-b border-white/25 pb-6" : ""}`}
        >
          <Text
            as="div"
            className={`m-0 ${primary ? "font-heading text-[21px] leading-[23px] font-bold" : legal ? "text-[14px] leading-[23px] font-semibold" : "text-[17px] leading-[23px] font-bold"}`}
          >
            {item.cookiePreferences ? (
              <Button
                as="button"
                type="button"
                variant="ghost"
                tone="light"
                onClick={onCookiePreferences}
                className={`h-auto min-h-[23px] justify-start rounded-none border-0 p-0 text-[14px] leading-[23px] font-semibold whitespace-normal ${focusClass}`}
              >
                {item.label}
              </Button>
            ) : (
              <Link
                tone="inherit"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={
                  item.ariaLabel ??
                  (item.external ? `${item.label} opens in a new tab` : undefined)
                }
                lang={item.lang}
                className={`inline items-baseline ${focusClass} ${legal ? "" : lightHover}`}
              >
                {item.label}
                {item.external && (
                  <ExternalLink
                    aria-hidden="true"
                    size={12}
                    className="ml-1 inline-block align-baseline"
                  />
                )}
              </Link>
            )}
          </Text>
        </li>
      ))}
    </ul>
  );
}

/** Store badges retain their captured dimensions and wrap instead of shrinking. */
export function SiteFooterApp({
  title,
  badges,
  benefits,
}: {
  title: string;
  badges: FooterBadge[];
  benefits: FooterLink;
}) {
  return (
    <div className="min-w-0 max-w-[300px]">
      <Text className="m-0 mb-4 text-[17px] leading-[22px] font-bold">
        {title}
      </Text>
      <div className="mb-4 flex min-h-[45px] flex-wrap items-start gap-2">
        {badges.map((badge) => (
          <Link
            key={badge.href}
            href={badge.href}
            aria-label={badge.label}
            tone="inherit"
            className={`inline-flex flex-none ${ringClass}`}
          >
            <img
              src={badge.src}
              alt={badge.alt}
              width={135}
              height={40}
              className="h-10 w-[135px]"
            />
          </Link>
        ))}
      </div>
      <Text className="m-0 text-[14px] leading-[23px] font-semibold">
        <Link
          tone="inherit"
          href={benefits.href}
          className={`group inline-flex items-center gap-1 ${ringClass} ${lightHover}`}
        >
          <span className="underline underline-offset-2 group-hover:no-underline">
            {benefits.label}
          </span>
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </Text>
    </div>
  );
}

export type FooterSocial = {
  label: string;
  href: string;
  icon: ReactNode;
  /** Accessible name override; defaults to "<label> opens in a new tab". */
  ariaLabel?: string;
};
export function SiteFooterSocials({ items }: { items: FooterSocial[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap items-center gap-x-8 gap-y-4 p-0">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            tone="inherit"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel ?? `${item.label} opens in a new tab`}
            className={`flex size-9 items-center justify-center transition-colors duration-[650ms] ${ringClass} ${lightHover}`}
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}

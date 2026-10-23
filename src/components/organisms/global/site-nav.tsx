"use client";

import { useState, type ComponentProps } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms/logo";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { Text } from "@/components/atoms/text";
import {
  NavbarDialog,
  NavbarParts,
  NavbarSkipLink,
} from "@/components/molecules/navbar";
import {
  accountLinks,
  primaryLinks,
  SiteNavConnect,
  SiteNavMobileAccounts,
  SiteNavSearch,
  type SiteNavLink,
} from "./site-nav-content";

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
export function SiteNav({
  position = "static",
  links = primaryLinks,
  accounts = accountLinks,
  advisor = {
    label: "Advisor opportunities",
    href: "https://investia.ca/advisor-opportunities",
  },
  language = { label: "FR", href: "/accueil", lang: "fr" },
  searchPlaceholder = "Search",
  search = {},
  homeHref = "/",
  homeLabel = "Investia home",
  logoSrc,
  logoAlt = "",
  connectLabel = "Connect",
  currentHref,
  labels = {},
}: SiteNavProps = {}) {
  const isCurrent = (href: string) => Boolean(currentHref) && href === currentHref;
  // investia.ca .menu-principal-lien.actif: #064dd9 label with a 2px underline 8px below; #2962ff on hover.
  const currentDesktop =
    "relative !text-[#064dd9] hover:!text-[#2962ff] before:absolute before:inset-x-4 before:bottom-2 before:h-[2px] before:rounded-[2px] before:bg-[#064dd9] before:content-[''] hover:before:bg-[#2962ff]";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState("");
  const {
    mainNav = "Main navigation",
    accountNav = "Account navigation",
    mobileNav = "Mobile main navigation",
    menuTitle = "Investia navigation",
    openMenu = "Open menu",
    closeMenu = "Close menu",
    skipToContent = "Skip to main content",
  } = labels;
  const brand = (
    <a href={homeHref} aria-label={homeLabel} className="block shrink-0">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={logoAlt}
          width={228}
          height={42}
          className="block h-[42px] w-[228px] max-w-full object-contain object-left"
        />
      ) : (
        <Logo
          width={228}
          height={42}
          className="block h-[42px] w-[228px] max-w-full"
        />
      )}
    </a>
  );
  const utilityClass =
    "flex h-10 items-center justify-center border-r border-white/25 px-4 text-white hover:bg-ploy-accent-primary hover:underline";

  return (
    <header
      data-ploy-component="site-nav"
      data-position={position}
      className="relative z-40 w-full bg-ploy-background-primary text-ploy-text-primary"
    >
      <NavbarSkipLink label={skipToContent} />
      <div className="hidden h-10 bg-[#01233f] min-[1200px]:block">
        <Container
          width="full"
          className="flex h-10 max-w-[1204px] justify-end"
        >
          <a href={advisor.href} className={utilityClass}>
            <Text as="span" variant="small" className="font-bold leading-4">
              {advisor.label}
            </Text>
          </a>
          <div className="border-r border-white/25">
            <SiteNavConnect
              links={accounts}
              label={connectLabel}
              navLabel={accountNav}
            />
          </div>
          <a
            href={language.href}
            lang={language.lang}
            aria-label={language.ariaLabel}
            title={language.ariaLabel}
            className={utilityClass}
          >
            <Text as="span" variant="small" className="font-bold leading-4">
              {language.label}
            </Text>
          </a>
        </Container>
      </div>

      <NavbarParts.Root
        value={desktopMenu}
        onValueChange={setDesktopMenu}
        delayDuration={150}
        className="relative hidden w-full min-[1200px]:block"
        aria-label={mainNav}
      >
        <Container
          width="full"
          className="flex h-[84px] max-w-[1204px] items-center"
        >
          <div className="mr-8 shrink-0">{brand}</div>
          <div className="min-w-0 flex-1 [&>div]:!static">
            <NavbarParts.List className="m-0 flex list-none items-center p-0">
              {/* investia.ca's primary items are plain links with no dropdown panel. */}
              {links.map((link) => (
                <NavbarParts.Item key={link.label} className="min-w-0 shrink">
                  <NavbarParts.Link
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`inline-flex min-h-[60px] items-center justify-center px-4 py-[18px] text-center no-underline hover:text-[#2962ff] ${isCurrent(link.href) ? currentDesktop : ""}`}
                  >
                    <Text as="span" className="leading-[24px]">
                      {link.label}
                    </Text>
                  </NavbarParts.Link>
                </NavbarParts.Item>
              ))}
            </NavbarParts.List>
          </div>
          <div className="ml-4 shrink-0">
            <SiteNavSearch placeholder={searchPlaceholder} {...search} />
          </div>
        </Container>
      </NavbarParts.Root>

      <NavbarDialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
        <div className="flex h-[60px] items-center justify-between pl-4 min-[1200px]:hidden">
          <div className="min-w-0 shrink">{brand}</div>
          <NavbarDialog.Trigger asChild>
            <Button
              as="button"
              variant="ghost"
              data-mobile-menu-trigger
              aria-label={openMenu}
              className="h-[60px] w-[60px] shrink-0 rounded-none border-l border-[#ddd] p-0"
            >
              <Menu size={28} />
            </Button>
          </NavbarDialog.Trigger>
        </div>
        <NavbarDialog.Portal>
          <NavbarDialog.Overlay className="fixed inset-0 z-[200] bg-ploy-background-primary min-[1200px]:hidden" />
          <NavbarDialog.Content
            data-mobile-menu
            aria-describedby={undefined}
            className="fixed inset-0 z-[201] flex h-dvh flex-col overflow-hidden bg-ploy-background-primary text-ploy-text-primary outline-none min-[1200px]:hidden"
          >
            <NavbarDialog.Title className="sr-only">
              {menuTitle}
            </NavbarDialog.Title>
            <div className="flex h-[60px] shrink-0 items-center justify-between pl-4">
              <div className="min-w-0 shrink">{brand}</div>
              <NavbarDialog.Close asChild>
                <Button
                  as="button"
                  variant="ghost"
                  aria-label={closeMenu}
                  className="h-[60px] w-[60px] shrink-0 rounded-none border-l border-[#ddd] p-0"
                >
                  <X size={28} />
                </Button>
              </NavbarDialog.Close>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-[max(32px,calc(37.2dvh-84px))] pb-8">
              <nav aria-label={mobileNav}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-center py-3 ${isCurrent(link.href) ? "text-[#064dd9]" : ""}`}
                  >
                    <Text as="span" className="text-center leading-6">
                      {link.label}
                    </Text>
                  </a>
                ))}
              </nav>
              <div className="mt-20 flex justify-center">
                <SiteNavSearch placeholder={searchPlaceholder} {...search} />
              </div>
            </div>
            <SiteNavMobileAccounts
              links={accounts}
              advisor={advisor}
              language={language}
              connectLabel={connectLabel}
            />
          </NavbarDialog.Content>
        </NavbarDialog.Portal>
      </NavbarDialog.Root>
    </header>
  );
}

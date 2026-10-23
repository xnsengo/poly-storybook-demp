import { SiteNavProps } from '../../components/organisms/global/site-nav';
import { Body1HeroProps } from '../../components/organisms/home/body-1-hero';
import { Body1ActionsProps } from '../../components/organisms/home/body-1-actions';
import { Body1BenefitsProps } from '../../components/organisms/home/body-1-benefits';
import { Body2ProductsProps } from '../../components/organisms/home/body-2-products';
import { Body2ObjectivesProps } from '../../components/organisms/home/body-2-objectives';
import { Body2NewsTeamsProps } from '../../components/organisms/home/body-2-news-teams';
import { Body3RegulatoryLogoProps } from '../../components/organisms/global/body-3-regulatory-logo';
import { SiteFooterProps } from '../../components/organisms/global/site-footer';
export type HomeLocale = "en" | "fr";
export type HomeSocialLink = {
    network: "linkedin" | "facebook";
    label: string;
    href: string;
    ariaLabel?: string;
};
export type HomeContent = {
    lang: string;
    meta: {
        title: string;
        description: string;
    };
    /** Visually hidden page H1, as on the source. */
    pageTitle: string;
    nav: SiteNavProps;
    hero: Body1HeroProps;
    actions: Body1ActionsProps;
    benefits: Body1BenefitsProps;
    products: Body2ProductsProps;
    objectives: Body2ObjectivesProps;
    newsTeams: Body2NewsTeamsProps;
    footer: Omit<SiteFooterProps, "socialLinks" | "onCookiePreferences" | "className"> & {
        socialLinks: HomeSocialLink[];
    };
    regulatory: Body3RegulatoryLogoProps;
};
export declare const homeContent: Record<HomeLocale, HomeContent>;

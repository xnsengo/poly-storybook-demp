"use client";

import { SiteShell } from "@/components/templates/site-shell";
import { Body1Hero } from "@/components/organisms/home/body-1-hero";
import { Body1Actions } from "@/components/organisms/home/body-1-actions";
import { Body1Benefits } from "@/components/organisms/home/body-1-benefits";
import { Body2Products } from "@/components/organisms/home/body-2-products";
import { Body2Objectives } from "@/components/organisms/home/body-2-objectives";
import { Body2NewsTeams } from "@/components/organisms/home/body-2-news-teams";
import {
  homeContent,
  type HomeLocale,
} from "@/content/home/home-content";

export type HomePageProps = {
  /** Content language: "en" serves /, "fr" serves /accueil. */
  locale?: HomeLocale;
};

/**
 * @ployComponent
 * @ployComponentId home-page
 * @ployComponentType page
 * @ployComponentTags homepage, bilingual
 * @ployComponentDescription Investia homepage composed from the design-system sections in source order inside the shared SiteShell (nav, footer, CIRO/OCRI strip): hero carousel, action strip, benefit cards, products panel, life-event dialogs, news and careers rows. All copy comes from the typed EN/FR dictionary in src/content/home/home-content.ts, selected by the locale prop; "en" renders at / and "fr" at /accueil, and the language toggle links the two.
 * @ployComponentStatus stable
 */
export function HomePage({ locale = "en" }: HomePageProps) {
  const content = homeContent[locale];
  return (
    <SiteShell locale={locale} page="home">
      <h1 className="sr-only">{content.pageTitle}</h1>
      <Body1Hero {...content.hero} />
      <Body1Actions {...content.actions} />
      <Body1Benefits {...content.benefits} />
      <Body2Products {...content.products} />
      <Body2Objectives {...content.objectives} />
      <Body2NewsTeams {...content.newsTeams} />
    </SiteShell>
  );
}

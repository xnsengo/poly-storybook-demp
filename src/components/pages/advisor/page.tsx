"use client";

import { SiteShell } from "@/components/templates/site-shell";
import { AdvisorSearch } from "@/components/organisms/advisor/advisor-search";
import { AdvisorValue } from "@/components/organisms/advisor/advisor-value";
import { advisorContent } from "@/content/advisor/advisor-content";
import type { Locale } from "@/content/site/routes";

export type AdvisorPageProps = {
  /** Content language: "en" serves /find-an-advisor, "fr" serves /trouver-un-conseiller. */
  locale?: Locale;
};

/**
 * @ployComponent
 * @ployComponentId advisor-page
 * @ployComponentType page
 * @ployComponentTags advisor-locator, bilingual
 * @ployComponentDescription Investia find-an-advisor page inside the shared SiteShell (nav, footer, CIRO/OCRI strip), in source order: the advisor-search band (H1, intro, working city/postal-code search through the same-origin /api/advisors relay, client-portal card) and the advisor-value band (value of advice copy and pill photo). Copy comes from the typed EN/FR dictionary in src/content/advisor/advisor-content.ts; "en" renders at /find-an-advisor and "fr" at /trouver-un-conseiller, and the language toggle links the two.
 * @ployComponentStatus stable
 */
export function AdvisorPage({ locale = "en" }: AdvisorPageProps) {
  const content = advisorContent[locale];
  return (
    <SiteShell locale={locale} page="advisor">
      <AdvisorSearch
        lang={locale}
        hero={content.hero}
        search={content.search}
        portal={content.portal}
      />
      <AdvisorValue {...content.value} />
    </SiteShell>
  );
}

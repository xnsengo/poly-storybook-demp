"use client";

import { SiteShell } from "@/components/templates/site-shell";
import { ExperienceHero } from "@/components/organisms/experience/experience-hero";
import { ExperienceCta } from "@/components/organisms/experience/experience-cta";
import { ExperienceCommitment } from "@/components/organisms/experience/experience-commitment";
import { ExperienceCalculators } from "@/components/organisms/experience/experience-calculators";
import { ExperienceTracking } from "@/components/organisms/experience/experience-tracking";
import type { Locale } from "@/content/site/routes";
import {
  experienceContent,
  experienceCtaHref,
} from "@/content/experience/experience-content";

export type ExperiencePageProps = {
  /** Content language: "en" serves /investia-experience, "fr" serves /experience-investia. */
  locale?: Locale;
};

/**
 * @ployComponent
 * @ployComponentId experience-page
 * @ployComponentType page
 * @ployComponentTags inner-page, bilingual, advisors
 * @ployComponentDescription Investia "The Investia Experience" / "L'expérience Investia" page inside the shared SiteShell (nav with this page active, footer, CIRO strip), with sections in source order: light-blue hero with animated curve and advisor pins, full-width advisor CTA band, commitment timeline plus simplicity row, calculators band with animated curve and cyclist artwork, and tracking (Client Portal, mobile app, client documents with an interest-rate modal). Copy comes from the typed EN/FR dictionary in src/content/experience/experience-content.ts; the language toggle links the two routes.
 * @ployComponentStatus stable
 */
export function ExperiencePage({ locale = "en" }: ExperiencePageProps) {
  const content = experienceContent[locale];
  return (
    <SiteShell locale={locale} page="experience">
      <ExperienceHero {...content.hero} />
      <ExperienceCta label={content.cta.label} href={experienceCtaHref(locale)} />
      <ExperienceCommitment {...content.commitment} />
      <ExperienceCalculators {...content.calculators} />
      <ExperienceTracking {...content.tracking} />
    </SiteShell>
  );
}

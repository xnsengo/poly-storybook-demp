"use client";

import { SiteShell } from "@/components/templates/site-shell";
import { ProductsHero } from "@/components/organisms/products/products-hero";
import { ProductsCta } from "@/components/organisms/products/products-cta";
import { ProductsSpecialty } from "@/components/organisms/products/products-specialty";
import { ProductsCardGrid } from "@/components/organisms/products/products-card-grid";
import { productsContent } from "@/content/products/products-content";
import type { Locale } from "@/content/site/routes";

export type ProductsPageProps = {
  /** Content language: "en" serves /products-and-services, "fr" serves /produits-et-services. */
  locale?: Locale;
};

/**
 * @ployComponent
 * @ployComponentId products-page
 * @ployComponentType page
 * @ployComponentTags products, bilingual
 * @ployComponentDescription Investia Products and services page inside the shared SiteShell, in investia.ca source order: hero with animated heart curve, find-an-advisor CTA band, mutual-funds specialty row, savings and investment product cards (three columns) and the PPI insurance card (two-thirds width). All copy comes from the typed EN/FR dictionary in src/content/products/products-content.ts, selected by the locale prop; product links stay absolute to investia.ca in the matching language.
 * @ployComponentStatus stable
 */
export function ProductsPage({ locale = "en" }: ProductsPageProps) {
  const content = productsContent[locale];
  return (
    <SiteShell locale={locale} page="products">
      <ProductsHero
        {...content.hero}
        imageSrc="/images/7f3c2a91-produits-hero-dsktp.webp"
        tabletImageSrc="/images/7f3c2a91-produits-hero-tblt.webp"
        mobileImageSrc="/images/7f3c2a91-produits-hero-phne.webp"
      />
      <ProductsCta {...content.cta} />
      <ProductsSpecialty {...content.specialty} />
      <ProductsCardGrid {...content.savings} layout="thirds" />
      <ProductsCardGrid {...content.insurance} layout="two-thirds" last />
    </SiteShell>
  );
}

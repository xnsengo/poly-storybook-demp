import { ExternalLink } from "lucide-react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import "./products-card-grid.css";

export type ProductsCard = {
  id: string;
  /** Card title, e.g. the plan acronym. */
  title: string;
  /** Bold line under the title, e.g. the plan's full name. */
  subtitle?: string;
  /** One string per paragraph. */
  body: string[];
  linkLabel: string;
  href: string;
  /** Opens in a new tab and shows the external icon. */
  external?: boolean;
  /** Accessible name, e.g. "<label> opens in a new tab". */
  ariaLabel?: string;
};

export type ProductsCardGridProps = {
  title: string;
  items: ProductsCard[];
  /** "thirds": three equal columns from 768px. "two-thirds": each card spans two of three columns. */
  layout?: "thirds" | "two-thirds";
  /** Last band before the footer: 96px bottom padding from 768px instead of 60px. */
  last?: boolean;
};

/**
 * @ployComponent
 * @ployComponentId products-card-grid
 * @ployComponentType section
 * @ployComponentTags cards, products, bilingual
 * @ployComponentDescription H3 heading over a grid of grey (#eff1f4) 20px-rounded product cards from investia.ca's Products and services page. Each card has an H4 title, optional bold subtitle, one or more paragraphs and an outlined pill link pinned to the card bottom so buttons align across a row (hover turns it #2962ff; external links open in a new tab with the external icon). layout="thirds" gives three columns from 768px; "two-thirds" makes each card two columns wide (the insurance card). Cards stack full width on phones with full-width buttons.
 * @ployComponentStatus stable
 */
export function ProductsCardGrid({
  title,
  items,
  layout = "thirds",
  last = false,
}: ProductsCardGridProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="products-card-grid"
      className={cn("products-card-grid", last && "products-card-grid-last")}
    >
      <Container className="products-card-grid-container">
        <Heading level={3} as="h3" className="products-card-grid-title">
          {title}
        </Heading>
        <ul
          className={cn(
            "products-card-grid-list",
            layout === "two-thirds" && "products-card-grid-list-wide",
          )}
        >
          {items.map((item) => (
            <li key={item.id} className="products-card">
              <Heading level={4} as="h4" className="products-card-title">
                {item.title}
              </Heading>
              {item.subtitle && (
                <Text className="products-card-subtitle font-bold">
                  {item.subtitle}
                </Text>
              )}
              {item.body.map((paragraph) => (
                <Text key={paragraph} className="products-card-body">
                  {paragraph}
                </Text>
              ))}
              <Button
                variant="outline"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
                className="products-card-action border-2 text-ploy-accent-primary"
              >
                <span>{item.linkLabel}</span>
                {item.external && (
                  <ExternalLink size={20} aria-hidden="true" className="shrink-0" />
                )}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

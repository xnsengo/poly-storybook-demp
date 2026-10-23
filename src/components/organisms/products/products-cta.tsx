import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import "./products-cta.css";

export type ProductsCtaProps = {
  label: string;
  href: string;
};

/**
 * @ployComponent
 * @ployComponentId products-cta
 * @ployComponentType section
 * @ployComponentTags cta, advisor, bilingual
 * @ployComponentDescription Pale-blue (#cae5fb) full-width band with one primary pill button, matching investia.ca's single-item grille-section-cta under inner-page heroes. The button spans half the content width from 768px and the full width on phones; hover turns it #2962ff. Label and href are props (use ROUTES for migrated pages).
 * @ployComponentStatus stable
 */
export function ProductsCta({ label, href }: ProductsCtaProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="products-cta"
      className="bg-[#cae5fb]"
    >
      <Container className="products-cta-container">
        <div className="products-cta-row">
          <Button
            href={href}
            block
            className="products-cta-button min-w-0 whitespace-normal text-center"
          >
            <Text as="span" className="font-bold leading-[22px]">
              {label}
            </Text>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import "./experience-cta.css";

export type ExperienceCtaProps = {
  label: string;
  href: string;
};

/**
 * @ployComponent
 * @ployComponentId experience-cta
 * @ployComponentType section
 * @ployComponentTags cta, advisor, bilingual
 * @ployComponentDescription Pale-blue (#cae5fb) action band with one primary pill button, as under investia.ca inner-page heroes (grille-section-cta, one item): full width on phones, half the content width from 768px. Label and href are props; pass the locale's advisor route.
 * @ployComponentStatus stable
 */
export function ExperienceCta({ label, href }: ExperienceCtaProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="experience-cta"
      className="bg-[#cae5fb]"
    >
      <Container className="experience-cta-container">
        <div className="experience-cta-row">
          <Button href={href} block className="experience-cta-button whitespace-normal text-center">
            <Text as="span" className="font-bold leading-[22px]">
              {label}
            </Text>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

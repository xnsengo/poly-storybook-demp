import { Fragment } from "react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ExperienceMaterialIcon } from "@/components/atoms/experience-material-icon";
import "./experience-commitment.css";

export type ExperienceCommitmentStep = {
  title: string;
  /** Bold lead; several strings render with line breaks (as the FR source does). */
  lead: string[];
  body: string;
};

export type ExperienceCommitmentListItem = {
  /** Material Icons Outlined ligature, e.g. "assessment". */
  icon: string;
  text: string;
};

export type ExperienceCommitmentProps = {
  heading: string;
  steps: ExperienceCommitmentStep[];
  simplicity: {
    heading: string;
    items: ExperienceCommitmentListItem[];
    actionLabel: string;
    actionHref: string;
    imageSrc: string;
    imageAlt?: string;
  };
};

/**
 * @ployComponent
 * @ployComponentId experience-commitment
 * @ployComponentType section
 * @ployComponentTags timeline, steps, list, image, bilingual
 * @ployComponentDescription Investia "Our Commitment" band (investia.ca grille-section-engagement): an H2, then a three-step timeline (blue ring markers joined by a blue rule; vertical with a left rail under 1140px, horizontal row above), each step with H3, bold lead and paragraph. Below, a "Simplicity" row pairs an oval-cropped photo with an H2, an icon list (Material Icons Outlined) and an outlined pill button; image sits above the text on phones and to the left from 768px. All copy, icons, link and image are props.
 * @ployComponentStatus stable
 */
export function ExperienceCommitment({
  heading,
  steps,
  simplicity,
}: ExperienceCommitmentProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="experience-commitment"
      className="experience-commitment"
    >
      <Container className="experience-commitment-container">
        <Heading level={2} className="experience-commitment-heading">
          {heading}
        </Heading>
        <ol className="experience-commitment-timeline">
          {steps.map((step) => (
            <li key={step.title} className="experience-commitment-step">
              <div className="experience-commitment-step-content">
                <Heading level={3} as="h3" className="experience-commitment-step-title">
                  {step.title}
                </Heading>
                <Text className="experience-commitment-step-lead font-bold">
                  {step.lead.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </Text>
                <Text className="experience-commitment-step-body">{step.body}</Text>
              </div>
            </li>
          ))}
        </ol>
        <div className="experience-commitment-simplicity">
          <div className="experience-commitment-simplicity-text">
            <Heading level={2} className="experience-commitment-heading">
              {simplicity.heading}
            </Heading>
            <ul className="experience-commitment-list">
              {simplicity.items.map((item) => (
                <li key={item.text} className="experience-commitment-list-item">
                  <ExperienceMaterialIcon
                    name={item.icon}
                    size={32}
                    className="experience-commitment-list-icon"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              href={simplicity.actionHref}
              className="experience-commitment-action border-2 px-6 text-ploy-accent-primary"
            >
              <Text as="span" className="font-bold leading-[22px]">
                {simplicity.actionLabel}
              </Text>
            </Button>
          </div>
          <div className="experience-commitment-media">
            <img src={simplicity.imageSrc} alt={simplicity.imageAlt ?? ""} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

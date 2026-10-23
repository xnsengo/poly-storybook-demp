import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { advisorContent, type AdvisorContent } from "@/content/advisor/advisor-content";
import "./advisor-value.css";

export type AdvisorValueProps = AdvisorContent["value"];

/**
 * @ployComponent
 * @ployComponentId advisor-value
 * @ployComponentType section
 * @ployComponentTags advisor, media, text-image, bilingual
 * @ployComponentDescription "Value of an advisor" band from investia.ca find-an-advisor: heading, one or more paragraphs and a text link with an east arrow glyph on the left; a pill-shaped (288px radius) cover photo on the right that stretches to the copy height. Phone stacks copy above a 288x180 pill; tablet uses a 72px gap with a 238px minimum pill; desktop a 112px gap. Heading, paragraphs, link and image (local /images/ path) are props.
 * @ployComponentStatus stable
 */
export function AdvisorValue({
  heading = advisorContent.en.value.heading,
  paragraphs = advisorContent.en.value.paragraphs,
  link = advisorContent.en.value.link,
  image = advisorContent.en.value.image,
}: Partial<AdvisorValueProps>) {
  return (
    <Section space="flush" data-ploy-component="advisor-value" className="adv-value">
      <Container>
        <div className="adv-value-row">
          <div className="adv-value-copy">
            <div>
              <Heading as="h2" level={3} className="adv-value-heading">
                {heading}
              </Heading>
              {paragraphs.map((paragraph, index) => (
                <Text
                  key={index}
                  className={
                    index === paragraphs.length - 1
                      ? "adv-value-text adv-value-text-last"
                      : "adv-value-text"
                  }
                >
                  {paragraph}
                </Text>
              ))}
              <a className="adv-value-link" href={link.href} target="_self">
                {link.label}
                <span className="adv-value-icon" aria-hidden="true">
                  east
                </span>
              </a>
            </div>
          </div>
          <div className="adv-value-media-col">
            <div className="adv-value-media">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

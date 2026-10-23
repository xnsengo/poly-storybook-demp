import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ICONS } from "@/components/atoms/icons";
import "./body-2-news-teams.css";

export type Body2FeatureAction = {
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
  /** Accessible name, e.g. a localized "opens in a new tab" label. */
  ariaLabel?: string;
};
export type Body2FeatureItem = {
  id: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  mediaWidth: number;
  mediaHeight: number;
  flip?: boolean;
  brandArtwork?: boolean;
  actions: Body2FeatureAction[];
};
export type Body2NewsTeamsProps = { items?: Body2FeatureItem[] };
const features: Body2FeatureItem[] = [
  {
    id: "news",
    heading: "Economic news",
    body: "Sébastien Mc Mahon, Chief Strategist and Senior Economist at iA Financial Group, presents articles and videos to help keep you up to speed on the economy and the financial markets.",
    imageSrc:
      "/images/79a3d937-accueil-actualites-economiques.webp",
    imageAlt: "Economic themes and a rising graph",
    mediaWidth: 514,
    mediaHeight: 286,
    actions: [
      {
        label: "View economic news",
        href: "https://ia.ca/economic-publications",
        external: true,
      },
    ],
  },
  {
    id: "teams",
    heading: "Join the Investia teams",
    body: "The support and backing that we provide our advisors is at the heart of our corporate culture. We offer our advisors a wide range of products and services, including the latest technology and simplified business processes which will allow them to place their focus where it counts: on their clients.",
    imageSrc:
      "/images/95d04241-accueil-equipe.webp",
    imageAlt: "A member of the Investia team",
    mediaWidth: 514,
    mediaHeight: 396,
    flip: true,
    brandArtwork: true,
    actions: [
      {
        label: "Consult our job offers",
        href: "https://ia.ca/jobs/jobs-available",
        primary: true,
        external: true,
      },
      {
        label: "Become an Investia advisor",
        href: "https://investia.ca/advisor-opportunities",
      },
    ],
  },
];
function ExternalMark() {
  return (
    <svg
      aria-hidden="true"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 3h7v7M21 3l-12 12M10 4H4v16h16v-6" />
    </svg>
  );
}
function FeatureRow({
  heading,
  body,
  imageSrc,
  imageAlt,
  mediaWidth,
  mediaHeight,
  flip = false,
  brandArtwork = false,
  actions,
}: Body2FeatureItem) {
  return (
    <div className={`body-2-feature-row${flip ? " body-2-feature-flip" : ""}`}>
      <div className="body-2-feature-copy">
        <Heading
          level={2}
          className="body-2-feature-heading text-ploy-text-primary"
        >
          {heading}
        </Heading>
        {body && (
          <Text className="body-2-feature-body text-ploy-text-primary">
            {body}
          </Text>
        )}
        <div className="body-2-feature-actions">
          {actions.map((action) => (
            <Button
              key={action.href}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              aria-label={action.ariaLabel}
              variant={action.primary ? "primary" : "outline"}
              className={
                action.primary
                  ? "body-2-feature-action"
                  : "body-2-feature-action border-2 text-ploy-accent-primary"
              }
            >
              {action.label}
              {action.external && <ExternalMark />}
            </Button>
          ))}
        </div>
      </div>
      <div
        className="body-2-feature-media"
        style={{ aspectRatio: `${mediaWidth}/${mediaHeight}` }}
      >
        <div className="body-2-feature-image-frame">
          <img
            className={
              brandArtwork
                ? "body-2-feature-team-image"
                : "body-2-feature-news-image"
            }
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        {brandArtwork && (
          <div aria-hidden="true" className="body-2-feature-brand">
            <ICONS.i8 />
          </div>
        )}
      </div>
    </div>
  );
}
/**
 * @ployComponent
 * @ployComponentId body-2-news-teams
 * @ployComponentType section
 * @ployComponentTags news, careers, media
 * @ployComponentDescription Alternating economic news and recruitment rows with pill-shaped imagery and external calls to action. Rows, copy, images, actions and their accessible labels are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export function Body2NewsTeams({ items = features }: Body2NewsTeamsProps = {}) {
  return (
    <Section
      space="flush"
      data-ploy-component="body-2-news-teams"
      className="body-2-news-teams"
    >
      <Container className="body-2-news-teams-container">
        {items.map((item) => (
          <FeatureRow key={item.id} {...item} />
        ))}
      </Container>
    </Section>
  );
}

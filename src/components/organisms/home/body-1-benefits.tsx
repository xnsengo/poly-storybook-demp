"use client";

import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Card } from "@/components/molecules/card";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { Carousel, CarouselSlide } from "@/components/molecules/carousel";
import "./body-1-benefits.css";

export type Body1Benefit = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  overlaySrc?: string;
  overlayAlt?: string;
  actionLabel: string;
  actionHref: string;
};
const benefits: Body1Benefit[] = [
  {
    title: "The Investia experience",
    body: "Anything can change in life. Our advisors are there to make sure that your action plan evolves with you.",
    imageSrc:
      "/images/24d627c8-experience-investia.webp",
    imageAlt: "Woman using a laptop",
    actionLabel: "See our offer",
    actionHref: "/investia-experience",
  },
  {
    title: "The value of advice",
    body: "Benefit from the expertise of our advisors and a variety of customized solutions which will help you reach your financial goals.",
    imageSrc:
      "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
    imageAlt: "Light blue grid",
    overlaySrc:
      "/images/95b9d810-accueil-representants-pin.webp",
    overlayAlt: "Investia advisors",
    actionLabel: "Discover our expertise",
    actionHref: "https://investia.ca/value-of-advice",
  },
  {
    title: "About us",
    body: "A wholly-owned subsidiary of iA Financial Group, Investia offers you a full range of mutual fund and segregated fund products and services to meet your savings and retirement needs.",
    imageSrc:
      "/images/1e0676de-a-propos.webp",
    imageAlt: "Father carrying his child on his shoulders",
    actionLabel: "About Investia",
    actionHref: "https://investia.ca/about-investia",
  },
];
function BenefitCard({
  title,
  body,
  imageSrc,
  imageAlt,
  overlaySrc,
  overlayAlt,
  actionLabel,
  actionHref,
}: Body1Benefit) {
  return (
    <Card
      padding="none"
      className="body-1-benefit-card flex flex-col bg-transparent text-center"
    >
      <div className="body-1-benefit-media">
        <img src={imageSrc} alt={imageAlt} className="body-1-benefit-photo" />
        {overlaySrc && (
          <img
            src={overlaySrc}
            alt={overlayAlt ?? ""}
            className="body-1-benefit-overlay"
          />
        )}
      </div>
      <div className="body-1-benefit-copy flex flex-1 flex-col">
        <Heading
          level={3}
          as="h2"
          className="body-1-benefit-title text-ploy-text-primary"
        >
          {title}
        </Heading>
        <Text className="body-1-benefit-description text-ploy-text-primary">
          {body}
        </Text>
        <Button
          variant="outline"
          href={actionHref}
          block
          className="mt-auto border-2 px-4 text-ploy-accent-primary"
        >
          <Text as="span" className="font-bold leading-[22px]">
            {actionLabel}
          </Text>
        </Button>
      </div>
    </Card>
  );
}
export type Body1BenefitsProps = { items?: Body1Benefit[]; heading?: string };
/**
 * @ployComponent
 * @ployComponentId body-1-benefits
 * @ployComponentType section
 * @ployComponentTags cards, carousel, advice
 * @ployComponentDescription Three image-led Investia benefit cards, shown as a desktop row and a swipeable mobile track.
 * @ployComponentStatus stable
 */
export function Body1Benefits({
  items = benefits,
  heading,
}: Body1BenefitsProps = {}) {
  return (
    <Section
      space="flush"
      data-ploy-component="body-1-benefits"
      className="overflow-hidden"
    >
      <Container className="body-1-benefits-container">
        {heading && (
          <Heading level={2} className="mb-8">
            {heading}
          </Heading>
        )}
        <Carousel
          slidesPerView="auto"
          spaceBetween={16}
          loop={false}
          initialSlide={0}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          className="body-1-benefits-carousel"
          breakpoints={{
            768: { slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1140: { slidesPerView: 3, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
          }}
        >
          {items.map((item) => (
            <CarouselSlide
              key={item.title}
              className="body-1-benefit-slide h-auto"
            >
              <BenefitCard {...item} />
            </CarouselSlide>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}

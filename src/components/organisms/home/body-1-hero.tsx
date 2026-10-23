"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Swiper as CarouselApi } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { Carousel, CarouselSlide } from "@/components/molecules/carousel";
import { ICONS } from "@/components/atoms/icons";
import { Body1HeroPin } from "@/components/atoms/body-1-hero-pin";
import "./body-1-hero.css";

export type Body1HeroSlide = {
  id: string;
  title: string;
  body?: string;
  imageSrc: string;
  /** Tablet crop (768-999px), like investia.ca's _tblt images. Falls back to imageSrc. */
  tabletImageSrc?: string;
  /** Phone crop (under 768px), like investia.ca's _phne images. Falls back to tabletImageSrc, then imageSrc. */
  mobileImageSrc?: string;
  actionLabel: string;
  actionHref: string;
  /** Opens in a new tab and shows the external icon. */
  external?: boolean;
  /** Accessible name for the action, e.g. "<label> opens in a new tab". */
  actionAriaLabel?: string;
  /** Icon after the action label. Defaults to "external" for external links, else "arrow". */
  actionIcon?: "arrow" | "external" | "none";
  secondaryLabel?: string;
  secondaryHref?: string;
  decoration?: "projects" | "tfsa" | "portal";
};

const slides: Body1HeroSlide[] = [
  {
    id: "projects",
    title: "Invest in your projects",
    body: "Take advantage of our advice for key moments in your life and let us help you through the process.",
    imageSrc:
      "/images/bf1aca80-accueil-hero-dsktp.webp",
    tabletImageSrc:
      "/images/66369806-accueil-hero-tblt.webp",
    mobileImageSrc:
      "/images/986eb8c2-accueil-hero-phne.webp",
    actionLabel: "Life events",
    actionHref: "#life-events",
    actionIcon: "none",
    decoration: "projects",
  },
  {
    id: "app",
    title: "The Investia app",
    body: "Our app lets you keep track of your investments anywhere, anytime.",
    imageSrc:
      "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
    tabletImageSrc:
      "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
    mobileImageSrc:
      "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
    actionLabel: "Learn more",
    actionHref: "https://investia.ca/mobile-app",
  },
  {
    id: "tfsa",
    title: "TFSA",
    imageSrc:
      "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
    tabletImageSrc:
      "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
    mobileImageSrc:
      "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
    actionLabel: "See the annual limit for 2026",
    actionHref:
      "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributions.html",
    external: true,
    actionAriaLabel: "See the annual limit for 2026 opens in a new tab",
    decoration: "tfsa",
    secondaryLabel: "Learn more about TFSAs",
    secondaryHref: "https://investia.ca/products-and-services/tfsa",
  },
  {
    id: "portal",
    title: "Client Portal",
    body: "Already a client? Register now and access your portfolio online.",
    imageSrc:
      "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
    tabletImageSrc:
      "/images/457a8d86-accueil-hero6-portail-tblt.webp",
    mobileImageSrc:
      "/images/750cd5f6-accueil-hero6-portail-phne.webp",
    actionLabel: "Create account",
    actionHref: "https://client.investia.ca/",
    external: true,
    actionAriaLabel: "Create account opens in a new tab",
    decoration: "portal",
    secondaryLabel: "About multi-factor authentication (MFA)",
    secondaryHref: "https://investia.ca/multi-factor-authentication-clients",
  },
  {
    id: "resp",
    title: "Registered education savings plans (RESP)",
    body: "The RESP is specifically designed to accumulate funds for a child's post-secondary education.",
    imageSrc:
      "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
    tabletImageSrc:
      "/images/1ab21e06-accueil-reee-hero-tblt.webp",
    mobileImageSrc:
      "/images/eb5e5be7-accueil-reee-hero-phne.webp",
    actionLabel: "Learn more",
    actionHref: "https://investia.ca/products-and-services/resp",
  },
];

function HeroPanel({
  title,
  body,
  imageSrc,
  tabletImageSrc,
  mobileImageSrc,
  actionLabel,
  actionHref,
  external,
  actionAriaLabel,
  actionIcon,
  secondaryLabel,
  secondaryHref,
  decoration,
}: Body1HeroSlide) {
  const icon = actionIcon ?? (external ? "external" : "arrow");
  return (
    <div
      className="body-1-hero-panel bg-ploy-background-secondary"
      style={
        {
          "--hero-bg-desktop": `url("${imageSrc}")`,
          "--hero-bg-tablet": `url("${tabletImageSrc ?? imageSrc}")`,
          "--hero-bg-mobile": `url("${mobileImageSrc ?? tabletImageSrc ?? imageSrc}")`,
        } as CSSProperties
      }
    >
      <Container className="body-1-hero-container">
        <div className="body-1-hero-copy">
          <Heading
            level={1}
            as="h2"
            className="body-1-hero-title text-ploy-accent-primary font-black"
          >
            {title}
          </Heading>
          {body && (
            <Text className="body-1-hero-description text-ploy-text-primary font-semibold">
              {body}
            </Text>
          )}
          <Button
            variant="ghost"
            href={actionHref}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={actionAriaLabel}
            className="body-1-hero-action justify-start whitespace-normal rounded-none px-0 font-semibold hover:text-[#2962ff] hover:underline"
          >
            <Text as="span" className="font-semibold">
              {actionLabel}
            </Text>
            {icon === "external" && <ExternalLink size={18} aria-hidden="true" />}
            {icon === "arrow" && <ArrowRight size={18} aria-hidden="true" />}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              variant="ghost"
              href={secondaryHref}
              className="body-1-hero-secondary justify-start whitespace-normal px-0 text-left font-semibold hover:underline"
            >
              <Text as="span" className="font-semibold">
                {secondaryLabel}
              </Text>
            </Button>
          )}
        </div>
        {decoration === "projects" && (
          <div
            className="body-1-hero-curve body-1-hero-projects"
            aria-hidden="true"
          >
            <ICONS.i1 />
            <Body1HeroPin className="body-1-hero-pin" />
          </div>
        )}
        {decoration === "tfsa" && (
          <div
            className="body-1-hero-curve body-1-hero-tfsa"
            aria-hidden="true"
          >
            <ICONS.i3 />
          </div>
        )}
        {decoration === "portal" && (
          <div
            className="body-1-hero-curve body-1-hero-portal"
            aria-hidden="true"
          >
            <ICONS.i4 />
          </div>
        )}
      </Container>
    </div>
  );
}

export type Body1HeroProps = {
  items?: Body1HeroSlide[];
  initialSlide?: number;
  /** Accessible name of the carousel region. */
  ariaLabel?: string;
  /** Swiper a11y messages, for localized pages. */
  a11y?: {
    paginationBulletMessage?: string;
    prevSlideMessage?: string;
    nextSlideMessage?: string;
  };
  /** Autoplay interval in ms (investia.ca uses 8000). Set 0 to disable. */
  autoplayDelay?: number;
};

/**
 * @ployComponent
 * @ployComponentId body-1-hero
 * @ployComponentType section
 * @ployComponentTags hero, carousel, media, bilingual
 * @ployComponentDescription Five-slide Investia campaign carousel with photographic backgrounds, a primary text action per slide (arrow, external or no icon), an optional secondary link and clickable pagination. Matches investia.ca motion: 600ms fade, 8s autoplay without looping (stops on pagination click, swipe or keyboard focus; runs for every visitor), and on each active slide the blue curve draws in and the pin pops in. All copy, links, accessible labels and Swiper a11y messages are props, so EN and FR pages share it.
 * @ployComponentStatus stable
 */
export function Body1Hero({
  items = slides,
  initialSlide = 0,
  ariaLabel = "Featured topics",
  a11y = {},
  autoplayDelay = 8000,
}: Body1HeroProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const apiRef = useRef<CarouselApi | null>(null);
  const [motionReady, setMotionReady] = useState(false);

  // Like investia.ca, size each curve's dash to its own path length so the
  // active slide's curve can draw in.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section
      .querySelectorAll<SVGPathElement>(".body-1-hero-curve > :not(.body-1-hero-pin) path")
      .forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });
    setMotionReady(true);
  }, []);

  // Stop autoplay once the visitor takes over, so slides never move under them.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const stop = () => apiRef.current?.autoplay?.stop();
    const onClick = (event: MouseEvent) => {
      if ((event.target as Element).closest(".swiper-pagination")) stop();
    };
    section.addEventListener("focusin", stop);
    section.addEventListener("click", onClick);
    return () => {
      section.removeEventListener("focusin", stop);
      section.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Section
      ref={sectionRef}
      space="flush"
      data-ploy-component="body-1-hero"
      data-motion={motionReady ? "ready" : undefined}
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="overflow-hidden bg-ploy-background-secondary"
    >
      <Carousel
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={false}
        autoplay={
          autoplayDelay > 0
            ? { delay: autoplayDelay, disableOnInteraction: true }
            : false
        }
        onSwiper={(api) => {
          apiRef.current = api;
        }}
        initialSlide={initialSlide}
        pagination={{ clickable: true }}
        a11y={{
          paginationBulletMessage:
            a11y.paginationBulletMessage ?? "Go to slide {{index}}",
          prevSlideMessage: a11y.prevSlideMessage ?? "Previous slide",
          nextSlideMessage: a11y.nextSlideMessage ?? "Next slide",
        }}
        className="body-1-hero-carousel text-ploy-accent-primary"
        speed={600}
      >
        {items.map((item) => (
          <CarouselSlide key={item.id}>
            <HeroPanel {...item} />
          </CarouselSlide>
        ))}
      </Carousel>
    </Section>
  );
}

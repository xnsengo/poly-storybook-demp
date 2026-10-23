"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import "./experience-hero.css";

export type ExperienceHeroProps = {
  title: string;
  subtitle: string;
  /** Desktop background (1000px and up), investia.ca _dsktp crop. */
  imageSrc: string;
  /** Tablet background (768-999px), investia.ca _tblt crop. */
  tabletImageSrc: string;
  /** Phone background (under 768px), investia.ca _phne crop. */
  mobileImageSrc: string;
  /** Large advisor pin (top right of the curve). */
  pinOneSrc: string;
  /** Small advisor pin (start of the curve). */
  pinTwoSrc: string;
};

const CURVE_PATH =
  "m5,457l191.06-179.2c17.83-16.72,45.62-16.58,63.27.32l112.48,107.64c18.35,17.56,47.47,16.92,65.04-1.43.03-.03.06-.06.08-.09L699.91,107.98c15.13-15.89,40.23-16.63,56.27-1.66l77.76,72.61c15.77,14.73,40.39,14.29,55.63-.99L1062,5";

/**
 * @ployComponent
 * @ployComponentId experience-hero
 * @ployComponentType section
 * @ployComponentTags hero, media, animation, bilingual
 * @ployComponentDescription Investia inner-page hero (investia.ca heroV2 hero-n1) for The Investia experience: light-blue band with a photographic background cropped per breakpoint (phone, tablet 768-999, desktop 1000+), page H1 and semibold intro. A blue growth curve draws in and two advisor photo pins pop in each time the hero enters the viewport, and reset when it leaves, for every visitor. Title, intro and all images are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export function ExperienceHero({
  title,
  subtitle,
  imageSrc,
  tabletImageSrc,
  mobileImageSrc,
  pinOneSrc,
  pinTwoSrc,
}: ExperienceHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [active, setActive] = useState(false);

  // Like investia.ca: size the dash to the path, then toggle the draw-in
  // whenever the hero enters or leaves the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const path = section.querySelector<SVGPathElement>(".experience-hero-curve path");
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    }
    setMotionReady(true);
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>
      setActive(entry.isIntersecting),
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      ref={sectionRef}
      space="flush"
      data-ploy-component="experience-hero"
      data-motion={motionReady ? "ready" : undefined}
      data-active={active ? "true" : undefined}
      className="experience-hero"
      style={
        {
          "--exp-hero-bg-desktop": `url("${imageSrc}")`,
          "--exp-hero-bg-tablet": `url("${tabletImageSrc}")`,
          "--exp-hero-bg-mobile": `url("${mobileImageSrc}")`,
        } as CSSProperties
      }
    >
      <Container className="experience-hero-container">
        <div className="experience-hero-copy">
          <Heading
            level={1}
            as="h1"
            className="experience-hero-title text-ploy-accent-primary"
          >
            {title}
          </Heading>
          <Text className="experience-hero-subtitle text-ploy-text-primary">
            {subtitle}
          </Text>
        </div>
      </Container>
      <div className="experience-hero-overlay" aria-hidden="true">
        <Container className="experience-hero-overlay-container">
          <div className="experience-hero-overlay-row">
            <svg
              className="experience-hero-curve"
              viewBox="0 0 1067 462"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d={CURVE_PATH}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="10"
              />
            </svg>
            <img
              className="experience-hero-pin experience-hero-pin-1"
              src={pinOneSrc}
              alt=""
            />
            <img
              className="experience-hero-pin experience-hero-pin-2"
              src={pinTwoSrc}
              alt=""
            />
          </div>
        </Container>
      </div>
    </Section>
  );
}

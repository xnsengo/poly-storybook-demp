"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { ExperienceMaterialIcon } from "@/components/atoms/experience-material-icon";
import "./experience-calculators.css";

export type ExperienceCalculator = {
  title: string;
  body: string;
  linkLabel: string;
  href: string;
};

export type ExperienceCalculatorsProps = {
  heading: string;
  items: ExperienceCalculator[];
  /** Faint horizontal-lines background artwork (SVG). */
  linesSrc: string;
  /** Wide cut-out landscape anchored to the bottom of the band. */
  imageSrc: string;
  imageAlt?: string;
};

const CURVE_PATH =
  "m34.9 952.3 322.3-224.2c26.2-18.2 58.4-25.6 89.9-20.7l80.6 12.5c28.6 4.5 57.9-1.3 82.8-16.1l217.3-130c27.2-16.3 59.5-21.5 90.4-14.7l235.1 51.9c35.4 7.8 72.5-.3 101.4-22.1l268-202.1h0l473.8-344.4c40.2-24.6 74.8-22.6 103.7 6 43.3 45.3 150.6 139.2 187 168.5 36.3 27 82.6 42.6 149.7-6.7 48.1-33.4 101.7-75.1 160.7-125.1";

/**
 * @ployComponent
 * @ployComponentId experience-calculators
 * @ployComponentType section
 * @ployComponentTags calculators, cards, illustration, animation, bilingual
 * @ployComponentDescription Light-blue Investia calculators band (investia.ca grille-section-calculateurs): large blue H2, white rounded cards (stacked under 1140px, three across above) with H3, paragraph and a text link with an east arrow, over a faint lines background and a wide cut-out landscape (cyclist) pinned to the bottom. A blue curve behind the landscape draws in each time it enters the viewport and resets when it leaves, for every visitor. Copy, links and artwork are props.
 * @ployComponentStatus stable
 */
export function ExperienceCalculators({
  heading,
  items,
  linesSrc,
  imageSrc,
  imageAlt = "",
}: ExperienceCalculatorsProps) {
  const curveRef = useRef<SVGSVGElement>(null);
  const [motionReady, setMotionReady] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const svg = curveRef.current;
    if (!svg) return;
    const path = svg.querySelector("path");
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
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      space="flush"
      data-ploy-component="experience-calculators"
      data-motion={motionReady ? "ready" : undefined}
      data-active={active ? "true" : undefined}
      className="experience-calculators"
      style={{ "--exp-calc-lines": `url("${linesSrc}")` } as CSSProperties}
    >
      <Container className="experience-calculators-container">
        <Heading
          level={1}
          as="h2"
          className="experience-calculators-heading text-ploy-accent-primary"
        >
          {heading}
        </Heading>
        <div className="experience-calculators-row">
          {items.map((item) => (
            <div key={item.title} className="experience-calculators-card">
              <Heading level={3} as="h3" className="experience-calculators-card-title">
                {item.title}
              </Heading>
              <Text className="experience-calculators-card-body">{item.body}</Text>
              <a href={item.href} className="experience-calculators-link">
                {item.linkLabel}
                <ExperienceMaterialIcon name="east" size={18} />
              </a>
            </div>
          ))}
        </div>
      </Container>
      <div className="experience-calculators-curve" aria-hidden="true">
        <svg
          ref={curveRef}
          viewBox="0 0 2628 935"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            d={CURVE_PATH}
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeWidth="10"
          />
        </svg>
      </div>
      <div className="experience-calculators-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </Section>
  );
}

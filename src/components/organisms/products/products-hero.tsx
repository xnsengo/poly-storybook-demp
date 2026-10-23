"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import "./products-hero.css";

// investia.ca .page-produits-services .heroV2 .anim-curve (heart outline).
const HEART_PATH =
  "M20 704.8c357.5 2.9 534.9 2.9 532 0L240.3 393.1c-41-41-63.8-95.3-63.8-153.2-.2-57.9 22.4-112.4 63.4-153.4 40.8-40.8 95.3-63.4 153.1-63.4 57.9 0 112.6 22.8 153.6 63.8l21.8 21.7 21.4-21.4c41.1-41 95.5-63.6 153.5-63.6S855.6 46 896.6 87h0c41 41 63.6 95.5 63.4 153.4 0 57.9-22.8 112.2-63.8 153.2";

export type ProductsHeroProps = {
  title: string;
  body?: string;
  /** Desktop crop, 1000px and up (investia.ca _dsktp). */
  imageSrc: string;
  /** Tablet crop, 768-999px (investia.ca _tblt). Falls back to imageSrc. */
  tabletImageSrc?: string;
  /** Phone crop, under 768px (investia.ca _phne). Falls back to tabletImageSrc, then imageSrc. */
  mobileImageSrc?: string;
  /** Show the animated heart curve over the photo. */
  showCurve?: boolean;
};

/**
 * @ployComponent
 * @ployComponentId products-hero
 * @ployComponentType section
 * @ployComponentTags hero, media, motion, bilingual
 * @ployComponentDescription Inner-page hero matching investia.ca's heroV2 hero-n1: light-blue band with a photo anchored bottom-centre (separate desktop, tablet and phone crops), a blue Muoto H1 and a semibold intro line. A blue heart-shaped curve draws in (0.8s stroke dash) when the hero enters the viewport, for every visitor; positions follow the Products and services page at each breakpoint. Title, intro and images are props, so EN and FR pages share it.
 * @ployComponentStatus stable
 */
export function ProductsHero({
  title,
  body,
  imageSrc,
  tabletImageSrc,
  mobileImageSrc,
  showCurve = true,
}: ProductsHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);

  // Like investia.ca, size the dash to the path length, then draw it in once visible.
  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      ref={sectionRef}
      space="flush"
      data-ploy-component="products-hero"
      data-motion={drawn ? "drawn" : undefined}
      className="products-hero bg-ploy-background-secondary"
      style={
        {
          "--hero-bg-desktop": `url("${imageSrc}")`,
          "--hero-bg-tablet": `url("${tabletImageSrc ?? imageSrc}")`,
          "--hero-bg-mobile": `url("${mobileImageSrc ?? tabletImageSrc ?? imageSrc}")`,
        } as CSSProperties
      }
    >
      <Container className="products-hero-container">
        <div className="products-hero-copy">
          <Heading
            level={1}
            as="h1"
            className="products-hero-title text-ploy-accent-primary"
          >
            {title}
          </Heading>
          {body && (
            <Text className="products-hero-body font-semibold text-ploy-text-primary">
              {body}
            </Text>
          )}
        </div>
      </Container>
      {showCurve && (
        <div className="products-hero-overlay" aria-hidden="true">
          <Container className="products-hero-container">
            <div className="products-hero-overlay-row">
              <svg
                className="products-hero-curve"
                viewBox="0 0 980 730"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  ref={pathRef}
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="10"
                  d={HEART_PATH}
                />
              </svg>
            </div>
          </Container>
        </div>
      )}
    </Section>
  );
}

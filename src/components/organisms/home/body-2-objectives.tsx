"use client";

import { Fragment, useEffect, useRef } from "react";
import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ICONS } from "@/components/atoms/icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/molecules/overlay";
import "./body-2-objectives.css";

export type Body2Objective = {
  label: string;
  /** Bold lead question shown under the dialog title. */
  lead?: string;
  /** Supporting paragraph under the lead. */
  body?: string;
  /** Embeddable video URL (e.g. a Vimeo player URL). */
  videoSrc?: string;
  /** Accessible title for the video iframe; defaults to the label. */
  videoTitle?: string;
};

export type Body2ObjectivesProps = {
  /** One string, or several lines rendered with line breaks. */
  heading?: string | string[];
  items?: Body2Objective[];
  imageSrc?: string;
  imageAlt?: string;
  /** Anchor id so other sections can link to this block. */
  id?: string;
  closeLabel?: string;
};

const objectives: Body2Objective[] = [
  {
    label: "Moving in together",
    lead: "Are you about to move in with your significant other?",
    body: "See what you should plan for in terms of insurance and savings to begin your life together on the right foot.",
    videoSrc: "https://player.vimeo.com/video/512694821?h=14f9fe9aca",
  },
  {
    label: "Buying a home",
    lead: "Do you want to leave apartment life behind and buy a home?",
    body: "Buying a home is one of the most important transactions you will ever make. Being prepared will make the process easier and help you make educated choices.",
    videoSrc: "https://player.vimeo.com/video/512695696?h=9ff772182b",
  },
  {
    label: "Having a child",
    lead: "Will your family soon have a new addition?",
    body: "Here are a few things to think about to protect your loved ones against the unexpected and prepare for your new arrival.",
    videoSrc: "https://player.vimeo.com/video/512694732?h=86cf52309e",
  },
  {
    label: "Saving for a project",
    lead: "Do you want to travel? Are you planning your wedding or your retirement?",
    body: "Whether your projects are big or small, you must take the time to organize and figure out how to pay for them.",
    videoSrc: "https://player.vimeo.com/video/512695304?h=81691126f4",
  },
  {
    label: "Starting a business",
    lead: "Do you believe in your project and know that your products or services meet the needs of the market?",
    body: "Here are a few elements to help you launch your business.",
    videoSrc: "https://player.vimeo.com/video/512695366?h=57db274669",
  },
  {
    label: "Planning your retirement",
    lead: "It is never too early to start planning for retirement.",
    body: "Whatever your dreams for your retirement, having a strategy in advance will give you the tools you need to make them a reality. By having a good understanding of basic financial concepts related to retirement, you can get the most out of the tools available to you.",
    videoSrc: "https://player.vimeo.com/video/512695110?h=71c750c323",
  },
];

function ObjectiveAction({
  label,
  lead,
  body,
  videoSrc,
  videoTitle,
  closeLabel,
}: Body2Objective & { closeLabel: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          as="button"
          variant="outline"
          className="body-2-objective-button border-2 text-ploy-accent-primary"
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent
        closeLabel={closeLabel}
        className="body-2-objective-dialog max-w-[min(720px,calc(100vw-32px))]"
      >
        <DialogTitle level={2} className="pr-8 text-ploy-accent-primary">
          {label}
        </DialogTitle>
        {lead && (
          <DialogDescription className="mt-4 font-bold text-ploy-text-primary">
            {lead}
          </DialogDescription>
        )}
        {body && <Text className="mt-4 mb-9 text-ploy-text-primary">{body}</Text>}
        {videoSrc && (
          <div className="body-2-objective-video">
            <iframe
              src={videoSrc}
              title={videoTitle ?? label}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/**
 * @ployComponent
 * @ployComponentId body-2-objectives
 * @ployComponentType section
 * @ployComponentTags objectives, dialog, video, illustration, bilingual
 * @ployComponentDescription Life-event buttons on a pale blue surface with graph artwork and a cutout couple. The graph's two areas rise with a small bounce each time they scroll into view (static under reduced motion). Each button opens an accessible modal dialog with a title, lead question, paragraph and an embedded video. Heading lines, items, image, anchor id and the close label are props for EN and FR pages.
 * @ployComponentStatus stable
 */
export function Body2Objectives({
  heading = ["New life event,", "new objective"],
  items = objectives,
  imageSrc = "/images/2382ce58-accueil-nouvel-objectif.webp",
  imageAlt = "",
  id = "life-events",
  closeLabel = "Close",
}: Body2ObjectivesProps = {}) {
  const lines = Array.isArray(heading) ? heading : [heading];
  const graphRef = useRef<HTMLDivElement>(null);

  // Mirrors investia.ca: the graph's two areas rise each time it enters the
  // viewport and reset when it leaves. Without JS the graph stays static.
  useEffect(() => {
    const graph = graphRef.current;
    if (!graph || typeof IntersectionObserver === "undefined") return;
    graph.dataset.motion = "ready";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) graph.dataset.loaded = "true";
      else delete graph.dataset.loaded;
    });
    observer.observe(graph);
    return () => {
      observer.disconnect();
      delete graph.dataset.motion;
      delete graph.dataset.loaded;
    };
  }, []);

  return (
    <Section
      id={id}
      space="flush"
      data-ploy-component="body-2-objectives"
      className="body-2-objectives scroll-mt-4 bg-ploy-background-secondary"
    >
      <Container className="body-2-objectives-container">
        <div className="body-2-objectives-copy">
          <Heading
            level={1}
            as="h2"
            className="body-2-objectives-heading text-ploy-accent-primary"
          >
            {lines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && " "}
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </Heading>
          <div className="body-2-objectives-actions">
            {items.map((item) => (
              <ObjectiveAction
                key={item.label}
                {...item}
                closeLabel={closeLabel}
              />
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="body-2-objectives-art">
          <div ref={graphRef} className="body-2-objectives-graph">
            <ICONS.i5 className="body-2-objectives-line" />
            <ICONS.i6 className="body-2-objectives-pin-one" />
            <ICONS.i7 className="body-2-objectives-pin-two" />
          </div>
        </div>
        <img
          className="body-2-objectives-image"
          src={imageSrc}
          alt={imageAlt}
        />
      </Container>
    </Section>
  );
}

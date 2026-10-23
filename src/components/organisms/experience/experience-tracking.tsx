"use client";

import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/molecules/overlay";
import { ExperienceMaterialIcon } from "@/components/atoms/experience-material-icon";
import "./experience-tracking.css";

export type ExperienceTrackingBadge = {
  src: string;
  href: string;
  ariaLabel: string;
};

export type ExperienceTrackingDocument = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type ExperienceTrackingProps = {
  heading: string;
  portal: {
    title: string;
    lead: string;
    items: string[];
    newHeading: string;
    newBody: string;
    createLabel: string;
    createHref: string;
    mfaLabel: string;
    mfaHref: string;
  };
  app: {
    title: string;
    lead: string;
    download: string;
    badges: ExperienceTrackingBadge[];
    /** Sentence around the inline Client Portal link. */
    noteBefore: string;
    noteLinkLabel: string;
    noteLinkHref: string;
    noteLinkAriaLabel?: string;
    noteAfter?: string;
    learnLabel: string;
    learnHref: string;
    imageSrc: string;
    imageAlt?: string;
  };
  documents: {
    heading: string;
    items: ExperienceTrackingDocument[];
    /** Info link that opens a modal with the interest-rate notice. */
    notice: {
      label: string;
      title: string;
      body: string;
      closeLabel: string;
    };
  };
};

/**
 * @ployComponent
 * @ployComponentId experience-tracking
 * @ployComponentType section
 * @ployComponentTags portal, mobile-app, documents, dialog, bilingual
 * @ployComponentDescription Investia "Tracking your progress" band (investia.ca grille-section-suivi): H2, then a grey Client Portal card (bold lead, check-circle list, MFA note, external create-account link and an arrow link) beside a light-blue Mobile app card (lead, App Store and Google Play badges, inline Client Portal link, learn-more link and a phone screenshot); cards stack under 1140px and sit 1/3 + 2/3 above. Below, an "Information and documents" H2 and a grey card of PDF download links plus an info link that opens an accessible modal with the interest-rate notice. All copy, links, badges and images are props for EN and FR.
 * @ployComponentStatus stable
 */
export function ExperienceTracking({
  heading,
  portal,
  app,
  documents,
}: ExperienceTrackingProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="experience-tracking"
      className="experience-tracking"
    >
      <Container className="experience-tracking-container">
        <Heading level={2} className="experience-tracking-heading">
          {heading}
        </Heading>
        <div className="experience-tracking-row">
          <div className="experience-tracking-card experience-tracking-portal">
            <Heading level={3} as="h3" className="experience-tracking-card-title">
              {portal.title}
            </Heading>
            <div className="experience-tracking-portal-body">
              <Text className="experience-tracking-bold">{portal.lead}</Text>
              <ul className="experience-tracking-list">
                {portal.items.map((item) => (
                  <li key={item}>
                    <ExperienceMaterialIcon
                      name="check_circle"
                      size={24}
                      className="experience-tracking-list-icon"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Text className="experience-tracking-bold">{portal.newHeading}</Text>
              <Text className="experience-tracking-portal-note">{portal.newBody}</Text>
            </div>
            <a href={portal.createHref} className="experience-tracking-link">
              {portal.createLabel}
              <ExperienceMaterialIcon name="open_in_new" size={18} />
            </a>
            <a href={portal.mfaHref} className="experience-tracking-custom-link">
              {portal.mfaLabel}
              <ExperienceMaterialIcon name="east" size={18} />
            </a>
          </div>
          <div className="experience-tracking-card experience-tracking-app">
            <div className="experience-tracking-app-text">
              <Heading level={3} as="h3" className="experience-tracking-card-title">
                {app.title}
              </Heading>
              <Text className="experience-tracking-bold">{app.lead}</Text>
              <Text className="experience-tracking-paragraph">{app.download}</Text>
              {app.badges.map((badge, index) => (
                <a
                  key={badge.href}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={badge.ariaLabel}
                  className={
                    index === app.badges.length - 1
                      ? "experience-tracking-badge experience-tracking-badge-last"
                      : "experience-tracking-badge"
                  }
                >
                  <img src={badge.src} alt="" width={172} height={50} />
                </a>
              ))}
              <Text className="experience-tracking-app-note">
                {app.noteBefore}
                <a
                  href={app.noteLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={app.noteLinkAriaLabel}
                  className="experience-tracking-inline-link"
                >
                  {app.noteLinkLabel}
                  <ExperienceMaterialIcon
                    name="open_in_new"
                    size={18}
                    className="experience-tracking-inline-icon"
                  />
                </a>
                {app.noteAfter}
              </Text>
              <a href={app.learnHref} className="experience-tracking-link experience-tracking-link-block">
                {app.learnLabel}
                <ExperienceMaterialIcon name="east" size={18} />
              </a>
            </div>
            <div className="experience-tracking-app-image">
              <img src={app.imageSrc} alt={app.imageAlt ?? ""} width={744} height={1252} />
            </div>
          </div>
        </div>
        <Heading level={2} className="experience-tracking-heading">
          {documents.heading}
        </Heading>
        <div className="experience-tracking-card experience-tracking-documents">
          {documents.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="experience-tracking-link experience-tracking-doc"
            >
              <span>{item.label}</span>
              <ExperienceMaterialIcon name="download" variant="filled" size={18} />
            </a>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="experience-tracking-link experience-tracking-doc"
              >
                <span>{documents.notice.label}</span>
                <ExperienceMaterialIcon name="info" variant="filled" size={18} />
              </button>
            </DialogTrigger>
            <DialogContent
              closeLabel={documents.notice.closeLabel}
              className="experience-tracking-dialog max-w-[min(720px,calc(100vw-32px))]"
            >
              <DialogTitle level={2} className="mb-6 pr-8 text-[25px] leading-[28px] text-[#1b1b1b] md:text-[2rem] md:leading-[1.19]">
                {documents.notice.title}
              </DialogTitle>
              <Text className="m-0 text-ploy-text-primary">{documents.notice.body}</Text>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </Section>
  );
}

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
export declare function ExperienceTracking({ heading, portal, app, documents, }: ExperienceTrackingProps): import('react').JSX.Element;

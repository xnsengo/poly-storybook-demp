import { Locale } from '../site/routes';
export type AdvisorContent = {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        intro: string;
    };
    search: {
        heading: string;
        body: string;
        resultsHeading: string;
        label: string;
        button: string;
        emptyError: string;
        /** "{0}" is replaced by the number of advisors found. */
        resultsCount: string;
        moreLabel: string;
        noResult: {
            before: string;
            linkLabel: string;
            linkHref: string;
            after: string;
        };
        card: {
            sendMessage: string;
            phoneLabel: string;
            extensionPrefix: string;
            mobileLabel: string;
            directions: string;
            visitWebsite: string;
        };
    };
    portal: {
        heading: string;
        bodyBefore: string;
        phoneLabel: string;
        phoneHref: string;
        bodyAfter: string;
        cta: {
            label: string;
            href: string;
            ariaLabel: string;
        };
    };
    value: {
        heading: string;
        paragraphs: string[];
        link: {
            label: string;
            href: string;
        };
        image: {
            src: string;
            alt: string;
            width: number;
            height: number;
        };
    };
};
export declare const advisorContent: Record<Locale, AdvisorContent>;

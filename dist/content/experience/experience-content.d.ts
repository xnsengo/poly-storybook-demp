import { Locale } from '../site/routes';
import { ExperienceHeroProps } from '../../components/organisms/experience/experience-hero';
import { ExperienceCommitmentProps } from '../../components/organisms/experience/experience-commitment';
import { ExperienceCalculatorsProps } from '../../components/organisms/experience/experience-calculators';
import { ExperienceTrackingProps } from '../../components/organisms/experience/experience-tracking';
export type ExperienceContent = {
    meta: {
        title: string;
        description: string;
        ogImage: string;
    };
    hero: ExperienceHeroProps;
    cta: {
        label: string;
    };
    commitment: ExperienceCommitmentProps;
    calculators: ExperienceCalculatorsProps;
    tracking: ExperienceTrackingProps;
};
export declare const experienceContent: Record<Locale, ExperienceContent>;
/** The CTA follows the site's own advisor route for each locale. */
export declare const experienceCtaHref: (locale: Locale) => "/find-an-advisor" | "/trouver-un-conseiller";

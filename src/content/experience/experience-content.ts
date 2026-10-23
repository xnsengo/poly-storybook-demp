/**
 * Copy for "The Investia Experience" (EN) / "L'expérience Investia" (FR),
 * extracted programmatically from investia.ca/investia-experience and
 * investia.ca/experience-investia. Do not paraphrase; edit against the source.
 */
import type { Locale } from "@/content/site/routes";
import { ROUTES } from "@/content/site/routes";
import type { ExperienceHeroProps } from "@/components/organisms/experience/experience-hero";
import type { ExperienceCommitmentProps } from "@/components/organisms/experience/experience-commitment";
import type { ExperienceCalculatorsProps } from "@/components/organisms/experience/experience-calculators";
import type { ExperienceTrackingProps } from "@/components/organisms/experience/experience-tracking";

export type ExperienceContent = {
  meta: { title: string; description: string; ogImage: string };
  hero: ExperienceHeroProps;
  cta: { label: string };
  commitment: ExperienceCommitmentProps;
  calculators: ExperienceCalculatorsProps;
  tracking: ExperienceTrackingProps;
};

export const experienceContent: Record<Locale, ExperienceContent> = {
  en: {
  "meta": {
    "title": "The Investia Experience | Investia",
    "description": "Our team of advisors takes the time to listen to you in order to provide you with the best possible solutions.",
    "ogImage": "/images/exp-og-en.jpg"
  },
  "hero": {
    "title": "The Investia experience",
    "subtitle": "Our team of advisors takes the time to listen to you in order to provide you with the best possible solutions.",
    "imageSrc": "/images/exp-hero-dsktp.webp",
    "tabletImageSrc": "/images/exp-hero-tblt.webp",
    "mobileImageSrc": "/images/exp-hero-phne.webp",
    "pinOneSrc": "/images/exp-pin-conseillere.webp",
    "pinTwoSrc": "/images/exp-pin-conseiller.webp"
  },
  "cta": {
    "label": "Find an advisor"
  },
  "commitment": {
    "heading": "Our Commitment",
    "steps": [
      {
        "title": "Know you",
        "lead": [
          "To get to know you, first we have to talk about you"
        ],
        "body": "We want to know and understand you. What are your values? What are your dreams, your ambitions? By talking with you, we will be able to propose an action plan based on what you want, what defines you."
      },
      {
        "title": "Advise you",
        "lead": [
          "Our advisors talk to you about more than just money"
        ],
        "body": "Our experienced and knowledgeable advisors will help make your plans a reality. By listening to you and using their expertise, they will propose a clear and effective plan which will help you reach your goals."
      },
      {
        "title": "Guide you",
        "lead": [
          "Our advisors are not just there for your retirement"
        ],
        "body": "Anything can happen along the way! Your advisor is there to help keep you focused on your goals. Our advisors have a wide range of tools adapted to each situation to help you make sound financial decisions."
      }
    ],
    "simplicity": {
      "heading": "Simplicity, right from the start",
      "items": [
        {
          "icon": "assessment",
          "text": "We help you take stock of your finances and define your priorities to facilitate the first meeting with your advisor."
        },
        {
          "icon": "flag",
          "text": "Your advisor proposes an action plan customized to your plans and your situation."
        },
        {
          "icon": "people_alt",
          "text": "Your action plan will continually evolve and adapt to the major changes in your life through periodic meetings with your advisor."
        }
      ],
      "actionLabel": "The value of advisor",
      "actionHref": "https://investia.ca/value-of-advice",
      "imageSrc": "/images/exp-la-simplicite.webp"
    }
  },
  "calculators": {
    "heading": "Calculators at your disposal",
    "items": [
      {
        "title": "RESP calculator",
        "body": "Get an estimate of the return on your retirement savings and of the amount you will have upon retirement.",
        "linkLabel": "Calculate your income",
        "href": "https://investia.ca/calculateurs/resp-calculator"
      },
      {
        "title": "RRSP calculator",
        "body": "Estimate how much you can save with your RRSP in order to achieve your goals.",
        "linkLabel": "RRSP calculator",
        "href": "https://investia.ca/calculateurs/rrsp-calculator"
      },
      {
        "title": "TFSA calculator",
        "body": "Estimate how much you can save with your TFSA in order to achieve your goals.",
        "linkLabel": "TFSA calculator",
        "href": "https://investia.ca/calculateurs/tfsa-calculateur"
      }
    ],
    "linesSrc": "/images/exp-calculateur-lignes.svg",
    "imageSrc": "/images/exp-calculateur-bike.webp"
  },
  "tracking": {
    "heading": "Tracking your progress",
    "portal": {
      "title": "The Client Portal",
      "lead": "Direct access to your investments and our advice",
      "items": [
        "Stay up-to-date on the progress of your investments.",
        "Access to detailed information on your investments.",
        "Contact your advisor easily and quickly."
      ],
      "newHeading": "New to the Client Portal",
      "newBody": "Protecting your accounts with multi-factor authentication (MFA).",
      "createLabel": "Create account",
      "createHref": "https://client.investia.ca/",
      "mfaLabel": "Discover multi-factor authentication (MFA)",
      "mfaHref": "https://investia.ca/multi-factor-authentication-clients"
    },
    "app": {
      "title": "Mobile app",
      "lead": "A free app designed to help you keep track of your investments.",
      "download": "Download it today!",
      "badges": [
        {
          "src": "/images/exp-appstore-en.svg",
          "href": "https://apps.apple.com/us/app/investia/id1549342167",
          "ariaLabel": "apple appstore opens in a new tab"
        },
        {
          "src": "/images/exp-googleplay-en.svg",
          "href": "https://play.google.com/store/apps/details?id=ca.investia.mobile",
          "ariaLabel": "google appstore opens in a new tab"
        }
      ],
      "noteBefore": "To use the app, you will need to create an account in the app or on the ",
      "noteLinkLabel": "Client Portal",
      "noteLinkHref": "https://client.investia.ca/",
      "noteLinkAriaLabel": "Client Portal opens in a new tab",
      "noteAfter": "",
      "learnLabel": "Learn more about the mobile app",
      "learnHref": "https://investia.ca/mobile-app",
      "imageSrc": "/images/exp-screenphone-en.webp"
    },
    "documents": {
      "heading": "Information and documents for clients",
      "items": [
        {
          "label": "Administrative Fee Schedule (pdf)",
          "href": "https://files.ia.ca/-/media/files/investia/documents/investia-administrative-fee-schedule.pdf",
          "ariaLabel": "Administrative Fee Schedule (pdf) opens in a new tab"
        },
        {
          "label": "Relationship Disclosure Information Document (pdf)",
          "href": "https://investia.ca/-/media/files/investia/documents/Relationship_Disclosure_Information_Document.pdf",
          "ariaLabel": "Relationship Disclosure Information Document (pdf) opens in a new tab"
        },
        {
          "label": "Declaring and managing conflicts of interest (pdf)",
          "href": "https://investia.ca/-/media/files/investia/documents/Declaring-and-Managing-Conflicts-of-Interest.pdf",
          "ariaLabel": "Declaring and managing conflicts of interest (pdf) opens in a new tab"
        }
      ],
      "notice": {
        "label": "Interest rate – Nominee cash account",
        "title": "Interest rate – Nominee cash account",
        "body": "Effective October 1, 2023, Investia is no longer be paying interest on any balance held in clients’ nominee cash control accounts. If you are a client who holds cash in a nominee cash control account, please contact your Representative to discuss available investment options that would be suitable for your needs.",
        "closeLabel": "Go back to previous page"
      }
    }
  }
},
  fr: {
  "meta": {
    "title": "L’expérience Investia | Investia",
    "description": "Notre équipe de conseillers prend le temps de vous écouter afin de déterminer des solutions efficaces pour atteindre vos objectifs financiers.",
    "ogImage": "/images/exp-og-fr.jpg"
  },
  "hero": {
    "title": "L’expérience Investia",
    "subtitle": "Notre équipe de conseillers prend le temps de vous écouter afin de déterminer des solutions efficaces pour atteindre vos objectifs financiers.",
    "imageSrc": "/images/exp-hero-dsktp.webp",
    "tabletImageSrc": "/images/exp-hero-tblt.webp",
    "mobileImageSrc": "/images/exp-hero-phne.webp",
    "pinOneSrc": "/images/exp-pin-conseillere.webp",
    "pinTwoSrc": "/images/exp-pin-conseiller.webp"
  },
  "cta": {
    "label": "Trouver un conseiller"
  },
  "commitment": {
    "heading": "Notre engagement",
    "steps": [
      {
        "title": "Vous connaître",
        "lead": [
          "Pour bien vous connaître,",
          "nous devons d'abord parler de vous"
        ],
        "body": "Nous voulons vous connaître et vous comprendre. Quelles sont les valeurs qui vous guident? Quels sont vos rêves, vos ambitions? En discutant avec vous, nous pourrons vous proposer un plan d’action en\u00a0lien avec ce que vous voulez, ce qui vous\u00a0définit."
      },
      {
        "title": "Vous conseiller",
        "lead": [
          "Nos conseillers ne vous",
          "parlent pas que d’argent"
        ],
        "body": "Nos conseillers qualifiés mettent tout leur\u00a0savoir-faire à votre service afin de concrétiser vos projets. Par leur écoute et leur\u00a0expertise, ils sauront vous proposer un\u00a0plan d’action clair et efficace qui répondra à\u00a0vos besoins."
      },
      {
        "title": "Vous accompagner",
        "lead": [
          "Nos conseillers ne sont pas",
          "seulement là pour votre retraite"
        ],
        "body": "En cours de route, tout peut arriver! Votre conseiller est là pour vous permettre de maintenir le cap sur vos objectifs. Il dispose d’une gamme d’outils adaptés à chaque situation pour vous aider à prendre des décisions financières judicieuses."
      }
    ],
    "simplicity": {
      "heading": "La simplicité, dès le début",
      "items": [
        {
          "icon": "assessment",
          "text": "Nous vous aidons à faire le point sur l’état de vos finances et à définir les grandes lignes de vos objectifs pour faciliter la première rencontre avec votre conseiller."
        },
        {
          "icon": "flag",
          "text": "Votre conseiller vous propose un plan d’action sur mesure, selon vos projets et votre situation."
        },
        {
          "icon": "people_alt",
          "text": "Grâce à des rencontres périodiques avec votre conseiller, votre plan d’action évolue continuellement et s’adapte aux changements importants qui surviennent dans votre vie."
        }
      ],
      "actionLabel": "Découvrir la valeur du conseiller",
      "actionHref": "https://investia.ca/valeur-du-conseiller",
      "imageSrc": "/images/exp-la-simplicite.webp"
    }
  },
  "calculators": {
    "heading": "Calculateurs mis à votre disposition",
    "items": [
      {
        "title": "Calculateur REEE",
        "body": "Calculer le montant total que vous aurez épargné lorsque votre enfant commencera ses études postsecondaires.",
        "linkLabel": "Calculateur REEE",
        "href": "https://investia.ca/calculateurs/calculateur-reee"
      },
      {
        "title": "Calculateur REER",
        "body": "Estimez combien pourrait vous rapporter votre REER afin de réaliser vos projets.",
        "linkLabel": "Calculateur REER",
        "href": "https://investia.ca/calculateurs/calculateur-reer"
      },
      {
        "title": "Calculateur CELI",
        "body": "Estimez combien pourrait vous rapporter votre CELI aux fins de vous aider à réaliser vos projets.",
        "linkLabel": "Calculateur CELI",
        "href": "https://investia.ca/calculateurs/calculateur-celi"
      }
    ],
    "linesSrc": "/images/exp-calculateur-lignes.svg",
    "imageSrc": "/images/exp-calculateur-bike.webp"
  },
  "tracking": {
    "heading": "Suivi de votre progression",
    "portal": {
      "title": "Portail client",
      "lead": "Un accès direct à vos investissements et à nos conseils",
      "items": [
        "Suivez l’évolution de vos investissements.",
        "Consultez toute l’information pertinente concernant vos investissements et voyez si vous êtes en voie de réaliser vos objectifs.",
        "Communiquez facilement et rapidement avec votre conseiller."
      ],
      "newHeading": "Nouveauté du portail client",
      "newBody": "Protéger vos comptes grâce à l’authentification multifactorielle (AMF).",
      "createLabel": "Créer un compte",
      "createHref": "https://client.investia.ca/",
      "mfaLabel": "Découvrir l'authentification multifactorielle (AMF)",
      "mfaHref": "https://investia.ca/authentification-multifactorielle"
    },
    "app": {
      "title": "Application mobile",
      "lead": "Une application gratuite conçue pour vous permettre de suivre l'évolution de vos investissements.",
      "download": "Téléchargez-là dès maintenant!",
      "badges": [
        {
          "src": "/images/exp-appstore-fr.svg",
          "href": "https://apps.apple.com/us/app/investia/id1549342167",
          "ariaLabel": "apple appstore s'ouvre dans un nouvel onglet"
        },
        {
          "src": "/images/exp-googleplay-fr.svg",
          "href": "https://play.google.com/store/apps/details?id=ca.investia.mobile",
          "ariaLabel": "google appstore s'ouvre dans un nouvel onglet"
        }
      ],
      "noteBefore": "Pour y avoir accès, vous devrez vous créer un profil dans le ",
      "noteLinkLabel": "portail client",
      "noteLinkHref": "https://client.investia.ca/",
      "noteLinkAriaLabel": "Portail client s'ouvre dans un nouvel onglet",
      "noteAfter": " via l'application ou sur le portail directement.",
      "learnLabel": "Découvrir l’application mobile",
      "learnHref": "https://investia.ca/appli-mobile",
      "imageSrc": "/images/exp-screenphone-fr.webp"
    },
    "documents": {
      "heading": "Information et documents aux clients",
      "items": [
        {
          "label": "Grille de frais administratifs (pdf)",
          "href": "https://files.ia.ca/-/media/files/investia/documents/grille-de-frais-administratifs-investia.pdf",
          "ariaLabel": "Grille de frais administratifs (pdf) s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Document d'information sur la relation (pdf)",
          "href": "https://investia.ca/-/media/files/investia/documents/Document_d_information_sur_la_relation.pdf",
          "ariaLabel": "Document d'information sur la relation (pdf) s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Déclaration et gestion des conflits d’intérêts (pdf)",
          "href": "https://investia.ca/-/media/files/investia/documents/Declaration-et-gestion-des-conflits-d-interets.pdf",
          "ariaLabel": "Déclaration et gestion des conflits d’intérêts (pdf) s'ouvre dans un nouvel onglet"
        }
      ],
      "notice": {
        "label": "Taux d’intérêt – Encaisse de comptes autogérés",
        "title": "Taux d’intérêt – Encaisse de comptes autogérés",
        "body": "Depuis le 1er octobre 2023, Investia ne verse plus d’intérêts sur aucun solde détenu à l’encaisse de comptes autogérés de clients. Si vous êtes un client détenant des sommes d’argent dans un compte d’encaisse autogéré, veuillez communiquer avec votre représentant afin de discuter des différentes options d’investissement disponibles qui pourraient convenir à vos besoins.",
        "closeLabel": "Go back to previous page"
      }
    }
  }
},
};

/** The CTA follows the site's own advisor route for each locale. */
export const experienceCtaHref = (locale: Locale) => ROUTES.advisor[locale];

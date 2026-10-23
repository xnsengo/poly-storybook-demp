// Generated from the captured investia.ca homepage (EN: https://investia.ca/, FR: https://investia.ca/accueil).
// Visible copy, links and image references were extracted programmatically from the source HTML.
// Accessibility-only labels (landmarks, menu buttons, carousel messages) were authored for both languages.
import type { SiteNavProps } from "@/components/organisms/global/site-nav";
import type { Body1HeroProps } from "@/components/organisms/home/body-1-hero";
import type { Body1ActionsProps } from "@/components/organisms/home/body-1-actions";
import type { Body1BenefitsProps } from "@/components/organisms/home/body-1-benefits";
import type { Body2ProductsProps } from "@/components/organisms/home/body-2-products";
import type { Body2ObjectivesProps } from "@/components/organisms/home/body-2-objectives";
import type { Body2NewsTeamsProps } from "@/components/organisms/home/body-2-news-teams";
import type { Body3RegulatoryLogoProps } from "@/components/organisms/global/body-3-regulatory-logo";
import type { SiteFooterProps } from "@/components/organisms/global/site-footer";

export type HomeLocale = "en" | "fr";

export type HomeSocialLink = {
  network: "linkedin" | "facebook";
  label: string;
  href: string;
  ariaLabel?: string;
};

export type HomeContent = {
  lang: string;
  meta: { title: string; description: string };
  /** Visually hidden page H1, as on the source. */
  pageTitle: string;
  nav: SiteNavProps;
  hero: Body1HeroProps;
  actions: Body1ActionsProps;
  benefits: Body1BenefitsProps;
  products: Body2ProductsProps;
  objectives: Body2ObjectivesProps;
  newsTeams: Body2NewsTeamsProps;
  footer: Omit<SiteFooterProps, "socialLinks" | "onCookiePreferences" | "className"> & {
    socialLinks: HomeSocialLink[];
  };
  regulatory: Body3RegulatoryLogoProps;
};

export const homeContent: Record<HomeLocale, HomeContent> = {
  "en": {
    "lang": "en-CA",
    "meta": {
      "title": "Investia Financial Services | iA Financial Group",
      "description": "Investia is a financial services firm that offers a complete range of products to help you reach your goals."
    },
    "pageTitle": "Investia",
    "nav": {
      "homeLabel": "Investia home",
      "links": [
        {
          "label": "The Investia experience",
          "href": "/investia-experience"
        },
        {
          "label": "Products and services",
          "href": "/products-and-services"
        },
        {
          "label": "Find an advisor",
          "href": "/find-an-advisor"
        }
      ],
      "accounts": [
        {
          "label": "Advisor Centre",
          "href": "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280"
        },
        {
          "label": "Client Portal",
          "href": "https://client.investia.ca"
        }
      ],
      "advisor": {
        "label": "Advisor opportunities",
        "href": "https://investia.ca/advisor-opportunities"
      },
      "language": {
        "label": "FR",
        "href": "/accueil",
        "lang": "fr",
        "ariaLabel": "Français"
      },
      "connectLabel": "Connect",
      "searchPlaceholder": "Search",
      "search": {
        "inputLabel": "Search input",
        "submitLabel": "Search",
        "action": "https://investia.ca/search"
      },
      "labels": {
        "mainNav": "Main navigation",
        "accountNav": "Account navigation",
        "mobileNav": "Mobile main navigation",
        "menuTitle": "Investia navigation",
        "openMenu": "Open menu",
        "closeMenu": "Close menu",
        "skipToContent": "Skip to main content"
      }
    },
    "hero": {
      "items": [
        {
          "id": "projects",
          "title": "Invest in your projects",
          "body": "Take advantage of our advice for key moments in your life and let us help you through the process.",
          "imageSrc": "/images/bf1aca80-accueil-hero-dsktp.webp",
          "tabletImageSrc": "/images/66369806-accueil-hero-tblt.webp",
          "mobileImageSrc": "/images/986eb8c2-accueil-hero-phne.webp",
          "actionLabel": "Life events",
          "actionHref": "#life-events",
          "actionIcon": "none",
          "decoration": "projects"
        },
        {
          "id": "app",
          "title": "The Investia app",
          "body": "Our app lets you keep track of your investments anywhere, anytime.",
          "imageSrc": "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
          "tabletImageSrc": "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
          "mobileImageSrc": "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
          "actionLabel": "Learn more",
          "actionHref": "https://investia.ca/mobile-app"
        },
        {
          "id": "tfsa",
          "title": "TFSA",
          "imageSrc": "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
          "tabletImageSrc": "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
          "mobileImageSrc": "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
          "actionLabel": "See the annual limit for 2026",
          "actionHref": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributions.html",
          "external": true,
          "actionAriaLabel": "See the annual limit for 2026 opens in a new tab",
          "decoration": "tfsa",
          "secondaryLabel": "Learn more about TFSAs",
          "secondaryHref": "https://investia.ca/products-and-services/tfsa"
        },
        {
          "id": "portal",
          "title": "Client Portal",
          "body": "Already a client? Register now and access your portfolio online.",
          "imageSrc": "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
          "tabletImageSrc": "/images/457a8d86-accueil-hero6-portail-tblt.webp",
          "mobileImageSrc": "/images/750cd5f6-accueil-hero6-portail-phne.webp",
          "actionLabel": "Create account",
          "actionHref": "https://client.investia.ca/",
          "external": true,
          "actionAriaLabel": "Create account opens in a new tab",
          "decoration": "portal",
          "secondaryLabel": "About multi-factor authentication (MFA)",
          "secondaryHref": "https://investia.ca/multi-factor-authentication-clients"
        },
        {
          "id": "resp",
          "title": "Registered education savings plans (RESP)",
          "body": "The RESP is specifically designed to accumulate funds for a child's post-secondary education.",
          "imageSrc": "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
          "tabletImageSrc": "/images/1ab21e06-accueil-reee-hero-tblt.webp",
          "mobileImageSrc": "/images/eb5e5be7-accueil-reee-hero-phne.webp",
          "actionLabel": "Learn more",
          "actionHref": "https://investia.ca/products-and-services/resp"
        }
      ],
      "ariaLabel": "Featured topics",
      "a11y": {
        "paginationBulletMessage": "Go to slide {{index}}",
        "prevSlideMessage": "Previous slide",
        "nextSlideMessage": "Next slide"
      }
    },
    "actions": {
      "items": [
        {
          "label": "Find an advisor",
          "href": "/find-an-advisor"
        },
        {
          "label": "Connect to the Client Portal",
          "href": "https://client.investia.ca/"
        }
      ]
    },
    "benefits": {
      "items": [
        {
          "title": "The Investia experience",
          "body": "Anything can change in life. Our advisors are there to make sure that your action plan evolves with you.",
          "imageSrc": "/images/24d627c8-experience-investia.webp",
          "imageAlt": "Woman working on a laptop",
          "actionLabel": "See our offer",
          "actionHref": "/investia-experience"
        },
        {
          "title": "The value of advice",
          "body": "Benefit from the expertise of our advisors and a variety of customized solutions which will help you reach your financial goals.",
          "imageSrc": "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
          "imageAlt": "",
          "overlaySrc": "/images/95b9d810-accueil-representants-pin.webp",
          "overlayAlt": "Investia advisors",
          "actionLabel": "Discover our expertise",
          "actionHref": "https://investia.ca/value-of-advice"
        },
        {
          "title": "About us",
          "body": "A wholly-owned subsidiary of iA Financial Group, Investia offers you a full range of mutual fund and segregated fund products and services to meet your savings and retirement needs.",
          "imageSrc": "/images/1e0676de-a-propos.webp",
          "imageAlt": "Father carrying his child on his shoulders",
          "actionLabel": "About Investia",
          "actionHref": "https://investia.ca/about-investia"
        }
      ]
    },
    "products": {
      "heading": "We offer a wide range of products and services",
      "body": "You have financial needs? We have products and services to help you reach your goals.",
      "items": [
        "RRSP, LIRA and other plans",
        "RRIF, LIF and annuities",
        "RRSP loans",
        "Tax-free savings accounts (TFSA)",
        "Non-registered savings plans",
        "Registered education savings plans (RESP)"
      ],
      "imageSrc": "/images/6d77cd18-accueil-gamme-produits.webp",
      "imageAlt": "An adult and child fishing together",
      "actionLabel": "Discover our products and services",
      "actionHref": "/products-and-services"
    },
    "objectives": {
      "heading": [
        "New life event,",
        "new objective"
      ],
      "items": [
        {
          "label": "Moving in together",
          "lead": "Are you about to move in with your significant other?",
          "body": "See what you should plan for in terms of insurance and savings to begin your life together on the right foot.",
          "videoSrc": "https://player.vimeo.com/video/512694821?h=14f9fe9aca"
        },
        {
          "label": "Buying a home",
          "lead": "Do you want to leave apartment life behind and buy a home?",
          "body": "Buying a home is one of the most important transactions you will ever make. Being prepared will make the process easier and help you make educated choices.",
          "videoSrc": "https://player.vimeo.com/video/512695696?h=9ff772182b"
        },
        {
          "label": "Having a child",
          "lead": "Will your family soon have a new addition?",
          "body": "Here are a few things to think about to protect your loved ones against the unexpected and prepare for your new arrival.",
          "videoSrc": "https://player.vimeo.com/video/512694732?h=86cf52309e"
        },
        {
          "label": "Saving for a project",
          "lead": "Do you want to travel? Are you planning your wedding or your retirement?",
          "body": "Whether your projects are big or small, you must take the time to organize and figure out how to pay for them.",
          "videoSrc": "https://player.vimeo.com/video/512695304?h=81691126f4"
        },
        {
          "label": "Starting a business",
          "lead": "Do you believe in your project and know that your products or services meet the needs of the market?",
          "body": "Here are a few elements to help you launch your business.",
          "videoSrc": "https://player.vimeo.com/video/512695366?h=57db274669"
        },
        {
          "label": "Planning your retirement",
          "lead": "It is never too early to start planning for retirement.",
          "body": "Whatever your dreams for your retirement, having a strategy in advance will give you the tools you need to make them a reality. By having a good understanding of basic financial concepts related to retirement, you can get the most out of the tools available to you.",
          "videoSrc": "https://player.vimeo.com/video/512695110?h=71c750c323"
        }
      ],
      "imageSrc": "/images/2382ce58-accueil-nouvel-objectif.webp",
      "imageAlt": "",
      "id": "life-events",
      "closeLabel": "Close"
    },
    "newsTeams": {
      "items": [
        {
          "id": "news",
          "heading": "Economic news",
          "body": "Sébastien Mc Mahon, Chief Strategist and Senior Economist at iA Financial Group, presents articles and videos to help keep you up to speed on the economy and the financial markets.",
          "imageSrc": "/images/79a3d937-accueil-actualites-economiques.webp",
          "imageAlt": "Economic themes and a rising graph",
          "mediaWidth": 514,
          "mediaHeight": 286,
          "actions": [
            {
              "label": "View economic news",
              "href": "https://ia.ca/economic-publications",
              "external": true,
              "ariaLabel": "View economic news opens in a new window"
            }
          ]
        },
        {
          "id": "teams",
          "heading": "Join the Investia teams",
          "body": "The support and backing that we provide our advisors is at the heart of our corporate culture. We offer our advisors a wide range of products and services, including the latest technology and simplified business processes which will allow them to place their focus where it counts: on their clients.",
          "imageSrc": "/images/95d04241-accueil-equipe.webp",
          "imageAlt": "A member of the Investia team",
          "mediaWidth": 514,
          "mediaHeight": 396,
          "flip": true,
          "brandArtwork": true,
          "actions": [
            {
              "label": "Consult our job offers",
              "href": "https://ia.ca/jobs/jobs-available",
              "primary": true,
              "external": true,
              "ariaLabel": "Consult our job offers opens in a new tab"
            },
            {
              "label": "Become an Investia advisor",
              "href": "https://investia.ca/advisor-opportunities"
            }
          ]
        }
      ]
    },
    "footer": {
      "primaryLinks": [
        {
          "label": "About us",
          "href": "https://investia.ca/about-investia"
        },
        {
          "label": "Contact us",
          "href": "https://investia.ca/contact-us"
        },
        {
          "label": "Careers",
          "href": "https://investia.ca/career"
        }
      ],
      "secondaryLinks": [
        {
          "label": "Connect to the Client Portal",
          "href": "https://client.investia.ca/",
          "external": true,
          "ariaLabel": "Connect to the Client Portal opens in a new tab"
        },
        {
          "label": "Find an advisor",
          "href": "/find-an-advisor"
        },
        {
          "label": "Advice Zone",
          "href": "https://ia.ca/advice-zone",
          "external": true,
          "ariaLabel": "Advice Zone opens in a new tab"
        },
        {
          "label": "Economic news",
          "href": "https://ia.ca/economic-publications",
          "external": true,
          "ariaLabel": "Economic news opens in a new tab"
        }
      ],
      "legalLinks": [
        {
          "label": "Unclaimed property",
          "href": "https://investia.ca/unclaimed-property"
        },
        {
          "label": "Legal and compliance",
          "href": "https://investia.ca/legal-and-compliance"
        },
        {
          "label": "Terms of use",
          "href": "https://investia.ca/terms-conditions"
        },
        {
          "label": "Privacy",
          "href": "https://ia.ca/protection-personal-information",
          "external": true,
          "ariaLabel": "Privacy opens in a new tab"
        },
        {
          "label": "Accessibility",
          "href": "https://ia.ca/accessibility",
          "external": true,
          "ariaLabel": "Accessibility opens in a new tab"
        },
        {
          "label": "Sitemap",
          "href": "https://investia.ca/site-map"
        },
        {
          "label": "Investia Administrative Fee Schedule",
          "href": "https://investia.ca/grille-frais"
        },
        {
          "label": "iA Financial Group",
          "href": "https://ia.ca/individuals",
          "external": true,
          "ariaLabel": "iA Financial Group opens in a new tab"
        },
        {
          "label": "Cookies preference",
          "href": "#cookie-preferences",
          "cookiePreferences": true
        }
      ],
      "socialLinks": [
        {
          "network": "linkedin",
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/company/investiafinancialservices",
          "ariaLabel": "LinkedIn opens in a new tab"
        },
        {
          "network": "facebook",
          "label": "Facebook",
          "href": "https://www.facebook.com/InvestiaFinancialServices/",
          "ariaLabel": "Facebook opens in a new tab"
        }
      ],
      "appTitle": "Download the Investia app",
      "appBadges": [
        {
          "label": "App Store",
          "alt": "App Store",
          "src": "/images/2fd22d0a-app-store-en.webp",
          "href": "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-en-investia-footer&mt=8"
        },
        {
          "label": "Google Play",
          "alt": "Google Play",
          "src": "/images/a08910f6-google-play-en.webp",
          "href": "https://play.google.com/store/apps/details?id=ca.investia.mobile&hl=en&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-en-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-en-investia-footer"
        }
      ],
      "appBenefits": {
        "label": "Discover the benefits",
        "href": "https://investia.ca/mobile-app"
      },
      "slogan": "Get ahead",
      "subsidiaryNote": "Investia Financial Services Inc. is a wholly-owned subsidiary of Industrial Alliance Insurance and Financial Services Inc., a life and health insurance company which operates under the trade name iA Financial Group.",
      "copyrightLabel": "Investia Financial Services - All rights reserved"
    },
    "regulatory": {
      "imageSrc": "/images/10d55ebb-ciro-regulated.webp",
      "imageAlt": "Canadian Investment Regulatory Organization (CIRO)",
      "href": "https://www.ciro.ca/"
    }
  },
  "fr": {
    "lang": "fr-CA",
    "meta": {
      "title": "Investia Services Financiers | iA Groupe financier",
      "description": "Investia est un cabinet de services financiers qui se spécialisent dans les fonds communs de placement et les fonds distincts."
    },
    "pageTitle": "Investia",
    "nav": {
      "homeLabel": "Accueil Investia",
      "logoSrc": "/images/2b823bce-investia-fr-h-rgb-web.svg",
      "logoAlt": "Investia",
      "links": [
        {
          "label": "L'expérience Investia",
          "href": "/experience-investia"
        },
        {
          "label": "Produits et services",
          "href": "/produits-et-services"
        },
        {
          "label": "Trouver un conseiller",
          "href": "/trouver-un-conseiller"
        }
      ],
      "accounts": [
        {
          "label": "Espace conseiller",
          "href": "https://logins.investia.ca/SAMLAuth/Login?SAMLRequest=fVA9b8JADN35FdHt5D5CCLGSSEgwRKJLW3XogpxwKpGCj54viJ%2FfHK3UTvXgwe89%2Bz1X2ymc6dl%2BTpZDspvbQBgGR7U4h3BlkHJ0HwNxOtAtopj2KF%2B2T4colIeIiaTd1eJ46gx2urR9sdHKrAp1ynHVoVrbdaazIitVXsxU5sm2xAEp1MIovVmqcmnyV51BrsGYd5G8Wc8PCyZVIrlfRuJaTJ7AIQ8MhBfLEHqINmDmwNW74Ho3imaRzFURa3gc8t9qmAf%2Fb0Bm62Nu0URa%2BxN2fw8eyYZK%2Fq5sFpX8%2B7XmCw%3D%3D&RelayState=48c11ede24de214ae9f46831623a563bfc4ff280"
        },
        {
          "label": "Portail client",
          "href": "https://client.investia.ca"
        }
      ],
      "advisor": {
        "label": "Opportunités pour les conseillers",
        "href": "https://investia.ca/opportunites-pour-les-conseillers"
      },
      "language": {
        "label": "EN",
        "href": "/",
        "lang": "en",
        "ariaLabel": "English"
      },
      "connectLabel": "Connexion",
      "searchPlaceholder": "Rechercher",
      "search": {
        "inputLabel": "Champ de recherche",
        "submitLabel": "Rechercher",
        "action": "https://investia.ca/recherche"
      },
      "labels": {
        "mainNav": "Navigation principale",
        "accountNav": "Navigation des comptes",
        "mobileNav": "Navigation principale mobile",
        "menuTitle": "Navigation Investia",
        "openMenu": "Ouvrir le menu",
        "closeMenu": "Fermer le menu",
        "skipToContent": "Passer au contenu principal"
      }
    },
    "hero": {
      "items": [
        {
          "id": "projects",
          "title": "Investir dans vos projets",
          "body": "Profitez de nos conseils lors des moments clés de votre vie et laissez-nous vous aider dans vos démarches.",
          "imageSrc": "/images/bf1aca80-accueil-hero-dsktp.webp",
          "tabletImageSrc": "/images/66369806-accueil-hero-tblt.webp",
          "mobileImageSrc": "/images/986eb8c2-accueil-hero-phne.webp",
          "actionLabel": "Événements de vie",
          "actionHref": "#life-events",
          "actionIcon": "none",
          "decoration": "projects"
        },
        {
          "id": "app",
          "title": "L’application Investia",
          "body": "Notre application vous permet de suivre vos placements partout et en tout temps.",
          "imageSrc": "/images/465556ff-accueil-hero4-app-gbi-dsktp.webp",
          "tabletImageSrc": "/images/5de970df-accueil-hero4-app-gbi-tblt.webp",
          "mobileImageSrc": "/images/279411d1-accueil-hero4-app-gbi-phne.webp",
          "actionLabel": "En savoir plus",
          "actionHref": "https://investia.ca/appli-mobile"
        },
        {
          "id": "tfsa",
          "title": "CELI",
          "imageSrc": "/images/55bbbd85-accueil-hero5-celi-dsktp.webp",
          "tabletImageSrc": "/images/60bc5c9e-accueil-hero5-celi-tblt.webp",
          "mobileImageSrc": "/images/f0b0a55f-accueil-hero5-celi-phne.webp",
          "actionLabel": "Informez-vous sur le nouveau montant annuel maximum pour 2026",
          "actionHref": "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot/cotisations.html",
          "external": true,
          "actionAriaLabel": "Informez-vous sur le nouveau montant annuel maximum pour 2026 s'ouvre dans un nouvel onglet",
          "decoration": "tfsa",
          "secondaryLabel": "En savoir plus sur les CELI",
          "secondaryHref": "https://investia.ca/produits-et-services/celi"
        },
        {
          "id": "portal",
          "title": "Portail client",
          "body": "Déjà client? Inscrivez-vous dès maintenant et accédez à votre portefeuille en ligne.",
          "imageSrc": "/images/afabac5c-accueil-hero6-portail-dsktp.webp",
          "tabletImageSrc": "/images/457a8d86-accueil-hero6-portail-tblt.webp",
          "mobileImageSrc": "/images/750cd5f6-accueil-hero6-portail-phne.webp",
          "actionLabel": "Créer un compte",
          "actionHref": "https://client.investia.ca/",
          "external": true,
          "actionAriaLabel": "Créer un compte s'ouvre dans un nouvel onglet",
          "decoration": "portal",
          "secondaryLabel": "À propos de l'authentification multifactorielle (AMF)",
          "secondaryHref": "https://investia.ca/authentification-multifactorielle"
        },
        {
          "id": "resp",
          "title": "Régime enregistré d'épargne-d'études (REEE)",
          "body": "Le REEE est spécialement conçu pour accumuler des sommes en vue des études postsecondaires d'un enfant.",
          "imageSrc": "/images/590bc5d2-accueil-reee-hero-dsktp.webp",
          "tabletImageSrc": "/images/1ab21e06-accueil-reee-hero-tblt.webp",
          "mobileImageSrc": "/images/eb5e5be7-accueil-reee-hero-phne.webp",
          "actionLabel": "En savoir plus",
          "actionHref": "https://investia.ca/produits-et-services/reee"
        }
      ],
      "ariaLabel": "Sujets en vedette",
      "a11y": {
        "paginationBulletMessage": "Aller à la diapositive {{index}}",
        "prevSlideMessage": "Diapositive précédente",
        "nextSlideMessage": "Diapositive suivante"
      }
    },
    "actions": {
      "items": [
        {
          "label": "Trouver un conseiller",
          "href": "/trouver-un-conseiller"
        },
        {
          "label": "Me connecter au portail client",
          "href": "https://client.investia.ca/"
        }
      ]
    },
    "benefits": {
      "items": [
        {
          "title": "L'expérience Investia",
          "body": "Tout peut changer dans la vie. C’est pourquoi nos conseillers vous accompagnent à toutes les étapes de votre vie afin de s’assurer que votre plan d’action évolue avec vous.",
          "imageSrc": "/images/24d627c8-experience-investia.webp",
          "imageAlt": "Femme travaillant sur un ordinateur portable",
          "actionLabel": "Vivre l’expérience Investia",
          "actionHref": "/experience-investia"
        },
        {
          "title": "La valeur du conseil",
          "body": "Profitez de l’expertise de nos conseillers et réalisez vos projets. Laissez-nous vous proposer des solutions sur mesure qui vous permettront d’atteindre vos objectifs financiers.",
          "imageSrc": "/images/c9297b4c-accueil-valeurconseiller-grille.webp",
          "imageAlt": "",
          "overlaySrc": "/images/95b9d810-accueil-representants-pin.webp",
          "overlayAlt": "Conseillers Investia",
          "actionLabel": "Découvrir notre expertise",
          "actionHref": "https://investia.ca/valeur-du-conseiller"
        },
        {
          "title": "À propos de nous",
          "body": "Filiale à part entière de iA Groupe financier, Investia vous offre une gamme complète de produits et de services de fonds communs de placement et de fonds distincts afin de combler vos besoins d’épargne et de retraite.",
          "imageSrc": "/images/1e0676de-a-propos.webp",
          "imageAlt": "Père portant son enfant sur ses épaules",
          "actionLabel": "En savoir plus sur Investia",
          "actionHref": "https://investia.ca/a-propos"
        }
      ]
    },
    "products": {
      "heading": "Une vaste gamme de produits et services",
      "body": "Vous avez des besoins financiers? Nous avons des produits et des services pour vous aider à réaliser vos objectifs.",
      "items": [
        "REER, CRI et autres régimes",
        "FERR, FRV et rentes",
        "Prêt REER",
        "Compte d’épargne libre d’impôt (CELI)",
        "Épargne non enregistrée",
        "Régime enregistré d’épargne-études (REEE)"
      ],
      "imageSrc": "/images/6d77cd18-accueil-gamme-produits.webp",
      "imageAlt": "Un adulte et un enfant qui pêchent ensemble",
      "actionLabel": "Découvrir nos produits et services",
      "actionHref": "/produits-et-services"
    },
    "objectives": {
      "heading": [
        "Nouvel événement de vie,",
        "nouvel objectif"
      ],
      "items": [
        {
          "label": "Vivre en couple",
          "lead": "Vous êtes sur le point d’emménager avec votre conjoint(e)?",
          "body": "Voici ce que vous devez planifier en matière d’assurance et d’épargne afin de bien entamer votre vie à deux.",
          "videoSrc": "https://player.vimeo.com/video/512695441?h=ddd25169ae"
        },
        {
          "label": "Acheter une maison",
          "lead": "Vous désirez quitter votre logement et devenir propriétaire?",
          "body": "L’achat d’une maison est l’une des plus importantes transactions de notre vie. Être bien préparé facilitera le processus et vous permettra de faire des choix éclairés.",
          "videoSrc": "https://player.vimeo.com/video/512695544?h=ba616fc3ab"
        },
        {
          "label": "Avoir un enfant",
          "lead": "Votre famille s’agrandira sous peu?",
          "body": "Voici quelques éléments à considérer pour protéger vos proches des imprévus et être bien préparé à la venue de votre nouveau-né.",
          "videoSrc": "https://player.vimeo.com/video/512695622?h=caa786b74d"
        },
        {
          "label": "Épargner pour un projet",
          "lead": "Vous voulez voyager, vous planifiez votre mariage ou votre retraite?",
          "body": "Que vos projets soient gros ou petits, vous devrez prendre le temps de les organiser et de les financer.",
          "videoSrc": "https://player.vimeo.com/video/512694630?h=1c43da0740"
        },
        {
          "label": "Démarrer une entreprise",
          "lead": "Vous croyez en votre projet et savez que vos produits ou vos services correspondent au besoin du marché?",
          "body": "Voici les éléments qui vous aideront à mettre en branle votre projet.",
          "videoSrc": "https://player.vimeo.com/video/512695776?h=5e0d6b5b48"
        },
        {
          "label": "Planifier sa retraite",
          "lead": "Il n'est jamais trop tôt pour planifier sa retraite.",
          "body": "Quels que soient vos rêves pour la retraite, une stratégie établie à l’avance vous permettra de mettre toutes les chances de votre côté. En ayant une bonne compréhension des concepts financiers liés à la retraite, par exemple, vous pourrez maximiser les bénéfices des outils mis à votre disposition.",
          "videoSrc": "https://player.vimeo.com/video/512694919?h=82141f081a"
        }
      ],
      "imageSrc": "/images/2382ce58-accueil-nouvel-objectif.webp",
      "imageAlt": "",
      "id": "life-events",
      "closeLabel": "Fermer"
    },
    "newsTeams": {
      "items": [
        {
          "id": "news",
          "heading": "Actualités économiques",
          "body": "Sébastien Mc Mahon, stratège en chef et économiste sénior chez iA Groupe financier, vous propose des articles et des capsules vidéo qui vous garderont à l’affût de l’économie et des marchés financiers.",
          "imageSrc": "/images/79a3d937-accueil-actualites-economiques.webp",
          "imageAlt": "Thèmes économiques et graphique ascendant",
          "mediaWidth": 514,
          "mediaHeight": 286,
          "actions": [
            {
              "label": "Consulter les actualités économiques",
              "href": "https://ia.ca/actualites-economiques",
              "external": true,
              "ariaLabel": "Consulter les actualités économiques s'ouvre dans un nouvel onglet"
            }
          ]
        },
        {
          "id": "teams",
          "heading": "Prenez place dans l’équipe Investia",
          "body": "Le soutien et l’appui que nous apportons à nos conseillers sont au cœur de notre culture d’entreprise. Nous offrons à nos conseillers une vaste gamme de produits et de services, une technologie de pointe et des processus d’affaires simplifiés pour qu’ils puissent se concentrer sur ce qui importe le plus : leurs clients.",
          "imageSrc": "/images/95d04241-accueil-equipe.webp",
          "imageAlt": "Une membre de l'équipe Investia",
          "mediaWidth": 514,
          "mediaHeight": 396,
          "flip": true,
          "brandArtwork": true,
          "actions": [
            {
              "label": "Consulter nos offres d’emploi",
              "href": "https://ia.ca/emploi/emplois-disponibles",
              "primary": true,
              "external": true,
              "ariaLabel": "Consulter nos offres d'emploi s'ouvre dans un nouvel onglet"
            },
            {
              "label": "Devenir un conseiller Investia",
              "href": "https://investia.ca/opportunites-pour-les-conseillers"
            }
          ]
        }
      ]
    },
    "footer": {
      "primaryLinks": [
        {
          "label": "À propos",
          "href": "https://investia.ca/a-propos"
        },
        {
          "label": "Nous joindre",
          "href": "https://investia.ca/nous-joindre"
        },
        {
          "label": "Carrières",
          "href": "https://investia.ca/carriere"
        }
      ],
      "secondaryLinks": [
        {
          "label": "Me connecter au portail client",
          "href": "https://client.investia.ca/",
          "external": true,
          "ariaLabel": "Me connecter au portail client s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Trouver un conseiller",
          "href": "/trouver-un-conseiller"
        },
        {
          "label": "Zone conseils",
          "href": "https://ia.ca/zone-conseils",
          "external": true,
          "ariaLabel": "Zone conseils s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Actualités économiques",
          "href": "https://ia.ca/actualites-economiques",
          "external": true,
          "ariaLabel": "Actualités économiques s'ouvre dans un nouvel onglet"
        }
      ],
      "legalLinks": [
        {
          "label": "Biens non réclamés",
          "href": "https://investia.ca/biens-non-reclames"
        },
        {
          "label": "Légal et conformité",
          "href": "https://investia.ca/legal-and-compliance"
        },
        {
          "label": "Conditions d'utilisation",
          "href": "https://investia.ca/conditions-utilisation"
        },
        {
          "label": "Sécurité et confidentialité",
          "href": "https://ia.ca/protection-renseignements-personnels",
          "external": true,
          "ariaLabel": "Sécurité et confidentialité s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Accessibilité",
          "href": "https://ia.ca/accessibilite",
          "external": true,
          "ariaLabel": "Accessibilité s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Plan du site",
          "href": "https://investia.ca/plan-du-site"
        },
        {
          "label": "Grille de frais administratifs Investia",
          "href": "https://investia.ca/grille-frais"
        },
        {
          "label": "iA Groupe financier",
          "href": "https://ia.ca/",
          "external": true,
          "ariaLabel": "iA Groupe financier s'ouvre dans un nouvel onglet"
        },
        {
          "label": "Préférence de témoins",
          "href": "#cookie-preferences",
          "cookiePreferences": true
        }
      ],
      "socialLinks": [
        {
          "network": "linkedin",
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/company/investiafinancialservices",
          "ariaLabel": "LinkedIn s'ouvre dans un nouvel onglet"
        },
        {
          "network": "facebook",
          "label": "Facebook",
          "href": "https://www.facebook.com/InvestiaServicesfinanciers/",
          "ariaLabel": "Facebook s'ouvre dans un nouvel onglet"
        }
      ],
      "appTitle": "Téléchargez l’application Investia",
      "appBadges": [
        {
          "label": "App Store",
          "alt": "App Store",
          "src": "/images/e8639947-app-store-fr.webp",
          "href": "https://apps.apple.com/app/apple-store/id1549342167?pt=1948947&ct=gcx-adopt-fr-investia-footer&mt=8"
        },
        {
          "label": "Google Play",
          "alt": "Google Play",
          "src": "/images/905df472-google-play-fr.webp",
          "href": "https://play.google.com/store/apps/details?id=ca.investia.mobile&referrer=utm_source%3Dinvestia.ca%26utm_medium%3Dreferral%26utm_term%3Dgcx-adopt-fr-investia-footer%26utm_content%3Dfooter%26utm_campaign%3Dgcx-adopt-fr-investia-footer"
        }
      ],
      "appBenefits": {
        "label": "Découvrir les avantages",
        "href": "https://investia.ca/appli-mobile"
      },
      "slogan": "Prendre les devants",
      "subsidiaryNote": "Investia Services financiers inc. est une filiale à part entière de l’Industrielle Alliance, Assurance et services financiers inc., une société d’assurance de personnes qui exerce ses activités sous le nom commercial de iA Groupe financier.",
      "copyrightLabel": "Investia Services financiers - Tous droits réservés"
    },
    "regulatory": {
      "imageSrc": "/images/8aa15770-ocri-regulated.webp",
      "imageAlt": "L’Organisme canadien de réglementation des investissements (OCRI)",
      "href": "https://www.ocri.ca/"
    }
  }
};

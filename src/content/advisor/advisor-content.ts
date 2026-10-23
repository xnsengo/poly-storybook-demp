import type { Locale } from "@/content/site/routes";

// EN/FR copy for /find-an-advisor and /trouver-un-conseiller, extracted
// programmatically from investia.ca (page HTML, inline labels and the
// #template-partiel-conseiller Handlebars card). Do not paraphrase.
export type AdvisorContent = {
  meta: { title: string; description: string };
  hero: { title: string; intro: string };
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
    noResult: { before: string; linkLabel: string; linkHref: string; after: string };
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
    cta: { label: string; href: string; ariaLabel: string };
  };
  value: {
    heading: string;
    paragraphs: string[];
    link: { label: string; href: string };
    image: { src: string; alt: string; width: number; height: number };
  };
};

export const advisorContent: Record<Locale, AdvisorContent> = {
  "fr": {
    "meta": {
      "title": "Trouver un conseiller | Investia",
      "description": "Investia, c'est 1800 conseillers partout au Canada. Contactez-nous dès aujourd'hui pour discuter de vos besoins."
    },
    "hero": {
      "title": "Trouver un conseiller",
      "intro": "Nos représentants en épargne collective vous aideront à choisir des produits d'épargne et d'assurance qui correspondent à votre réalité et à vos besoins."
    },
    "search": {
      "heading": "Je n'ai pas de conseiller",
      "body": "Faites une recherche par code postal ou par ville pour trouver un représentant en épargne collective près de chez vous.",
      "resultsHeading": "Rechercher à proximité",
      "label": "Ville ou code postal",
      "button": "Rechercher",
      "emptyError": "Veuillez inscrire votre ville ou code postal.",
      "resultsCount": "{0} résultats trouvés",
      "moreLabel": "Voir plus de conseillers",
      "noResult": {
        "before": "Nous n’avons trouvé aucun conseiller dans un rayon de 100 kilomètres autour de votre code postal ou de votre ville. ",
        "linkLabel": "Contactez-nous",
        "linkHref": "https://investia.ca/nous-joindre",
        "after": " afin que nous puissions bien vous servir."
      },
      "card": {
        "sendMessage": "Envoyer un message",
        "phoneLabel": "Téléphone",
        "extensionPrefix": ", poste ",
        "mobileLabel": "cellulaire",
        "directions": "Obtenir l'itinéraire",
        "visitWebsite": "Visiter sa page"
      }
    },
    "portal": {
      "heading": "J’ai déjà un conseiller",
      "bodyBefore": "Pour trouver les coordonnées de votre représentant en épargne collective, visitez le portail client, consultez l'un de vos relevés ou contactez le service à la clientèle au ",
      "phoneLabel": "1 888 684-5548",
      "phoneHref": "tel:+18886845548",
      "bodyAfter": ".",
      "cta": {
        "label": "Me connecter au portail client",
        "href": "https://clients.investia.ca/account/login",
        "ariaLabel": "Me connecter au portail client s'ouvre dans un nouvel onglet"
      }
    },
    "value": {
      "heading": "La valeur du conseil",
      "paragraphs": [
        "Les études le démontrent : en ayant recours aux services d’un conseiller, vous disposerez d’environ 3,9 fois plus d’actifs qu’en n’étant pas conseillé.",
        "Rencontrer régulièrement votre conseiller permet de revoir vos placements, de détecter les changements importants qui surviennent dans votre vie et d’évaluer vos besoins en assurance."
      ],
      "link": {
        "label": "Les avantages de faire affaire avec un conseiller",
        "href": "https://investia.ca/valeur-du-conseiller"
      },
      "image": {
        "src": "/images/adv1-trouver-conseiller-lavaleur.jpg",
        "alt": "",
        "width": 992,
        "height": 661
      }
    }
  },
  "en": {
    "meta": {
      "title": "Find a Mutual Funds Representative | Investia",
      "description": "1 800 advisors throughout Canada, ready to guide you. This tool will help you find an Investia advisor."
    },
    "hero": {
      "title": "Find an advisor",
      "intro": "Our mutual fund representatives can help you choose savings and insurance products in line with your needs."
    },
    "search": {
      "heading": "I do not have an advisor",
      "body": "Search by postal code or city to find a mutual fund representative near you.",
      "resultsHeading": "Search nearby",
      "label": "City or postal code",
      "button": "Search",
      "emptyError": "Please enter the name of your city or postal code.",
      "resultsCount": "{0} Results found",
      "moreLabel": "See more advisors",
      "noResult": {
        "before": "We cannot locate an advisor within 100 km of your city or postal code. To help us serve you, please ",
        "linkLabel": "contact-us",
        "linkHref": "https://investia.ca/contact-us",
        "after": "."
      },
      "card": {
        "sendMessage": "Send a message",
        "phoneLabel": "Phone",
        "extensionPrefix": ", poste ",
        "mobileLabel": "cellulaire",
        "directions": "Get directions",
        "visitWebsite": "Visit website"
      }
    },
    "portal": {
      "heading": "I already have an advisor",
      "bodyBefore": "To find your advisor's contact information, go to your Client Portal, check one of your statements, or contact Client Services at ",
      "phoneLabel": "1888-684-5548",
      "phoneHref": "tel:+18886845548",
      "bodyAfter": ".",
      "cta": {
        "label": "Sign in to your Client Portal",
        "href": "https://clients.investia.ca/account/login",
        "ariaLabel": "Sign in to your Client Portal opens in a new tab"
      }
    },
    "value": {
      "heading": "The value of an advisor",
      "paragraphs": [
        "Working with an advisor has been proven to make a big difference for your savings.",
        "People who work with advisors for 15 years or more build 3.9 times more in savings than those who don’t receive any financial advice."
      ],
      "link": {
        "label": "The benefits of doing business with an advisor",
        "href": "https://investia.ca/value-of-advice"
      },
      "image": {
        "src": "/images/adv1-trouver-conseiller-lavaleur.jpg",
        "alt": "",
        "width": 992,
        "height": 661
      }
    }
  }
};

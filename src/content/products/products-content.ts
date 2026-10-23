// Products and services page copy, EN and FR, moved by script from
// investia.ca/products-and-services and investia.ca/produits-et-services.
// Product sub-pages are not migrated, so their links stay absolute to investia.ca.
import { ROUTES, type Locale } from "../site/routes";
import type { ProductsCard } from "@/components/organisms/products/products-card-grid";

export type ProductsContent = {
  meta: { title: string; description: string };
  hero: { title: string; body: string };
  cta: { label: string; href: string };
  specialty: {
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
  };
  savings: { title: string; items: ProductsCard[] };
  insurance: { title: string; items: ProductsCard[] };
};

export const productsContent: Record<Locale, ProductsContent> = {
  en: {
    meta: {
      title: "Mutual funds & Group retirement Representative | Investia",
      description:
        "Investia is a financial services firm that offers products and services associated with the distribution of investment funds and segregated funds.",
    },
    hero: {
      title: "Products and services",
      body: "We offer a wide range of products and services to meet your needs.",
    },
    cta: { label: "Find an advisor", href: ROUTES.advisor.en },
    specialty: {
      title: "Our specialty: mutual funds",
      body: "Mutual funds are based on a simple principle: pooling your money with that of many other investors in order to offer you access to global markets and a large selection of investments, as well as the flexibility to invest whatever you want, whenever you want.",
      imageSrc: "/images/7f3c2a91-produits-specialite.webp",
      imageAlt: "",
    },
    savings: {
      title: "Our savings and investment products",
      items: [
        {
          id: "celi",
          title: "TFSA",
          subtitle: "Tax-free savings account",
          body: [
            "A TFSA is a savings plan that allows you to grow your savings, tax free. It is the perfect solution for your short-, medium- and long-term savings projects, like paying for a trip, buying a home or creating an emergency fund.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/tfsa",
        },
        {
          id: "cri",
          title: "LIRA",
          subtitle: "Locked-in retirement account",
          body: [
            "Are you on the verge of changing jobs and want to know what will happen to the pension plan you have with your current employer? A LIRA allows you to transfer the money saved in a pension plan with a former employer to an individual plan.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/lira",
        },
        {
          id: "epargne-non-enregistree",
          title: "Non-registered savings",
          body: [
            "With this flexible savings plan, you can invest even more for your personal projects and retirement when you have reached your RRSP or TFSA contribution limit.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/regime-epargne-non-enregistre-en",
        },
        {
          id: "ferr",
          title: "RRIF",
          subtitle: "Registered retirement income fund",
          body: [
            "A RRIF acts as an extension of a registered retirement savings plan (RRSP). It allows you to utilize the savings you have accumulated during your working life. You have until December 31 of the year you turn 71 to convert the amounts invested in your RRSP into a RRIF.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/rrif",
        },
        {
          id: "frv",
          title: "LIF",
          subtitle: "Life income fund",
          body: [
            "If your savings have been placed in a locked-in retirement account (LIRA), a life income fund (LIF) will allow you to periodically withdraw the funds you require to live comfortably.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/lif",
        },
        {
          id: "pret-reer",
          title: "RRSP loan",
          body: [
            "In the event of a temporary cash shortage, an RRSP loan allows you to continue to contribute to your RRSP.",
            "Using your tax refund, you can increase your RRSP contributions while keeping the same monthly payments to pay off your loan.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/rrsp-loan",
        },
        {
          id: "reee",
          title: "RESP",
          subtitle: "Registered education savings plan",
          body: [
            "Borrowing to contribute to your registered education savings plan (RESP) allows you to take full advantage of government grant programs and thereby save more for your child’s postsecondary education.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/resp",
        },
        {
          id: "reer",
          title: "RRSP",
          subtitle: "Registered retirement savings plan",
          body: [
            "An RRSP can help you save money for your retirement, tax-free. Additionally, contributions to an RRSP lower your taxable annual income, which leads to more tax savings.",
          ],
          linkLabel: "Learn more",
          href: "https://investia.ca/products-and-services/rrsp",
        },
      ],
    },
    insurance: {
      title: "For your retirement",
      items: [
        {
          id: "ppi",
          title: "PPI Management Inc.",
          body: [
            "Through its subsidiary, PPI Management Inc., a subsidiary of iA Financial Group and an affiliate of Investia, you will have access to a wide range of insurance products, including life insurance, critical illness insurance and disability insurance.",
          ],
          linkLabel: "Learn more about PPI Management Inc.",
          href: "https://www.ppi.ca/",
          external: true,
          ariaLabel: "Learn more about PPI Management Inc. opens in a new tab",
        },
      ],
    },
  },
  fr: {
    meta: {
      title: "Représentant en Fonds communs & Épargne collective | Investia",
      description:
        "Notre spécialité : les fonds communs de placement. Nous offrons une vaste gamme de produits qui sauront répondre à vos besoins et votre situation.",
    },
    hero: {
      title: "Produits et services",
      body: "Nous offrons une vaste gamme de produits et services qui sauront répondre à vos besoins, peu importe votre situation.",
    },
    cta: { label: "Trouver un conseiller", href: ROUTES.advisor.fr },
    specialty: {
      title: "Notre spécialité: les fonds communs de placement",
      body: "Les fonds communs de placement reposent sur un principe simple : la mise en commun de votre argent avec celui de nombreux autres investisseurs afin de vous offrir, entre autres, l’accès aux marchés mondiaux et à une large sélection de placements, de même que la flexibilité d’investir ce que vous voulez, quand vous voulez.",
      imageSrc: "/images/7f3c2a91-produits-specialite.webp",
      imageAlt: "",
    },
    savings: {
      title: "Nos produits d'épargne et d'investissement",
      items: [
        {
          id: "celi",
          title: "CELI",
          subtitle: "Compte d'épargne libre d'impôt",
          body: [
            "Le CELI est un régime d’épargne qui permet de faire croître les sommes investies à l’abri de l’impôt. Il est parfait pour épargner en vue d’un projet à court, à moyen ou à long terme, comme pour un voyage, pour l’achat d’une résidence ou encore pour se bâtir un fonds d’urgence.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/celi",
        },
        {
          id: "cri",
          title: "CRI",
          subtitle: "Compte de retraite immobilisé",
          body: [
            "Vous êtes sur le point de changer d’emploi et vous vous demandez ce qui adviendra de votre fonds de pension chez votre employeur actuel? Le CRI permet de transférer les sommes d’un fonds de pension d’un ancien employeur vers un régime individuel.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/cri",
        },
        {
          id: "epargne-non-enregistree",
          title: "Épargne non enregistrée",
          body: [
            "Avec ce régime d’épargne flexible, vous pouvez investir des économies supplémentaires pour vos projets personnels et votre retraite quand le montant maximum de cotisations au REER ou au CELI est atteint.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/regime-epargne-non-enregistre",
        },
        {
          id: "ferr",
          title: "FERR",
          subtitle: "Fonds enregistré de revenu de retraite",
          body: [
            "Le fonds enregistré de revenu de retraite (FERR) est le prolongement du régime enregistré d’épargne-retraite (REER). Il vous permet de disposer de l'épargne accumulée durant votre vie active. Le REER doit être transformé en FERR au plus tard le 31 décembre de l’année où vous fêtez votre 71e anniversaire.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/ferr",
        },
        {
          id: "frv",
          title: "FRV",
          subtitle: "Fonds de revenu viager",
          body: [
            "Si votre épargne est placée dans un compte de retraite immobilisé (CRI), le fonds de revenu viager (FRV) vous permet de retirer périodiquement l’argent dont vous avez besoin pour vivre confortablement.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/frv",
        },
        {
          id: "pret-reer",
          title: "Prêt REER",
          body: [
            "Le prêt REER vous permet de cotiser à votre REER malgré un manque de liquidités temporaires.",
            "En utilisant votre retour d’impôt, vous pouvez augmenter vos cotisations REER tout en conservant la même mensualité pour le remboursement de votre prêt.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/pret-reer",
        },
        {
          id: "reee",
          title: "REEE",
          subtitle: "Régime enregistré d'épargne-études",
          body: [
            "Emprunter pour cotiser à votre régime enregistré d’épargne-études (REEE) vous permet d’accumuler les fonds nécessaires aux études de votre enfant et de profiter au maximum des subventions gouvernementales.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/reee",
        },
        {
          id: "reer",
          title: "REER",
          subtitle: "Régime enregistré d’épargne-retraite",
          body: [
            "Le REER vous permet d’accumuler des sommes à l’abri de l’impôt pour votre retraite. De plus, cotiser à un REER a pour effet de diminuer votre revenu annuel, ce qui vous permet de bénéficier d’économies d’impôts.",
          ],
          linkLabel: "En savoir plus",
          href: "https://investia.ca/produits-et-services/reer",
        },
      ],
    },
    insurance: {
      title: "Nos produits d'assurance",
      items: [
        {
          id: "ppi",
          title: "PPI Managements inc.",
          body: [
            "Par l’entremise de PPI Management inc., une filiale de iA Groupe financier et une société affiliée à Investia, vous disposerez de toute une gamme de produits d’assurance, entre autres de l’assurance vie, de l’assurance maladie grave et de l’assurance invalidité.",
          ],
          linkLabel: "Découvrir PPI Managements inc.",
          href: "https://www.ppi.ca/fr",
          external: true,
          ariaLabel:
            "Découvrir PPI Managements inc. s'ouvre dans un nouvel onglet",
        },
      ],
    },
  },
};

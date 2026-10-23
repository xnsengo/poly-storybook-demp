// Public entry of @xnsengo/investia-ui. Every component, content dictionary and
// helper the Investia site uses, re-exported from its original module.
//
// Styles are not imported here: consumers add `@xnsengo/investia-ui/components.css`
// (component CSS only, for a project that already compiles the Investia
// Tailwind theme) or `@xnsengo/investia-ui/styles.css` (everything, standalone).

// Atoms
export * from "./components/atoms/avatar";
export * from "./components/atoms/body-1-hero-pin";
export * from "./components/atoms/button";
export * from "./components/atoms/checkbox";
export * from "./components/atoms/container";
export * from "./components/atoms/display-heading";
export * from "./components/atoms/experience-material-icon";
export * from "./components/atoms/field-variants";
export * from "./components/atoms/heading";
export * from "./components/atoms/icons";
export * from "./components/atoms/image";
export * from "./components/atoms/input";
export * from "./components/atoms/link";
export * from "./components/atoms/logo";
export * from "./components/atoms/lottie";
export * from "./components/atoms/radio-group";
export * from "./components/atoms/reveal";
export * from "./components/atoms/section";
export * from "./components/atoms/select";
export * from "./components/atoms/separator";
export * from "./components/atoms/tag";
export * from "./components/atoms/text";
export * from "./components/atoms/textarea";

// Molecules
export * from "./components/molecules/card";
export * from "./components/molecules/carousel";
export * from "./components/molecules/faq";
export * from "./components/molecules/marquee";
export * from "./components/molecules/navbar";
export * from "./components/molecules/overlay";
export * from "./components/molecules/site-footer-links";
export * from "./components/molecules/table";
export * from "./components/molecules/tabs";

// Organisms
export * from "./components/organisms/global/body-3-regulatory-logo";
export * from "./components/organisms/global/site-footer";
export * from "./components/organisms/global/site-nav";
export * from "./components/organisms/global/site-nav-content";
export * from "./components/organisms/home/body-1-actions";
export * from "./components/organisms/home/body-1-benefits";
export * from "./components/organisms/home/body-1-hero";
export * from "./components/organisms/home/body-2-news-teams";
export * from "./components/organisms/home/body-2-objectives";
export * from "./components/organisms/home/body-2-products";
export * from "./components/organisms/products/products-card-grid";
export * from "./components/organisms/products/products-cta";
export * from "./components/organisms/products/products-hero";
export * from "./components/organisms/products/products-specialty";
export * from "./components/organisms/experience/experience-calculators";
export * from "./components/organisms/experience/experience-commitment";
export * from "./components/organisms/experience/experience-cta";
export * from "./components/organisms/experience/experience-hero";
export * from "./components/organisms/experience/experience-tracking";
export * from "./components/organisms/advisor/advisor-search";
export * from "./components/organisms/advisor/advisor-value";

// Templates and pages
export * from "./components/templates/site-shell";
export * from "./components/pages/home/page";
export * from "./components/pages/experience/page";
export * from "./components/pages/products/page";
export * from "./components/pages/advisor/page";
export * from "./components/pages/not-found/page";

// Content (EN/FR copy) and helpers
export * from "./content/site/routes";
export * from "./content/home/home-content";
export * from "./content/products/products-content";
export * from "./content/experience/experience-content";
export * from "./content/advisor/advisor-content";
export * from "./hooks/use-mobile";
export * from "./lib/utils";

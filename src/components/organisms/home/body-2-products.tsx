import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Card } from "@/components/molecules/card";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import "./body-2-products.css";

export type Body2ProductsProps = {
  heading?: string;
  body?: string;
  items?: string[];
  imageSrc?: string;
  imageAlt?: string;
  actionLabel?: string;
  actionHref?: string;
};
const products = [
  "RRSP, LIRA and other plans",
  "RRIF, LIF and annuities",
  "RRSP loans",
  "Tax-free savings accounts (TFSA)",
  "Non-registered savings plans",
  "Registered education savings plans (RESP)",
];
/**
 * @ployComponent
 * @ployComponentId body-2-products
 * @ployComponentType section
 * @ployComponentTags products, media, cta
 * @ployComponentDescription Fishing photograph beside a blue products and services panel on the Investia homepage.
 * @ployComponentStatus stable
 */
export function Body2Products({
  heading = "We offer a wide range of products and services",
  body = "You have financial needs? We have products and services to help you reach your goals.",
  items = products,
  imageSrc = "/images/6d77cd18-accueil-gamme-produits.webp",
  imageAlt = "An adult and child fishing together",
  actionLabel = "Discover our products and services",
  actionHref = "/products-and-services",
}: Body2ProductsProps = {}) {
  return (
    <Section
      space="flush"
      data-ploy-component="body-2-products"
      className="body-2-products"
    >
      <Container className="body-2-products-container">
        <Card
          padding="none"
          className="body-2-products-card bg-ploy-accent-primary text-ploy-text-on-accent-primary"
        >
          <img
            className="body-2-products-image"
            src={imageSrc}
            alt={imageAlt}
          />
          <div className="body-2-products-copy">
            <Heading
              level={2}
              className="body-2-products-heading text-ploy-text-on-accent-primary"
            >
              {heading}
            </Heading>
            {body && <Text className="body-2-products-body">{body}</Text>}
            <ul className="body-2-products-list">
              {items.map((item) => (
                <li key={item}>
                  <Text className="font-bold">{item}</Text>
                </li>
              ))}
            </ul>
            {actionLabel && (
              <Button
                href={actionHref}
                variant="outline"
                tone="light"
                className="body-2-products-action border-2"
              >
                {actionLabel}
              </Button>
            )}
          </div>
        </Card>
      </Container>
    </Section>
  );
}

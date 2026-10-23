import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import "./body-1-actions.css";

export type Body1Action = { label: string; href: string };
const actions: Body1Action[] = [
  {
    label: "Find an advisor",
    href: "/find-an-advisor",
  },
  {
    label: "Connect to the Client Portal",
    href: "https://client.investia.ca/",
  },
];
export type Body1ActionsProps = { items?: Body1Action[] };
/**
 * @ployComponent
 * @ployComponentId body-1-actions
 * @ployComponentType section
 * @ployComponentTags cta, advisor, portal
 * @ployComponentDescription Pale-blue full-width action strip linking to advisor search and the client portal.
 * @ployComponentStatus stable
 */
export function Body1Actions({ items = actions }: Body1ActionsProps = {}) {
  return (
    <Section
      space="flush"
      data-ploy-component="body-1-actions"
      className="bg-[#c7e7ff]"
    >
      <Container className="body-1-actions-container">
        <div className="body-1-actions-row">
          {items.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              block
              className="min-w-0 whitespace-normal text-center"
            >
              <Text as="span" className="font-bold leading-[22px]">
                {item.label}
              </Text>
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
}

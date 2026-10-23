import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "./container";
import { Heading } from "./heading";
import { Section } from "./section";
import { Separator } from "./separator";
import { Text } from "./text";

/**
 * Layout primitives: `Section` sets the vertical rhythm, `Container` the
 * content width and gutters, `Separator` the hairline between blocks.
 */
const meta = {
  title: "Atoms/Layout",
  component: Container,
  parameters: { layout: "fullscreen" },
  args: { width: "standard" },
  argTypes: {
    width: {
      control: "inline-radio",
      options: ["narrow", "standard", "wide", "full"],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerWidths: Story = {
  render: (args) => (
    <Section>
      <Container {...args}>
        <div className="rounded-[12px] bg-ploy-background-accent-primary p-6 text-ploy-text-on-accent-primary">
          <Text>Container width: {args.width}</Text>
        </div>
      </Container>
    </Section>
  ),
};

export const SectionSpacing: Story = {
  render: () => (
    <>
      {(["default", "condensed", "flushTop", "flushBottom", "flush"] as const).map(
        (space) => (
          <Section
            key={space}
            space={space}
            className="odd:bg-ploy-background-secondary"
          >
            <Container>
              <Heading level={4} as="h3">
                space=&quot;{space}&quot;
              </Heading>
            </Container>
          </Section>
        ),
      )}
    </>
  ),
};

export const Separators: Story = {
  render: () => (
    <Section>
      <Container>
        <Text>Above the rule</Text>
        <Separator className="my-6" />
        <div className="flex h-12 items-center gap-6">
          <Text>Left</Text>
          <Separator orientation="vertical" />
          <Text>Right</Text>
        </div>
      </Container>
    </Section>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";

import { SiteShell } from "./site-shell";

const meta = {
  title: "Templates/SiteShell",
  component: SiteShell,
  parameters: { layout: "fullscreen" },
  args: {
    locale: "en",
    page: "home",
    children: (
      <Section>
        <Container>
          <Heading level={1}>Page content</Heading>
          <Text className="mt-4 max-w-[60ch]">
            SiteShell wraps every route with the site nav, a main landmark, the
            footer and the regulatory strip. Page sections go here.
          </Text>
        </Container>
      </Section>
    ),
  },
  argTypes: {
    locale: { control: "inline-radio", options: ["en", "fr"] },
    page: {
      control: "inline-radio",
      options: ["home", "experience", "products", "advisor"],
    },
    children: { control: false },
  },
} satisfies Meta<typeof SiteShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: { locale: "fr" } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

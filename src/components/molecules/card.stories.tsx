import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";
import { Image } from "@/components/atoms/image";
import { Text } from "@/components/atoms/text";

import { Card } from "./card";

const meta = {
  title: "Molecules/Card",
  component: Card,
  args: {
    tone: "default",
    elevation: "flat",
    bordered: true,
    padding: "default",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverse"] },
    elevation: {
      control: "inline-radio",
      options: ["flat", "raised", "overlay"],
    },
    padding: {
      control: "inline-radio",
      options: ["compact", "default", "comfortable", "none", "source"],
    },
  },
  render: (args) => (
    <Card {...args} className="max-w-[380px]">
      <Heading level={4} as="h3">
        Client Portal
      </Heading>
      <Text className="mt-3">
        Already a client? Register now and access your portfolio online.
      </Text>
      <Button className="mt-6" href="https://client.investia.ca/">
        Connect
      </Button>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Raised: Story = { args: { elevation: "raised", bordered: false } };

export const Overlay: Story = {
  args: { elevation: "overlay", bordered: false },
};

export const Inverse: Story = { args: { tone: "inverse", bordered: false } };

export const Linked: Story = {
  args: { href: "/investia-experience", padding: "none" },
  render: (args) => (
    <Card {...args} className="max-w-[380px] overflow-hidden">
      <Image
        ratio="16/9"
        rounded="none"
        src="/images/24d627c8-experience-investia.webp"
        alt="Woman using a laptop"
      />
      <div className="p-6">
        <Heading level={4} as="h3">
          The Investia experience
        </Heading>
        <Text className="mt-3">
          Anything can change in life. Our advisors are there to make sure that
          your action plan evolves with you.
        </Text>
      </div>
    </Card>
  ),
};

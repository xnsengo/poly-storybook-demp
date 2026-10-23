import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight } from "lucide-react";

import { Link } from "./link";

const meta = {
  title: "Atoms/Link",
  component: Link,
  args: {
    href: "#",
    variant: "inline",
    tone: "accent",
    children: "About Investia",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["inline", "standalone"] },
    tone: { control: "inline-radio", options: ["accent", "inherit"] },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: (args) => (
    <p className="font-body">
      Read more <Link {...args} /> on our corporate site.
    </p>
  ),
};

export const Standalone: Story = {
  args: {
    variant: "standalone",
    children: (
      <>
        Discover our expertise <ArrowRight size={16} aria-hidden="true" />
      </>
    ),
  },
};

export const InheritTone: Story = {
  args: { tone: "inherit" },
  decorators: [
    (Story) => (
      <div className="text-ploy-text-secondary">
        <Story />
      </div>
    ),
  ],
};

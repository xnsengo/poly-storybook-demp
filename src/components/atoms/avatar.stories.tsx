import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  args: {
    src: "/images/95d04241-accueil-equipe.webp",
    alt: "A member of the Investia team",
    shape: "circle",
    size: "md",
  },
  argTypes: {
    shape: { control: "inline-radio", options: ["circle", "rounded", "square"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Avatar {...args} size="lg" shape="circle" />
      <Avatar {...args} size="lg" shape="rounded" />
      <Avatar {...args} size="lg" shape="square" />
    </div>
  ),
};

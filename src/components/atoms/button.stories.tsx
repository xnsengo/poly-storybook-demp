import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Search } from "lucide-react";
import { fn } from "storybook/test";

import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Find an advisor",
    variant: "primary",
    tone: "brand",
    size: "md",
    block: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    tone: { control: "inline-radio", options: ["brand", "light", "dark"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: "secondary" } };

export const Outline: Story = { args: { variant: "outline" } };

export const Ghost: Story = {
  args: { variant: "ghost", children: "Learn more" },
};

export const Small: Story = { args: { size: "sm" } };

export const Block: Story = {
  args: { block: true },
  decorators: [
    (Story) => (
      <div className="max-w-[360px]">
        <Story />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        See our offer <ArrowRight size={18} aria-hidden="true" />
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Search",
    children: <Search size={18} aria-hidden="true" />,
    className: "w-[50px] px-0",
  },
};

export const AsLink: Story = {
  args: { href: "https://client.investia.ca/", children: "Client Portal" },
};

export const Disabled: Story = {
  render: (args) => <Button {...args} as="button" aria-disabled="true" className="pointer-events-none opacity-50" />,
};

export const OnDark: Story = {
  globals: { backgrounds: { value: "dark" } },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args} variant="outline" tone="light" />
      <Button {...args} variant="ghost" tone="light" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} variant="primary" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="ghost" />
      <Button {...args} variant="outline" tone="dark" />
    </div>
  ),
};

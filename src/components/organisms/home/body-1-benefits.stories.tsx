import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body1Benefits } from "./body-1-benefits";

const meta = {
  title: "Organisms/Home/Body1Benefits",
  component: Body1Benefits,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.benefits,
} satisfies Meta<typeof Body1Benefits>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.benefits };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

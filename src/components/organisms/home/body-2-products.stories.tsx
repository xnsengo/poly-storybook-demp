import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body2Products } from "./body-2-products";

const meta = {
  title: "Organisms/Home/Body2Products",
  component: Body2Products,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.products,
} satisfies Meta<typeof Body2Products>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.products };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

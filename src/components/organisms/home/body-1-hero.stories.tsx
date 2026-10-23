import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body1Hero } from "./body-1-hero";

const meta = {
  title: "Organisms/Home/Body1Hero",
  component: Body1Hero,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.hero,
} satisfies Meta<typeof Body1Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.hero };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

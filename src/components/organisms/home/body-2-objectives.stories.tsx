import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body2Objectives } from "./body-2-objectives";

const meta = {
  title: "Organisms/Home/Body2Objectives",
  component: Body2Objectives,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.objectives,
} satisfies Meta<typeof Body2Objectives>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.objectives };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

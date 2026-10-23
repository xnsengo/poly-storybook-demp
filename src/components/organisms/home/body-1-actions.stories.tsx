import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body1Actions } from "./body-1-actions";

const meta = {
  title: "Organisms/Home/Body1Actions",
  component: Body1Actions,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.actions,
} satisfies Meta<typeof Body1Actions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.actions };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

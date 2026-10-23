import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body3RegulatoryLogo } from "./body-3-regulatory-logo";

const meta = {
  title: "Organisms/Global/Body3RegulatoryLogo",
  component: Body3RegulatoryLogo,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Body3RegulatoryLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = { args: homeContent.en.regulatory };

export const French: Story = { args: homeContent.fr.regulatory };

import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { Body2NewsTeams } from "./body-2-news-teams";

const meta = {
  title: "Organisms/Home/Body2NewsTeams",
  component: Body2NewsTeams,
  parameters: { layout: "fullscreen" },
  args: homeContent.en.newsTeams,
} satisfies Meta<typeof Body2NewsTeams>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: homeContent.fr.newsTeams };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

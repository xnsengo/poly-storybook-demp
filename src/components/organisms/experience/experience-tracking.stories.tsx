import type { Meta, StoryObj } from "@storybook/react-vite";

import { experienceContent } from "@/content/experience/experience-content";

import { ExperienceTracking } from "./experience-tracking";

const meta = {
  title: "Organisms/Experience/ExperienceTracking",
  component: ExperienceTracking,
  parameters: { layout: "fullscreen" },
  args: experienceContent.en.tracking,
} satisfies Meta<typeof ExperienceTracking>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: experienceContent.fr.tracking };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

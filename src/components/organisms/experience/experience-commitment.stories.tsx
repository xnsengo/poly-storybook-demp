import type { Meta, StoryObj } from "@storybook/react-vite";

import { experienceContent } from "@/content/experience/experience-content";

import { ExperienceCommitment } from "./experience-commitment";

const meta = {
  title: "Organisms/Experience/ExperienceCommitment",
  component: ExperienceCommitment,
  parameters: { layout: "fullscreen" },
  args: experienceContent.en.commitment,
} satisfies Meta<typeof ExperienceCommitment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: experienceContent.fr.commitment };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

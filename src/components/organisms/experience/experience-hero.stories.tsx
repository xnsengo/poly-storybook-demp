import type { Meta, StoryObj } from "@storybook/react-vite";

import { experienceContent } from "@/content/experience/experience-content";

import { ExperienceHero } from "./experience-hero";

const meta = {
  title: "Organisms/Experience/ExperienceHero",
  component: ExperienceHero,
  parameters: { layout: "fullscreen" },
  args: experienceContent.en.hero,
} satisfies Meta<typeof ExperienceHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: experienceContent.fr.hero };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

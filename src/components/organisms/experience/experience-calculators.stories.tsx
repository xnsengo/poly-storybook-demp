import type { Meta, StoryObj } from "@storybook/react-vite";

import { experienceContent } from "@/content/experience/experience-content";

import { ExperienceCalculators } from "./experience-calculators";

const meta = {
  title: "Organisms/Experience/ExperienceCalculators",
  component: ExperienceCalculators,
  parameters: { layout: "fullscreen" },
  args: experienceContent.en.calculators,
} satisfies Meta<typeof ExperienceCalculators>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: experienceContent.fr.calculators };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

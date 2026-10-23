import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  experienceContent,
  experienceCtaHref,
} from "@/content/experience/experience-content";

import { ExperienceCta } from "./experience-cta";

const meta = {
  title: "Organisms/Experience/ExperienceCta",
  component: ExperienceCta,
  parameters: { layout: "fullscreen" },
  args: { label: experienceContent.en.cta.label, href: experienceCtaHref("en") },
} satisfies Meta<typeof ExperienceCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: { label: experienceContent.fr.cta.label, href: experienceCtaHref("fr") } };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

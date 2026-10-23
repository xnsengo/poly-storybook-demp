import type { Meta, StoryObj } from "@storybook/react-vite";

import { advisorContent } from "@/content/advisor/advisor-content";

import { AdvisorValue } from "./advisor-value";

const meta = {
  title: "Organisms/Advisor/AdvisorValue",
  component: AdvisorValue,
  parameters: { layout: "fullscreen" },
  args: advisorContent.en.value,
} satisfies Meta<typeof AdvisorValue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: advisorContent.fr.value };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

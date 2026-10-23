import type { Meta, StoryObj } from "@storybook/react-vite";

import { DesignSystemPage } from "./page";

/** The site's own /design-system guide: logo, colours, type and primitives. */
const meta = {
  title: "Foundations/Design system",
  component: DesignSystemPage,
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs"],
} satisfies Meta<typeof DesignSystemPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

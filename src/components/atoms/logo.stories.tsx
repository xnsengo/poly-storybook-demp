import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "./logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  args: { width: 228 },
  argTypes: {
    width: { control: { type: "range", min: 80, max: 480, step: 4 } },
    height: { control: { type: "number" } },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { width: 120 } };

export const FitBox: Story = {
  name: "Fit in 160 × 28 box",
  args: { width: 160, height: 28 },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { DisplayHeading } from "./display-heading";

const meta = {
  title: "Atoms/DisplayHeading",
  component: DisplayHeading,
  args: { size: 1, children: "Get ahead" },
  argTypes: { size: { control: "inline-radio", options: [1, 2] } },
} satisfies Meta<typeof DisplayHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Size1: Story = {};

export const Size2: Story = { args: { size: 2, as: "h2" } };

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "./text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  args: {
    variant: "body",
    children:
      "Benefit from the expertise of our advisors and a variety of customized solutions which will help you reach your financial goals.",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["body", "small"] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};

export const Small: Story = { args: { variant: "small" } };

export const AsSpan: Story = {
  args: { as: "span", children: "Inline text rendered as a span." },
};

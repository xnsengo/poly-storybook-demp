import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./heading";

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  args: {
    level: 2,
    children: "We offer a wide range of products and services",
  },
  argTypes: {
    level: { control: "inline-radio", options: [1, 2, 3, 4, 5, 6] },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scale: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {([1, 2, 3, 4, 5, 6] as const).map((level) => (
        <Heading key={level} {...args} level={level} as={`h${level}`}>
          H{level} · The Investia experience
        </Heading>
      ))}
    </div>
  ),
};

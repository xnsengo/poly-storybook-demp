import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag } from "./tag";

const TONES = ["neutral", "accent", "secondary", "solid", "outline"] as const;

const meta = {
  title: "Atoms/Tag",
  component: Tag,
  args: { tone: "neutral", children: "TFSA" },
  argTypes: { tone: { control: "inline-radio", options: TONES } },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllTones: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {TONES.map((tone) => (
        <Tag key={tone} {...args} tone={tone}>
          {tone}
        </Tag>
      ))}
    </div>
  ),
};

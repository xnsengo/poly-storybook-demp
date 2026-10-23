import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag } from "@/components/atoms/tag";

import { Marquee } from "./marquee";

const PRODUCTS = [
  "RRSP",
  "LIRA",
  "RRIF",
  "LIF",
  "TFSA",
  "RESP",
  "Segregated funds",
  "Mutual funds",
];

const meta = {
  title: "Molecules/Marquee",
  component: Marquee,
  args: {
    reverse: false,
    pauseOnHover: true,
    paused: false,
    vertical: false,
    repeat: 4,
    fade: true,
  },
  argTypes: { repeat: { control: { type: "number", min: 2, max: 8 } } },
  render: (args) => (
    <Marquee {...args} className={args.vertical ? "h-[260px]" : undefined}>
      {PRODUCTS.map((label) => (
        <Tag key={label} tone="accent" className="mx-2 my-1">
          {label}
        </Tag>
      ))}
    </Marquee>
  ),
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = { args: { children: null } };

export const Reverse: Story = { args: { reverse: true, children: null } };

export const Vertical: Story = { args: { vertical: true, children: null } };

export const Paused: Story = { args: { paused: true, children: null } };

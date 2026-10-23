import type { Meta, StoryObj } from "@storybook/react-vite";

import { Reveal, RevealItem } from "./reveal";

const meta = {
  title: "Atoms/Reveal",
  component: Reveal,
  args: { effect: "fade-up", duration: 0.7, delay: 0, stagger: false },
  argTypes: {
    effect: {
      control: "inline-radio",
      options: ["fade-up", "blur-up", "fade-blur-up"],
    },
    duration: { control: { type: "range", min: 0.1, max: 2, step: 0.1 } },
    delay: { control: { type: "range", min: 0, max: 2, step: 0.1 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Scroll-triggered entrance animation built on `motion/react`. Change a control to remount the story and replay the animation.",
      },
    },
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

const box =
  "rounded-[12px] bg-ploy-background-accent-primary p-6 font-body text-ploy-text-on-accent-primary";

export const Single: Story = {
  render: (args) => (
    <Reveal key={JSON.stringify(args)} {...args}>
      <div className={box}>Revealed when scrolled into view</div>
    </Reveal>
  ),
};

export const Staggered: Story = {
  args: { stagger: 0.12 },
  render: (args) => (
    <Reveal key={JSON.stringify(args)} {...args} className="grid gap-4 md:grid-cols-3">
      {["RRSP", "TFSA", "RESP"].map((label) => (
        <RevealItem key={label}>
          <div className={box}>{label}</div>
        </RevealItem>
      ))}
    </Reveal>
  ),
};

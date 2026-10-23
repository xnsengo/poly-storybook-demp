import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Faq, FaqItem } from "./faq";

const ITEMS = [
  {
    question: "What is a TFSA?",
    answer:
      "A tax-free savings account lets your savings grow tax-free. Withdrawals are not taxed and the room is given back the following year.",
  },
  {
    question: "What is the difference between an RRSP and a TFSA?",
    answer:
      "RRSP contributions are tax-deductible and withdrawals are taxed; TFSA contributions are not deductible but withdrawals are tax-free.",
  },
  {
    question: "How do I find an advisor?",
    answer:
      "Search by city or postal code on the Find an advisor page to see the advisors closest to you.",
  },
];

const meta = {
  title: "Molecules/Faq",
  component: Faq,
  args: { type: "multiple", animate: true, onValueChange: fn() },
  argTypes: {
    type: { control: "inline-radio", options: ["single", "multiple"] },
  },
  render: (args) => (
    <Faq {...args} key={args.type} className="max-w-[720px]">
      {ITEMS.map((item) => (
        <FaqItem key={item.question} question={item.question}>
          {item.answer}
        </FaqItem>
      ))}
    </Faq>
  ),
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = { args: { children: null } };

export const Single: Story = { args: { type: "single", children: null } };

export const AllClosed: Story = { args: { defaultValue: [], children: null } };

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Body1HeroPin } from "./body-1-hero-pin";

const meta = {
  title: "Atoms/Body1HeroPin",
  component: Body1HeroPin,
  args: { className: "w-[134px]" },
  globals: { backgrounds: { value: "subtle" } },
} satisfies Meta<typeof Body1HeroPin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

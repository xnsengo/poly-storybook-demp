import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExperienceMaterialIcon } from "./experience-material-icon";

const NAMES = [
  "check_circle",
  "phone",
  "mail",
  "place",
  "description",
  "lock",
  "smartphone",
  "insights",
];

const meta = {
  title: "Atoms/ExperienceMaterialIcon",
  component: ExperienceMaterialIcon,
  args: { name: "check_circle", variant: "outlined", size: 32 },
  argTypes: {
    variant: { control: "inline-radio", options: ["outlined", "filled"] },
    size: { control: { type: "range", min: 12, max: 96, step: 2 } },
  },
} satisfies Meta<typeof ExperienceMaterialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};

export const Filled: Story = { args: { variant: "filled" } };

export const IconSet: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-6 text-ploy-accent-primary">
      {NAMES.map((name) => (
        <ExperienceMaterialIcon key={name} {...args} name={name} />
      ))}
    </div>
  ),
};

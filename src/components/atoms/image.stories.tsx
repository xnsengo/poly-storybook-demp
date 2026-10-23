import type { Meta, StoryObj } from "@storybook/react-vite";

import { Image } from "./image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  args: {
    src: "/images/6d77cd18-accueil-gamme-produits.webp",
    alt: "An adult and child fishing together",
    rounded: "default",
    fit: "cover",
  },
  argTypes: {
    ratio: {
      control: "select",
      options: [undefined, "square", "4/3", "3/2", "16/9", "5/3"],
    },
    rounded: {
      control: "inline-radio",
      options: ["default", "card", "none", "full"],
    },
    fit: { control: "inline-radio", options: ["cover", "contain"] },
  },
  decorators: [
    (Story) => (
      <div className="max-w-[520px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Natural: Story = {};

export const Ratio16x9: Story = { args: { ratio: "16/9" } };

export const Square: Story = { args: { ratio: "square" } };

export const Contain: Story = {
  args: {
    ratio: "4/3",
    fit: "contain",
    src: "/images/10d55ebb-ciro-regulated.webp",
    alt: "CIRO",
  },
};

export const Circle: Story = { args: { ratio: "square", rounded: "full" } };

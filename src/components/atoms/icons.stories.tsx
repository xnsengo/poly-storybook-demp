import type { Meta, StoryObj } from "@storybook/react-vite";

import { ICONS } from "./icons";

function IconGallery() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {Object.entries(ICONS).map(([name, Icon]) => (
        <figure
          key={name}
          className="flex flex-col items-center gap-3 rounded-[12px] border border-ploy-border-primary p-4"
        >
          <div className="flex h-[120px] w-full items-center justify-center overflow-hidden">
            <Icon className="max-h-full" />
          </div>
          <figcaption className="font-body text-sm text-ploy-text-secondary">
            ICONS.{name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const meta = {
  title: "Atoms/Icons",
  component: IconGallery,
  parameters: {
    docs: {
      description: {
        component:
          "Brand artwork and social icons exported as `ICONS`. Each entry is a component that sizes itself from the source SVG dimensions.",
      },
    },
  },
} satisfies Meta<typeof IconGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {};

export const Social: Story = {
  render: () => (
    <div className="flex gap-4 text-ploy-accent-primary">
      <ICONS.socialLinkedin />
      <ICONS.socialFacebook />
    </div>
  ),
};

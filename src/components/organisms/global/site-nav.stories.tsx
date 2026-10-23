import type { Meta, StoryObj } from "@storybook/react-vite";

import { homeContent } from "@/content/home/home-content";

import { SiteNav, type SiteNavProps } from "./site-nav";

const meta = {
  title: "Organisms/Global/SiteNav",
  component: SiteNav,
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, iframeHeight: 480 } },
  },
  args: { ...homeContent.en.nav, currentHref: "/" },
  decorators: [
    (Story) => (
      <div className="min-h-[460px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<SiteNavProps>;

export default meta;
type Story = StoryObj<SiteNavProps>;

export const English: Story = {};

export const French: Story = {
  args: { ...homeContent.fr.nav, homeHref: "/accueil", currentHref: "/accueil" },
};

export const CurrentPage: Story = {
  args: { currentHref: "/products-and-services" },
};

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

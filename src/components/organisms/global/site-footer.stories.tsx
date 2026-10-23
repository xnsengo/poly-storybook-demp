import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ICONS } from "@/components/atoms/icons";
import { homeContent } from "@/content/home/home-content";

import { SiteFooter } from "./site-footer";

const socialIcons = {
  linkedin: <ICONS.socialLinkedin />,
  facebook: <ICONS.socialFacebook />,
};

// Same mapping SiteShell applies: the dictionary names the network, the
// footer wants an icon node.
function footerProps(locale: "en" | "fr") {
  const { socialLinks, ...footer } = homeContent[locale].footer;
  return {
    ...footer,
    socialLinks: socialLinks.map(({ network, ...link }) => ({
      ...link,
      icon: socialIcons[network],
    })),
  };
}

const meta = {
  title: "Organisms/Global/SiteFooter",
  component: SiteFooter,
  parameters: { layout: "fullscreen" },
  args: { onCookiePreferences: fn() },
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {};

export const English: Story = { args: footerProps("en") };

export const French: Story = { args: footerProps("fr") };

export const Phone: Story = {
  args: footerProps("en"),
  globals: { viewport: { value: "phone" } },
};

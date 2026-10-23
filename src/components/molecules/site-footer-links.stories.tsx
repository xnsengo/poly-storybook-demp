import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { ICONS } from "@/components/atoms/icons";

import {
  SiteFooterApp,
  SiteFooterLinks,
  SiteFooterSocials,
  footerBadges,
  footerLegalLinks,
  footerPrimaryLinks,
  footerSecondaryLinks,
} from "./site-footer-links";

const meta = {
  title: "Molecules/SiteFooterLinks",
  component: SiteFooterLinks,
  args: {
    items: footerPrimaryLinks,
    variant: "primary",
    onCookiePreferences: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary", "legal"],
    },
  },
  globals: { backgrounds: { value: "dark" } },
  decorators: [
    (Story) => (
      <div className="max-w-[420px] text-ploy-neutral-light">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SiteFooterLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { items: footerSecondaryLinks, variant: "secondary" },
};

export const Legal: Story = {
  args: { items: footerLegalLinks, variant: "legal" },
  decorators: [
    (Story) => (
      <div className="w-[900px] max-w-[90vw]">
        <Story />
      </div>
    ),
  ],
};

export const AppBadges: Story = {
  render: () => (
    <SiteFooterApp
      title="Download the Investia app"
      badges={footerBadges}
      benefits={{
        label: "Discover the benefits",
        href: "https://investia.ca/mobile-app",
      }}
    />
  ),
};

export const Socials: Story = {
  render: () => (
    <SiteFooterSocials
      items={[
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/investiafinancialservices",
          icon: <ICONS.socialLinkedin />,
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/InvestiaFinancialServices/",
          icon: <ICONS.socialFacebook />,
        },
      ]}
    />
  ),
};

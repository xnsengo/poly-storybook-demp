import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@/components/atoms/button";
import { Logo } from "@/components/atoms/logo";

import {
  Navbar,
  NavbarLink,
  NavbarMenu,
  NavbarMenuLink,
  NavbarMobileGroup,
  NavbarMobileLink,
  NavbarMobileNav,
} from "./navbar";

const PRODUCTS = [
  { href: "#savings", label: "Savings", description: "RRSP, TFSA, RESP" },
  { href: "#retirement", label: "Retirement", description: "RRIF, LIF, annuities" },
  { href: "#insurance", label: "Insurance", description: "Life and health" },
];

const meta = {
  title: "Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, iframeHeight: 360 } },
  },
  args: { brandFlush: false },
  render: (args) => (
    <div className="min-h-[340px]">
      <Navbar
        {...args}
        brand={
          <a href="#" aria-label="Investia home">
            <Logo width={160} />
          </a>
        }
        actions={
          <Button size="sm" href="https://client.investia.ca/">
            Connect
          </Button>
        }
        mobile={
          <NavbarMobileNav>
            <NavbarMobileLink href="#experience">
              The Investia experience
            </NavbarMobileLink>
            <NavbarMobileGroup label="Products and services">
              {PRODUCTS.map((item) => (
                <NavbarMobileLink key={item.href} href={item.href}>
                  {item.label}
                </NavbarMobileLink>
              ))}
            </NavbarMobileGroup>
            <NavbarMobileLink href="#advisor">Find an advisor</NavbarMobileLink>
          </NavbarMobileNav>
        }
      >
        <NavbarLink href="#experience">The Investia experience</NavbarLink>
        <NavbarMenu label="Products and services">
          {PRODUCTS.map((item) => (
            <NavbarMenuLink
              key={item.href}
              href={item.href}
              description={item.description}
            >
              {item.label}
            </NavbarMenuLink>
          ))}
        </NavbarMenu>
        <NavbarLink href="#advisor">Find an advisor</NavbarLink>
      </Navbar>
    </div>
  ),
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: { brand: null, children: null },
  globals: { viewport: { value: "desktop" } },
};

export const Mobile: Story = {
  args: { brand: null, children: null },
  globals: { viewport: { value: "phone" } },
};

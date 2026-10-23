import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Children } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

// Keep room for one label line, padding, and borders.
const buttonSpacing = "min-h-[calc(1lh+18px)] py-2";
// Ghost has no resting surface. Hover styles and explicit caller overrides remain available.
const ghostSurface = "bg-transparent border-transparent";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap no-underline box-border border h-[50px] rounded-[9999px] px-8 text-[1.0625rem] font-bold transition-[background-color,border-color,color] duration-[150ms] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ploy-button-primary-background text-ploy-button-primary-text border-ploy-button-primary-border [overflow:visible] font-[700] rounded-[50px] border-[0px] hover:bg-[#2962ff] hover:border-[#2962ff] active:bg-[#003da5] active:border-[#003da5]",
        secondary:
          "bg-ploy-button-secondary-background text-ploy-button-secondary-text border-ploy-button-secondary-border [overflow:visible] font-[700] rounded-[0px] border-[0px]",
        // investia.ca .ia-button-primary-outlined:hover: label and border turn #2962ff.
        outline: "bg-transparent text-current border-current hover:text-[#2962ff]",
        ghost: "bg-transparent border-transparent",
      },
      // Outline inherits its foreground; explicit light/dark tones override it.
      // Its currentColor border always follows that foreground.
      tone: {
        brand: "",
        light: "",
        dark: "",
      },
      size: {
        md: "",
        sm: "h-10 px-[22.4px] text-sm",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "ghost",
        tone: "brand",
        className: "text-ploy-accent-primary",
      },
      {
        variant: ["outline", "ghost"],
        tone: "light",
        className: "text-ploy-neutral-light",
      },
      // investia.ca reversed (white) outlined buttons hover to #dbf0ff.
      {
        variant: "outline",
        tone: "light",
        className: "hover:text-[#dbf0ff]",
      },
      {
        variant: ["outline", "ghost"],
        tone: "dark",
        className: "text-ploy-neutral-dark",
      },
    ],
    defaultVariants: {
      variant: "primary",
      tone: "brand",
      size: "md",
      block: false,
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<"a"> & {
    /** Override the tag: an href selects an anchor; otherwise a button. */
    as?: ElementType;
    /** Merge into the child element. */
    asChild?: boolean;
  };

/**
 * @ployComponent
 * @ployComponentId button
 * @ployComponentType component
 * @ployComponentTags action, cta, measured
 * @ployComponentDescription Measured action with safe spacing and an 8px icon gap. Override spacing through className. Outline inherits text/border; outline and ghost accept tone=brand|light|dark. Uses <a> with href, otherwise <button>; as overrides the tag. Pass type=submit for form actions.
 * @ployComponentStatus stable
 */
export function Button({
  as,
  variant = "primary",
  tone = "brand",
  size = "md",
  block = false,
  className = "",
  asChild = false,
  ...props
}: ButtonProps) {
  const Tag = asChild
    ? Slot
    : ((as ?? ("href" in props ? "a" : "button")) as ElementType);
  // KRBY022 icon-buttons-skip-the-label-floor: icon-only controls keep their size.
  const iconOnly =
    !asChild &&
    !!props["aria-label"] &&
    !Children.toArray(props.children).some(
      (child) => typeof child === "string" || typeof child === "number",
    );
  return (
    <Tag
      data-ploy-component="button"
      className={cn(
        buttonVariants({ variant, tone, size, block }),
        !iconOnly && buttonSpacing,
        variant === "ghost" && ghostSurface,
        className,
      )}
      {...props}
    >
      {props.children}
    </Tag>
  );
}

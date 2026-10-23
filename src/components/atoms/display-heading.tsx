import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// The complete visual scale. Semantic tags remain a call-site decision.
const displayHeadingVariants = cva("text-balance", {
  variants: {
    size: {
      1: "font-heading font-bold text-[4.25rem] leading-[1] tracking-[-0.02em] md:text-[5.5625rem] md:leading-[1] md:tracking-[-0.02em]",
      2: "font-heading font-bold text-6xl leading-[1] tracking-[-0.02em] md:text-[4.25rem] md:leading-[1] md:tracking-[-0.02em]",
    },
  },
  defaultVariants: { size: 1 },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type DisplayHeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof displayHeadingVariants> & {
    /** The semantic tag. The document outline and the visual level are separate decisions. */
    as?: HeadingTag;
    /** Merge these classes into an element you already have, instead of rendering our own. */
    asChild?: boolean;
  };

/**
 * @ployComponent
 * @ployComponentId displayHeading
 * @ployComponentType component
 * @ployComponentTags typography, scale, responsive
 * @ployComponentDescription The measured display scale, sizes 1-2, responsive at md.
 * @ployComponentStatus stable
 */
export function DisplayHeading({
  size = 1,
  as,
  className = "",
  asChild = false,
  ...props
}: DisplayHeadingProps) {
  const Tag = asChild ? Slot : ((as ?? "h1") as HeadingTag);
  return (
    <Tag
      data-ploy-component="displayHeading"
      className={cn(displayHeadingVariants({ size }), className)}
      {...props}
    />
  );
}

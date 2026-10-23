import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// The complete visual scale. Semantic tags remain a call-site decision.
const headingVariants = cva("text-balance", {
  variants: {
    level: {
      1: "font-heading font-bold text-4xl leading-[1] tracking-normal md:text-5xl md:leading-[1] md:tracking-normal",
      2: "font-heading font-bold text-[2rem] leading-[1.19] tracking-normal md:text-[2rem] md:leading-[1.19] md:tracking-normal",
      3: "font-heading font-bold text-[1.5625rem] leading-[1.12] tracking-normal md:text-[1.5625rem] md:leading-[1.12] md:tracking-normal",
      4: "font-heading font-bold text-[1.3125rem] leading-[1.12] tracking-normal md:text-[1.4375rem] md:leading-[1] md:tracking-normal",
      5: "font-heading font-bold text-[1.1875rem] leading-[1.12] tracking-normal md:text-[1.1875rem] md:leading-[1] md:tracking-normal",
      6: "font-heading font-bold text-[1.0625rem] leading-[1.12] tracking-normal md:text-[1.0625rem] md:leading-[1] md:tracking-normal",
    },
  },
  defaultVariants: { level: 2 },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    /** The semantic tag. The document outline and the visual level are separate decisions. */
    as?: HeadingTag;
    /** Merge these classes into an element you already have, instead of rendering our own. */
    asChild?: boolean;
  };

/**
 * @ployComponent
 * @ployComponentId heading
 * @ployComponentType component
 * @ployComponentTags typography, scale, responsive
 * @ployComponentDescription The measured heading scale, levels 1-6, responsive at md.
 * @ployComponentStatus stable
 */
export function Heading({
  level = 2,
  as,
  className = "",
  asChild = false,
  ...props
}: HeadingProps) {
  const Tag = asChild ? Slot : ((as ?? "h2") as HeadingTag);
  return (
    <Tag
      data-ploy-component="heading"
      className={cn(headingVariants({ level }), className)}
      {...props}
    />
  );
}

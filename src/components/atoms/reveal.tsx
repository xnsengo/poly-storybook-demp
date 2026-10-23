"use client";
import {
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
} from "react";
import {
  motion,
  MotionConfig,
  stagger as staggerDelay,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

// Every effect ends at the same visible state; only the start differs.
const HIDDEN = {
  "fade-up": { opacity: 0, y: 24 },
  "blur-up": { filter: "blur(10px)", y: 24 },
  "fade-blur-up": { opacity: 0, filter: "blur(10px)", y: 24 },
} as const;
export type RevealEffect = keyof typeof HIDDEN;

const EASE = [0.22, 1, 0.36, 1] as const;
const DEFAULT_STAGGER = 0.08;

const RevealContext = createContext<{ effect: RevealEffect; duration: number }>(
  {
    effect: "fade-up",
    duration: 0.7,
  },
);

function variantsFor(effect: RevealEffect, duration: number): Variants {
  return {
    hidden: HIDDEN[effect],
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration, ease: EASE },
      // KRBY020 reveal-is-the-scroll-entrance:
      // A leftover blur(0px) still makes a containing block and a backdrop
      // root: fixed menus and backdrop-blur inside the element would break.
      transitionEnd: { filter: "none" },
    },
  };
}

type RevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  effect?: RevealEffect;
  /** Stagger RevealItem children instead of animating this element. true = 0.08s apart, or a number of seconds. */
  stagger?: boolean | number;
  delay?: number;
  duration?: number;
  className?: string;
};

/**
 * @ployComponent
 * @ployComponentId reveal
 * @ployComponentType component
 * @ployComponentTags animation, motion, scroll, entrance, stagger
 * @ployComponentDescription Scroll entrance: plays once in view, on load above the fold. effect: fade-up (default), blur-up, fade-blur-up. <Reveal> animates itself; <Reveal stagger> staggers its direct <RevealItem> children. Server HTML starts hidden, so mount the page with client:load. Honors reduced motion.
 * @ployComponentStatus stable
 */
export function Reveal({
  effect = "fade-up",
  stagger = false,
  delay = 0,
  duration = 0.7,
  className = "",
  viewport,
  ...props
}: RevealProps) {
  const interval = stagger === true ? DEFAULT_STAGGER : stagger || 0;
  const own = variantsFor(effect, duration);
  // A staggering Reveal is only the trigger; its items carry the motion.
  const variants: Variants = interval
    ? {
        hidden: {},
        visible: {
          transition: {
            delayChildren: staggerDelay(interval, { startDelay: delay }),
          },
        },
      }
    : {
        hidden: own.hidden,
        visible: {
          ...own.visible,
          transition: { duration, ease: EASE, delay },
        },
      };
  return (
    // reducedMotion="never" animates for every visitor, matching investia.ca.
    <MotionConfig reducedMotion="never">
      <RevealContext.Provider value={{ effect, duration }}>
        <motion.div
          data-ploy-component="reveal"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, ...viewport }}
          variants={variants}
          className={cn(className)}
          {...props}
        />
      </RevealContext.Provider>
    </MotionConfig>
  );
}

/**
 * @ployComponent
 * @ployComponentId reveal-item
 * @ployComponentType component
 * @ployComponentTags animation, motion, stagger
 * @ployComponentDescription One staggered child of <Reveal stagger>. Inherits effect and duration from the parent Reveal; pass effect to override one item. Put grid or flex item sizing on the RevealItem, since it is the element the layout sees.
 * @ployComponentStatus stable
 */
export function RevealItem({
  effect,
  duration,
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof motion.div> & {
  effect?: RevealEffect;
  duration?: number;
  className?: string;
}) {
  const parent = useContext(RevealContext);
  return (
    <motion.div
      variants={variantsFor(
        effect ?? parent.effect,
        duration ?? parent.duration,
      )}
      className={cn(className)}
      {...props}
    />
  );
}

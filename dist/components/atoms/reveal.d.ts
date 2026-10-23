import { ComponentPropsWithoutRef } from 'react';
import { motion } from 'motion/react';
declare const HIDDEN: {
    readonly "fade-up": {
        readonly opacity: 0;
        readonly y: 24;
    };
    readonly "blur-up": {
        readonly filter: "blur(10px)";
        readonly y: 24;
    };
    readonly "fade-blur-up": {
        readonly opacity: 0;
        readonly filter: "blur(10px)";
        readonly y: 24;
    };
};
export type RevealEffect = keyof typeof HIDDEN;
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
export declare function Reveal({ effect, stagger, delay, duration, className, viewport, ...props }: RevealProps): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId reveal-item
 * @ployComponentType component
 * @ployComponentTags animation, motion, stagger
 * @ployComponentDescription One staggered child of <Reveal stagger>. Inherits effect and duration from the parent Reveal; pass effect to override one item. Put grid or flex item sizing on the RevealItem, since it is the element the layout sees.
 * @ployComponentStatus stable
 */
export declare function RevealItem({ effect, duration, className, ...props }: ComponentPropsWithoutRef<typeof motion.div> & {
    effect?: RevealEffect;
    duration?: number;
    className?: string;
}): import('react').JSX.Element;
export {};

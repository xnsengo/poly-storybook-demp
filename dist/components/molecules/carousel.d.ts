import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { Swiper as CarouselApi } from 'swiper';
import { SwiperProps } from 'swiper/react';
export { SwiperSlide as CarouselSlide, useSwiper } from 'swiper/react';
export type { CarouselApi };
export type CarouselControlProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick"> & {
    direction: "previous" | "next";
    api: CarouselApi | null;
};
export declare function CarouselControl({ direction, api, className, disabled, "aria-label": label, ...props }: CarouselControlProps): import('react').JSX.Element;
export type CarouselProps = SwiperProps;
export type CarouselPageProgressProps = HTMLAttributes<HTMLDivElement> & {
    api: CarouselApi | null;
};
/**
 * @ployComponent
 * @ployComponentId carousel-page-progress
 * @ployComponentType component
 * @ployComponentTags carousel, progress, finite
 * @ployComponentDescription A growing page rail for a finite carousel. Supply its CarouselApi; style height, background and text color. Snap changes and resizing update the fill.
 * @ployComponentStatus stable
 */
export declare function CarouselPageProgress({ api, className, "aria-label": label, ...props }: CarouselPageProgressProps): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId carousel
 * @ployComponentType component
 * @ployComponentTags slides, navigation, responsive
 * @ployComponentDescription A styled slide track with accessible navigation and pagination. Supply CarouselSlide children and measured Swiper layout options.
 * @ployComponentStatus stable
 */
export declare function Carousel({ className, modules, loop, ...props }: CarouselProps): import('react').JSX.Element;

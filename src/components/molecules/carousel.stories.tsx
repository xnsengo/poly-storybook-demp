import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Image } from "@/components/atoms/image";

import {
  Carousel,
  CarouselControl,
  CarouselPageProgress,
  CarouselSlide,
  type CarouselApi,
} from "./carousel";

const SLIDES = [
  { src: "/images/24d627c8-experience-investia.webp", alt: "Woman using a laptop" },
  { src: "/images/1e0676de-a-propos.webp", alt: "Father carrying his child" },
  { src: "/images/6d77cd18-accueil-gamme-produits.webp", alt: "An adult and child fishing" },
  { src: "/images/95d04241-accueil-equipe.webp", alt: "A member of the Investia team" },
  { src: "/images/2382ce58-accueil-nouvel-objectif.webp", alt: "A new objective" },
];

const meta = {
  title: "Molecules/Carousel",
  component: Carousel,
  args: { loop: false, slidesPerView: 1.2, spaceBetween: 16 },
  argTypes: {
    slidesPerView: { control: { type: "range", min: 1, max: 4, step: 0.1 } },
    spaceBetween: { control: { type: "range", min: 0, max: 48, step: 4 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Swiper-based slide track. `CarouselControl` and `CarouselPageProgress` take the Swiper instance from `onSwiper`.",
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

function CarouselDemo(args: Story["args"]) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  return (
    <div className="flex max-w-[960px] flex-col gap-6">
      <Carousel key={JSON.stringify(args)} {...args} onSwiper={setApi}>
        {SLIDES.map((slide) => (
          <CarouselSlide key={slide.src}>
            <Image ratio="3/2" src={slide.src} alt={slide.alt} />
          </CarouselSlide>
        ))}
      </Carousel>
      <div className="flex items-center gap-4">
        <CarouselPageProgress api={api} className="flex-1" />
        <CarouselControl direction="previous" api={api} />
        <CarouselControl direction="next" api={api} />
      </div>
    </div>
  );
}

export const Default: Story = { render: (args) => <CarouselDemo {...args} /> };

export const ThreeUp: Story = {
  args: { slidesPerView: 3, spaceBetween: 24 },
  render: (args) => <CarouselDemo {...args} />,
};

export const Looping: Story = {
  args: { loop: true, slidesPerView: 1 },
  render: (args) => <CarouselDemo {...args} />,
};

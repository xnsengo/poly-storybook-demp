import { Container } from "@/components/atoms/container";
import { Image } from "@/components/atoms/image";
import { Link } from "@/components/atoms/link";
import { Section } from "@/components/atoms/section";

export type Body3RegulatoryLogoProps = {
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

/**
 * @ployComponent
 * @ployComponentId body-3-regulatory-logo
 * @ployComponentType section
 * @ployComponentTags regulatory, logo, link
 * @ployComponentDescription Dark-blue regulatory strip linking the CIRO logo to its official website at the bottom of the captured source.
 * @ployComponentStatus stable
 */
export function Body3RegulatoryLogo({
  imageSrc = "/images/10d55ebb-ciro-regulated.webp",
  imageAlt = "Canadian Investment Regulatory Organization (CIRO)",
  href = "https://www.ciro.ca/",
}: Body3RegulatoryLogoProps = {}) {
  return (
    <Section
      space="flush"
      className="bg-ploy-background-inverse py-[36px] md:py-[48px]"
      data-ploy-component="body-3-regulatory-logo"
    >
      <Container className="px-[16px] md:px-[32px]">
        <Link
          href={href}
          tone="inherit"
          className="inline-block h-[112px] w-[344px] max-w-full rounded-[8px] bg-ploy-background-primary p-[12px] align-top focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ploy-accent-primary"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            rounded="none"
            fit="contain"
            className="h-auto w-[320px] max-w-full"
          />
        </Link>
      </Container>
    </Section>
  );
}

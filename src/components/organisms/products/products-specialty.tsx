import { Section } from "@/components/atoms/section";
import { Container } from "@/components/atoms/container";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import "./products-specialty.css";

export type ProductsSpecialtyProps = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
};

/**
 * @ployComponent
 * @ployComponentId products-specialty
 * @ployComponentType section
 * @ployComponentTags media, text, bilingual
 * @ployComponentDescription Text and photo row from investia.ca's row-image-fit grid: an H2 and paragraph beside a pill-shaped (fully rounded) cover photo. Two columns from 768px (72px gap, 112px from 1140px) with the photo stretched to the text height; on phones the text stacks above a 288px-wide pill. Opens the Products and services page body (60px top on phones, 96px from 768px). Copy and image are props.
 * @ployComponentStatus stable
 */
export function ProductsSpecialty({
  title,
  body,
  imageSrc,
  imageAlt = "",
}: ProductsSpecialtyProps) {
  return (
    <Section
      space="flush"
      data-ploy-component="products-specialty"
      className="products-specialty"
    >
      <Container className="products-specialty-container">
        <div className="products-specialty-row">
          <div className="products-specialty-col products-specialty-text">
            <Heading level={2} className="products-specialty-title">
              {title}
            </Heading>
            <Text className="products-specialty-body">{body}</Text>
          </div>
          <div className="products-specialty-col">
            <div className="products-specialty-media">
              <img
                src={imageSrc}
                alt={imageAlt}
                width={1128}
                height={752}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

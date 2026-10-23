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
export declare function ProductsSpecialty({ title, body, imageSrc, imageAlt, }: ProductsSpecialtyProps): import('react').JSX.Element;

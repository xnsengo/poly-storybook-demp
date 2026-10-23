import { Locale } from '../site/routes';
import { ProductsCard } from '../../components/organisms/products/products-card-grid';
export type ProductsContent = {
    meta: {
        title: string;
        description: string;
    };
    hero: {
        title: string;
        body: string;
    };
    cta: {
        label: string;
        href: string;
    };
    specialty: {
        title: string;
        body: string;
        imageSrc: string;
        imageAlt: string;
    };
    savings: {
        title: string;
        items: ProductsCard[];
    };
    insurance: {
        title: string;
        items: ProductsCard[];
    };
};
export declare const productsContent: Record<Locale, ProductsContent>;

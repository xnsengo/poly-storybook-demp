/**
 * @ployComponent
 * @ployComponentId faq
 * @ployComponentType component
 * @ployComponentTags disclosure, accordion, faq
 * @ployComponentDescription The measured accordion. Radix handles keyboard navigation and ARIA; type='single' opens one row at a time, 'multiple' allows several. The first row opens unless defaultValue says otherwise; defaultValue={[]} opens none.
 * @ployComponentStatus stable
 */
export declare function Faq({ children, type, animate, defaultValue, value, onValueChange, className, ...props }: {
    children: React.ReactNode;
    /** Several rows open at once by default; "single" closes the others. */
    type?: "single" | "multiple";
    /** Animate every row's height. A page's disclosures animate or they do not. */
    animate?: boolean;
    /** Initially open row(s); single mode uses the first value. Omitted opens the first row; [] opens none. */
    defaultValue?: string | string[];
    /** Controlled selection for associated media; single mode uses the first id. */
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    className?: string;
}): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId faq-item
 * @ployComponentType component
 * @ployComponentTags disclosure, accordion, faq
 * @ployComponentDescription One question and its answer. `value` is its id and defaults to the question, so a row opens whether or not you pass one.
 * @ployComponentStatus stable
 */
export declare function FaqItem({ value, question, icon, showIndicator, children, className, ...props }: {
    /** Optional: defaults to the question. Radix needs one stable id per row. */
    value?: string;
    question: string;
    icon?: React.ReactNode;
    /** Set false when the captured disclosure has no trailing indicator. */
    showIndicator?: boolean;
    children: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<"div">, "className" | "value">): import('react').JSX.Element;

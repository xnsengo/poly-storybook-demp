import { ComponentProps } from 'react';
/**
 * @ployComponent
 * @ployComponentId table
 * @ployComponentType component
 * @ployComponentTags data, table, measured
 * @ployComponentDescription Table with horizontal overflow, shared body type, and measured rules and surfaces.
 * @ployComponentStatus stable
 * The brand's table: shadcn's structure carrying this page's own measured
 * type, rules and surfaces rather than that library's neutral palette.
 *
 * It sets NO type: a table renders the page's body copy, and sizing it here
 * took the smallest measured variant, so tabular data read as fine print.
 *
 * The source has no table, so these are DERIVED: rules from its measured border token, cell padding from half its card inset. Adjust freely — nothing here was measured.
 *
 * The wrapper scrolls horizontally rather than letting a wide table push the
 * page sideways, which is the defect every hand-written table ships with.
 */
export declare function Table({ hoverRows, className, ...props }: ComponentProps<"table"> & {
    /**
     * Light each row under the cursor. OFF by default — a hover says "this row
     * does something", and most tables on a marketing page are static, so a
     * table that lights up is claiming an interaction it does not have.
     *
     * It belongs to the TABLE, not to a row: rows in one table cannot disagree
     * about whether they respond to a cursor.
     */
    hoverRows?: boolean;
}): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-header
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription The head row group. Its rule is the brand's border token.
 * @ployComponentStatus stable
 */
export declare function TableHeader({ className, ...props }: ComponentProps<"thead">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-body
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription The body row group. The last row drops its rule so the table does not end on a line.
 * @ployComponentStatus stable
 */
export declare function TableBody({ className, ...props }: ComponentProps<"tbody">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-footer
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription A totals row group, on the brand's alternate surface.
 * @ployComponentStatus stable
 */
export declare function TableFooter({ className, ...props }: ComponentProps<"tfoot">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-row
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription One row. Rules are a 1px hairline — a measured section divider is far too heavy here.
 * @ployComponentStatus stable
 */
export declare function TableRow({ className, ...props }: ComponentProps<"tr">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-head
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription A column heading. Left-aligned and emphasised, never a smaller grey.
 * @ployComponentStatus stable
 */
export declare function TableHead({ className, ...props }: ComponentProps<"th">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-cell
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription One cell, at the measured inset.
 * @ployComponentStatus stable
 */
export declare function TableCell({ className, ...props }: ComponentProps<"td">): import('react').JSX.Element;
/**
 * @ployComponent
 * @ployComponentId table-caption
 * @ployComponentType component
 * @ployComponentTags data, table
 * @ployComponentDescription The table's caption, in the brand's secondary text colour.
 * @ployComponentStatus stable
 */
export declare function TableCaption({ className, ...props }: ComponentProps<"caption">): import('react').JSX.Element;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FiltersOverridesProps = {
    Filters?: PrimitiveOverrideProps<ViewProps>;
    "Filter By:"?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3633"?: PrimitiveOverrideProps<ViewProps>;
    Season?: PrimitiveOverrideProps<TextProps>;
    Vector632?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3642"?: PrimitiveOverrideProps<ViewProps>;
    Year?: PrimitiveOverrideProps<TextProps>;
    Vector644?: PrimitiveOverrideProps<IconProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3646"?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Vector648?: PrimitiveOverrideProps<IconProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3650"?: PrimitiveOverrideProps<ViewProps>;
    Tag?: PrimitiveOverrideProps<TextProps>;
    Vector652?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FiltersProps = React.PropsWithChildren<Partial<ViewProps> & {
    previousIssueArchive?: any;
} & {
    overrides?: FiltersOverridesProps | undefined | null;
}>;
export default function Filters(props: FiltersProps): React.ReactElement;

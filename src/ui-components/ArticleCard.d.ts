/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ArticleCardOverridesProps = {
    "2023"?: PrimitiveOverrideProps<TextProps>;
    ArticleCard?: PrimitiveOverrideProps<ViewProps>;
    "WINTER2023 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    WINTER?: PrimitiveOverrideProps<TextProps>;
    "Celebrating volunteers in Flemington Kensington"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ArticleCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    previousIssueArchive?: any;
} & {
    overrides?: ArticleCardOverridesProps | undefined | null;
}>;
export default function ArticleCard(props: ArticleCardProps): React.ReactElement;

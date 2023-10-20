/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "FKN_title_TRANSP2 1"?: PrimitiveOverrideProps<ImageProps>;
    Headers?: PrimitiveOverrideProps<FlexProps>;
    "Current Edition"?: PrimitiveOverrideProps<TextProps>;
    Archive?: PrimitiveOverrideProps<TextProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    "Facebook Page"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    Login?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;

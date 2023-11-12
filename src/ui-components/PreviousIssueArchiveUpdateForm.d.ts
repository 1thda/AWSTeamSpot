/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PreviousIssueArchiveUpdateFormInputValues = {
    MagazineID?: number;
    Season?: string;
    Year?: number;
    Tags?: string;
    Title?: string;
    CoverLink?: string;
    PageLink?: string;
};
export declare type PreviousIssueArchiveUpdateFormValidationValues = {
    MagazineID?: ValidationFunction<number>;
    Season?: ValidationFunction<string>;
    Year?: ValidationFunction<number>;
    Tags?: ValidationFunction<string>;
    Title?: ValidationFunction<string>;
    CoverLink?: ValidationFunction<string>;
    PageLink?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PreviousIssueArchiveUpdateFormOverridesProps = {
    PreviousIssueArchiveUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MagazineID?: PrimitiveOverrideProps<TextFieldProps>;
    Season?: PrimitiveOverrideProps<SelectFieldProps>;
    Year?: PrimitiveOverrideProps<TextFieldProps>;
    Tags?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    CoverLink?: PrimitiveOverrideProps<TextFieldProps>;
    PageLink?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PreviousIssueArchiveUpdateFormProps = React.PropsWithChildren<{
    overrides?: PreviousIssueArchiveUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    previousIssueArchive?: any;
    onSubmit?: (fields: PreviousIssueArchiveUpdateFormInputValues) => PreviousIssueArchiveUpdateFormInputValues;
    onSuccess?: (fields: PreviousIssueArchiveUpdateFormInputValues) => void;
    onError?: (fields: PreviousIssueArchiveUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PreviousIssueArchiveUpdateFormInputValues) => PreviousIssueArchiveUpdateFormInputValues;
    onValidate?: PreviousIssueArchiveUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PreviousIssueArchiveUpdateForm(props: PreviousIssueArchiveUpdateFormProps): React.ReactElement;

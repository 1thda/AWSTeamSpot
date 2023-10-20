/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PreviousIssueArchiveCreateFormInputValues = {
    MagazineID?: number;
    Season?: string;
    Year?: number;
    Tags?: string;
    Title?: string;
    CoverLink?: string;
    PageLink?: string;
};
export declare type PreviousIssueArchiveCreateFormValidationValues = {
    MagazineID?: ValidationFunction<number>;
    Season?: ValidationFunction<string>;
    Year?: ValidationFunction<number>;
    Tags?: ValidationFunction<string>;
    Title?: ValidationFunction<string>;
    CoverLink?: ValidationFunction<string>;
    PageLink?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PreviousIssueArchiveCreateFormOverridesProps = {
    PreviousIssueArchiveCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MagazineID?: PrimitiveOverrideProps<TextFieldProps>;
    Season?: PrimitiveOverrideProps<SelectFieldProps>;
    Year?: PrimitiveOverrideProps<TextFieldProps>;
    Tags?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    CoverLink?: PrimitiveOverrideProps<TextFieldProps>;
    PageLink?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PreviousIssueArchiveCreateFormProps = React.PropsWithChildren<{
    overrides?: PreviousIssueArchiveCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PreviousIssueArchiveCreateFormInputValues) => PreviousIssueArchiveCreateFormInputValues;
    onSuccess?: (fields: PreviousIssueArchiveCreateFormInputValues) => void;
    onError?: (fields: PreviousIssueArchiveCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PreviousIssueArchiveCreateFormInputValues) => PreviousIssueArchiveCreateFormInputValues;
    onValidate?: PreviousIssueArchiveCreateFormValidationValues;
} & React.CSSProperties>;
export default function PreviousIssueArchiveCreateForm(props: PreviousIssueArchiveCreateFormProps): React.ReactElement;

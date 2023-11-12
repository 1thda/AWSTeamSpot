/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createPreviousIssueArchive } from "../graphql/mutations";
export default function PreviousIssueArchiveCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    MagazineID: "",
    Season: "",
    Year: "",
    Tags: "",
    Title: "",
    CoverLink: "",
    PageLink: "",
  };
  const [MagazineID, setMagazineID] = React.useState(initialValues.MagazineID);
  const [Season, setSeason] = React.useState(initialValues.Season);
  const [Year, setYear] = React.useState(initialValues.Year);
  const [Tags, setTags] = React.useState(initialValues.Tags);
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [CoverLink, setCoverLink] = React.useState(initialValues.CoverLink);
  const [PageLink, setPageLink] = React.useState(initialValues.PageLink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMagazineID(initialValues.MagazineID);
    setSeason(initialValues.Season);
    setYear(initialValues.Year);
    setTags(initialValues.Tags);
    setTitle(initialValues.Title);
    setCoverLink(initialValues.CoverLink);
    setPageLink(initialValues.PageLink);
    setErrors({});
  };
  const validations = {
    MagazineID: [],
    Season: [],
    Year: [],
    Tags: [],
    Title: [],
    CoverLink: [{ type: "URL" }],
    PageLink: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          MagazineID,
          Season,
          Year,
          Tags,
          Title,
          CoverLink,
          PageLink,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createPreviousIssueArchive.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PreviousIssueArchiveCreateForm")}
      {...rest}
    >
      <TextField
        label="Magazine id"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MagazineID}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MagazineID: value,
              Season,
              Year,
              Tags,
              Title,
              CoverLink,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.MagazineID ?? value;
          }
          if (errors.MagazineID?.hasError) {
            runValidationTasks("MagazineID", value);
          }
          setMagazineID(value);
        }}
        onBlur={() => runValidationTasks("MagazineID", MagazineID)}
        errorMessage={errors.MagazineID?.errorMessage}
        hasError={errors.MagazineID?.hasError}
        {...getOverrideProps(overrides, "MagazineID")}
      ></TextField>
      <TextField
        label="Season"
        isRequired={false}
        isReadOnly={false}
        value={Season}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season: value,
              Year,
              Tags,
              Title,
              CoverLink,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.Season ?? value;
          }
          if (errors.Season?.hasError) {
            runValidationTasks("Season", value);
          }
          setSeason(value);
        }}
        onBlur={() => runValidationTasks("Season", Season)}
        errorMessage={errors.Season?.errorMessage}
        hasError={errors.Season?.hasError}
        {...getOverrideProps(overrides, "Season")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season,
              Year: value,
              Tags,
              Title,
              CoverLink,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.Year ?? value;
          }
          if (errors.Year?.hasError) {
            runValidationTasks("Year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("Year", Year)}
        errorMessage={errors.Year?.errorMessage}
        hasError={errors.Year?.hasError}
        {...getOverrideProps(overrides, "Year")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={Tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season,
              Year,
              Tags: value,
              Title,
              CoverLink,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.Tags ?? value;
          }
          if (errors.Tags?.hasError) {
            runValidationTasks("Tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("Tags", Tags)}
        errorMessage={errors.Tags?.errorMessage}
        hasError={errors.Tags?.hasError}
        {...getOverrideProps(overrides, "Tags")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season,
              Year,
              Tags,
              Title: value,
              CoverLink,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Cover link"
        isRequired={false}
        isReadOnly={false}
        value={CoverLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season,
              Year,
              Tags,
              Title,
              CoverLink: value,
              PageLink,
            };
            const result = onChange(modelFields);
            value = result?.CoverLink ?? value;
          }
          if (errors.CoverLink?.hasError) {
            runValidationTasks("CoverLink", value);
          }
          setCoverLink(value);
        }}
        onBlur={() => runValidationTasks("CoverLink", CoverLink)}
        errorMessage={errors.CoverLink?.errorMessage}
        hasError={errors.CoverLink?.hasError}
        {...getOverrideProps(overrides, "CoverLink")}
      ></TextField>
      <TextField
        label="Page link"
        isRequired={false}
        isReadOnly={false}
        value={PageLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MagazineID,
              Season,
              Year,
              Tags,
              Title,
              CoverLink,
              PageLink: value,
            };
            const result = onChange(modelFields);
            value = result?.PageLink ?? value;
          }
          if (errors.PageLink?.hasError) {
            runValidationTasks("PageLink", value);
          }
          setPageLink(value);
        }}
        onBlur={() => runValidationTasks("PageLink", PageLink)}
        errorMessage={errors.PageLink?.errorMessage}
        hasError={errors.PageLink?.hasError}
        {...getOverrideProps(overrides, "PageLink")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { API } from "aws-amplify";
import { updatePreviousIssueArchive } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Filters(props) {
  const { previousIssueArchive, overrides, ...rest } = props;
  const groupTwoOnClick = async () => {
    await API.graphql({
      query: updatePreviousIssueArchive.replaceAll("__typename", ""),
      variables: {
        input: {
          id: previousIssueArchive?.Season,
        },
      },
    });
  };
  return (
    <View
      width="639px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Filters")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="108.44px"
        height="31.35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.57%"
        bottom="6.12%"
        left="0%"
        right="83.03%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Filter By:"
        {...getOverrideProps(overrides, "Filter By:")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="107.55px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="20.9%"
        right="62.27%"
        onClick={() => {
          groupTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="107.55px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 3633")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="59.15px"
          height="18.61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30.61%"
          bottom="30.61%"
          left="14.17%"
          right="30.83%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Season"
          {...getOverrideProps(overrides, "Season")}
        ></Text>
        <Icon
          width="17.92px"
          height="19.59px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.92425537109375,
            height: 19.591842651367188,
          }}
          paths={[
            {
              d: "M16.804 8.57143L10.0824 8.57143L10.0824 1.22449C10.0824 0.899735 9.96437 0.588281 9.75428 0.358645C9.54419 0.129009 9.25924 5.43783e-16 8.96213 0C8.66502 5.43783e-16 8.38007 0.129009 8.16998 0.358645C7.95989 0.588281 7.84187 0.899735 7.84187 1.22449L7.84187 8.57143L1.12027 8.57143C0.823153 8.57143 0.538209 8.70044 0.328119 8.93007C0.118028 9.15971 4.97498e-16 9.47116 0 9.79592C4.97498e-16 10.1207 0.118028 10.4321 0.328119 10.6618C0.538209 10.8914 0.823153 11.0204 1.12027 11.0204L7.84187 11.0204L7.84187 18.3673C7.84187 18.6921 7.95989 19.0036 8.16998 19.2332C8.38007 19.4628 8.66502 19.5918 8.96213 19.5918C9.25924 19.5918 9.54419 19.4628 9.75428 19.2332C9.96437 19.0036 10.0824 18.6921 10.0824 18.3673L10.0824 11.0204L16.804 11.0204C17.1011 11.0204 17.3861 10.8914 17.5961 10.6618C17.8062 10.4321 17.9243 10.1207 17.9243 9.79592C17.9243 9.47116 17.8062 9.15971 17.5961 8.93007C17.3861 8.70044 17.1011 8.57143 16.804 8.57143Z",
              fill: "rgba(0,134,37,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28.57%"
          bottom="30.61%"
          left="69.17%"
          right="14.17%"
          {...getOverrideProps(overrides, "Vector632")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="107.55px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="41.65%"
        right="41.51%"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          width="107.55px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 3642")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="39.43px"
          height="18.61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30.61%"
          bottom="30.61%"
          left="25.83%"
          right="37.5%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Year"
          {...getOverrideProps(overrides, "Year")}
        ></Text>
        <Icon
          width="17.92px"
          height="19.59px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.92425537109375,
            height: 19.591842651367188,
          }}
          paths={[
            {
              d: "M16.804 8.57143L10.0824 8.57143L10.0824 1.22449C10.0824 0.899735 9.96437 0.588281 9.75428 0.358645C9.54419 0.129009 9.25924 5.43783e-16 8.96213 0C8.66502 5.43783e-16 8.38007 0.129009 8.16998 0.358645C7.95989 0.588281 7.84187 0.899735 7.84187 1.22449L7.84187 8.57143L1.12027 8.57143C0.823153 8.57143 0.538209 8.70044 0.328119 8.93007C0.118028 9.15971 4.97498e-16 9.47116 0 9.79592C4.97498e-16 10.1207 0.118028 10.4321 0.328119 10.6618C0.538209 10.8914 0.823153 11.0204 1.12027 11.0204L7.84187 11.0204L7.84187 18.3673C7.84187 18.6921 7.95989 19.0036 8.16998 19.2332C8.38007 19.4628 8.66502 19.5918 8.96213 19.5918C9.25924 19.5918 9.54419 19.4628 9.75428 19.2332C9.96437 19.0036 10.0824 18.6921 10.0824 18.3673L10.0824 11.0204L16.804 11.0204C17.1011 11.0204 17.3861 10.8914 17.5961 10.6618C17.8062 10.4321 17.9243 10.1207 17.9243 9.79592C17.9243 9.47116 17.8062 9.15971 17.5961 8.93007C17.3861 8.70044 17.1011 8.57143 16.804 8.57143Z",
              fill: "rgba(247,193,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28.57%"
          bottom="30.61%"
          left="68.33%"
          right="15%"
          {...getOverrideProps(overrides, "Vector644")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="107.55px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="62.41%"
        right="20.76%"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <View
          width="107.55px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 3646")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="34.95px"
          height="18.61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30.61%"
          bottom="30.61%"
          left="25%"
          right="42.5%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Title"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Icon
          width="17.92px"
          height="19.59px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.92425537109375,
            height: 19.591842651367188,
          }}
          paths={[
            {
              d: "M16.804 8.57143L10.0824 8.57143L10.0824 1.22449C10.0824 0.899735 9.96437 0.588281 9.75428 0.358645C9.54419 0.129009 9.25924 5.43783e-16 8.96213 0C8.66502 5.43783e-16 8.38007 0.129009 8.16998 0.358645C7.95989 0.588281 7.84187 0.899735 7.84187 1.22449L7.84187 8.57143L1.12027 8.57143C0.823153 8.57143 0.538209 8.70044 0.328119 8.93007C0.118028 9.15971 4.97498e-16 9.47116 0 9.79592C4.97498e-16 10.1207 0.118028 10.4321 0.328119 10.6618C0.538209 10.8914 0.823153 11.0204 1.12027 11.0204L7.84187 11.0204L7.84187 18.3673C7.84187 18.6921 7.95989 19.0036 8.16998 19.2332C8.38007 19.4628 8.66502 19.5918 8.96213 19.5918C9.25924 19.5918 9.54419 19.4628 9.75428 19.2332C9.96437 19.0036 10.0824 18.6921 10.0824 18.3673L10.0824 11.0204L16.804 11.0204C17.1011 11.0204 17.3861 10.8914 17.5961 10.6618C17.8062 10.4321 17.9243 10.1207 17.9243 9.79592C17.9243 9.47116 17.8062 9.15971 17.5961 8.93007C17.3861 8.70044 17.1011 8.57143 16.804 8.57143Z",
              fill: "rgba(243,102,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28.57%"
          bottom="30.61%"
          left="69.17%"
          right="14.17%"
          {...getOverrideProps(overrides, "Vector648")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="107.55px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="83.17%"
        right="0%"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <View
          width="107.55px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 3650")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="19.363636016845703px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="32.26px"
          height="18.61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30.61%"
          bottom="30.61%"
          left="29.17%"
          right="40.83%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tag"
          {...getOverrideProps(overrides, "Tag")}
        ></Text>
        <Icon
          width="17.92px"
          height="19.59px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.92426300048828,
            height: 19.591842651367188,
          }}
          paths={[
            {
              d: "M16.804 8.57143L10.0824 8.57143L10.0824 1.22449C10.0824 0.899735 9.96437 0.588281 9.75428 0.358645C9.54419 0.129009 9.25924 5.43783e-16 8.96213 0C8.66502 5.43783e-16 8.38007 0.129009 8.16998 0.358645C7.95989 0.588281 7.84187 0.899735 7.84187 1.22449L7.84187 8.57143L1.12027 8.57143C0.823153 8.57143 0.538209 8.70044 0.328119 8.93007C0.118028 9.15971 4.97498e-16 9.47116 0 9.79592C4.97498e-16 10.1207 0.118028 10.4321 0.328119 10.6618C0.538209 10.8914 0.823153 11.0204 1.12027 11.0204L7.84187 11.0204L7.84187 18.3673C7.84187 18.6921 7.95989 19.0036 8.16998 19.2332C8.38007 19.4628 8.66502 19.5918 8.96213 19.5918C9.25924 19.5918 9.54419 19.4628 9.75428 19.2332C9.96437 19.0036 10.0824 18.6921 10.0824 18.3673L10.0824 11.0204L16.804 11.0204C17.1011 11.0204 17.3861 10.8914 17.5961 10.6618C17.8062 10.4321 17.9243 10.1207 17.9243 9.79592C17.9243 9.47116 17.8062 9.15971 17.5961 8.93007C17.3861 8.70044 17.1011 8.57143 16.804 8.57143Z",
              fill: "rgba(51,144,231,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28.57%"
          bottom="30.61%"
          left="69.17%"
          right="14.17%"
          {...getOverrideProps(overrides, "Vector652")}
        ></Icon>
      </View>
    </View>
  );
}

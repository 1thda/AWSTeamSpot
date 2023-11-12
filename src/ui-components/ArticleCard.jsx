/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function ArticleCard(props) {
  const { previousIssueArchive, overrides, ...rest } = props;
  const articleCardOnClick = useNavigateAction({
    type: "url",
    url: previousIssueArchive?.PageLink,
  });
  return (
    <View
      width="297px"
      height="420px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        articleCardOnClick();
      }}
      {...getOverrideProps(overrides, "ArticleCard")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={previousIssueArchive?.CoverLink}
        {...getOverrideProps(overrides, "WINTER2023 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(57,57,57,0.76)"
        lineHeight="19.363636016845703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="46px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="4.05%"
        bottom="90.71%"
        left="5.39%"
        right="79.12%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={previousIssueArchive?.Year}
        {...getOverrideProps(overrides, "2023")}
      ></Text>
      <View
        width="297px"
        height="105px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="0px 0px 20px 20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(228,228,228,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="69px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77.86%"
        bottom="16.9%"
        left="5.39%"
        right="71.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        {...getOverrideProps(overrides, "WINTER")}
      ></Text>
      <Text
        fontFamily="Newsreader"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="265px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84.76%"
        bottom="5.24%"
        left="5.39%"
        right="5.39%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={previousIssueArchive?.Title}
        {...getOverrideProps(
          overrides,
          "Celebrating volunteers in Flemington Kensington"
        )}
      ></Text>
    </View>
  );
}

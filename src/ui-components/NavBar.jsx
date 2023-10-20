/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="227px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <View
        width="1512px"
        height="227px"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Image
        width="17.26%"
        height="54.63%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="11.01%"
        bottom="34.36%"
        left="41.34%"
        right="41.4%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "FKN_title_TRANSP2 1")}
      ></Image>
      <Flex
        gap="25px"
        direction="row"
        width="884px"
        height="49px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="73.13%"
        bottom="5.29%"
        left="23.94%"
        right="17.59%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headers")}
      >
        <Text
          fontFamily="Newsreader"
          fontSize="26px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="204px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Current Edition"
          {...getOverrideProps(overrides, "Current Edition")}
        ></Text>
        <Text
          fontFamily="Newsreader"
          fontSize="26px"
          fontWeight="700"
          color="rgba(51,144,231,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
          width="120px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Archive"
          {...getOverrideProps(overrides, "Archive")}
        ></Text>
        <Text
          fontFamily="Newsreader"
          fontSize="26px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="96px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Newsreader"
          fontSize="26px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="182px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Facebook Page "
          {...getOverrideProps(overrides, "Facebook Page")}
        ></Text>
        <Text
          fontFamily="Newsreader"
          fontSize="26px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="26px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="182px"
          height="49px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Contact"
          {...getOverrideProps(overrides, "Contact")}
        ></Text>
      </Flex>
      <View
        width="116px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.3%"
        bottom="59.03%"
        left="89.29%"
        right="3.04%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(51,144,231,1)"
        {...getOverrideProps(overrides, "Rectangle 8")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="74px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="21.15%"
        bottom="66.08%"
        left="91.07%"
        right="4.03%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
    </View>
  );
}

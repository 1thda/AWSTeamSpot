/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="311px"
      height="43px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      as="form"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <View
        width="311px"
        height="43px"
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
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Icon
        width="21.53px"
        height="21.5px"
        viewBox={{ minX: 0, minY: 0, width: 21.53076171875, height: 21.5 }}
        paths={[
          {
            d: "M21.2285 19.6875L17.2369 15.7308C18.7863 13.8002 19.5366 11.3498 19.3336 8.88333C19.1306 6.41688 17.9896 4.12189 16.1454 2.47027C14.3011 0.818647 11.8937 -0.0640692 9.41823 0.00362438C6.94271 0.071318 4.58723 1.08428 2.83611 2.83421C1.085 4.58415 0.0713658 6.93806 0.00362681 9.41191C-0.0641122 11.8858 0.819196 14.2915 2.47193 16.1346C4.12465 17.9776 6.42118 19.1178 8.88929 19.3206C11.3574 19.5235 13.8095 18.7737 15.7414 17.2253L19.7007 21.182C19.8007 21.2827 19.9197 21.3627 20.0508 21.4173C20.1819 21.4719 20.3225 21.5 20.4646 21.5C20.6066 21.5 20.7472 21.4719 20.8783 21.4173C21.0094 21.3627 21.1284 21.2827 21.2285 21.182C21.4224 20.9815 21.5308 20.7136 21.5308 20.4347C21.5308 20.1559 21.4224 19.888 21.2285 19.6875ZM9.70558 17.2253C8.21603 17.2253 6.75993 16.7839 5.52141 15.9569C4.2829 15.1299 3.3176 13.9545 2.74757 12.5792C2.17754 11.204 2.0284 9.69072 2.319 8.23077C2.60959 6.77082 3.32688 5.42978 4.38015 4.37721C5.43342 3.32465 6.77537 2.60784 8.23629 2.31744C9.69722 2.02704 11.2115 2.17608 12.5877 2.74573C13.9638 3.31537 15.1401 4.28003 15.9676 5.51771C16.7952 6.7554 17.2369 8.21052 17.2369 9.69907C17.2369 11.6952 16.4434 13.6095 15.031 15.0209C13.6186 16.4324 11.703 17.2253 9.70558 17.2253Z",
            fill: "rgba(51,144,231,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25.93%"
        bottom="24.07%"
        left="86.41%"
        right="6.67%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(160,160,160,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="203px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25.58%"
        bottom="16.28%"
        left="8.36%"
        right="26.37%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        inputMode=""
        children="Search past articles"
        {...getOverrideProps(overrides, "Search past articles")}
      ></Text>
    </View>
  );
}

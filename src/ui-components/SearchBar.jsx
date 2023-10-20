/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="54px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <View
        width="390px"
        height="54px"
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
        width="27px"
        height="27px"
        viewBox={{ minX: 0, minY: 0, width: 27, height: 27 }}
        paths={[
          {
            d: "M26.6209 24.7238L21.6154 19.755C23.5583 17.3305 24.4993 14.2532 24.2447 11.1558C23.9901 8.0584 22.5594 5.17633 20.2466 3.1022C17.9339 1.02807 14.915 -0.080459 11.8106 0.00455155C8.70629 0.0895621 5.75247 1.36165 3.55654 3.55924C1.36062 5.75684 0.0894941 8.71291 0.0045481 11.8196C-0.080398 14.9263 1.02729 17.9475 3.09984 20.262C5.1724 22.5765 8.05229 24.0083 11.1473 24.2631C14.2424 24.5179 17.3174 23.5762 19.74 21.6318L24.705 26.6006C24.8305 26.7272 24.9797 26.8276 25.1441 26.8962C25.3085 26.9647 25.4848 27 25.663 27C25.8411 27 26.0174 26.9647 26.1818 26.8962C26.3462 26.8276 26.4955 26.7272 26.6209 26.6006C26.8641 26.3488 27 26.0124 27 25.6622C27 25.312 26.8641 24.9756 26.6209 24.7238ZM12.171 21.6318C10.3031 21.6318 8.47708 21.0775 6.92396 20.0389C5.37084 19.0004 4.16033 17.5242 3.44551 15.7972C2.73068 14.0701 2.54365 12.1697 2.90807 10.3363C3.27248 8.5029 4.17197 6.81879 5.49279 5.49696C6.81361 4.17514 8.49644 3.27497 10.3285 2.91027C12.1605 2.54558 14.0595 2.73276 15.7852 3.44812C17.5109 4.16349 18.9859 5.37492 20.0237 6.92922C21.0615 8.48352 21.6154 10.3109 21.6154 12.1802C21.6154 14.6869 20.6203 17.091 18.8492 18.8635C17.078 20.636 14.6758 21.6318 12.171 21.6318Z",
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
        width="191px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25.93%"
        bottom="16.67%"
        left="8.21%"
        right="42.82%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Search past articles"
        {...getOverrideProps(overrides, "Search past articles")}
      ></Text>
    </View>
  );
}

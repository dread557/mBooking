import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";

export interface ItemProps {
  id: string;
  title: string;
  description: string;
  image: any;
}

export type OnBoardingSlideItemProps = {
  item: ItemProps;
};

const OnBoardingSlideItem = ({ item }: OnBoardingSlideItemProps) => {
  const { width } = useWindowDimensions();
  const containerWidth = width * 0.8;
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[
          styles.image,
          {
            width: containerWidth,
            height: containerWidth,
            borderRadius: containerWidth / 12,
          },
        ]}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingSlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
  },
  textWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: "700",
    color: COLORS.light,
    fontFamily: "SF-PRO",
    marginTop: 40,
  },
  description: {
    fontSize: SIZES.medium,
    color: "#f2f2f2",
    fontFamily: "SF-PRO",
  },
});

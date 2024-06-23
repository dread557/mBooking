import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { ItemProps } from "./OnBoardingSlideItem";
import { COLORS } from "../constants/theme";

interface PaginatorProps {
  data: ItemProps[];
  scrollX: Animated.Value;
}

const Paginator: React.FC<PaginatorProps> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.1, 1, 0.1],
          extrapolate: "clamp",
        });
        return (
          <Animated.View key={i.toString()} style={[styles.dot, { opacity }]} />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 1000,
    backgroundColor: COLORS.primary,
  },
});

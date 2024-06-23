import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import datesArray from "../../data/dates";
import { COLORS } from "../../constants/theme";
import Separator from "../Separator";

const SlideItem = ({
  date,
  index,
  scrollX,
  selectDate,
  selectedDate,
}: {
  date: Date;
  scrollX: Animated.Value;
  index: number;
  selectDate: (arg: Date) => void;
  selectedDate: Date;
}) => {
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString();
  const ITEM_WIDTH = 52;
  const inputRange = [
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
    (index + 1) * ITEM_WIDTH,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 0.6, 0.5],
    extrapolate: "clamp",
  });
  const isSelected = selectedDate === date;
  return (
    <Animated.View
      style={[
        styles.itemContainer,
        { opacity },
        isSelected && styles.containerSelected,
      ]}
    >
      <Pressable onPress={() => selectDate(date)} style={styles.innerItem}>
        <Text style={[styles.month, isSelected && { color: "#000000" }]}>
          {month}
        </Text>
        <Text
          style={[styles.day, isSelected && { backgroundColor: "#000000" }]}
        >
          {day}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const DateSlide = ({
  selectDate,
  selectedDate,
}: {
  selectedDate: Date;
  selectDate: (arg: Date) => void;
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.FlatList
        data={datesArray}
        renderItem={({ item, index }) => (
          <SlideItem
            date={item}
            index={Number(index)}
            scrollX={scrollX}
            selectDate={selectDate}
            selectedDate={selectedDate}
          />
        )}
        horizontal
        snapToInterval={80}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => <Separator size={20} />}
      />
    </View>
  );
};

export default DateSlide;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#1c1c1c",
    width: 52,
    height: 104,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  containerSelected: {
    backgroundColor: COLORS.primary,
    opacity: 1,
  },
  innerItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  month: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.light,
  },
  day: {
    padding: 10,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#3b3b3b",
    borderRadius: 99,
    color: COLORS.light,
  },
});

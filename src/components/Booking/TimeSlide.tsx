import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MovieTimes } from "../../data/movieTime";
import { COLORS } from "../../constants/theme";
import Separator from "../Separator";

const SlideItem = ({
  time,
  selectedTime,
  setSelectedTime,
}: {
  time: string;
  selectedTime: string;
  setSelectedTime: (arg: string) => void;
}) => {
  const isSelected = selectedTime === time;
  return (
    <View>
      <Pressable
        style={[styles.itemContainer, isSelected && styles.itemSelected]}
        onPress={() => setSelectedTime(time)}
      >
        <Text style={styles.item}>{time}</Text>
      </Pressable>
    </View>
  );
};

const TimeSlide = ({
  selectedTime,
  setSelectedTime,
}: {
  selectedTime: string;
  setSelectedTime: (arg: string) => void;
}) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <FlatList
        data={MovieTimes}
        renderItem={({ item }) => (
          <SlideItem
            time={item}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}
        horizontal
        ItemSeparatorComponent={() => <Separator size={20} />}
      />
    </View>
  );
};

export default TimeSlide;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 31,
    backgroundColor: "#1c1c1c",
    width: 89,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  itemSelected: {
    backgroundColor: "#261D08",
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  item: {
    color: COLORS.light,
    fontSize: 14,
    fontWeight: "500",
  },
});

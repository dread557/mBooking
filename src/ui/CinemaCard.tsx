import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/theme";

interface CinemaCardType {
  name: string;
  image: any;
  location: string;
  id: string;
  onPress: (arg: string) => void;
  isSelected: boolean;
}

const CinemaCard = ({
  id,
  name,
  image,
  location,
  onPress,
  isSelected,
}: CinemaCardType) => {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={() => onPress(id)}
    >
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <Image style={styles.image} source={image} />
    </Pressable>
  );
};

export default CinemaCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 20,
    justifyContent: "space-between",
    borderWidth: 1,
    backgroundColor: "#1c1c1c",
  },
  containerSelected: {
    borderColor: COLORS.primary,
    backgroundColor: "#261D08",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.light,
  },
  location: {
    fontSize: 12,
    color: COLORS.light,
  },
  image: {
    width: 32,
    height: 16,
    borderRadius: 2,
    resizeMode: "contain",
  },
});

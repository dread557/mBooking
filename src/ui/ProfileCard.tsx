import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

interface ProfileCardType {
  name: string;
  image: any;
}

const ProfileCard = ({ name, image }: ProfileCardType) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    width: 150,
    height: 58,
    flexDirection: "row",
    padding: 8,
    gap: 10,
    alignItems: "center",
  },
  image: {
    borderRadius: 999,
    height: 36,
    width: 36,
  },
  name: {
    fontSize: 14,
    color: COLORS.light,
    lineHeight: 21,
    flex: 1,
  },
});

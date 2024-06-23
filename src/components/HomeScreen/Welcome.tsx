import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Hi, Angelina 👋</Text>
        <Text style={styles.welcome}>Welcome back</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome name="bell" size={24} color="#F2F2F2" />
        <View style={styles.greenDot} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {},
  name: { color: COLORS.light, fontSize: 18 },
  welcome: {
    color: COLORS.light,
    fontSize: 26,
    fontWeight: "700",
  },
  icon: {
    position: "relative",
  },
  greenDot: {
    position: "absolute",
    top: 0,
    right: 2,
    width: 12,
    height: 12,
    backgroundColor: "#2EF536",
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: "#000000",
  },
});

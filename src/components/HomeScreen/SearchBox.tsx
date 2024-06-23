import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.icon}
        name="search1"
        size={20}
        color={COLORS.light}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"#8C8C8C"}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 24,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    top: "35%",
    left: 16,
  },
  input: {
    backgroundColor: "#1C1C1C",
    padding: 16,
    borderRadius: 8,
    paddingLeft: 52,
    color: COLORS.light,
    fontSize: 16,
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

interface HeaderProps {
  title: string;
  link: string;
}

const Header = ({ title, link }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Pressable>
        <Text style={styles.text}>See all</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 32,
  },
  header: {
    color: COLORS.light,
    fontSize: 24,
    fontWeight: "700",
  },
  text: {
    color: COLORS.primary,
  },
});

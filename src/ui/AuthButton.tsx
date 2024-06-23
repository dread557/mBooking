import React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
  View,
} from "react-native";
import { COLORS } from "../constants/theme";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

type EvilIconName = keyof typeof EvilIcons.glyphMap;

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon: EvilIconName;
  iconColor: string;
}

const AuthButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  icon,
  iconColor,
}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <EvilIcons name={icon} size={24} color={iconColor} />
      <Text style={[styles.buttonText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 64,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#1A1A1A",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AuthButton;

import React from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../constants/theme";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  theme: "light" | "dark";
  isLoading?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  theme,
  isLoading = false,
  disabled,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        style,
        {
          backgroundColor: theme === "light" ? COLORS.primary : COLORS.dark,
          borderColor: theme === "light" ? COLORS.primary : "#F2F2F2",
          opacity: disabled ? 0.4 : 1,
        },
      ]}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator
          color={theme === "light" ? COLORS.dark : COLORS.light}
        />
      ) : (
        <Text
          style={[
            styles.buttonText,
            { color: theme === "light" ? COLORS.dark : COLORS.light },
          ]}
        >
          {title}
        </Text>
      )}
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;

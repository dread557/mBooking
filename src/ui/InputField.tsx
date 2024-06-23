import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  View,
  Pressable,
} from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type FeatherIconName = keyof typeof Feather.glyphMap;

interface CustomInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  icon?: FeatherIconName;
  iconBack?: FeatherIconName;
  passwordInput?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  icon,
  iconBack,
  passwordInput,
  ...rest
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      {icon && (
        <Feather
          name={icon}
          size={24}
          color={COLORS.light}
          style={styles.icon}
        />
      )}
      {passwordInput ? (
        <TextInput
          style={[styles.input, containerStyle]}
          placeholderTextColor="#A9A9A9"
          secureTextEntry={showPass}
          {...rest}
        />
      ) : (
        <TextInput
          style={[styles.input, containerStyle]}
          placeholderTextColor="#A9A9A9"
          {...rest}
        />
      )}

      {iconBack && (
        <Feather
          name={icon}
          size={24}
          color={COLORS.light}
          style={styles.icon}
        />
      )}
      {passwordInput && (
        <Pressable onPress={() => setShowPass(!showPass)}>
          <MaterialCommunityIcons
            name={showPass ? "eye" : "eye-off"}
            size={24}
            color={COLORS.light}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    color: COLORS.light,
    fontSize: 18,
    fontWeight: "700",
  },
  icon: {
    marginRight: 5,
  },
});

export default CustomInput;

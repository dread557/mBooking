import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import CustomInput from "../ui/InputField";
import CustomButton from "../ui/Button";
import { Props } from "./OnBoardingScreen";
import AuthButton from "../ui/AuthButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../services/firebaseConfig";

const auth = getAuth(app);

const LoginScreen = ({ navigation }: Props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function signIn() {
    if (!value.email || !value.password) {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      setIsLoading(true);
      const res = await signInWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
    } catch (error: any) {
      setValue({
        ...value,
        error: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        icon="mail"
        keyboardType="email-address"
        placeholder="Enter your email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
      />

      <CustomInput
        icon="lock"
        placeholder="Enter your password"
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        passwordInput
      />
      <Text style={styles.err}>{value.error}</Text>
      <CustomButton
        title={"Sign in "}
        onPress={signIn}
        style={styles.button}
        theme="light"
        isLoading={isLoading}
      />
      <View style={styles.StrokTextBox}>
        <View style={styles.stroke} />
        <Text style={{ color: COLORS.light, marginHorizontal: 10 }}>
          Or Sign in with{" "}
        </Text>
        <View style={styles.stroke} />
      </View>
      <View style={{ gap: 16 }}>
        <AuthButton
          icon="sc-facebook"
          iconColor="#337FFF"
          onPress={() => {}}
          title="Facebook"
          style={styles.authBtn}
        />
        <AuthButton
          icon="sc-google-plus"
          iconColor="#D32B1D"
          onPress={() => {}}
          title="Google"
          style={styles.authBtn}
        />
      </View>
      <Text style={styles.BottomText}>
        By sign in or sign up, you agree to our Terms of Service and Privac y
        Policy
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },

  button: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  StrokTextBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
  stroke: {
    borderWidth: 1,
    width: "35%",
    height: 3,
    backgroundColor: COLORS.light,
  },
  authBtn: {
    marginHorizontal: 16,
  },
  BottomText: {
    color: "#B3B3B3",
    textAlign: "center",
    marginVertical: 32,
  },
  err: {
    color: "red",
    fontSize: 12,
    padding: 16,
  },
});

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { COLORS } from "../constants/theme";
import SignupScreen from "../screens/SignupScreen";

export type RootStackParamList = {
  login: undefined;
  signup: undefined;
  onBoarding: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="onBoarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: COLORS.dark,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.light,
            fontSize: 28,
          },
          headerTitleAlign: "center",
        }}
      />
      <RootStack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: "Sign up",
          headerStyle: {
            backgroundColor: COLORS.dark,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.light,
            fontSize: 28,
          },
          headerTitleAlign: "center",
        }}
      />
    </RootStack.Navigator>
  );
};

export default AuthStack;

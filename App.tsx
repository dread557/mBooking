import * as SplashScreen from "expo-splash-screen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import { useFonts } from "expo-font";
import { useCallback, useState, useEffect } from "react";
import { View, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";
import "./src/services/firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import TabNavigation from "./src/navigation/TabNavigation";
import AppStackGroup from "./src/navigation/AppStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);
  const currentTheme = useColorScheme();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "SF-PRO": require("./assets/fonts/spfRegular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer
    // theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        {user ? <AppStackGroup /> : <AuthStack />}
      </View>
    </NavigationContainer>
  );
}

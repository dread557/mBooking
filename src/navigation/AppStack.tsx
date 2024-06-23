import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import TabNavigation from "./TabNavigation";
import BookingScreen from "../screens/BookingScreen";

export type AppStackParamList = {
  Home: undefined;
  MovieDetail: undefined;
  TabNavigation: undefined;
  Booking: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppStackGroup = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="TabNavigation" component={TabNavigation} />
      <AppStack.Screen
        name="MovieDetail"
        component={MovieDetailsScreen}
        options={{ presentation: "modal" }}
      />
      <AppStack.Screen
        name="Booking"
        component={BookingScreen}
        options={{ presentation: "modal" }}
      />
    </AppStack.Navigator>
  );
};

export default AppStackGroup;

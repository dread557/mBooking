import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import AppStackGroup from "./AppStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Home") {
            return <FontAwesome6 name={"house"} size={size} color={color} />;
          } else if (route.name === "Ticket") {
            return (
              <MaterialCommunityIcons
                name="ticket-confirmation-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Movie") {
            return (
              <Ionicons
                name={focused ? "videocam" : "videocam-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Octicons
                name={focused ? "person" : "person-fill"}
                size={size}
                color={color}
              />
            );
          }
        },
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#cccccc",
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          paddingVertical: 5,
          height: 60,
          borderColor: "#262626",
        },
        tabBarLabelStyle: {
          fontWeight: "600",
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen name="Ticket" component={HomeScreen} />
      <Tab.Screen name="Movie" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

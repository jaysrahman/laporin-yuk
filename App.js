import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Beranda") {
              iconName = "home";
            } else if (route.name === "Pengaturan") {
              iconName = "settings";
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Beranda"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Pengaturan" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

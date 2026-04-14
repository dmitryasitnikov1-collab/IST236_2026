// navigation/TabsNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Import the createBottomTabNavigator function from React Navigation to create a bottom tab navigator
import USNewsScreen from "../screens/USNewsScreen"; // Import the USNewsScreen component to use it in the tab navigator for showing US news
import WorldNewsScreen from "../screens/WorldNewsScreen"; // Import the WorldNewsScreen component to use it in the tab navigator for showing world news
import SportsNewsScreen from "../screens/SportsNewsScreen"; // Import the SportsNewsScreen component to use it in the tab navigator for showing sports news
import { Ionicons } from "@expo/vector-icons"; // Import the Ionicons component from Expo's vector icons library to use it for rendering icons in the tab navigator. This allows us to display different icons for each tab based on the news category.
// The TabsNavigator component defines the bottom tab navigation structure for the main news categories (US, World, Sports). It uses the createBottomTabNavigator function to create a tab navigator and defines three tabs, each corresponding to a different news category. The screen options are set to customize the appearance of the headers and the tab bar, as well as to define the icons for each tab based on the route name.
const Tab = createBottomTabNavigator();

export default function TabsNavigator() { // Define and export the TabsNavigator component, which will set up the bottom tab navigation structure for the main news categories (US, World, Sports). This includes defining the screens for each category and customizing the appearance of the tabs and headers.
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ // The screenOptions function is used to customize the appearance of the headers and the tab bar for each screen in the tab navigator. It receives the route object as a parameter, which allows us to determine which tab is currently active and set the appropriate icons and styles based on the route name.
        headerStyle: { backgroundColor: "#1e1e1e" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#1e1e1e" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",

        tabBarIcon: ({ color, size }) => { // The tabBarIcon function is used to define the icon that will be displayed for each tab in the tab navigator. It receives an object with color and size properties, which are determined by the active/inactive state of the tab. The function uses the route name to determine which icon to display for each tab (e.g., a flag for US news, a globe for world news, and a trophy for sports news).
          let iconName;

          if (route.name === "USNews") {
            iconName = "flag-outline";
          } else if (route.name === "WorldNews") {
            iconName = "globe-outline";
          } else if (route.name === "SportsNews") {
            iconName = "trophy-outline";
          }
          // The Ionicons component is used to render the icon for each tab based on the determined iconName, size, and color. This allows us to have visually distinct icons for each news category in the tab navigator.
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen // Define the first tab in the tab navigator, which will show US news
        name="USNews"
        component={USNewsScreen}
        options={{ title: "US" }}
      />

      <Tab.Screen // Define the second tab in the tab navigator, which will show world news
        name="WorldNews"
        component={WorldNewsScreen}
        options={{ title: "World" }}
      />

      <Tab.Screen // Define the third tab in the tab navigator, which will show sports news
        name="SportsNews"
        component={SportsNewsScreen}
        options={{ title: "Sports" }}
      />
    </Tab.Navigator> // This is the main return statement of the TabsNavigator component, which renders the Tab.Navigator with the defined screens and screen options. This sets up the bottom tab navigation structure for the app, allowing users to switch between different news categories by tapping on the corresponding tabs.
  );
}

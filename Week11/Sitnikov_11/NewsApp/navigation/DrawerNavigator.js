// navigation/DrawerNavigator.js
import React from "react"; // Import React to use JSX and create components
import { createDrawerNavigator } from "@react-navigation/drawer"; // Import the createDrawerNavigator function from React Navigation to create a drawer navigator
import TabsNavigator from "./TabsNavigator"; // Import the TabsNavigator to use it as the main screen in the drawer
import BookmarkedNewsScreen from "../screens/BookmarkedNewsScreen"; // Import the BookmarkedNewsScreen component to use it in the drawer navigator

const Drawer = createDrawerNavigator(); // Create a Drawer navigator instance using the createDrawerNavigator function. This will be used to define the screens that will be accessible through the drawer menu.

export default function DrawerNavigator() { // Define and export the DrawerNavigator component, which will set up the drawer navigation structure for the app.
  return (
    <Drawer.Navigator
      screenOptions={{ // Set some default screen options for all screens in the drawer navigator
        headerStyle: { backgroundColor: "#1e1e1e" },
        headerTintColor: "white",
        drawerActiveTintColor: "#1e1e1e",
        drawerActiveBackgroundColor: "#cfcfcf",
      }}
    >
      <Drawer.Screen // Define the first screen in the drawer navigator, which will be the main news tabs
        name="NewsTabs"
        component={TabsNavigator}
        options={{ title: "News" }}
      />

      <Drawer.Screen // Define the second screen in the drawer navigator, which will show the bookmarked news items
        name="Bookmarks"
        component={BookmarkedNewsScreen}
        options={{ title: "Bookmarked News" }}
      />
    </Drawer.Navigator>
  );
}

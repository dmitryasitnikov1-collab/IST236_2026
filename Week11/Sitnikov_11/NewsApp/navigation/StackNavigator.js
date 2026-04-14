// navigation/StackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import the createNativeStackNavigator function from React Navigation to create a stack navigator
import DrawerNavigator from "./DrawerNavigator"; // Import the DrawerNavigator to use it as the main screen in the stack navigator
import NewsDetailScreen from "../screens/NewsDetailScreen"; // Import the NewsDetailScreen component to use it in the stack navigator for showing news details
// The StackNavigator component defines the navigation structure of the app using a stack navigator. It includes two main screens:
const Stack = createNativeStackNavigator();

export default function StackNavigator() { // Define and export the StackNavigator component, which will set up the stack navigation structure for the app. This includes the main drawer navigator and the news detail screen.
  return (
    <Stack.Navigator> 
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }} // The first screen in the stack navigator is the DrawerNavigator, which contains the main navigation structure of the app. The header is hidden for this screen since the drawer navigator will handle its own headers for the individual screens.
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{
          title: "News Detail",
          headerStyle: { backgroundColor: "#1e1e1e" },
          headerTintColor: "white",
        }} // The second screen in the stack navigator is the NewsDetailScreen, which will show the details of a news item when it is selected. The header is styled with a dark background and white text to match the overall theme of the app.
      />
    </Stack.Navigator>
  );
}

import "react-native-gesture-handler"; // Import the gesture handler library to enable gesture-based navigation in the app. This should be imported at the top of the entry file (App.js) before any other imports to ensure it works correctly with React Navigation.
import { StatusBar } from "expo-status-bar"; // Import the StatusBar component from Expo to manage the appearance of the status bar in the app. This allows us to set the style of the status bar to match the overall theme of the app.
import { NavigationContainer } from "@react-navigation/native"; // Import the NavigationContainer component from React Navigation to set up the navigation context for the app. This component should wrap the entire navigation structure of the app to enable navigation functionality throughout the app.
import StackNavigator from "./navigation/StackNavigator"; // Import the StackNavigator component, which defines the main navigation structure of the app using a stack navigator. This will be used as the main component within the NavigationContainer to manage the navigation between different screens in the app.
import BookmarksContextProvider from "./store/context/bookmarks-context"; // Import the BookmarksContextProvider component, which provides a context for managing bookmarked news items. This will be used to wrap the entire app to allow any component within the app to access and manage bookmarks through the context.
// The App component is the root component of the application. It sets up the navigation structure and provides the bookmarks context to the entire app. The StatusBar component is used to set the style of the status bar, and the NavigationContainer wraps the StackNavigator to enable navigation throughout the app. The BookmarksContextProvider wraps everything to allow access to bookmark management across all screens.
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <BookmarksContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </BookmarksContextProvider>
    </>
  );
}

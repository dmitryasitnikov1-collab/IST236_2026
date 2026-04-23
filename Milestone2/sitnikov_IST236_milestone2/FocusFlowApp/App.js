import { NavigationContainer } from '@react-navigation/native'; // Importing the NavigationContainer from React Navigation to manage the navigation state of the app.
import AppNavigator from './navigation/AppNavigator'; // Importing the AppNavigator component which defines the navigation structure of the app. 
import { StatusBar } from 'expo-status-bar'; // Importing the StatusBar component from Expo to manage the appearance of the status bar on both iOS and Android devices. 
// The App component is the root component of the application. 
// It wraps the entire app in a NavigationContainer to enable navigation functionality, and includes the StatusBar for consistent styling of the status bar across platforms. 
// The AppNavigator is included within the NavigationContainer to define the navigation structure of the app, allowing users to navigate between different screens seamlessly.
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}


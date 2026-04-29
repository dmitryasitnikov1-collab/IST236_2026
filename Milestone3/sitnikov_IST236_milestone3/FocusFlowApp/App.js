import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './context/AppContext';
// The App component is the root component of the application. It wraps the entire app in the AppProvider to provide global state management and in the NavigationContainer to handle navigation between screens. 
// The StatusBar is set to light style for better visibility on dark backgrounds.
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}



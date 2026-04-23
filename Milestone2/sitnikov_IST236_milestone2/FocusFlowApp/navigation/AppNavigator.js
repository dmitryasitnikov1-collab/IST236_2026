import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import TabNavigator from './TabNavigator'; // Importing the TabNavigator component which defines the bottom tab navigation structure of the app.
// The AppNavigator component is responsible for defining the main navigation structure of the app using a stack navigator.
const Stack = createNativeStackNavigator();
// The Stack navigator is created using createNativeStackNavigator, which provides a way to navigate between screens in a stack-based manner.
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}

// App.js is the main entry point of the React Native application, responsible for setting up navigation between screens.

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
// Create a stack navigator for managing screen transitions between Home and Menu.
const Stack = createNativeStackNavigator();
// App component serves as the entry point of the application, setting up navigation between screens.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

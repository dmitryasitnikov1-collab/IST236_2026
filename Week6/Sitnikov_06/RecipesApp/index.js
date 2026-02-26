// Import necessary modules and components from React, React Native, and React Navigation
import { registerRootComponent } from 'expo';
// Importing the main App component which manages the recipes state and provides navigation between screens
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

import { registerRootComponent } from 'expo';
// Importing the App component from the App.js file. This is the main entry point of the application where the root component is defined. 
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

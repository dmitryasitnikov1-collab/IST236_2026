import React, { useCallback, useState } from 'react'; // Added useCallback and useState imports
import { View, ActivityIndicator } from 'react-native'; // Added View and ActivityIndicator imports
import * as SplashScreen from 'expo-splash-screen'; // Added SplashScreen import
import { useFonts } from 'expo-font'; // Added useFonts import
import HomeScreen from './screens/HomeScreen'; // Added HomeScreen import

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'), // Added PoppinsRegular font
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'), // Added PoppinsBold font
  });

  const onLayoutRootView = useCallback(async () => { // Added onLayoutRootView callback to hide splash screen when fonts are loaded
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) { // Show a loading indicator while fonts are loading
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} // Center the loading indicator
        onLayout={onLayoutRootView}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
// Render the main app content once fonts are loaded
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <HomeScreen />
    </View>
  );
}

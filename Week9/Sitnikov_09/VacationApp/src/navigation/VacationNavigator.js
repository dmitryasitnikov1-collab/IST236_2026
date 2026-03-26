// src/navigation/VacationNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationsOverviewScreen from '../screens/DestinationsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function VacationNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0b1b2b' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#f4f4f8' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Vacation Destinations' }}
      />
      <Stack.Screen
        name="DestinationsOverview"
        component={DestinationsOverviewScreen}
        options={({ route }) => ({
          title: route.params?.countryName || 'Destinations',
        })}
      />
    </Stack.Navigator>
  );
}

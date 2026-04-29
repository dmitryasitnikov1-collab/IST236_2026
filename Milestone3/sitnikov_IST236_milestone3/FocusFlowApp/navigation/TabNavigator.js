// navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import SessionScreen from '../screens/SessionScreen';
import StatsScreen from '../screens/StatsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import CustomTabBar from './CustomTabBar';
// The TabNavigator component defines the bottom tab navigation structure of the app. 
const Tab = createBottomTabNavigator();
// It uses the createBottomTabNavigator function from React Navigation to create a tab navigator. 
export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIconName: "home" }} />
      <Tab.Screen name="Tasks" component={TasksScreen} options={{ tabBarIconName: "list" }} />
      <Tab.Screen name="Session" component={SessionScreen} options={{ tabBarIconName: "timer" }} />
      <Tab.Screen name="Stats" component={StatsScreen} options={{ tabBarIconName: "stats-chart" }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarIconName: "time" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIconName: "settings" }} />
    </Tab.Navigator>
  );
}


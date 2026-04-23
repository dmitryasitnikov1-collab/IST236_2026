import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import SessionScreen from '../screens/SessionScreen';
import StatsScreen from '../screens/StatsScreen';
import { Ionicons } from '@expo/vector-icons';
// The TabNavigator component defines the bottom tab navigation structure of the app.
const Tab = createBottomTabNavigator();
// It uses createBottomTabNavigator to create a tab navigator, which allows users to switch between different screens using tabs at the bottom of the screen.
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4A90E2',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} /> }}
      />
      <Tab.Screen 
        name="Tasks" 
        component={TasksScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="list" size={22} color={color} /> }}
      />
      <Tab.Screen 
        name="Session" 
        component={SessionScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="timer" size={22} color={color} /> }}
      />
      <Tab.Screen 
        name="Stats" 
        component={StatsScreen}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={22} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

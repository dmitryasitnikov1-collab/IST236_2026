// navigation/CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// The CustomTabBar component is a custom implementation of a bottom tab bar for the app's navigation. 
// It renders a row of touchable icons and labels for each route defined in the navigation state. 
export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
// The isFocused variable checks if the current route is the focused tab by comparing the index of the route with the current index in the navigation state.
        const isFocused = state.index === index;

        const iconName = options.tabBarIconName || "ellipse";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
// The onPress function emits a "tabPress" event when a tab is pressed. If the event is not prevented and the tab is not already focused, it navigates to the corresponding route.
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
// The component returns a View containing a TouchableOpacity for each route, which includes an Ionicons icon and a Text label. The styles of the icon and label change based on whether the tab is focused or not.
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName}
              size={26}
              color={isFocused ? "#4A90E2" : "#999"}
            />
            <Text style={[styles.label, isFocused && styles.labelFocused]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
// The styles object defines the styling for the container, tab buttons, and labels. The container is styled to be a row with padding, margin, rounded corners, and shadow effects. The tab buttons are centered and take up equal space, while the labels change color and weight when focused.
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    justifyContent: "space-around",
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  labelFocused: {
    color: "#4A90E2",
    fontWeight: "600",
  },
});

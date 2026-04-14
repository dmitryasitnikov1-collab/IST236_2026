// components/HeaderBookmarkButton.js
import React from "react"; // Import React to use JSX and create components
import { Pressable } from "react-native"; // Import the Pressable component from React Native, which is used to create a pressable area for the bookmark button. This component provides built-in support for handling press events and can be styled to provide visual feedback when pressed.
import { Ionicons } from "@expo/vector-icons"; // Import the Ionicons component from the @expo/vector-icons library, which provides a wide range of icons that can be used in the app. In this case, it will be used to display the bookmark icon in the header of the NewsDetailScreen. The icon will change based on whether the news item is bookmarked or not.
// This component is used in the NewsDetailScreen header to show a bookmark icon that can be toggled on/off. It receives two props:
// - isBookmarked: a boolean that indicates whether the current news item is bookmarked or not. This determines which icon to show (filled or outlined).
// - onToggle: a function that gets called when the user presses the button. This should toggle the bookmark state in the parent component (NewsDetailScreen).
export default function HeaderBookmarkButton({ isBookmarked, onToggle }) {
  return (
    <Pressable
      onPress={onToggle}
      style={{ marginRight: 12 }}
      android_ripple={{ color: "#ccc" }}
    >
      <Ionicons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={24}
        color="white"
      />
    </Pressable>
  );
}

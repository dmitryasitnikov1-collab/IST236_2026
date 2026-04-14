// screens/BookmarkedNewsScreen.js
import React, { useContext } from "react";// Import React and the useContext hook to access the bookmarks context
import { View, Text, StyleSheet } from "react-native"; // Import necessary components from React Native for building the UI
import { BookmarksContext } from "../store/context/bookmarks-context"; // Import the BookmarksContext to access the list of bookmarked news items
import { NEWS } from "../data/dummy-news"; // Import the dummy news data to filter and display the bookmarked news items
import NewsList from "../components/NewsList"; // Import the NewsList component to render the list of news items in the UI

// The BookmarkedNewsScreen component is responsible for displaying the list of news items that the user has bookmarked. It uses the BookmarksContext to get the list of bookmarked news item IDs, filters the NEWS data to get the corresponding news items, and renders them using the NewsList component. If there are no bookmarked news items, it shows a message indicating that there are no bookmarks yet.

export default function BookmarkedNewsScreen({ navigation }) { 
  const bookmarksCtx = useContext(BookmarksContext);
// The bookmarkedNews variable is created by filtering the NEWS array to include only the news items whose IDs are present in the bookmarks context (bookmarksCtx.ids). This gives us an array of news items that the user has bookmarked, which we can then pass to the NewsList component for rendering.
  const bookmarkedNews = NEWS.filter((item) =>
    bookmarksCtx.ids.includes(item.id)
  );
 // If there are no bookmarked news items, the component returns a view with a message indicating that there are no bookmarks yet. This provides feedback to the user when they haven't bookmarked any news items.
  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No bookmarked articles yet.</Text>
      </View>
    );
  }
// If there are bookmarked news items, the component returns the NewsList component, passing the filtered list of bookmarked news items and the navigation prop. This allows the NewsList component to render the list of bookmarked news and handle navigation to the news detail screen when an item is selected.
  return <NewsList items={bookmarkedNews} navigation={navigation} />;
}
// The styles object defines some basic styling for the empty state view when there are no bookmarked news items. It centers the content and styles the text to make it visually distinct.
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
  },
});

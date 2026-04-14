// screens/NewsDetailScreen.js
import React, { useLayoutEffect, useContext } from "react"; // Import React and the useLayoutEffect and useContext hooks to manage side effects and access the bookmarks context
import { ScrollView, Image, Text, StyleSheet, View } from "react-native"; // Import necessary components from React Native for building the UI
import { NEWS } from "../data/dummy-news"; // Import the dummy news data to find the specific news item to display based on the ID passed through navigation
import { BookmarksContext } from "../store/context/bookmarks-context"; // Import the BookmarksContext to access the list of bookmarked news items and manage bookmarks
import HeaderBookmarkButton from "../components/HeaderBookmarkButton"; // Import the HeaderBookmarkButton component to use it in the header of the news detail screen for toggling bookmarks

// The NewsDetailScreen component is responsible for displaying the details of a specific news item. It retrieves the news item ID from the navigation route parameters, finds the corresponding news item from the dummy data, and renders its details. It also uses the BookmarksContext to determine if the news item is bookmarked and provides a button in the header to toggle the bookmark status.

export default function NewsDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const bookmarksCtx = useContext(BookmarksContext);
// The newsItem variable is created by finding the news item in the NEWS array that matches the ID passed through the navigation route parameters. This allows us to access all the details of the specific news item that we want to display on this screen.
  const newsItem = NEWS.find((item) => item.id === id);
  const isBookmarked = bookmarksCtx.ids.includes(id);
// The toggleBookmarkHandler function is defined to handle the logic for toggling the bookmark status of the news item. If the item is currently bookmarked, it calls the removeBookmark method from the bookmarks context; otherwise, it calls the addBookmark method to add it to the bookmarks.
  function toggleBookmarkHandler() {
    if (isBookmarked) {
      bookmarksCtx.removeBookmark(id);
    } else {
      bookmarksCtx.addBookmark(id);
    }
  }
// The useLayoutEffect hook is used to set the options for the navigation header when the component is mounted or when the dependencies (navigation, isBookmarked, newsItem) change. It sets the title of the header to the headline of the news item (or a default title if the news item is not found) and adds the HeaderBookmarkButton to the right side of the header, passing the current bookmark status and the toggle handler function as props.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: newsItem?.headline ?? "News Detail",
      headerRight: () => (
        <HeaderBookmarkButton
          isBookmarked={isBookmarked}
          onToggle={toggleBookmarkHandler}
        />
      ),
    });
  }, [navigation, isBookmarked, newsItem]);
// The main return statement of the NewsDetailScreen component renders a ScrollView that contains the image and details of the news item. It displays the news item's image at the top, followed by the headline, meta information (date, author, agency), and the description of the news item. The styles object is used to define the styling for these elements to create a visually appealing layout for the news detail screen.
  return (
    <ScrollView>
      <Image source={{ uri: newsItem.imageUrl }} style={styles.image} /> 

      <View style={styles.content}>
        <Text style={styles.headline}>{newsItem.headline}</Text>

        <Text style={styles.meta}>
          {newsItem.date} • {newsItem.author} • {newsItem.agency}
        </Text>

        <Text style={styles.description}>{newsItem.description}</Text>
      </View>
    </ScrollView>
  );
}
// The styles object defines the styling for the various elements in the news detail screen, such as the image, content container, headline, meta information, and description. This helps to create a visually appealing and organized layout for displaying the news details.
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
  },
  content: {
    padding: 16,
  },
  headline: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

// components/NewsItem.js
import React from "react"; // Import React to use JSX and create components
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native"; // Import necessary components from React Native. TouchableOpacity is used to create a pressable area for each news item, Image is used to display the news image, Text is used for displaying the headline and date/source information, View is used as a container for the image and text, and StyleSheet is used for defining styles for the components.

// The NewsItem component is responsible for rendering an individual news item in the list. It receives the news item data and a press handler function as props. The component displays the news image, headline, and date/source information. When the news item is pressed, it calls the onPress function passed as a prop to navigate to the news detail screen.

export default function NewsItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.newsItem} activeOpacity={0.7}>
      {/* 1. Add a fallback color so you can see if the image is loading */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.image} 
          resizeMode="cover" 
        />
      </View>

      <View style={styles.textContainer}>
        {/* 2. FIX: Change 'headline' to 'title' to match your dummy-news.js */}
        <Text style={styles.headline} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.date}>
  {new Date(item.date).toLocaleDateString()} • {item.source}
</Text>
      </View>
    </TouchableOpacity>
  );
}
// 3. Add some basic styles for the news item
const styles = StyleSheet.create({
  newsItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: 'black', // Added for iOS shadow support
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  imageContainer: {
    backgroundColor: '#e1e1e1', // Placeholder color while loading
    width: '100%',
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 10,
  },
  headline: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
});

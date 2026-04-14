// components/NewsList.js
import React from "react"; // Import React to use JSX and create components
import { FlatList, View, StyleSheet } from "react-native"; // Import necessary components from React Native. FlatList is used for rendering a scrollable list of news items, View is used as a container for the list, and StyleSheet is used for defining styles for the components.
import { NEWS } from "../data/dummy-news"; // Import the dummy news data, which is an array of news items. This data will be filtered and displayed based on the category or the provided list of items.
import NewsItem from "./NewsItem"; // Import the NewsItem component, which is responsible for rendering individual news items in the list. This component will be used in the renderNewsItem function to display each news item in the FlatList.

export default function NewsList({ category, items, navigation }) {
  // If a list of items is passed (e.g., Bookmarked screen)
  const dataToRender = items // If items prop is provided, use it; otherwise, filter NEWS by category
    ? items
    : NEWS.filter((item) => item.category === category);
// The renderNewsItem function is defined to render each news item in the list. It receives an object with an 'item' property, which represents the news item to be rendered. Inside this function, a pressHandler function is defined to handle the press event when a news item is selected. The pressHandler uses the navigation prop to navigate to the "NewsDetail" screen, passing the ID of the selected news item as a parameter. Finally, the NewsItem component is returned, which renders the individual news item and attaches the press handler to it.
  function renderNewsItem({ item }) { // This function is called for each news item to render it in the list. It receives an object with an 'item' property, which is the news item to display.
    function pressHandler() {
      navigation.navigate("NewsDetail", {
        id: item.id,
      });
    }
// The pressHandler function is defined to handle the press event when a news item is selected. It uses the navigation prop to navigate to the "NewsDetail" screen, passing the ID of the selected news item as a parameter. This allows the NewsDetail screen to retrieve and display the details of the selected news item based on its ID.
    return <NewsItem item={item} onPress={pressHandler} />; // This renders a NewsItem component for each news item, passing the item data and the press handler function as props.
  }
// The main return statement of the NewsList component renders a FlatList, which is a performant way to render a scrollable list of items in React Native. The FlatList takes the data to render (either the filtered NEWS or the provided items), a key extractor function to uniquely identify each item, and a renderItem function that defines how to render each item in the list.
  return (
    <View style={styles.container}>
      <FlatList
        data={dataToRender}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
      />
    </View>
  );
}
// The styles object defines some basic styling for the container of the news list. In this case, it just sets flex: 1 to make sure the container takes up the full available space.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

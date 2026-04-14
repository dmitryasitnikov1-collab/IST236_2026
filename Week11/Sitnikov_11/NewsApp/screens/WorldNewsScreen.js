// screens/WorldNewsScreen.js
import React from "react"; // Import React to use JSX and create components
import NewsList from "../components/NewsList"; // Import the NewsList component to render the list of world news items in the UI

// The WorldNewsScreen component is responsible for displaying the list of world news items. It uses the NewsList component and passes the category prop with the value "world" to filter the news items accordingly. It also passes the navigation prop to allow navigation to the news detail screen when a news item is selected.

export default function WorldNewsScreen({ navigation }) {
  return <NewsList category="world" navigation={navigation} />;
}

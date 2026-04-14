// screens/SportsNewsScreen.js
import React from "react"; // Import React to use JSX and create components
import NewsList from "../components/NewsList"; // Import the NewsList component to render the list of sports news items in the UI

// The SportsNewsScreen component is responsible for displaying the list of sports news items. It uses the NewsList component and passes the category prop with the value "sports" to filter the news items accordingly. It also passes the navigation prop to allow navigation to the news detail screen when a news item is selected.

export default function SportsNewsScreen({ navigation }) {
  return <NewsList category="sports" navigation={navigation} />;
}

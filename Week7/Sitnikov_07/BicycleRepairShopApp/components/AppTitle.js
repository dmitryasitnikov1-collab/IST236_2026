import React from 'react'; // Import React to use JSX and create components
import { Text, StyleSheet, View } from 'react-native'; // Import necessary components from React Native for building the UI

const AppTitle = ({ text }) => { // Define the AppTitle component, which takes in a text prop to display as the title of the app
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};
// Define styles for the AppTitle component using StyleSheet.create, which includes styles for the container and title text to create a visually appealing header for the app.
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
});
// Export the AppTitle component as the default export of this module, allowing it to be imported and used in other parts of the application, such as in the HomeScreen and OrderReviewScreen components for displaying the app title.
export default AppTitle;


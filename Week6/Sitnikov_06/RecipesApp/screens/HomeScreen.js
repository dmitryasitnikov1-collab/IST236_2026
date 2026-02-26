// Home screen displays the app title, a stock image, and a button to enter the recipes list
import { View, Text, Image, Button, StyleSheet } from 'react-native';
// HomeScreen component receives navigation prop to navigate to the Recipes screen when the button is pressed
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes App</Text>

      <Image
        source={require('../assets/images/recipes.jpg')} // Displays a stock image for the home screen
        style={styles.image}
      />

      <Button
        title="View Recipes" // Button to navigate to the Recipes screen
        onPress={() => navigation.navigate('Recipes')} // Navigates to the 'Recipes' screen when pressed
      />
    </View>
  );
}
// Styles for the HomeScreen component, including container layout, title font size, and image dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
});

// Modal screen that displays the full recipe details.
// Opens when user taps "View" on a recipe row
import { View, Text, Button, StyleSheet } from 'react-native';
// RecipeModal component receives route prop to access the recipe ID passed from the previous screen, navigation prop for screen transitions, and recipes array to find the specific recipe details. It displays the recipe title and text, and includes a button to navigate back to the previous screen.
export default function RecipeModal({ route, navigation, recipes }) {
  const { id } = route.params;
  const recipe = recipes.find((r) => r.id === id);
// The component renders the recipe title and text, and includes a "Back to Recipes" button that navigates back to the previous screen when pressed. The styles define the layout and appearance of the recipe details.
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>{recipe.title}</Text> 
      <Text style={styles.text}>{recipe.text}</Text>

      <Button
        title="Back to Recipes" // Button to navigate back to the previous screen
        onPress={() => navigation.goBack()} // Navigates back to the previous screen in the navigation stack
      />
    </View>
  );
}
// Styles for the RecipeModal component, including container padding and title and text font sizes
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 20 },
});

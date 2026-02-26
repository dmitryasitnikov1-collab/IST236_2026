// Displays the list of recipes using FlatList. 
// Each recipe row includes View + Delete buttons. 
// Also includes navigation to Add Recipe and Home screens.

import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import RecipeItem from '../components/RecipeItem';
// RecipesScreen component receives navigation prop for screen transitions, recipes array to display the list of recipes, and deleteRecipe function to handle recipe deletion
export default function RecipesScreen({ navigation, recipes, deleteRecipe }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id} // Uses the recipe ID as the key for each item in the FlatList
        renderItem={({ item }) => ( // Renders each recipe item using the RecipeItem component, passing the recipe object and functions for viewing and deleting the recipe
          <RecipeItem
            recipe={item} // Passes the recipe object to the RecipeItem component to display the recipe title and buttons
            onView={() => navigation.navigate('RecipeModal', { id: item.id })} // Navigates to the RecipeModal screen with the selected recipe ID when the "View" button is pressed
            onDelete={() => deleteRecipe(item.id)} // Calls the deleteRecipe function with the selected recipe ID when the "Delete" button is pressed
          />
        )}
      />

      <Button
        title="Add Recipe"
        onPress={() => navigation.navigate('AddRecipe')} // Navigates to the AddRecipe screen when the "Add Recipe" button is pressed
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')} // Navigates back to the Home screen when the "Home" button is pressed
        color="gray"
      />
    </View>
  );
}
// Styles for the RecipesScreen component, including container padding and header font size and alignment
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 26, marginBottom: 20, textAlign: 'center' },
});

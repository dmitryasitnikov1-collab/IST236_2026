// Represents a single recipe row inside the FlatList. 
// Shows the recipe title + View and Delete buttons.
import { View, Text, Button, StyleSheet } from 'react-native';
// RecipeItem component receives the recipe object, onView function to handle viewing the recipe details, and onDelete function to handle deleting the recipe. It displays the recipe title and includes buttons for viewing and deleting the recipe.
export default function RecipeItem({ recipe, onView, onDelete }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{recipe.title}</Text>

      <Button title="View" onPress={onView} />
      <Button title="Delete" onPress={onDelete} color="red" />
    </View>
  );
}
// Styles for the RecipeItem component, including row layout and title font size
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
});

// Screen for entering a new recipe.
// Contains two text inputs and Save/Cancel buttons.
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// AddRecipeScreen component receives navigation prop for screen transitions and addRecipe function to handle adding a new recipe to the list. It uses local state to manage the input values for the recipe title and text, and provides buttons to save the new recipe or cancel and go back to the previous screen.
export default function AddRecipeScreen({ navigation, addRecipe }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
// The component renders a form with two TextInput fields for the recipe title and text, and two buttons: "Save" to add the new recipe and navigate back, and "Cancel" to simply navigate back without saving. The styles define the layout and appearance of the form elements.
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Recipe Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Recipe Text"
        style={[styles.input, styles.textArea]}
        value={text}
        onChangeText={setText}
        multiline
      />

      <Button
        title="Save"
        onPress={() => {
          addRecipe(title, text);
          navigation.goBack();
        }}
      />

      <Button
        title="Cancel"
        onPress={() => navigation.goBack()}
        color="gray"
      />
    </View>
  );
}
// Styles for the AddRecipeScreen component, including container padding and input field styling
const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 120,
  },
});

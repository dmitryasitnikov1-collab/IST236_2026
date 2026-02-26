// App.js manages global state (recipes array) and navigation for the entire app.
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Provides navigation context to the app
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Creates a stack navigator for screen transitions

import HomeScreen from './screens/HomeScreen'; // Home screen with navigation options
import RecipesScreen from './screens/RecipesScreen';  // Screen that lists all recipes and allows deletion
import AddRecipeScreen from './screens/AddRecipeScreen'; // Screen with form to add new recipes, calls addRecipe function from App.js
import RecipeModal from './screens/RecipeModal'; // Modal screen that shows recipe details, receives recipes array to find the selected recipe by ID

// Stack navigator to manage screen transitions
const Stack = createNativeStackNavigator();
// App component manages the recipes state and provides navigation between screens
export default function App() {
  const [recipes, setRecipes] = useState([]);
// Function to add a new recipe to the recipes state
  const addRecipe = (title, text) => { // Creates a new recipe object with a unique ID, title, and text, and updates the recipes state by adding the new recipe to the existing array
    const newRecipe = {
      id: Date.now().toString(), // Generates a unique ID for the new recipe using the current timestamp
      title,
      text,
    };
    setRecipes([...recipes, newRecipe]); // Updates the recipes state by creating a new array that includes all existing recipes and the new recipe
  };
// Function to delete a recipe from the recipes state by filtering out the recipe with the matching ID
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((item) => item.id !== id));
  };
// Navigation container wraps the stack navigator, which defines the different screens and their components. The addRecipe and deleteRecipe functions are passed down to the respective screens as props for managing the recipes state. The RecipeModal screen receives the entire recipes array to find and display the details of the selected recipe based on its ID.
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} /> 

        <Stack.Screen name="Recipes"> 
          {(props) => (
            <RecipesScreen
              {...props}
              recipes={recipes} // Passes the recipes array and deleteRecipe function as props to the RecipesScreen component to manage the list of recipes and handle deletion
              deleteRecipe={deleteRecipe} // Passes the recipes array and deleteRecipe function as props to the RecipesScreen component to manage the list of recipes and handle deletion
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddRecipe">
          {(props) => (
            <AddRecipeScreen
              {...props} // Passes the addRecipe function as a prop to the AddRecipeScreen component to handle adding new recipes to the list
              addRecipe={addRecipe} // Passes the addRecipe function as a prop to the AddRecipeScreen component to handle adding new recipes to the list
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="RecipeModal"
          options={{ presentation: 'modal', title: 'Recipe Details' }} // Configures the RecipeModal screen to be presented as a modal with a custom title
        >
          {(props) => (
            <RecipeModal
              {...props} // Passes the recipes array as a prop to the RecipeModal component to find and display the details of the selected recipe based on its ID
              recipes={recipes} // Passes the recipes array as a prop to the RecipeModal component to find and display the details of the selected recipe based on its ID
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


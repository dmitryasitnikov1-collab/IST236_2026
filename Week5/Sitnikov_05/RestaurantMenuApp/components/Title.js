// Title.js defines the Title component, which is a styled text component used for displaying titles throughout the application. It uses a custom font and color defined in the Colors constants for consistent styling.
import { Text, StyleSheet } from 'react-native';
// Title component serves as a reusable styled text component for displaying titles in the app, using a custom font and primary color.
import Colors from '../constants/Colors';
// Title component serves as a reusable styled text component for displaying titles in the app, using a custom font and primary color.
export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({ // Styles for the Title component, defining font size, family, color, and spacing.
  title: {
    fontSize: 28,
    fontFamily: 'OliveGarden',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 20,
  },
});

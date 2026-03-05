import React from 'react'; // Import React to use JSX and create components
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Import necessary components from React Native for building the UI

const NavButton = ({ label, onPress, variant = 'primary' }) => { // Define the NavButton component, which takes in a label for the button text, an onPress function to handle button presses, and an optional variant prop to determine the button style (primary or secondary)
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
// Define styles for the NavButton component using StyleSheet.create, which includes styles for the primary button, secondary button, and label text to create visually distinct buttons for navigation within the app.
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 10,
  },
  secondaryButton: {
    backgroundColor: '#0984e3',
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#fff',
  },
});
// Export the NavButton component as the default export of this module, allowing it to be imported and used in other parts of the application, such as in the HomeScreen and OrderReviewScreen components for navigation between screens.
export default NavButton;


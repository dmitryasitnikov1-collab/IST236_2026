import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Importing necessary components from React Native to create a touchable button with text and styles. 
// The PrimaryButton component is a reusable button component that takes in a title and an onPress function as props. It renders a TouchableOpacity with the specified styles and displays the title text. 
// When the button is pressed, it calls the onPress function passed as a prop, allowing for customizable behavior when the button is interacted with.
export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}> 
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
// The styles object defines the styling for the button and text. 
// The button has a blue background, padding, rounded corners, and a margin at the top. The text is styled to be white, with a specific font size and weight to make it stand out on the button.
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

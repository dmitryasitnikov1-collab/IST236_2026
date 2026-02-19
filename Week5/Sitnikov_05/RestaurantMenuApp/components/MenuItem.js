// MenuItem.js defines the MenuItem component, which is used to display individual menu items in the MenuScreen. Each menu item includes an image, name, and price, styled to fit the overall design of the app.
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
// MenuItem component represents a single menu item in the FlatList on the MenuScreen, displaying an image, name, and price.
export default function MenuItem({ name, price, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}
// Styles for the MenuItem component, defining layout and appearance of the menu item card.
const styles = StyleSheet.create({
  container: { // Style for the menu item container, arranging image and info side by side with background color and spacing.
    flexDirection: 'row',
    backgroundColor: Colors.secondary,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { // Style for the menu item image, setting fixed dimensions.
    width: 100,
    height: 100,
  },
  info: { // Style for the info section of the menu item, providing padding and centering content vertically.
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: { // Style for the menu item name, using a larger font size and custom font family.
    fontSize: 18,
    fontFamily: 'OliveGarden',
    color: Colors.textDark,
  },
  price: {  // Style for the menu item price, using a smaller font size and accent color.
    fontSize: 16,
    color: Colors.accent,
    marginTop: 5,
  },
});

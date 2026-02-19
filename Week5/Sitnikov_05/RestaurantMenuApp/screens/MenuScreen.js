import { View, FlatList, Button, StyleSheet } from 'react-native';
import MenuItem from '../components/MenuItem';
import Title from '../components/Title';
import Colors from '../constants/Colors';

// Static menu data for the FlatList. 
// Each item includes an id, name, price, and local image reference.
const MENU_DATA = [
  { id: '1', name: 'Chicken Alfredo', price: '16.99', image: require('../assets/images/menu/item1.jpg') },
  { id: '2', name: 'Lasagna Classico', price: '14.99', image: require('../assets/images/menu/item2.jpg') },
  { id: '3', name: 'Shrimp Scampi', price: '17.49', image: require('../assets/images/menu/item3.jpg') },
  { id: '4', name: 'Tour of Italy', price: '19.99', image: require('../assets/images/menu/item4.jpg') },
  { id: '5', name: 'Fettuccine Alfredo', price: '13.99', image: require('../assets/images/menu/item5.jpg') },
];
// MenuScreen component displays the restaurant's menu using a FlatList.
export default function MenuScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Title>Our Menu</Title> 

      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem name={item.name} price={item.price} image={item.image} /> 
        )}
      />

      <View style={styles.button}> 
        <Button
          title="Back to Home"
          color={Colors.primary}
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}
// Styles for the MenuScreen component, defining layout and spacing.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill entire screen
    padding: 20, // Add padding around content
  },
  button: {
    marginTop: 20, // Space above the button
  },
});

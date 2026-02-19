import { View, Text, Image, StyleSheet, Linking, Button } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/Colors';
// HomeScreen component serves as the main landing page for the app, providing restaurant info and navigation to the menu.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title>Olive Garden</Title>
      
      <Image source={require('../assets/images/restaurant.jpg')} style={styles.image} />

      <Text style={styles.link} onPress={() => Linking.openURL('tel:8435551234')}>
        📞 (843) 555-1234
      </Text>
    
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://maps.google.com/?q=Olive Garden Myrtle Beach')}
      >
        📍 123 Pasta Lane, Myrtle Beach, SC
      </Text>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://www.olivegarden.com')}
      >
        🌐 www.olivegarden.com
      </Text>

      <View style={styles.button}> 
        <Button
          title="View Menu"
          color={Colors.primary}
          onPress={() => navigation.navigate('Menu')} // Navigate to the Menu screen when pressed
        />
      </View>
    </View>
  );
}
// Styles for the HomeScreen component, defining layout and spacing.
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center', // Center content horizontally
  },
  image: { // Style for the restaurant image, making it full width with a fixed height and rounded corners.
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginVertical: 20,
  },
  link: {
    fontSize: 16,
    color: Colors.primary, // Use primary color for links
    marginVertical: 5,
  },
  button: {
    marginTop: 30, // Space above the button
    width: '60%',
  },
});

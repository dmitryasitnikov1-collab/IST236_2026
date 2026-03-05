import React from 'react'; // Import React to use JSX and create components
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
} from 'react-native'; // Import necessary components from React Native for building the UI
import { RadioButton, Checkbox, Switch } from 'react-native-paper'; // Import UI components from react-native-paper for radio buttons, checkboxes, and switches
import AppTitle from '../components/AppTitle'; // Import a custom component for displaying the app title
import NavButton from '../components/NavButton'; // Import a custom component for navigation buttons
// Define the HomeScreen component, which receives various props for managing the state of the service time, selected options, newsletter signup, rental membership, and order submission. It also receives the available service times and options as props to display them in the UI.
const HomeScreen = ({
  serviceTimeId,
  setServiceTimeId,
  selectedOptions,
  toggleOption,
  newsletter,
  setNewsletter,
  rentalMembership,
  setRentalMembership,
  onSubmitOrder,
  serviceTimes,
  serviceOptions,
}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bike_home_bg.jpg')} // Set the background image for the home screen using an image from the assets folder
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>  
        <ScrollView contentContainerStyle={styles.content}>
          <AppTitle text="Bicycle Repair Shop" />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Service Time</Text>
            <RadioButton.Group
              onValueChange={(value) => setServiceTimeId(value)}
              value={serviceTimeId}
            >
              {serviceTimes.map((time) => (
                <View key={time.id} style={styles.row}>
                  <RadioButton value={time.id} color="#00b894" />
                  <Text style={styles.optionText}>{time.label}</Text>
                </View>
              ))}
            </RadioButton.Group>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Service Options</Text>
            {serviceOptions.map((opt) => (
              <View key={opt.id} style={styles.row}>
                <Checkbox
                  status={
                    selectedOptions.includes(opt.id) ? 'checked' : 'unchecked'
                  }
                  onPress={() => toggleOption(opt.id)}
                  color="#00b894"
                />
                <Text style={styles.optionText}>
                  {opt.label} (${opt.price})
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Extras</Text>

            <View style={styles.row}>
              <Text style={styles.optionText}>Newsletter Signup ($0)</Text>
              <Switch
                value={newsletter}
                onValueChange={setNewsletter}
                color="#00b894"
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.optionText}>
                Rental Membership Signup ($100)
              </Text>
              <Switch
                value={rentalMembership}
                onValueChange={setRentalMembership}
                color="#00b894"
              />
            </View>
          </View>

          <NavButton label="Submit Order" onPress={onSubmitOrder} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
// Define styles for the HomeScreen component using StyleSheet.create, which includes styles for the background image, overlay, content container, sections, section titles, rows, and option text to create a visually appealing and organized layout for the home screen of the app.
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  section: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  optionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    flexShrink: 1,
  },
});
// Export the HomeScreen component as the default export of this module, allowing it to be imported and used in other parts of the application, such as in the main App component for navigation.
export default HomeScreen;

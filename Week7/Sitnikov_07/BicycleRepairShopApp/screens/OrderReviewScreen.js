import React from 'react'; // Import React to use JSX and create components
import { View, StyleSheet, Text, ScrollView } from 'react-native'; // Import necessary components from React Native
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient for background styling
import AppTitle from '../components/AppTitle';  // Import the NavButton component for navigation
import NavButton from '../components/NavButton'; // Define the OrderReviewScreen component, which takes in a summary of the order and a function to return home

const OrderReviewScreen = ({ summary, onReturnHome }) => { // If no summary is provided, show a message and a button to return home
  if (!summary) {
    return (
      <LinearGradient
        colors={['#2d3436', '#000000']}
        style={styles.gradient}
      >
        <View style={styles.center}>
          <Text style={styles.infoText}>No order to review.</Text>
          <NavButton label="Return Home" onPress={onReturnHome} />
        </View>
      </LinearGradient>
    );
  }
// If a summary is provided, display the order details in a scrollable view with a gradient background
  return (
    <LinearGradient
      colors={['#00b894', '#031624']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <AppTitle text="Order Review" />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Service Time</Text>
          <Text style={styles.itemText}>
            {summary.serviceTime.label} — ${summary.serviceTime.price}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Selected Services</Text>
          {summary.services.length === 0 ? (
            <Text style={styles.itemText}>No additional services selected.</Text>
          ) : (
            summary.services.map((s) => (
              <Text key={s.id} style={styles.itemText}>
                {s.label} — ${s.price}
              </Text>
            ))
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Extras</Text>
          <Text style={styles.itemText}>
            Newsletter Signup: {summary.newsletter ? 'Yes ($0)' : 'No'}
          </Text>
          <Text style={styles.itemText}>
            Rental Membership:{' '}
            {summary.rentalMembership ? 'Yes ($100)' : 'No'}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Totals</Text>
          <Text style={styles.itemText}>
            Subtotal: ${summary.subtotal.toFixed(2)}
          </Text>
          <Text style={styles.itemText}>
            Sales Tax (6%): ${summary.tax.toFixed(2)}
          </Text>
          <Text style={styles.totalText}>
            Final Total: ${summary.total.toFixed(2)}
          </Text>
        </View>

        <NavButton
          label="Return Home"
          onPress={onReturnHome}
          variant="secondary"
        />
      </ScrollView>
    </LinearGradient>
  );
};
// Define styles for the OrderReviewScreen component using StyleSheet.create, which includes styles for the gradient background, content container, cards, section titles, item text, total text, and center alignment for the case when no order summary is available.
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 6,
  },
  itemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    marginVertical: 2,
  },
  totalText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
    marginTop: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
});
// Export the OrderReviewScreen component as the default export of this module, allowing it to be imported and used in other parts of the application, such as in the main App component for navigation.
export default OrderReviewScreen;

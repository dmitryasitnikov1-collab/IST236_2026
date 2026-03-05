import React, { useState, useCallback } from 'react'; // Import necessary hooks from React
import { View, ActivityIndicator } from 'react-native'; // Import necessary components from React Native
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer for navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import createNativeStackNavigator for stack navigation
import { Provider as PaperProvider } from 'react-native-paper'; // Import Provider from react-native-paper for theming and UI components
import { useFonts } from 'expo-font'; // Import useFonts hook from expo-font for loading custom fonts
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen from expo-splash-screen to manage the splash screen
// Import custom components and screens
import HomeScreen from './screens/HomeScreen'; // Import the HomeScreen component for the main screen of the app
import OrderReviewScreen from './screens/OrderReviewScreen'; // Import the OrderReviewScreen component for reviewing the order before submission
// Prevent the splash screen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync();
// Create a stack navigator for managing screen transitions
const Stack = createNativeStackNavigator();
// Define constants for service times, service options, and tax rate
const SERVICE_TIMES = [
  { id: 'standard', label: 'Standard (0$)', price: 0 },
  { id: 'expedited', label: 'Expedited (50$)', price: 50 },
  { id: 'nextday', label: 'Next Day (100$)', price: 100 },
];
// Define constants for service options, each with an id, label, and price
const SERVICE_OPTIONS = [
  { id: 'basic', label: 'Basic Tune-Up', price: 50 },
  { id: 'comprehensive', label: 'Comprehensive Tune-Up', price: 75 },
  { id: 'flat', label: 'Flat Tire Repair', price: 20 },
  { id: 'brake', label: 'Brake Servicing', price: 50 },
  { id: 'gear', label: 'Gear Servicing', price: 40 },
  { id: 'chain', label: 'Chain Servicing', price: 15 },
  { id: 'frame', label: 'Frame Repair', price: 35 },
  { id: 'safety', label: 'Safety Check', price: 25 },
  { id: 'accessory', label: 'Accessory Install', price: 10 },
];
// Define a constant for the tax rate to be applied to the order total
const TAX_RATE = 0.06;
// Define the main App component, which manages the overall state and navigation of the application
export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const [serviceTimeId, setServiceTimeId] = useState('standard'); // State to track the selected service time, initialized to 'standard'
  const [selectedOptions, setSelectedOptions] = useState([]); // State to track the selected service options, initialized to an empty array
  const [newsletter, setNewsletter] = useState(false); // State to track whether the user has signed up for the newsletter, initialized to false
  const [rentalMembership, setRentalMembership] = useState(false); // State to track whether the user has opted for a rental membership, initialized to false
  const [orderSummary, setOrderSummary] = useState(null);
// State to hold the summary of the order, initialized to null until an order is calculated and submitted
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
// Callback function to hide the splash screen once the fonts are loaded, ensuring that the app is fully ready before displaying the main content
  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
        onLayout={onLayoutRootView}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
// If the fonts are not yet loaded, display a loading indicator centered on a black background, and call the onLayoutRootView function to check for font loading status
  const toggleOption = (id) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
// Function to toggle the selection of a service option by adding or removing its id from the selectedOptions state array
  const calculateOrder = () => {
    const timeChoice = SERVICE_TIMES.find((t) => t.id === serviceTimeId);
    const selectedServiceObjects = SERVICE_OPTIONS.filter((opt) =>
      selectedOptions.includes(opt.id)
    );
// Function to calculate the order summary based on the selected service time, options, newsletter signup, and rental membership. It computes the subtotal, tax, and total cost of the order.
    const timeCost = timeChoice ? timeChoice.price : 0;
    const servicesCost = selectedServiceObjects.reduce(
      (sum, s) => sum + s.price,
      0
    );
    const newsletterCost = 0;
    const rentalCost = rentalMembership ? 100 : 0;
// Calculate the subtotal by summing the costs of the selected service time, options, newsletter (which is free), and rental membership (if selected). Then calculate the tax based on the subtotal and the defined tax rate, and finally calculate the total by adding the tax to the subtotal.
    const subtotal = timeCost + servicesCost + newsletterCost + rentalCost;
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);
// Return an object containing all the relevant information about the order, including the selected service time, services, extras, and the calculated costs.
    return {
      serviceTime: timeChoice,
      services: selectedServiceObjects,
      newsletter,
      rentalMembership,
      subtotal,
      tax,
      total,
    };
  };
// Function to handle the submission of the order, which calculates the order summary and navigates to the OrderReview screen, passing the summary as a parameter
  const handleSubmitOrder = (navigation) => {
    const summary = calculateOrder();
    setOrderSummary(summary);
    navigation.navigate('OrderReview', { summary });
  };
// Function to handle returning to the home screen, which resets all the relevant state variables to their initial values and navigates back to the Home screen
  const handleReturnHome = (navigation) => {
    setServiceTimeId('standard');
    setSelectedOptions([]);
    setNewsletter(false);
    setRentalMembership(false);
    setOrderSummary(null);
    navigation.navigate('Home');
  };
// The main return statement of the App component, which sets up the navigation structure of the app using a Stack Navigator. It defines two screens: Home and OrderReview, and passes the necessary props to each screen for managing state and handling user interactions.
  return (
    <PaperProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home">
              {(props) => (
                <HomeScreen
                  {...props}
                  serviceTimeId={serviceTimeId}
                  setServiceTimeId={setServiceTimeId}
                  selectedOptions={selectedOptions}
                  toggleOption={toggleOption}
                  newsletter={newsletter}
                  setNewsletter={setNewsletter}
                  rentalMembership={rentalMembership}
                  setRentalMembership={setRentalMembership}
                  onSubmitOrder={() => handleSubmitOrder(props.navigation)}
                  serviceTimes={SERVICE_TIMES}
                  serviceOptions={SERVICE_OPTIONS}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="OrderReview">
              {(props) => (
                <OrderReviewScreen
                  {...props}
                  summary={orderSummary || props.route.params?.summary}
                  onReturnHome={() => handleReturnHome(props.navigation)}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}


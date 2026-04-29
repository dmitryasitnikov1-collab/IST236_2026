import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
// The HomeScreen component serves as the landing page of the app. 
// It features a visually appealing design with a linear gradient background and a card that contains the app's title, a subtitle, and a button to start a focus session.
  return (
    <LinearGradient
      colors={['#4A90E2', '#6EC6FF']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>FocusFlow</Text>
        <Text style={styles.subtitle}>Your productivity starts here.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Session')}
        >
          <Text style={styles.buttonText}>Start Focus Session</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
// The styles object defines the styling for the container, card, title, subtitle, and button.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});


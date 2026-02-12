import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MovieItem from './components/MovieItem'; // Custom component for each movie row
// Array of movie data used by the FlatList
const movies = [
  {
    id: '1',
    title: 'The Matrix',
    rating: 9.5,
    poster: require('./assets/matrix.jpg'),
  },
  {
    id: '2',
    title: 'The Fifth Element',
    rating: 9.0,
    poster: require('./assets/fifth_element.jpg'),
  },
  {
    id: '3',
    title: 'Avengers',
    rating: 8.8,
    poster: require('./assets/avengers.jpg'),
  },
  {
    id: '4',
    title: 'Interstellar',
    rating: 9.7,
    poster: require('./assets/interstellar.jpg'),
  },
  {
    id: '5',
    title: 'Taxi',
    rating: 8.2,
    poster: require('./assets/taxi.jpg'),
  },
  {
    id: '6',
    title: 'Asterix and Obelix: Mission Cleopatra',
    rating: 8.9,
    poster: require('./assets/asterix_and_obelix.jpg'),
  },
  {
    id: '7',
    title: 'Blade',
    rating: 8.4,
    poster: require('./assets/blade.jpg'),
  },
  {
    id: '8',
    title: 'Night Watch',
    rating: 8.6,
    poster: require('./assets/night_watch.jpg'),
  },
  {
    id: '9',
    title: 'Day Watch',
    rating: 8.3,
    poster: require('./assets/day_watch.jpg'),
  },
  {
    id: '10',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    rating: 9.8,
    poster: require('./assets/lotr_fellowship.jpg'),
  },
];
/*Add item button container*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Top Ten Movies</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieItem
            title={item.title}
            rating={item.rating}
            poster={item.poster}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}
// Basic styling for layout and header
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});





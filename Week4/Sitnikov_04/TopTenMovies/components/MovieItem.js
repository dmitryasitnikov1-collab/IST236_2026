import { View, Text, Image, StyleSheet } from 'react-native';
// Reusable component for displaying a single movie item in the list
export default function MovieItem({ title, rating, poster }) {
  return (
    <View style={styles.container}>
      <Image source={poster} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>
      </View>
    </View>
  );
}
// Styling for the movie item layout
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Poster on the left, text on the right
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center', // Vertically centers the text next to the poster
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 4,
    fontSize: 16,
  },
});


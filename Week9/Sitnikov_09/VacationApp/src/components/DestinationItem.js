// src/components/DestinationItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function DestinationItem({ destination, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <Image source={{ uri: destination.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{destination.name}</Text>
        <Text style={styles.detail}>Avg Cost: {destination.avgCost}</Text>
        <Text style={styles.detail}>Founded: {destination.foundedYear}</Text>
        <Text style={styles.detail}>
          Rating: {destination.rating.toFixed(1)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  pressed: {
    opacity: 0.8,
  },
  image: {
    width: 110,
    height: 110,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#0b1b2b',
  },
  detail: {
    fontFamily: 'open-sans',
    fontSize: 13,
    color: '#444',
  },
});

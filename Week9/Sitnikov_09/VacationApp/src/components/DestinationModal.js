// src/components/DestinationModal.js
import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function DestinationModal({ visible, destination, onClose }) {
  if (!destination) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: destination.imageUrl }}
            style={styles.image}
          />
          <Text style={styles.name}>{destination.name}</Text>
          <Text style={styles.description}>{destination.description}</Text>
          <Text style={styles.meta}>
            Avg Cost: {destination.avgCost} | Founded:{' '}
            {destination.foundedYear}
          </Text>
          <Text style={styles.meta}>
            Rating: {destination.rating.toFixed(1)}
          </Text>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginBottom: 6,
    color: '#0b1b2b',
    textAlign: 'center',
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  meta: {
    fontFamily: 'open-sans',
    fontSize: 13,
    color: '#555',
  },
  button: {
    marginTop: 14,
    backgroundColor: '#0b1b2b',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    fontSize: 14,
  },
});

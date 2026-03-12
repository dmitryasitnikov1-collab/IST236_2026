import React from 'react'; // Added React import
import { View, Text, StyleSheet } from 'react-native'; // Added View, Text, and StyleSheet imports

export default function TitleBar({ title }) { // Added TitleBar component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ // Added styles for TitleBar
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
});

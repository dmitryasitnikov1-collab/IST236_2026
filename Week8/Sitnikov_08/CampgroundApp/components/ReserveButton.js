import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ReserveButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffb703',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  label: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: '#023047',
  },
});

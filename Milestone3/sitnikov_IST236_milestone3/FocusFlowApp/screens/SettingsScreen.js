import { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function SettingsScreen() {
  const { defaultTimer, setDefaultTimer } = useContext(AppContext);
  const [value, setValue] = useState(defaultTimer.toString());
// The SettingsScreen component allows users to configure the default timer duration for their focus sessions.
  function save() {
    const minutes = parseInt(value);
    if (!isNaN(minutes) && minutes > 0) {
      setDefaultTimer(minutes);
    }
  }
// The component returns a View containing a header, a label and TextInput for the default timer setting, and a button to save the changes.
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <Text style={styles.label}>Default Timer (minutes)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
// The styles object defines the styling for the container, header, label, input, and button.
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, fontSize: 16, marginBottom: 20
  },
  button: {
    backgroundColor: '#4A90E2', padding: 14, borderRadius: 10, alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});

import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function HistoryScreen() {
  const { sessions, tasks, deleteSession } = useContext(AppContext);

  function getTaskName(id) {
    const t = tasks.find((x) => x.id === id);
    return t ? t.title : "No Task";
  }
// The confirmDelete function shows an alert dialog to confirm the deletion of a session. 
// If the user confirms, it calls the deleteSession function from the context to remove the session from the history.
  function confirmDelete(id) {
    Alert.alert(
      "Delete Session",
      "Are you sure you want to delete this session?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteSession(id) }
      ]
    );
  }
// The component returns a View containing a header, a hint text, and a FlatList that renders each session in the history. 
// Each session item is a TouchableOpacity that allows the user to long-press to trigger the delete confirmation. 
// The session details include the associated task name, duration, and date.
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Session History</Text>

      <Text style={styles.hint}>Long‑press a session to delete it</Text>

      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => confirmDelete(item.id)}
            style={styles.item}
          >
            <Text style={styles.title}>{getTaskName(item.taskId)}</Text>
            <Text style={styles.details}>
              {item.duration} min — {new Date(item.date).toLocaleString()}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
// The styles object defines the styling for the container, header, session items, and hint text.
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  item: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: '600' },
  details: { fontSize: 14, color: '#666', marginTop: 4 },

  hint: {
  fontSize: 14,
  color: '#777',
  marginBottom: 10,
  textAlign: 'center',
},

});

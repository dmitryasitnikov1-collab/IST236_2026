import { View, Text, FlatList, StyleSheet } from 'react-native'; // The TasksScreen component is a screen that displays a list of tasks.
// The TasksScreen component is a screen that displays a list of tasks.
const SAMPLE_TASKS = [
  { id: '1', title: 'Finish homework' },
  { id: '2', title: 'Study React Native' },
  { id: '3', title: 'Plan weekly goals' },
  { id: '4', title: 'Read 20 minutes' },
];
// The TasksScreen component is a screen that displays a list of tasks. 
// It uses a FlatList to render the tasks from the SAMPLE_TASKS array, showing each task's title in a styled view. 
// This screen is designed to provide users with a simple interface to view their tasks and can be expanded in the future to include functionality for adding, editing, or deleting tasks.
export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>

      <FlatList
        data={SAMPLE_TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}
// The styles object defines the styling for the TasksScreen component, including the layout and appearance of the container, header, task items, and task text.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  taskItem: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  taskText: {
    fontSize: 18,
  },
});


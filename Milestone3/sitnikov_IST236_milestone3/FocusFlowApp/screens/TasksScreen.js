import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function TasksScreen() {
  const { tasks, addTask, deleteTask } = useContext(AppContext);
  const [taskText, setTaskText] = useState('');
// The TasksScreen component allows users to manage their focus tasks. 
// It uses the AppContext to access the list of tasks and the functions to add and delete tasks. 
// The component maintains a local state taskText to handle the input for new tasks.
  function handleAddTask() {
    if (taskText.trim().length === 0) return;
    addTask(taskText);
    setTaskText('');
  }
// The component returns a View containing a header, an input row for adding new tasks, and a FlatList that renders the list of existing tasks.
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks</Text>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          value={taskText}
          onChangeText={setTaskText}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => deleteTask(item.id)}
            style={styles.taskItem}
          >
            <Text style={styles.taskText}>{item.title}</Text>
            <Text style={styles.deleteHint}>Long press to delete</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
// The styles object defines the styling for the container, header, input row, task items, and delete hint text.
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

  // Input Row
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },

  // Task Item
  taskItem: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  taskText: {
    fontSize: 18,
    fontWeight: '500',
  },
  deleteHint: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});



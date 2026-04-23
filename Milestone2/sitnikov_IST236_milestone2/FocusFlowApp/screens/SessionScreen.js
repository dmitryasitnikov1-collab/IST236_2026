import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// The SessionScreen component is a screen that simulates a focus session. 
// It includes a mock timer display, buttons to start, pause, and end the session, and a section to display session information such as the selected task and session status. 
// This screen is designed to provide users with a visual representation of their focus sessions and allow them to interact with the session controls.
export default function SessionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Focus Session</Text>

      {/* Mock Timer Display */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>25:00</Text>
        <Text style={styles.timerLabel}>Pomodoro Timer</Text>
      </View>

      {/* Mock Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.startButton]}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.pauseButton]}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.endButton]}>
          <Text style={styles.buttonText}>End</Text>
        </TouchableOpacity>
      </View>

      {/* Mock Session Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Selected Task: None</Text>
        <Text style={styles.infoText}>Session Status: Idle</Text>
      </View>
    </View>
  );
}
// The styles object defines the styling for the SessionScreen component, including the layout and appearance of the container, header, timer display, buttons, and session information box.
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
    textAlign: 'center',
    marginBottom: 30,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  timerLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  pauseButton: {
    backgroundColor: '#FFC107',
  },
  endButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoBox: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 6,
  },
});


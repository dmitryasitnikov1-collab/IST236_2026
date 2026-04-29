import { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../context/AppContext';

export default function SessionScreen() {
  const { addSession, tasks, defaultTimer } = useContext(AppContext);

  const TIMER_OPTIONS = [
    { label: "25m", value: 25 * 60 },
    { label: "10m", value: 10 * 60 },
    { label: "5m", value: 5 * 60 },
    { label: "5s", value: 5 },
  ];
// The component manages several pieces of state: selectedTime, timeLeft, isRunning, and selectedTask. 
// selectedTime holds the total duration of the timer in seconds, initialized to the default timer value from the context. 
// timeLeft tracks the remaining time on the timer, also initialized to the default timer value. 
// isRunning is a boolean that indicates whether the timer is currently active. 
// selectedTask holds the ID of the task associated with the current session, allowing users to link their focus sessions to specific tasks.
  const [selectedTime, setSelectedTime] = useState(defaultTimer * 60);
  const [timeLeft, setTimeLeft] = useState(defaultTimer * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
// The intervalRef is a ref that holds the reference to the timer interval, allowing us to clear it when needed to prevent memory leaks and ensure proper timer behavior.
  const intervalRef = useRef(null);
// The formatTime function converts the time left in seconds into a MM:SS format for display on the timer.
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
// The handleStart, handlePause, and handleReset functions control the timer's behavior. 
// handleStart sets isRunning to true, starting the timer. 
// handlePause sets isRunning to false, pausing the timer. 
// handleReset stops the timer and resets timeLeft to the selectedTime.
  function handleStart() {
    if (!isRunning) setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(selectedTime);
  }

  function handleSelectTime(value) {
    setIsRunning(false);
    setSelectedTime(value);
    setTimeLeft(value);
  }

  // Countdown logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Save session when timer hits 0
  useEffect(() => {
    if (timeLeft === 0) {
      let minutes = Math.round(selectedTime / 60);

      // FIX #1 — Prevent 0-minute sessions
      if (minutes < 1) minutes = 1;

      // FIX #2 — Save taskId correctly
      addSession(minutes, selectedTask);
    }
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Focus Session</Text>

      {/* Task Selector */}
      <View style={styles.taskSelector}>
        <Text style={styles.taskLabel}>Task - (choose a task):</Text>
        <Picker
          selectedValue={selectedTask}
          onValueChange={(val) => setSelectedTask(val)}
          style={styles.picker}
        >
          <Picker.Item label="None" value={null} />
          {tasks.map((t) => (
            <Picker.Item key={t.id} label={t.title} value={t.id} />
          ))}
        </Picker>
      </View>

      {/* Timer Options */}
      <View style={styles.optionsRow}>
        {TIMER_OPTIONS.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={[
              styles.optionButton,
              selectedTime === opt.value && styles.optionSelected
            ]}
            onPress={() => handleSelectTime(opt.value)}
          >
            <Text
              style={[
                styles.optionText,
                selectedTime === opt.value && styles.optionTextSelected
              ]}
            >
              {opt.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Input */}
      <View style={styles.customInputRow}>
        <TextInput
          style={styles.customInput}
          placeholder="Custom (min)"
          keyboardType="numeric"
          onChangeText={(val) => {
            const minutes = parseInt(val);
            if (!isNaN(minutes) && minutes > 0) {
              handleSelectTime(minutes * 60);
            }
          }}
        />
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        <Text style={styles.timerLabel}>Pomodoro Timer</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.startButton]} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.pauseButton]} onPress={handlePause}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.endButton]} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Selected Task: {selectedTask ? tasks.find(t => t.id === selectedTask)?.title : "None"}
        </Text>
        <Text style={styles.infoText}>
          Session Status: {isRunning ? 'Running' : timeLeft === selectedTime ? 'Idle' : 'Paused'}
        </Text>
      </View>
    </View>
  );
}
// The styles object defines the styling for the container, header, task selector, timer options, custom input, timer display, buttons, and info box.
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 20, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  taskSelector: { marginBottom: 20 },
  taskLabel: { fontSize: 16, marginBottom: 6 },
  picker: { backgroundColor: '#eee', borderRadius: 8 },
  optionsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  optionButton: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8, backgroundColor: '#eee' },
  optionSelected: { backgroundColor: '#4A90E2' },
  optionText: { fontSize: 16, color: '#333' },
  optionTextSelected: { color: '#fff', fontWeight: '600' },
  customInputRow: { alignItems: 'center', marginBottom: 20 },
  customInput: {
    width: 120, paddingVertical: 8, paddingHorizontal: 12,
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    textAlign: 'center', fontSize: 16
  },
  timerContainer: { alignItems: 'center', marginBottom: 40 },
  timerText: { fontSize: 72, fontWeight: 'bold' },
  timerLabel: { fontSize: 16, color: '#666', marginTop: 8 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  button: { flex: 1, paddingVertical: 14, marginHorizontal: 5, borderRadius: 10, alignItems: 'center' },
  startButton: { backgroundColor: '#4CAF50' },
  pauseButton: { backgroundColor: '#FFC107' },
  endButton: { backgroundColor: '#F44336' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  infoBox: { padding: 20, backgroundColor: '#f2f2f2', borderRadius: 10 },
  infoText: { fontSize: 16, marginBottom: 6 },
});




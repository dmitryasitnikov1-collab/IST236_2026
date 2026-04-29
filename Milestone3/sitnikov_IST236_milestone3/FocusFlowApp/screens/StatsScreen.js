import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function StatsScreen() {
  const { sessions } = useContext(AppContext);

  // Total sessions
  const totalSessions = sessions.length;

  // Total focused time (in hours)
  const totalMinutes = sessions.reduce((sum, s) => sum + s.duration, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  // Build weekly data (7 days)
  const weeklyData = Array(7).fill(0);
  sessions.forEach((session) => {
    const day = new Date(session.date).getDay(); // 0 = Sunday
    weeklyData[day] += session.duration;
  });

  // Normalize bar heights (max = 100)
  const maxMinutes = Math.max(...weeklyData, 1);
  const barHeights = weeklyData.map((m) => (m / maxMinutes) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Stats</Text>

      {/* Summary Cards */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardValue}>{totalSessions}</Text>
          <Text style={styles.cardLabel}>Sessions</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardValue}>{totalHours}h</Text>
          <Text style={styles.cardLabel}>Focused Time</Text>
        </View>
      </View>

      {/* Weekly Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Focus Time</Text>

        <View style={styles.chartBars}>
          {barHeights.map((height, index) => (
            <View
              key={index}
              style={[styles.bar, { height }]}
            />
          ))}
        </View>

        <Text style={styles.chartNote}>
          {totalSessions === 0
            ? 'No sessions yet — start a timer!'
            : '* Based on your real session history'}
        </Text>
      </View>
    </View>
  );
}
// The styles object defines the styling for the container, header, summary cards, and weekly chart.
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

  // Summary Cards
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardValue: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },

  // Chart
  chartContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginBottom: 10,
  },
  bar: {
    width: 20,
    backgroundColor: '#4A90E2',
    borderRadius: 6,
  },
  chartNote: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});



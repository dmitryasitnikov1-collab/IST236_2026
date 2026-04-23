import { View, Text, StyleSheet } from 'react-native'; 
// The StatsScreen component is a screen that displays the user's productivity statistics. 
// It includes summary cards for total sessions and focused time, as well as a placeholder chart for weekly focus time. 
// This screen is designed to provide users with insights into their productivity patterns and encourage them to stay focused.
export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Stats</Text> 

      {/* Summary Cards */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardValue}>12</Text>
          <Text style={styles.cardLabel}>Sessions</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardValue}>4.5h</Text>
          <Text style={styles.cardLabel}>Focused Time</Text>
        </View>
      </View>

      {/* Placeholder Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Focus Time</Text>

        <View style={styles.chartBars}>
          <View style={[styles.bar, { height: 40 }]} />
          <View style={[styles.bar, { height: 80 }]} />
          <View style={[styles.bar, { height: 55 }]} />
          <View style={[styles.bar, { height: 100 }]} />
          <View style={[styles.bar, { height: 70 }]} />
          <View style={[styles.bar, { height: 30 }]} />
          <View style={[styles.bar, { height: 90 }]} />
        </View>

        <Text style={styles.chartNote}>* Placeholder chart for Milestone 2</Text>
      </View>
    </View>
  );
}
// The styles object defines the styling for the StatsScreen component, including the layout and appearance of the container, header, summary cards, and chart. 
// The container has padding and a white background, while the header is styled to be large and bold. The summary cards are designed with a light gray background, centered text, and rounded corners. 
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


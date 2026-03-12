import React, { useState } from 'react'; // Added useState import
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Added DateTimePicker import
import { Picker } from '@react-native-picker/picker'; // Added Picker import
import TitleBar from '../components/TitleBar'; // Added TitleBar import
import ReserveButton from '../components/ReserveButton'; // Added ReserveButton import

export default function HomeScreen() { // Added HomeScreen component
  const { width, height } = useWindowDimensions(); // Get window dimensions for responsive layout
  const isLandscape = width > height;
  const isTablet = width >= 900;

  const [checkIn, setCheckIn] = useState(new Date()); // State for check-in date and time
  const [checkOut, setCheckOut] = useState(new Date()); // State for check-out date and time

  const [showCheckInDate, setShowCheckInDate] = useState(false); // State to control visibility of check-in date picker
  const [showCheckInTime, setShowCheckInTime] = useState(false); // State to control visibility of check-in time picker

  const [showCheckOutDate, setShowCheckOutDate] = useState(false); // State to control visibility of check-out date picker
  const [showCheckOutTime, setShowCheckOutTime] = useState(false); // State to control visibility of check-out time picker

  const [guests, setGuests] = useState(2); // State for number of guests
  const [campsites, setCampsites] = useState(1);
  const [showGuestsWheel, setShowGuestsWheel] = useState(false); // State to control visibility of guests picker
  const [showCampsitesWheel, setShowCampsitesWheel] = useState(false); // State to control visibility of campsites picker

  const [submitted, setSubmitted] = useState(false); // State to track if reservation has been submitted

  // -----------------------------
  // Two-step datetime selection
  // -----------------------------
  const handleCheckInDate = (event, selectedDate) => {
    if (selectedDate) {
      const updated = new Date(checkIn);
      updated.setFullYear(selectedDate.getFullYear());
      updated.setMonth(selectedDate.getMonth());
      updated.setDate(selectedDate.getDate());
      setCheckIn(updated);
    }
  };
// Similar handlers for check-out date and time
  const handleCheckInTime = (event, selectedTime) => {
    if (selectedTime) {
      const updated = new Date(checkIn);
      updated.setHours(selectedTime.getHours());
      updated.setMinutes(selectedTime.getMinutes());
      setCheckIn(updated);
    }
  };
// Similar handlers for check-out date and time
  const handleCheckOutDate = (event, selectedDate) => {
    if (selectedDate) {
      const updated = new Date(checkOut);
      updated.setFullYear(selectedDate.getFullYear());
      updated.setMonth(selectedDate.getMonth());
      updated.setDate(selectedDate.getDate());
      setCheckOut(updated);
    }
  };
// Similar handlers for check-out date and time
  const handleCheckOutTime = (event, selectedTime) => {
    if (selectedTime) {
      const updated = new Date(checkOut);
      updated.setHours(selectedTime.getHours());
      updated.setMinutes(selectedTime.getMinutes());
      setCheckOut(updated);
    }
  };

  const onReserve = () => setSubmitted(true);

  const containerStyle = [
    styles.overlay,
    isTablet && styles.overlayTablet,
    isLandscape && styles.overlayLandscape,
  ];

  const formatDateTime = (date) =>
    date.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <ImageBackground
      source={require('../assets/images/campground-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.colorOverlay} />
      <View style={containerStyle}>
        <TitleBar title="Pine Ridge Campground" />

        {/* Check-in */}
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Check-in</Text>
          <Pressable onPress={() => setShowCheckInDate(true)}>
            <Text style={styles.valueText}>{formatDateTime(checkIn)}</Text>
          </Pressable>
        </View>

        {/* Check-out */}
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Check-out</Text>
          <Pressable onPress={() => setShowCheckOutDate(true)}>
            <Text style={styles.valueText}>{formatDateTime(checkOut)}</Text>
          </Pressable>
        </View>

        {/* Guests */}
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Number of Guests</Text>
          <Pressable onPress={() => setShowGuestsWheel(true)}>
            <Text style={styles.valueText}>{guests} guest(s)</Text>
          </Pressable>
        </View>

        {/* Campsites */}
        <View style={styles.fieldRow}>
          <Text style={styles.label}>Number of Campsites</Text>
          <Pressable onPress={() => setShowCampsitesWheel(true)}>
            <Text style={styles.valueText}>{campsites} campsite(s)</Text>
          </Pressable>
        </View>

        <ReserveButton label="Reserve Now" onPress={onReserve} />

        {submitted && (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Your Reservation</Text>
            <Text style={styles.summaryText}>Check-in: {formatDateTime(checkIn)}</Text>
            <Text style={styles.summaryText}>Check-out: {formatDateTime(checkOut)}</Text>
            <Text style={styles.summaryText}>Guests: {guests}</Text>
            <Text style={styles.summaryText}>Campsites: {campsites}</Text>
          </View>
        )}

        {/* ----------------------------- */}
        {/* Check-in Date Picker */}
        {/* ----------------------------- */}
        <Modal visible={showCheckInDate} transparent animationType="fade">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Check-in Date</Text>
              <DateTimePicker
                value={checkIn}
                mode="date"
                display="spinner"
                themeVariant="light"
                onChange={handleCheckInDate}
              />
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setShowCheckInDate(false);
                  setShowCheckInTime(true);
                }}
              >
                <Text style={styles.modalButtonText}>Next: Time</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Check-in Time Picker */}
        <Modal visible={showCheckInTime} transparent animationType="fade">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Check-in Time</Text>
              <DateTimePicker
                value={checkIn}
                mode="time"
                display="spinner"
                themeVariant="light"
                onChange={handleCheckInTime}
              />
              <Pressable
                style={styles.modalButton}
                onPress={() => setShowCheckInTime(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* ----------------------------- */}
        {/* Check-out Date Picker */}
        {/* ----------------------------- */}
        <Modal visible={showCheckOutDate} transparent animationType="fade">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Check-out Date</Text>
              <DateTimePicker
                value={checkOut}
                mode="date"
                display="spinner"
                themeVariant="light"
                onChange={handleCheckOutDate}
              />
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setShowCheckOutDate(false);
                  setShowCheckOutTime(true);
                }}
              >
                <Text style={styles.modalButtonText}>Next: Time</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Check-out Time Picker */}
        <Modal visible={showCheckOutTime} transparent animationType="fade">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Check-out Time</Text>
              <DateTimePicker
                value={checkOut}
                mode="time"
                display="spinner"
                themeVariant="light"
                onChange={handleCheckOutTime}
              />
              <Pressable
                style={styles.modalButton}
                onPress={() => setShowCheckOutTime(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Guests wheel */}
        <Modal visible={showGuestsWheel} transparent animationType="slide">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Number of Guests</Text>
              <Picker
                selectedValue={guests}
                onValueChange={(value) => setGuests(value)}
                itemStyle={styles.pickerItem}
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                  <Picker.Item key={num} label={`${num}`} value={num} />
                ))}
              </Picker>
              <Pressable
                style={styles.modalButton}
                onPress={() => setShowGuestsWheel(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Campsites wheel */}
        <Modal visible={showCampsitesWheel} transparent animationType="slide">
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Number of Campsites</Text>
              <Picker
                selectedValue={campsites}
                onValueChange={(value) => setCampsites(value)}
                itemStyle={styles.pickerItem}
              >
                {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                  <Picker.Item key={num} label={`${num}`} value={num} />
                ))}
              </Picker>
              <Pressable
                style={styles.modalButton}
                onPress={() => setShowCampsitesWheel(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  colorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 48, 71, 0.65)',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: 'flex-start',
  },
  overlayTablet: { paddingHorizontal: 60 },
  overlayLandscape: { flexDirection: 'row', alignItems: 'flex-start' },
  fieldRow: { marginTop: 12 },
  label: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: '#f1faee',
    marginBottom: 4,
  },
  valueText: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: '#ffb703',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 12,
  },
  summaryTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  summaryText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: '#f1faee',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxWidth: 500,
    backgroundColor: '#1d3557',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: '#f1faee',
    marginBottom: 8,
  },
  modalButton: {
    marginTop: 12,
    backgroundColor: '#ffb703',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  modalButtonText: {
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    color: '#023047',
  },
  pickerItem: {
    fontFamily: 'PoppinsRegular',
    fontSize: 18,
    color: '#000',
  },
});


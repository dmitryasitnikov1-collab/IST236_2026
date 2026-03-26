// src/screens/DestinationsOverviewScreen.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { DESTINATIONS } from '../data/dummy-data';
import DestinationItem from '../components/DestinationItem';
import DestinationModal from '../components/DestinationModal';

export default function DestinationsOverviewScreen({ route }) {
  const { countryId } = route.params;

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const displayedDestinations = DESTINATIONS.filter(
    (dest) => dest.countryId === countryId
  );

  function selectDestinationHandler(destination) {
    setSelectedDestination(destination);
    setModalVisible(true);
  }

  function closeModalHandler() {
    setModalVisible(false);
    setSelectedDestination(null);
  }

  function renderDestinationItem(itemData) {
    return (
      <DestinationItem
        destination={itemData.item}
        onPress={() => selectDestinationHandler(itemData.item)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
      <DestinationModal
        visible={modalVisible}
        destination={selectedDestination}
        onClose={closeModalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
  },
});

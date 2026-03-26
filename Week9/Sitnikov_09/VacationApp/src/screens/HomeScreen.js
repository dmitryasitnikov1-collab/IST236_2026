// src/screens/HomeScreen.js
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COUNTRIES } from '../data/dummy-data';
import CountryGridTile from '../components/CountryGridTile';

export default function HomeScreen({ navigation }) {
  function renderCountryItem(itemData) {
    const country = itemData.item;

    function pressHandler() {
      navigation.navigate('DestinationsOverview', {
        countryId: country.id,
        countryName: country.name,
      });
    }

    return (
      <CountryGridTile
        name={country.name}
        color={country.color}
        imageUrl={country.imageUrl}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCountryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});

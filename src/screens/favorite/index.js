import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../assets/color';

import TopBar from '../../components/customs/TopBarMain';
import ListFavorite from './components/listFavorites';

export default function index() {
  return (
    <View style={styles.Container}>
      <TopBar title="Yêu thích" />
      <View style={styles.BoxContainer}>
        <ListFavorite />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  BoxContainer: {
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    paddingHorizontal: 20,
  },
});

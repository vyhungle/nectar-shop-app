import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {appColor} from '../../assets/color';

import TopTab from '../../components/customs/TopBarMain';
import ListItem from './components/listItem';
import ButtonCheckout from './components/buttonCheckout';

export default function index() {
  return (
    <View style={styles.Container}>
      <TopTab title="Giỏ hàng" />
      <View style={styles.Container}>
        <ListItem />
        <ButtonCheckout />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    borderTopColor: appColor.border,
    borderTopWidth: 1,
  },
});

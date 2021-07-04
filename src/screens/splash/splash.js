import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {appColor} from '../../assets/color';
import LogoLoading from '../../assets/images/logoLoading.svg';

export default function splash() {
  return (
    <View style={styles.Container}>
      <LogoLoading />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: appColor.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {appColor} from '../../../assets/color';
import IconLogo from '../../../assets/images/logoHome.svg';

export default function topBar() {
  return (
    <View style={styles.Container}>
      <IconLogo />
      <Text style={styles.Title}>Nectar Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  Img: {
    width: 26.48,
    height: 30.8,
  },
  Title: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 20,
    letterSpacing: 1.5,
    marginLeft: 7,
  },
});

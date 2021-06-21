import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {appColor} from '../../../assets/color';

export default function topBar() {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../../../assets/images/logoLogin.png')}
        style={styles.Img}
      />
      <Text style={styles.Title}>Nectar</Text>
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

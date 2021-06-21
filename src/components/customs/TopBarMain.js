import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {appColor} from '../../assets/color';

export default function topBar({title}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>
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

  Title: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
});

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import LocationImage from '../../../assets/images/location.svg';

export default function addressTop() {
  return (
    <View style={styles.Container}>
      <LocationImage width={174} height={135} />
      <Text style={styles.Title}>Chọn địa điểm nhận hàng của bạn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  IMG: {
    width: 174,
    height: 135,
  },
  Title: {
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Bold',
    marginTop: 10,
  },
});

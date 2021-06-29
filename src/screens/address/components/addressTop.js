import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function addressTop() {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.IMG}
        source={require('../../../assets/images/address.png')}
      />
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

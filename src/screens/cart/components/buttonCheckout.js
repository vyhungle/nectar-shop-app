import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');

export default function ButtonCheckout() {
  const {cart} = useSelector(s => s.cart);
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.TextButton}>Thanh toán</Text>
      <View style={styles.BoxPrice}>
        <Text style={styles.Price}>
          {cart.total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}đ
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: appColor.primary,
    borderRadius: 19,
    height: 67,
    width: width - 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    bottom: 90,
  },
  TextButton: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'SVN-Gilroy Bold',
  },
  BoxPrice: {
    position: 'absolute',
    backgroundColor: '#489E67',
    padding: 5,
    right: 20,
    borderRadius: 4,
  },
  Price: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 12,
    color: 'white',
  },
});

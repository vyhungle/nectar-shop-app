import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {appColor} from '../../../assets/color';
import OrderIcon from '../../../assets/images/orderFail.svg';

const {width} = Dimensions.get('window');

export default function OrderFail() {
  const navigation = useNavigation();
  const route = useRoute();
  const {error} = route.params;
  return (
    <View style={styles.Container}>
      <View style={styles.Top}>
        <OrderIcon width={270} height={240} />
      </View>

      <View style={styles.Body}>
        <Text style={styles.Title}>Lỗi! Đặt hàng không thành công</Text>

        <Text style={styles.TextSmall}>{error}</Text>
      </View>

      <View style={styles.BoxBottom}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.TextButton}>Vui lòng thử lại</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.TextBack}>Trở về trang chủ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  BG: {
    flex: 1,
  },
  Top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 320,
  },
  ImageTop: {
    width: 270,
    height: 270,
  },

  Body: {},

  Title: {
    fontSize: 28,
    fontFamily: 'SVN-Gilroy Bold',
    maxWidth: width - 70,
    color: 'black',
    textAlign: 'center',
  },
  TextSmall: {
    marginTop: 15,
    fontSize: 17,
    fontFamily: 'SVN-Gilroy Medium',
    maxWidth: width - 100,
    color: '#ff3333',
    textAlign: 'center',
  },

  BoxBottom: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
  },
  Button: {
    width: width - 40,
    backgroundColor: appColor.primary,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  TextButton: {
    color: 'white',
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 18,
  },
  TextBack: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Bold',
    marginTop: 20,
  },
});

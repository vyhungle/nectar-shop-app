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
import {useNavigation} from '@react-navigation/native';

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');

export default function OrderAccepted() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.BG}
        source={require('../../../assets/images/bgLogin.png')}>
        <View style={styles.Top}>
          <Image
            style={styles.ImageTop}
            source={require('../../../assets/images/oder.png')}
          />
        </View>

        <View style={styles.Body}>
          <Text style={styles.Title}>
            Đơn đặt hàng của bạn đã được chấp nhận
          </Text>

          <Text style={styles.TextSmall}>
            Các mặt hàng của bạn đã được đặt và đang được xử lý
          </Text>
        </View>

        <View style={styles.BoxBottom}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextButton}>Kiểm tra đơn hàng</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.TextBack}>Trở về trang chủ</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
  BG: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  Top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 400,
  },
  ImageTop: {
    width: 270,
    height: 240,
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
    color: appColor.hint,
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

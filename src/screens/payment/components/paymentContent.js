import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {paymentPending} from '../../../redux/slice/cartSlice';
import {appColor} from '../../../assets/color';

export default function PaymentContent(props) {
  const {cart} = useSelector(s => s.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const goAddress = () => {
    props.current.close();
    navigation.navigate('Address');
  };
  const Order = () => {
    dispatch(paymentPending());
    props.current.close();
  };
  const total = e => {
    const parse = e.total;
    return parseInt(parse, 10);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Top}>
        <Text style={styles.Title}>Thủ tục thanh toán</Text>
      </View>

      <View style={styles.Body}>
        <TouchableOpacity style={styles.Item} onPress={() => goAddress()}>
          <Text style={styles.TextItem}>Địa chỉ nhận hàng</Text>
          <AntDesign name="right" size={18} style={styles.Icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Item}>
          <Text style={styles.TextItem}>Hình thức thanh toán</Text>
          <Text style={styles.TextRight}>Tại nhà</Text>
          <AntDesign name="right" size={18} style={styles.Icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Item}>
          <Text style={styles.TextItem}>Tổng tiền</Text>
          <Text style={styles.TextRight}>
            {total(cart)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            đ
          </Text>
          <AntDesign name="right" size={18} style={styles.Icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button} onPress={() => Order()}>
          <Text style={styles.TextButton}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {},
  Top: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    flexDirection: 'row',
  },
  Title: {
    fontSize: 24,
  },
  Body: {
    paddingHorizontal: 20,
  },
  Item: {
    height: 65,
    flexDirection: 'row',
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    display: 'flex',
    alignItems: 'center',
  },
  Icon: {
    position: 'absolute',
    right: 0,
    top: 25,
  },
  TextRight: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Medium',
    position: 'absolute',
    right: 30,
  },
  TextItem: {
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
  },
  Button: {
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
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
});

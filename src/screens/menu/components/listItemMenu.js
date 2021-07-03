import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {appColor} from '../../../assets/color';
import OrderIcon from '../../../assets/images/Orders icon.svg';
import AddressIcon from '../../../assets/images/address.svg';
import ProfileIcon from '../../../assets/images/profile.svg';
import RightIcon from '../../../assets/images/right.svg';
import LogoutIcon from '../../../assets/images/logoutIcon.svg';
import {logout} from '../../../redux/slice/authSlice';

const {width} = Dimensions.get('window');

export default function ListItemMenu() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.BoxItem}
        onPress={() => navigation.navigate('Bills')}>
        <View style={styles.ItemLeft}>
          <OrderIcon />
          <Text style={styles.TextItem}>Đơn hàng</Text>
        </View>
        <View style={styles.ItemRight}>
          <RightIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.BoxItem}>
        <View style={styles.ItemLeft}>
          <ProfileIcon />
          <Text style={styles.TextItem}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.ItemRight}>
          <RightIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.BoxItem}
        onPress={() => navigation.navigate('Address')}>
        <View style={styles.ItemLeft}>
          <AddressIcon />
          <Text style={styles.TextItem}>Địa chỉ nhận hàng</Text>
        </View>
        <View style={styles.ItemRight}>
          <RightIcon />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => dispatch(logout())}>
        <LogoutIcon style={styles.IconLogout} />
        <Text style={styles.TextButton}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  BoxItem: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    flexDirection: 'row',
  },
  ItemLeft: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  TextItem: {
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Bold',
    marginLeft: 10,
  },
  ItemRight: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  Button: {
    width: width - 40,
    backgroundColor: appColor.border,
    height: 67,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    bottom: 100,
    flexDirection: 'row',
  },
  TextButton: {
    color: appColor.primary,
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 18,
  },
  IconLogout: {
    position: 'absolute',
    left: 25,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {appColor} from '../../../assets/color';
import {
  addPending,
  clearItemPending,
  removePending,
} from '../../../redux/slice/cartSlice';

const {width} = Dimensions.get('window');
const WIDTH_IMAGE = 80;
const HEIGHT_IMAGE = 70;
const WIDTH_BODY = width - 120;
export default function SingleItem({item}) {
  const product = item.product;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const add = (product, quantity) => {
    dispatch(addPending({product, quantity}));
  };

  const minus = product => {
    dispatch(removePending({product}));
  };

  const clear = product => {
    dispatch(clearItemPending({product}));
  };

  const price = () => {
    const parse =
      (product.price - product.price * (product.discount / 100)) *
      item.quantity;
    return parseInt(parse, 10);
  };
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() =>
        navigation.navigate('Detail', {
          product: product,
        })
      }>
      <View style={styles.BoxItem}>
        <Image source={{uri: product.image}} style={styles.IMG} />

        <View style={styles.BoxBody}>
          <View style={styles.BoxName}>
            <Text style={styles.Name} numberOfLines={1}>
              {product.name}
            </Text>
            <Text style={styles.Unit}>{product.unit}</Text>
          </View>

          <View style={styles.BoxPrice}>
            <TouchableOpacity
              style={styles.BoxButtonIcon}
              onPress={() => minus(product)}>
              <Entypo name="minus" size={24} color={appColor.primary} />
            </TouchableOpacity>
            <Text style={styles.Quantity}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.BoxButtonIcon}
              onPress={() => add(product, 1)}>
              <Entypo name="plus" size={24} color={appColor.primary} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.IconsClose}
            onPress={() => clear(product)}>
            <AntDesign name="close" size={25} color={appColor.hint} />
          </TouchableOpacity>

          <Text style={styles.Price}>
            {price()
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            đ
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
  },
  BoxItem: {
    flexDirection: 'row',
  },
  IMG: {
    width: WIDTH_IMAGE,
    height: HEIGHT_IMAGE,
    resizeMode: 'center',
  },
  BoxBody: {
    width: WIDTH_BODY,
    flexDirection: 'column',
    marginLeft: 15,
  },
  BoxName: {
    width: WIDTH_BODY - 100,
  },
  Name: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
  },
  Unit: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
  },
  BoxPrice: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  BoxButtonIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45.67,
    height: 45.67,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: appColor.border,
  },
  Quantity: {
    marginHorizontal: 10,
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
  },

  IconsClose: {
    position: 'absolute',
    right: 20,
  },

  Price: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 18,
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
});

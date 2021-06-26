import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {appColor} from '../../assets/color';
import {addPending} from '../../redux/slice/cartSlice';

const {width} = Dimensions.get('window');
const WIDTH_BOX = width / 2 - 25;
const HEIGHT_BOX = 250;

const WIDTH_IMAGE = width / 3;
const HEIGHT_IMAGE = width / 3;

export default function SingleProduct({product}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addCart = (product, quantity) => {
    dispatch(addPending({product, quantity}));
  };
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() =>
        navigation.navigate('Detail', {
          product: product,
        })
      }>
      <View style={styles.BoxImage}>
        {product.discount > 0 && (
          <View style={styles.DiscountView}>
            <Text style={styles.DiscountText}>{product.discount}%</Text>
          </View>
        )}
        <Image
          style={styles.Img}
          source={{
            uri: product.image,
          }}
        />
      </View>

      <View style={styles.BoxBody}>
        <Text style={styles.TextName} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.TextUnit}>{product.unit}</Text>
      </View>

      <View style={styles.BoxBottom}>
        <Text style={styles.TextPrice}>
          {(product.price - product.price * (product.discount / 100))
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          đ
        </Text>
        <TouchableOpacity
          style={styles.ButtonAdd}
          onPress={() => addCart(product, 1)}>
          <Text style={styles.TextButton}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: WIDTH_BOX,
    height: HEIGHT_BOX,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: appColor.border,
    margin: 5,
  },
  BoxImage: {
    width: WIDTH_BOX,
    height: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Img: {
    width: WIDTH_IMAGE,
    height: HEIGHT_IMAGE,
    resizeMode: 'center',
    borderRadius: 18,
  },
  BoxBody: {
    paddingHorizontal: 15,
  },
  BoxBottom: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 25,
    width: WIDTH_BOX,
    display: 'flex',
    justifyContent: 'center',
  },
  ButtonAdd: {
    backgroundColor: appColor.primary,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
    width: 45.67,
    height: 45.67,
  },
  TextButton: {
    color: 'white',
    fontSize: 29,
    fontWeight: '700',
  },
  TextPrice: {
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Bold',
    color: 'black',
  },
  TextUnit: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
  },
  TextName: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
  },
  DiscountView: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: appColor.star,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 30,
    zIndex: 10,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 10,
  },
  DiscountText: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy Bold',
    color: 'white',
  },
});

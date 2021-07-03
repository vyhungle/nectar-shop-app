import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');

const SingleItem = props => {
  const navigation = useNavigation();
  const item = props.item;
  const discount = () => {
    const parse = item.product.price * item.quantity;
    return parseInt(parse, 10);
  };
  const price = () => {
    const parse =
      (item.product.price -
        item.product.price * (item.product.discount / 100)) *
      item.quantity;
    return parseInt(parse, 10);
  };

  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() =>
        navigation.navigate('Detail', {
          product: item.product,
        })
      }>
      <Image style={styles.IMG} source={{uri: item.product.image}} />
      <View style={styles.BoxBody}>
        <Text numberOfLines={1} style={styles.Name}>
          {item.product.name}
        </Text>
        <Text style={styles.Quantity}>x{item.quantity}</Text>
      </View>

      <View style={styles.PriceBox}>
        {item.product.discount > 0 && (
          <Text style={styles.PriceBefore}>
            {discount()
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            đ
          </Text>
        )}

        <Text style={styles.Price}>
          {price()
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          đ
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleItem;

const styles = StyleSheet.create({
  Container: {
    height: 70,
    borderBottomWidth: 0.7,
    borderBottomColor: appColor.border,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width,
  },

  IMG: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
  BoxBody: {
    marginLeft: 15,
  },
  Name: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
  },
  Quantity: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
  },
  PriceBox: {
    position: 'absolute',
    flexDirection: 'row',
    right: 5,
    bottom: 5,
  },
  PriceBefore: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  Price: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
    color: 'black',
  },
});

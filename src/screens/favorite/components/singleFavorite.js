import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {appColor} from '../../../assets/color';
import RightIcon from '../../../assets/images/right.svg';
import {singleProduct} from '../../../redux/slice/productSplice';

export default function SingleFavorite({product}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const price = () => {
    const parse = product.price - product.price * (product.discount / 100);
    return parseInt(parse, 10);
  };
  const goDetail = () => {
    var id = product._id;
    dispatch(singleProduct({id}));
    navigation.navigate('Detail');
  };
  return (
    <TouchableOpacity style={styles.Container} onPress={() => goDetail()}>
      <Image source={{uri: product.image}} style={styles.IMG} />

      <View style={styles.BoxName}>
        <Text style={styles.Name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.Unit}>{product.unit}</Text>
      </View>

      <View style={styles.BoxPrice}>
        <Text style={styles.Price}>
          {price()
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          đ
        </Text>
        <RightIcon width={16} height={16} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 115,
    borderBottomColor: appColor.border,
    borderBottomWidth: 0.7,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  IMG: {
    width: 80,
    height: 70,
    resizeMode: 'center',
  },
  BoxName: {
    marginLeft: 10,
  },
  Name: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
    maxWidth: 170,
  },
  Unit: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy Medium',
    color: appColor.hint,
  },
  BoxPrice: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Price: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 16,
    marginRight: 10,
  },
});

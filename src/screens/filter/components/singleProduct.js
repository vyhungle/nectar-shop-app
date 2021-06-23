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

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');
const WIDTH_BOX = width / 2 - 25;
const HEIGHT_BOX = 250;

const WIDTH_IMAGE = width / 3;
const HEIGHT_IMAGE = width / 3;

export default function SingleProduct({product}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={() =>
        navigation.navigate('Detail', {
          product: product,
        })
      }>
      <View style={styles.BoxImage}>
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
          {product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}đ
        </Text>
        <TouchableOpacity style={styles.ButtonAdd}>
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
});

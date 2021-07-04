import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');
const WIDTH_IMAGE = width / 1.5;
const HEIGHT_IMAGE = height / 3.5;
const HEIGHT_BOX_IMAGE = height / 2.5;

export default function ImageTop() {
  const {product} = useSelector(s => s.products);
  return (
    <View style={styles.Container}>
      <View style={styles.BoxImage}>
        <Image source={{uri: product.image}} style={styles.ImgTop} />
      </View>
      <View style={styles.CoverBoxImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
  },
  CoverBoxImage: {
    width: width,
    height: HEIGHT_BOX_IMAGE,
    backgroundColor: 'rgba(0,0,0,.05)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'absolute',
  },
  BoxImage: {
    width: width,
    height: HEIGHT_BOX_IMAGE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgTop: {
    width: WIDTH_IMAGE,
    height: HEIGHT_IMAGE,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
});

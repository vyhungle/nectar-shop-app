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
import {useDispatch, useSelector} from 'react-redux';

import {filterPending} from '../../../redux/slice/productSplice';
const {width} = Dimensions.get('window');
const WIDTH_BOX = width / 2 - 25;
const HEIGHT_BOX = 180;

export default function SingleCategory({categories}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {products} = useSelector(s => s.products);

  const onPressCategory = () => {
    var value = {
      products: products,
      categoriesId: [categories._id],
      isSort: 0,
      priceZone: [0, 1000000],
    };
    dispatch(filterPending({value}));
    navigation.navigate('Category', {
      title: categories.name,
    });
  };
  return (
    <TouchableOpacity
      style={styless.Container(categories)}
      onPress={() => onPressCategory()}>
      <Image style={styles.Img} source={{uri: categories.image}} />
      <Text style={styles.Name}>{categories.name}</Text>
    </TouchableOpacity>
  );
}

const styless = StyleSheet.create({
  Container: categories => ({
    width: WIDTH_BOX,
    height: HEIGHT_BOX,
    margin: 5,
    backgroundColor: categories.bgColor,
    borderRadius: 18,
    borderColor: categories.borderColor,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
  }),
});

const styles = StyleSheet.create({
  Img: {
    width: 111,
    height: 75,
    marginTop: 20,
  },
  Name: {
    fontFamily: 'SVN-Gilroy Bold',
    fontSize: 16,
    marginTop: 20,
  },
});

import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import SingleProduct from '../../../components/customs/singleProduct';

export default function listProduct(props) {
  var products = props.products.slice().splice(0, 4);
  return (
    <FlatList
      contentContainerStyle={{paddingLeft: 20}}
      data={products}
      keyExtractor={(item, index) => item._id}
      renderItem={item => <SingleProduct product={item.item} />}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}

const styles = StyleSheet.create({});

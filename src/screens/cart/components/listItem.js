import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SingleItem from './singleItem';

export default function ListItem() {
  const {cart} = useSelector(s => s.cart);

  return (
    <FlatList
      data={cart.products}
      keyExtractor={(item, index) => index}
      renderItem={item => <SingleItem item={item.item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginHorizontal: 20, paddingBottom: 170}}
    />
  );
}

const styles = StyleSheet.create({});

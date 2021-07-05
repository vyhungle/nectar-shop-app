import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SingleFavorite from './singleFavorite';

export default function ListFavorites() {
  const {favorites} = useSelector(s => s.favorite);
  return (
    <FlatList
      data={favorites.products}
      keyExtractor={(item, index) => index}
      renderItem={item => <SingleFavorite product={item.item.product} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 150}}
    />
  );
}

const styles = StyleSheet.create({});

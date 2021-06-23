import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SingleProduct from './singleCategory';

export default function Categories() {
  const {categories} = useSelector(state => state.categories);
  return (
    <View style={styles.Container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 200, paddingTop: 15}}
        numColumns={2}
        data={categories}
        keyExtractor={(item, index) => index}
        renderItem={item => <SingleProduct categories={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 15,
  },
});

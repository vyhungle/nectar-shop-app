import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SingleProduct from '../../../components/customs/singleProduct';

export default function Content() {
  const {filter} = useSelector(state => state.products);

  if (!filter.success) {
    return (
      <View>
        <Text>null</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 100, paddingTop: 15}}
        numColumns={2}
        data={filter.products}
        keyExtractor={(item, index) => index}
        renderItem={item => <SingleProduct product={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

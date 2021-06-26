import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import SingleProduct from '../../../components/customs/singleProduct';

export default function Products() {
  const {products} = useSelector(s => s.products);

  return (
    <View style={styles.Container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 80}}
        numColumns={2}
        data={products}
        keyExtractor={(item, index) => item._id}
        renderItem={item => <SingleProduct product={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 15,
  },
});

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import TextSingle from './singleProduct';

export default function Products() {
  const {products} = useSelector(s => s.products);
  return (
    <View>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item, index) => item._id}
        renderItem={item => <TextSingle product={item.item} />}
      />
    </View>
  );
}

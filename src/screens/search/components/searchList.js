import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SingleProduct from '../../category/components/singleProduct';

import {appColor} from '../../../assets/color';

const {width} = Dimensions.get('window');

export default function SearchList() {
  const {find} = useSelector(state => state.products);
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 200}}
        numColumns={2}
        data={find.products}
        keyExtractor={(item, index) => index}
        renderItem={item => <SingleProduct product={item.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  BoxItem: {
    borderTopColor: appColor.border,
    borderTopWidth: 1,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  TextName: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 14,
  },
});

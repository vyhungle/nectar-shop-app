import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {appColor} from '../../../assets/color';

import ListProduct from './listProduct';
import Banner from './Banner';

export default function Content() {
  const {products} = useSelector(state => state.products);
  return (
    <View style={styles.Container}>
      <Banner />
      <View style={styles.BoxList}>
        <Text style={styles.Title}>Ưu đãi độc quyền</Text>
        <TouchableOpacity style={styles.sellAll}>
          <Text style={styles.sellAllText}>Xem thêm</Text>
        </TouchableOpacity>
        <ListProduct products={products} />
      </View>

      <View style={styles.BoxList}>
        <Text style={styles.Title}>Bán chạy</Text>
        <TouchableOpacity style={styles.sellAll}>
          <Text style={styles.sellAllText}>Xem thêm</Text>
        </TouchableOpacity>
        <ListProduct products={products} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  BoxList: {
    paddingVertical: 15,
  },
  Title: {
    marginLeft: 20,
    fontSize: 24,
    fontFamily: 'SVN-Gilroy Bold',
    marginBottom: 15,
  },
  sellAll: {
    position: 'absolute',
    top: 28,
    right: 20,
  },
  sellAllText: {
    color: appColor.primary,
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Bold',
  },
});

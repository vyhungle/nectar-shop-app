import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {appColor} from '../../../assets/color';
import ListProduct from './listProduct';
import Banner from './Banner';
import {filterPending} from '../../../redux/slice/productSplice';

export default function Content() {
  const {offer, bestSeller} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const seeMore = (data, title) => {
    var value = {
      products: data,
      priceZone: [0, 1000000],
      categoriesId: [],
      isSort: 0,
    };
    dispatch(filterPending({value}));
    navigation.navigate('Filter', {title: title});
  };
  return (
    <View style={styles.Container}>
      <Banner />
      <View style={styles.BoxList}>
        <Text style={styles.Title}>Ưu đãi độc quyền</Text>
        <TouchableOpacity
          style={styles.sellAll}
          onPress={() => seeMore(offer, 'Ưu đải độc quyền')}>
          <Text style={styles.sellAllText}>Xem thêm</Text>
        </TouchableOpacity>
        <ListProduct products={offer} />
      </View>

      <View style={styles.BoxList}>
        <Text style={styles.Title}>Bán chạy</Text>
        <TouchableOpacity
          style={styles.sellAll}
          onPress={() => seeMore(bestSeller, 'Bán chạy')}>
          <Text style={styles.sellAllText}>Xem thêm</Text>
        </TouchableOpacity>
        <ListProduct products={bestSeller} />
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

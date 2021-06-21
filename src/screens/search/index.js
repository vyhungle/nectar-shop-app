import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {filterPending, sortPending} from '../../redux/slice/productSplice';
import TopBar from '../../components/customs/TopBarMain';
import SearchForm from './components/searchForm';
import Categories from './components/categories';

export default function Search() {
  const {products, filter} = useSelector(s => s.products);
  // console.log(filter);
  const dispatch = useDispatch();

  return (
    <View style={styles.Container}>
      <TopBar title="Tìm Kiếm Sản Phẩm" />
      <SearchForm />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

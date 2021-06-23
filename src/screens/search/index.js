import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import TopBar from '../../components/customs/TopBarMain';
import SearchForm from './components/searchForm';
import Categories from './components/categories';
import SearchList from './components/searchList';

export default function Search() {
  const {products, filter} = useSelector(s => s.products);
  const dispatch = useDispatch();
  const [key, setKey] = React.useState('');

  const searchForKey = key => {
    setKey(key);
  };

  return (
    <View style={styles.Container}>
      <TopBar title="Tìm Kiếm Sản Phẩm" />
      <SearchForm searchForKey={searchForKey} />
      {key === '' ? <Categories /> : <SearchList />}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

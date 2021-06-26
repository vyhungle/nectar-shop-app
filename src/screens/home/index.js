import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import TopTab from './components/topBar';
import Products from './components/products';
import Content from './components/content';
import SearchForm from './components/searchForm';

export default function Home() {
  const auth = useSelector(s => s.auth);
  return (
    <View style={styles.Container}>
      {/* <Products /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <TopTab />
        <SearchForm />
        <Content />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

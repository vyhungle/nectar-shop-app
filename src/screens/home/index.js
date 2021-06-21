import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import TopTab from './components/topBar';
import Products from './components/products';

export default function Home() {
  const auth = useSelector(s => s.auth);
  return (
    <View style={styles.Container}>
      <TopTab />
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

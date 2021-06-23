import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from './components/content';
import TopBar from './components/topBar';
export default function index() {
  return (
    <View style={styles.Container}>
      <TopBar title="Bộ lọc" />
      <View style={styles.Box}>
        <Content />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Box: {
    padding: 15,
  },
});

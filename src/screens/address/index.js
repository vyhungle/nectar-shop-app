import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import AddressTop from './components/addressTop';
import TopBar from './components/topBar';
import Content from './components/formContent';
export default function index() {
  return (
    <View style={styles.Container}>
      <TopBar />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <AddressTop />
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

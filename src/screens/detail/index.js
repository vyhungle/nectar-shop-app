import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import TopBar from './components/topBar';
import ImageTop from './components/ImageTop';
import Content from './components/content';

export default function Detail({navigation, route}) {
  const {product} = route.params;
  return (
    <View style={styles.Container}>
      <TopBar />
      <ScrollView>
        <ImageTop product={product} />
        <Content product={product} />
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

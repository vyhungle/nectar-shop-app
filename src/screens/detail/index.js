import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import TopBar from './components/topBar';
import ImageTop from './components/ImageTop';
import Content from './components/content';

export default function Detail({navigation}) {
  return (
    <View style={styles.Container}>
      <TopBar />
      <ScrollView>
        <ImageTop />
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

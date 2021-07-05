import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Content from './components/content';
import TopBar from './components/topBar';
export default function Index() {
  const route = useRoute();
  const {title} = route.params;
  return (
    <View style={styles.Container}>
      <TopBar title={title} />
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/customs/topTab';
import Content from './components/content';

export default function Category({navigation, route}) {
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ButtonReview from './components/buttonReview';
import ListReview from './components/listReview';
import TopBar from '../../components/customs/topBarBack';

export default function Index() {
  return (
    <View style={styles.Container}>
      <TopBar title="Đánh giá" />
      <ListReview />
      <ButtonReview />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function contentSheet() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Thể loại</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Title: {
    fontSize: 24,
    fontFamily: 'SVN-Gilroy Bold',
  },
});

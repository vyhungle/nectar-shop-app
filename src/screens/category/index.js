import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/customs/topTab';

export default function Category({navigation, route}) {
  const {title, id} = route.params;
  return (
    <View>
      <TopBar title={title} />
    </View>
  );
}

const styles = StyleSheet.create({});

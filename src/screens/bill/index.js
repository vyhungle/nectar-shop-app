import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

import ListBills from './components/listBills';
import TopBar from '../../components/customs/topBarBack';

export default class index extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TopBar title="Đơn hàng" />
        <ScrollView>
          <ListBills />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

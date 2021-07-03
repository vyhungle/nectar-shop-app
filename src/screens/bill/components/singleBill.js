import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import SingleItem from './singleItem';

export default class singleBill extends Component {
  render() {
    const products = this.props.products;
    return (
      <View>
        {products.map((e, index) => (
          <SingleItem key={index} item={e} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {},
});

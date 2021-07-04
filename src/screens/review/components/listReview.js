import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import SingleReview from './singleReview';

export default function ListReview() {
  const {product} = useSelector(s => s.products);

  return (
    <ScrollView>
      {product.review.contents &&
        product.review.contents.map((x, index) => (
          <SingleReview content={x} key={index} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

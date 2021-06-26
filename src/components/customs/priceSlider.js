import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {appColor} from '../../assets/color';
import {Slider} from '@miblanchard/react-native-slider';
import {setPriceZone} from '../../redux/slice/productSplice';

export default function PriceSlider() {
  const {filter} = useSelector(s => s.products);
  const priceZone = filter.priceZone;
  const dispatch = useDispatch();
  const priceZoneChange = value => {
    dispatch(setPriceZone({value}));
  };
  return (
    <View style={styles.BoxInput}>
      <View style={styles.BoxTextInput}>
        <Text style={styles.TextZone}>Từ: </Text>
        <TextInput
          value={priceZone[0].toString()}
          onChangeText={value =>
            priceZoneChange([parseInt(value), priceZone[1]])
          }
          keyboardType="numeric"
          style={styles.Filed}
        />
        <Text style={styles.TextInInput}>đ</Text>

        <Text style={styles.TextZone}>Đến: </Text>
        <TextInput
          value={priceZone[1].toString()}
          onChangeText={value =>
            priceZoneChange([priceZone[0], parseInt(value)])
          }
          keyboardType="numeric"
          style={styles.Filed}
        />
        <Text style={styles.TextInInput}>đ</Text>
      </View>
      <Slider
        maximumValue={1000000}
        value={priceZone}
        onValueChange={value => priceZoneChange(value)}
        step={10000}
        thumbTintColor={appColor.primary}
        maximumTrackTintColor={appColor.field}
        minimumTrackTintColor={appColor.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BoxInput: {
    paddingVertical: 15,
  },
  TextInput: {
    fontSize: 16,
    fontFamily: 'SVN-Gilroy Medium',
  },
  BoxTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Filed: {
    width: 120,
    padding: 10,
    height: 45,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: appColor.border,
    color: 'black',
    textAlign: 'right',
    paddingRight: 20,
  },
  TextInInput: {
    left: -18,
    fontFamily: 'SVN-Gilroy Medium',
  },
  TextZone: {
    fontFamily: 'SVN-Gilroy Medium',
    fontSize: 16,
  },
});

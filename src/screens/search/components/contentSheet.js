import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import RadioButtonRN from 'radio-buttons-react-native';

import {appColor} from '../../../assets/color';
import ListCategoties from './listCategories';
import PriceSlider from './priceSlider';
import {setSort} from '../../../redux/slice/productSplice';

export default function ContentSheet() {
  const dispatch = useDispatch();
  const {filter} = useSelector(state => state.products);
  console.log(filter.isSort);
  const data = [
    {
      label: 'Giá tăng dần',
      value: 1,
    },
    {
      label: 'Giá giảm dần',
      value: -1,
    },
  ];
  const setSortProduct = value => {
    dispatch(setSort({value}));
  };
  return (
    <KeyboardAwareScrollView style={styles.Container}>
      <View style={styles.Container}>
        <Text style={styles.Title}>Thể loại</Text>
        <ListCategoties />

        <Text style={styles.Title}>Chọn mức giá</Text>
        <PriceSlider />

        <Text style={styles.Title}>Sắp xếp theo</Text>
        <View style={styles.BoxInput}>
          <RadioButtonRN
            data={data}
            selectedBtn={e => setSortProduct(e.value)}
            boxActiveBgColor="white"
            activeColor={appColor.primary}
            textStyle={styles.TextInput}
            box={false}
            circleSize={16}
            style={styles.BoxRadio}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.ButtonContinue}>
        <Text style={styles.TextButtonContinue}>Lọc sản phẩm</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
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
  BoxInput: {
    paddingVertical: 15,
  },

  BoxRadio: {
    position: 'relative',
    left: -10,
  },
  ButtonContinue: {
    height: 67,
    width: 353,
    backgroundColor: appColor.primary,
    borderRadius: 19,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  TextButtonContinue: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'SVN-Gilroy Medium',
  },
});
